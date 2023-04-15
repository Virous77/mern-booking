import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/utility.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  const { name, username, password, email } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const userData = {
    name,
    username,
    password: hash,
    email,
  };

  try {
    const newUser = new User(userData);
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_KEY
    );

    const { password, isAdmin, ...otherDetails } = newUser._doc;

    res.status(200).json({ token, ...otherDetails });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { password: userPass, email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return next(createError({ status: 404, message: "User not found!" }));

    const pass = await bcrypt.compare(userPass, user.password);
    if (!pass)
      return next(
        createError({ message: "Password is invalid!", status: 400 })
      );

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res.status(200).json({ token, ...otherDetails });
  } catch (error) {
    next(error);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

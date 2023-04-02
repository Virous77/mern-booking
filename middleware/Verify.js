import jwt from "jsonwebtoken";
import { createError } from "../utils/utility.js";

export const verify = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return next(
      createError({ status: 401, message: "You are not authenticated!" })
    );

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err)
      return next(createError({ status: 403, message: "Token is not valid!" }));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(
        createError({ status: 401, message: "You are not authenticated!" })
      );
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(
        createError({ status: 401, message: "You are not authenticated!" })
      );
    }
  });
};

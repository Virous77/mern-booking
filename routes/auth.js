import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.get("/auth", logoutUser);

export default router;

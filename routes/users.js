import express from "express";
import {
  updateUser,
  deleteUser,
  getUsers,
  getSingleUser,
} from "../controllers/userController.js";
import { verify, verifyAdmin, verifyUser } from "../middleware/Verify.js";

const router = express.Router();

router.put("/user/:id", verifyUser, updateUser);
router.delete("/user/:id", verifyUser, deleteUser);
router.get("/user/:id", verifyUser, getSingleUser);
router.get("/user", verifyAdmin, getUsers);

export default router;

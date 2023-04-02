import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../middleware/Verify.js";

const router = express.Router();

router.post("/room/:hotelId", verifyAdmin, createRoom);
router.delete("/room/:id/:hotelId", verifyAdmin, deleteRoom);
router.put("/room/:id", verifyAdmin, updateRoom);
router.get("/room", verifyAdmin, getRooms);

export default router;

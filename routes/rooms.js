import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../middleware/Verify.js";

const router = express.Router();

router.post("/room/:hotelId", createRoom);
router.delete("/room/:id/:hotelId", deleteRoom);
router.put("/room/:id", updateRoom);
router.get("/room/:id", getRooms);
router.put("/room/availability/:id", updateRoomAvailability);

export default router;

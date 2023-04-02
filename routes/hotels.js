import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotels,
  getSingleHotel,
  updateHotel,
  getByCity,
  getByType,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../middleware/Verify.js";

const router = express.Router();

router.post("/hotel", verifyAdmin, createHotel);
router.put("/hotel/:id", verifyAdmin, updateHotel);
router.delete("/hotel/:id", verifyAdmin, deleteHotel);
router.get("/hotel/get/:id", getSingleHotel);
router.get("/hotel", getHotels);
router.get("/hotel/countByCity", getByCity);
router.get("/hotel/countByType", getByType);

export default router;

import express from "express";

const router = express.Router();

router.get("/rooms", (req, res) => {
  res.send("rooms");
});

export default router;

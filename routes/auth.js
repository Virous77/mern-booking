import express from "express";

const router = express.Router();

router.get("/auth", (req, res) => {
  res.send("users");
});

router.get("/register", (req, res) => {
  res.send("users");
});

export default router;

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import hotelRoutes from "./routes/hotels.js";
import usersRoutes from "./routes/users.js";
import roomRoutes from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/booking", authRoutes);
app.use("/api/booking", hotelRoutes);
app.use("/api/booking", roomRoutes);
app.use("/api/booking", usersRoutes);

app.get("/", (req, res) => {
  res.send("home");
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong, Try again!";

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
    success: false,
  });
});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`servers running on ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

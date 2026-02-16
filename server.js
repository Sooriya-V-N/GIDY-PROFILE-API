import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import logger from "./utils/logger.js";
import profileRoutes from "./routes/profileRoutes.js"

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: "https://gidy-profile.vercel.app",
  credentials: true
}));

app.use(express.json());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/", profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

import express from "express";
import { getProfile, updateProfile } from "../controllers/profileController.js";

const router = express.Router();

router.get("/myprofile", getProfile);
router.put("/myprofile", updateProfile);

export default router;

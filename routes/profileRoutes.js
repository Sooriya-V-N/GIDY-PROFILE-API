import express from "express";
import {
  getProfile,
  updateProfile,
  updateProfileImage,
} from "../controllers/profileController.js";
import { uploadProfileImage } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/myprofile", getProfile);
router.put("/myprofile", updateProfile);

// Separate Image API
router.put(
  "/upload-image",
  uploadProfileImage.single("profileImage"),
  updateProfileImage
);

export default router;

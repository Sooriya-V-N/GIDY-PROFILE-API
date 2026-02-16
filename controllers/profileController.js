import Profile from "../models/profileModel.js";
import logger from "../utils/logger.js";

// GET PROFILE
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
    logger.info("Profile Fetched Successfully")
  } catch (error) {
    res.status(500).json({ message: error.message });
    logger.error("Failed to Fetch Profile")
  }
};

// UPDATE FULL PROFILE (except image)
export const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );

    res.json(profile);
    logger.info("Profile Updated Successfully")
  } catch (error) {
    res.status(500).json({ message: error.message });
    logger.error("Failed to update Profile")
  }
};

// UPDATE PROFILE IMAGE (Separate API)
export const updateProfileImage = async (req, res) => {
  try {
    const imagePath = req.file.path.replace(/\\/g, "/");

    const profile = await Profile.findOneAndUpdate(
      {},
      { profileImage: imagePath },
      { new: true, upsert: true }
    );

    res.json({
      message: "Profile image updated",
      profile,
    });
    logger.info("Profile Image Updated Successfully")

  } catch (error) {
    res.status(500).json({ message: error.message });
    logger.error("Failed to update Profile Image")
  }
};

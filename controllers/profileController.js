import Profile from "../models/profileModel.js";

// GET PROFILE
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

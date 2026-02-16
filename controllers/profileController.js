import Profile from "../models/profileModel.js";

/**
 * GET /myprofile
 */
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * PUT /myprofile
 */
export const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.name = req.body.name;
    profile.bio = req.body.bio;
    profile.profileImage = req.body.profileImage;
    profile.socialLinks = req.body.socialLinks;
    profile.skills = req.body.skills;

    const updatedProfile = await profile.save();

    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

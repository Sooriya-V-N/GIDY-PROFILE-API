import mongoose from "mongoose";

const socialLinksSchema = new mongoose.Schema({
  linkedin: { type: String, default: "" },
  github: { type: String, default: "" },
  twitter: { type: String, default: "" },
  website: { type: String, default: "" },
});

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  endorsements: { type: Number, default: 0 },
});

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    profileImage: { type: String, required: true },
    socialLinks: socialLinksSchema,
    skills: [skillSchema],
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

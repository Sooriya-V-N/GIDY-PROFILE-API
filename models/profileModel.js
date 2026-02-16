import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  role: String,
  company: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String,
});

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  startYear: String,
  endYear: String,
});

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    headline: String,
    bio: String,
    location: String,
    email: String,
    phone: String,

    careerVision: String,
    growthStatus: String,
    growthSpace: String,
    inspiredBy: String,

    profileImage: { type: String, default: "" },

    socialLinks: {
      linkedin: String,
      github: String,
      twitter: String,
      website: String,
    },

    skills: [
      {
        name: String,
        endorsements: { type: Number, default: 0 },
      },
    ],

    experience: [experienceSchema],
    education: [educationSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);

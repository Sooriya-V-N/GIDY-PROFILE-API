import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Profile from "../models/profileModel.js";

dotenv.config();
connectDB();

const seedProfile = async () => {
  try {
    await Profile.deleteMany();

    await Profile.create({
      name: "Sooriya",
      bio: "Full Stack MERN Developer passionate about building scalable web applications.",
      profileImage: "https://i.pravatar.cc/300",
      socialLinks: {
        linkedin: "https://linkedin.com/in/sooriya",
        github: "https://github.com/sooriya",
        twitter: "https://twitter.com/sooriya",
        website: "https://sooriya.dev",
      },
      skills: [
        { name: "React", endorsements: 5 },
        { name: "Node.js", endorsements: 4 },
        { name: "MongoDB", endorsements: 3 },
        { name: "Tailwind CSS", endorsements: 4 },
      ],
    });

    console.log("Dummy Profile Inserted ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProfile();

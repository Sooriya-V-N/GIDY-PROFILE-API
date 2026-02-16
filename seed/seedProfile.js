import mongoose from "mongoose";
import dotenv from "dotenv";
import Profile from "../models/profileModel.js"; // adjust path if needed

dotenv.config();

const seedProfile = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // Optional: Clear existing profiles
    await Profile.deleteMany();

    const dummyProfile = {
      name: "Sooriya R",
      headline: "Full Stack MERN Developer | Problem Solver",
      bio: "Passionate MERN stack developer with strong problem-solving skills. Building scalable applications and constantly learning new technologies.",
      location: "Chennai, India",
      email: "sooriya.dev@example.com",
      phone: "+91 9876543210",

      careerVision:
        "To become a top-tier full stack architect and build impactful scalable systems.",
      growthStatus: "Actively Learning & Building",
      growthSpace: "System Design, DevOps, Scalable Architectures",
      inspiredBy: "Elon Musk & Tech Innovators",

      profileImage: "",

      socialLinks: {
        linkedin: "https://linkedin.com/in/sooriya",
        github: "https://github.com/sooriya",
        twitter: "https://twitter.com/sooriya_dev",
        website: "https://sooriya.dev",
      },

      skills: [
        { name: "JavaScript", endorsements: 12 },
        { name: "React.js", endorsements: 10 },
        { name: "Node.js", endorsements: 9 },
        { name: "MongoDB", endorsements: 8 },
        { name: "Express.js", endorsements: 7 },
      ],

      experience: [
        {
          role: "Full Stack Developer",
          company: "Tech Solutions Pvt Ltd",
          location: "Chennai",
          startDate: "Jan 2023",
          endDate: "Present",
          description:
            "Developed scalable MERN applications, implemented authentication systems, and optimized backend APIs.",
        },
        {
          role: "Frontend Developer Intern",
          company: "Startup Labs",
          location: "Remote",
          startDate: "Jun 2022",
          endDate: "Dec 2022",
          description:
            "Built responsive UI components using React and improved performance by 30%.",
        },
      ],

      education: [
        {
          degree: "B.E. Computer Science",
          institution: "Anna University",
          startYear: "2019",
          endYear: "2023",
        },
        {
          degree: "Higher Secondary Education",
          institution: "ABC Higher Secondary School",
          startYear: "2017",
          endYear: "2019",
        },
      ],
    };

    await Profile.create(dummyProfile);

    console.log("Dummy profile seeded successfully 🚀");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedProfile();

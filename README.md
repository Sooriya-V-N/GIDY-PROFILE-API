
---

## **2️⃣ `README_BACKEND.md`**  

```markdown
# Gidy Profile - Backend (API)

This is the **Node.js + Express backend** for the Gidy Profile application. It handles user authentication, profile management, and image uploads.

---

## 🔹 Tech Stack

- Node.js + Express.js
- MongoDB Atlas (cloud database)
- Mongoose (ODM)
- JWT for authentication
- Multer for file uploads
- CORS configured for frontend access

---

## 🚀 Innovation Feature

**Secure and Dynamic Profile API**

- `/myprofile` endpoint for fetching/updating user profile
- `/upload-image` endpoint for profile image upload
- Role-based access with JWT authentication
- Real-time data management with MongoDB Atlas
- Designed to work seamlessly with frontend UI

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js >= 18
- npm
- Git
- MongoDB Atlas account

---

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/Sooriya-V-N/GIDY-PROFILE-API.git
cd GIDY-PROFILE-API
```

2. Install Dependencies
```bash
npm install
```

3. Create Environment Variable File
```bash
PORT=<PORTNUMBER>
MONGO_URI=<MONGODBURI>
LOGS_DIR=<LOGS>

```

4. Start Development Server
```bash
npm run dev
```


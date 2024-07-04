// server/server.js
// import("dotenv").config();
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// Use cors middleware
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/quizzes", quizRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



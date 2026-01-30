import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import bookroute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import { connectDB } from "./db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // <-- frontend URL
  credentials: true
}));

// Routes
app.use("/book", bookroute);
app.use("/user", userRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("Hello! It's Aamir ladky");
});

// Connect DB & Start Server
const startServer = async () => {
  try {
    await connectDB(); // Ensure DB connects first
    console.log("✅ MongoDB Connected");

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
};

startServer();

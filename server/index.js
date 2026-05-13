import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Allowed Origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "http://localhost:4000",

  "https://production-ready-mern.vercel.app",
];

// CORS Configuration
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Test Route
app.get("/api/message", (req, res) => {
  res.json({
    success: true,
    message: "Version 2 deployed",
  });
});

// Health Check Route (useful for Render)
app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

// PORT
const PORT = process.env.PORT || 4000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Import cors
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import subscriptionRoutes from "./routes/subscriptions.route.js";
import ActiveSubscriptionRoutes from "./routes/activeSubscription.route.js";
import feedbackRoutes from "./routes/feedback.route.js";
import adsRoutes from "./routes/advertisement.route.js";
import eventRoutes from "./routes/event.route.js";

import cookieParser from "cookie-parser";
import path from "path";
dotenv.config();

mongoose
 .connect(process.env.MONGO)
 .then(() => {
    console.log("Connected to MongoDB");
  })
 .catch((err) => {
    console.log(err);
  });

const app = express();

// Custom CORS middleware to allow requests from your frontend domain
const corsMiddleware = cors({
  origin: 'https://brotein-bistro-saas-client.vercel.app', // Specify your frontend domain here
  methods: ['GET', 'POST'], // Specify the methods you want to allow
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow sending of cookies
});

app.use(corsMiddleware); // Use the custom CORS middleware

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/subs", subscriptionRoutes);
app.use("/api/active/subs", ActiveSubscriptionRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/ads", adsRoutes);
app.use("/api/events", eventRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

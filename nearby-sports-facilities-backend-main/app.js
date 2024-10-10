import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.js";
import facilityRoutes from "./routes/facilityRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authorization from "./middleware/authorization.js";
import adminAuth from "./middleware/adminAuth.js";

// making server with express
const server = express();

// making a connection to the db
await mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.error(err);
  });

// Middleware to parse incoming JSON requests into JavaScript objects
server.use(express.json());

// Middleware to enable Cross-Origin Resource Sharing (CORS) to allow requests from other domains
server.use(cors());

// Middleware to log HTTP requests in the "dev" format (concise output for development use)
server.use(morgan("dev"));

// Middleware to secure HTTP headers and enhance security (Helmet helps protect against common vulnerabilities)
server.use(helmet());

// Basic health check endpoint that responds with a JSON object indicating the server is running
server.get("/", (req, res) => {
  return res.json({
    health: "ok",
  });
});

server.use("/auth", authRoutes);

server.use("/users", adminAuth, userRoutes);

server.use("/facilities", authorization, facilityRoutes);

server.use("/exercises", authorization, exerciseRoutes);

server.use("/contacts", authorization, contactRoutes);

server.use("/reviews", authorization, reviewRoutes);

server.use("/bookings", authorization, bookingRoutes);

const port = process.env.PORT || 5500;

// make the server listen to given port
server.listen(port, () => {
  console.log("The server is running at ", `http://localhost:${port}`);
});

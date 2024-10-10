import express from "express";
import {
  getUsers,
  getUserById,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Get all users (listing)
router.get("/", getUsers);

// Get single user by ID
router.get("/:id", getUserById);

// Delete user by ID
router.delete("/:id", deleteUser);

export default router;

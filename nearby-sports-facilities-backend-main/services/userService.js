import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

// Fetch all users

const getAllUsers = async (authorization) => {
  try {
    // Extract the token from the authorization header
    const token = authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authorization token missing");
    }

    // Verify the token and extract payload (use Promise to handle async code)
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const userId = payload.authorId; // Assuming your token contains `authorId`

    // Fetch users excluding the logged-in user
    const users = await User.find({ _id: { $ne: userId } }).select("-password"); // Exclude password

    return users;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw new Error("Failed to fetch users");
  }
};

// Fetch a single user by ID
const getUserById = async (id) => {
  return await User.findById(id).select("-password"); // Exclude password
};

// Delete a user by ID
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

export default {
  getAllUsers,
  getUserById,
  deleteUser,
};

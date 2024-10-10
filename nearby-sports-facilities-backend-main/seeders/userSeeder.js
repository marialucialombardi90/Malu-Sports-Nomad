import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs"; // For hashing passwords

// Load environment variables
dotenv.config();

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
};

// Seed function to create sample users
const seedUsers = async () => {
  // Create specific Admin user
  const adminPassword = await bcrypt.hash("admin123", 10); // Hash the password
  const adminUser = {
    first_name: "Admin",
    last_name: "User",
    email: "admin@example.com",
    gender: "Male",
    date_of_birth: new Date(1990, 0, 1),
    password: adminPassword,
    address: "address",
    city: "city",
    state: "state",
    country: "country",
    role: 1, // Admin role
  };

  // Create specific normal User
  const userPassword = await bcrypt.hash("user123", 10); // Hash the password
  const normalUser = {
    first_name: "John",
    last_name: "Doe",
    email: "user@example.com",
    gender: "Male",
    date_of_birth: new Date(1992, 0, 1),
    password: userPassword,
    address: "address",
    city: "city",
    state: "state",
    country: "country",
    role: 2, // User role
  };

  // Insert Admin and Normal user into the database
  await User.insertMany([adminUser, normalUser]);

  console.log("Users have been seeded!");
  mongoose.connection.close();
};

// Run the seeder
const runSeeder = async () => {
  await connectDB();
  await seedUsers();
};

runSeeder();

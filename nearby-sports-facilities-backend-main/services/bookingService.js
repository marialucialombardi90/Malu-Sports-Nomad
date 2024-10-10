import Booking from "../models/bookingSchema.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
// Create a booking
export const createBooking = async (bookingData, token) => {
  const tokenDATA = token.split(" ")[1];
  if (!tokenDATA) {
    throw new Error("Authorization token missing");
  }

  // Verify the token and extract payload (use Promise to handle async code)
  const payload = jwt.verify(tokenDATA, process.env.JWT_SECRET);
  const userId = payload.authorId;
  const booking = new Booking({ ...bookingData, user: userId });
  return await booking.save();
};

// Get all bookings
export const getAllBookings = async () => {
  return await Booking.find().populate("user").populate("facility");
};

// Get a booking by ID
export const getBookingById = async (id) => {
  return await Booking.findById(id).populate("user").populate("facility");
};

// Update a booking by ID
export const updateBookingById = async (id, bookingData) => {
  return await Booking.findByIdAndUpdate(id, bookingData, {
    new: true,
    runValidators: true,
  })
    .populate("user")
    .populate("facility");
};

// Delete a booking by ID
export const deleteBookingById = async (id) => {
  return await Booking.findByIdAndDelete(id);
};

import { validationResult } from "express-validator";
import * as bookingService from "../services/bookingService.js";

// Create Booking
export const createBooking = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const authorization = req.headers.authorization;
    const booking = await bookingService.createBooking(req.body, authorization);
    res.status(201).json(booking);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res.status(500).json({ error: "Error saving booking" });
  }
};

// Get all Bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
};

// Get a Booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await bookingService.getBookingById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: "Error fetching booking" });
  }
};

// Update Booking
export const updateBooking = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedBooking = await bookingService.updateBookingById(
      req.params.id,
      req.body
    );
    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: "Error updating booking" });
  }
};

// Delete Booking
export const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await bookingService.deleteBookingById(
      req.params.id
    );
    if (!deletedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting booking" });
  }
};

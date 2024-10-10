import express from "express";
import { validateBooking } from "../validators/bookingValidator.js";
import * as bookingController from "../controllers/booking.controller.js";

const router = express.Router();

// Create a booking with validation
router.post("/", validateBooking, bookingController.createBooking);

// Get all bookings
router.get("/", bookingController.getAllBookings);

// Get a booking by ID
router.get("/:id", bookingController.getBookingById);

// Update a booking by ID with validation
router.put("/:id", bookingController.updateBooking);

// Delete a booking by ID
router.delete("/:id", bookingController.deleteBooking);

export default router;

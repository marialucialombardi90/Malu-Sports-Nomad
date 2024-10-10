import { model, Schema, Types } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User", // Assuming a 'User' model exists
      required: true,
    },
    facility: {
      type: Types.ObjectId,
      ref: "Facilities", // Assuming the 'Facilities' model exists
      required: true,
    },
    booked_at: {
      type: Date,
      default: Date.now, // The date and time the booking was made
      required: true,
    },
    booked_for: {
      type: Date, // The date/time for which the facility is booked
      required: true,
    },
    amount: {
      type: Number, // Total price for the booking
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "declined"], // Booking status options
      default: "pending",
      required: true,
    },
    decline_reason: {
      type: String, // Reason for decline, if applicable
      required: function () {
        return this.status === "declined"; // Required if status is 'declined'
      },
    },
  },
  { collection: "bookings", timestamps: true } // timestamps will auto-generate 'createdAt' and 'updatedAt'
);

export default model("Booking", bookingSchema);

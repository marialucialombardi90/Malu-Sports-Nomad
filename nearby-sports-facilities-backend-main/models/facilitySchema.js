import { model, Schema } from "mongoose";

const facilitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    trainer_allowed: {
      type: Boolean,
      required: true,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    open_time: {
      type: String,
      required: true,
    },
    close_time: {
      type: String,
      required: true,
    },
    no_of_days: {
      type: String, // Assuming this is a count, Number would be more appropriate.
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    booking: {
      type: Boolean,
      required: true,
      default: false,
    },
    price: {
      type: Number,
      required: false, // This is optional by default, but included for clarity.
    },
    period: {
      type: String,
      required: false, // Same here for clarity.
    },
    image: {
      type: String,
      required: false, // Same here for clarity.
    },
  },
  { collection: "facilities", timestamps: true } // timestamps create 'createdAt' and 'updatedAt'
);

export default model("Facilities", facilitySchema);

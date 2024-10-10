import { model, Schema, Types } from "mongoose";

const reviewSchema = new Schema(
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
    message: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1, // Minimum rating value
      max: 5, // Maximum rating value
    },
  },
  { collection: "reviews", timestamps: true }
);

export default model("Review", reviewSchema);

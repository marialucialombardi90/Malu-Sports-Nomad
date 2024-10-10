import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    gender: {
      type: String,
    },
    date_of_birth: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      select: false, // ensures that the password is never selected by default
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    role: {
      type: Number,
      enum: [1, 2], // Restricts the role to either Admin or User
      default: 2, // Default role will be User
    },
    createdAt: Date,
  },
  { collection: "users", timestamps: true }
);

export default model("User", userSchema);

import { model, Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, "is invalid"], // Email validation
    },
    phone_no: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { collection: "contacts", timestamps: true } // Auto-generates 'createdAt' and 'updatedAt'
);

export default model("Contact", contactSchema);

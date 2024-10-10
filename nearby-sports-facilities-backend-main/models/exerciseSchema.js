import { model, Schema } from "mongoose";

const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Assuming you will store the URL or path to the image
      required: false,
    },
  },
  { collection: "exercises", timestamps: true }
);

export default model("Exercise", exerciseSchema);

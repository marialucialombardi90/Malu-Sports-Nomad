import { body } from "express-validator";

export const validateReview = [
  body("facility").notEmpty().withMessage("Facility ID is required"),
  body("message").notEmpty().withMessage("Message is required"),
  body("rating")
    .notEmpty()
    .withMessage("Rating is required")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be an integer between 1 and 5"),
];

import { body } from "express-validator";

export const validateContact = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .matches(/\S+@\S+\.\S+/)
    .withMessage("Email is invalid"),
  body("phone_no").notEmpty().withMessage("Phone number is required"),
  body("country").notEmpty().withMessage("Country is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("message").notEmpty().withMessage("Message is required"),
];

import { body } from "express-validator";

export const validateFacility = [
  body("name").notEmpty().withMessage("Name is required"),
  body("category").notEmpty().withMessage("Category is required"),
  body("trainer_allowed")
    .isBoolean()
    .withMessage("Trainer allowed must be a boolean"),
  body("description").notEmpty().withMessage("Description is required"),
  body("open_time").notEmpty().withMessage("Open time is required"),
  body("close_time").notEmpty().withMessage("Close time is required"),
  body("no_of_days").notEmpty().withMessage("Number of days must be a number"),
  body("country").notEmpty().withMessage("Country is required"),
  body("state").notEmpty().withMessage("State is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("booking").isBoolean().withMessage("Booking must be a boolean"),
  body("price").optional().isNumeric().withMessage("Price must be a number"),
  body("period").optional().isString().withMessage("Period must be a string"),
];

export const validateFacilityUpdate = [
  body("name").optional().notEmpty().withMessage("Name is required"),
  body("category").optional().notEmpty().withMessage("Category is required"),
  body("trainer_allowed")
    .optional()
    .isBoolean()
    .withMessage("Trainer allowed must be a boolean"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Description is required"),
  body("open_time").optional().notEmpty().withMessage("Open time is required"),
  body("close_time")
    .optional()
    .notEmpty()
    .withMessage("Close time is required"),
  body("no_of_days")
    .optional()
    .notEmpty()
    .withMessage("Number of days must be a number"),
  body("country").optional().notEmpty().withMessage("Country is required"),
  body("state").optional().notEmpty().withMessage("State is required"),
  body("city").optional().notEmpty().withMessage("City is required"),
  body("address").optional().notEmpty().withMessage("Address is required"),
  body("booking")
    .optional()
    .isBoolean()
    .withMessage("Booking must be a boolean"),
  body("price").optional().isNumeric().withMessage("Price must be a number"),
  body("period").optional().isString().withMessage("Period must be a string"),
];

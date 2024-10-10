import { body } from "express-validator";

export const validateExercise = [
  body("name").notEmpty().withMessage("Name is required"),
  body("category").notEmpty().withMessage("Category is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("image").optional().isObject().withMessage("Image must be a string"),
];

export const validateExerciseUpdate = [
  body("name").optional().notEmpty().withMessage("Name is required"),
  body("category").optional().notEmpty().withMessage("Category is required"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Description is required"),
  body("image").optional().isObject().withMessage("Image must be a string"),
];

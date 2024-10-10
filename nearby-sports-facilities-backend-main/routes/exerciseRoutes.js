import express from "express";
import {
  // validateExercise,
  validateExerciseUpdate,
} from "../validators/exerciseValidator.js";
import * as exerciseController from "../controllers/exercise.controller.js";
import cloudinaryConfigMulter from "../middleware/cloudinaryConfigMulter.js";

const router = express.Router();

// Create an exercise with validation
router.post(
  "/",
  cloudinaryConfigMulter.single("image"),
  exerciseController.createExercise
);

// Get all exercises
router.get("/", exerciseController.getAllExercises);

// Get an exercise by ID
router.get("/:id", exerciseController.getExerciseById);

// Update an exercise by ID with validation
router.put(
  "/:id",
  cloudinaryConfigMulter.single("image"),
  exerciseController.updateExercise
);

// Delete an exercise by ID
router.delete("/:id", exerciseController.deleteExercise);

export default router;

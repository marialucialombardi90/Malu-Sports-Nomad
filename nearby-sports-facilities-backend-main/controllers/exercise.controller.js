import { validationResult } from "express-validator";
import * as exerciseService from "../services/exerciseService.js";

// Create Exercise
export const createExercise = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const exercise = await exerciseService.createExercise(req);
    res.status(201).json(exercise);
  } catch (error) {
    res.status(500).json({ error: "Error saving exercise" });
  }
};

// Get all Exercises
export const getAllExercises = async (req, res) => {
  try {
    const exercises = await exerciseService.getAllExercises();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: "Error fetching exercises" });
  }
};

// Get an Exercise by ID
export const getExerciseById = async (req, res) => {
  try {
    const exercise = await exerciseService.getExerciseById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ error: "Error fetching exercise" });
  }
};

// Update Exercise
export const updateExercise = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedExercise = await exerciseService.updateExerciseById(
      req.params.id,
      req
    );
    if (!updatedExercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }
    res.status(200).json(updatedExercise);
  } catch (error) {
    res.status(500).json({ error: "Error updating exercise" });
  }
};

// Delete Exercise
export const deleteExercise = async (req, res) => {
  try {
    const deletedExercise = await exerciseService.deleteExerciseById(
      req.params.id
    );
    if (!deletedExercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }
    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting exercise" });
  }
};

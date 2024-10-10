import { validationResult } from "express-validator";
import * as reviewService from "../services/reviewService.js";

// Create Review
export const createReview = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const authorization = req.headers.authorization;
    const review = await reviewService.createReview(req.body, authorization);
    res.status(201).json(review);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res.status(500).json({ error: "Error saving review" });
  }
};

// Get all Reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewService.getAllReviews(req.params.facilityId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
};

// Get a Review by ID
export const getReviewById = async (req, res) => {
  try {
    const review = await reviewService.getReviewById(req.params.id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: "Error fetching review" });
  }
};

// Update Review
export const updateReview = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedReview = await reviewService.updateReviewById(
      req.params.id,
      req.body
    );
    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: "Error updating review" });
  }
};

// Delete Review
export const deleteReview = async (req, res) => {
  try {
    const deletedReview = await reviewService.deleteReviewById(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting review" });
  }
};

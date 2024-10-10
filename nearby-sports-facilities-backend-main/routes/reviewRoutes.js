import express from "express";
import { validateReview } from "../validators/reviewValidator.js";
import * as reviewController from "../controllers/review.controller.js";

const router = express.Router();

// Create a review with validation
router.post("/", validateReview, reviewController.createReview);

// Get all reviews
router.get("/:facilityId", reviewController.getAllReviews);

// Get a review by ID
router.get("/:id", reviewController.getReviewById);

// Update a review by ID with validation
router.put("/:id", validateReview, reviewController.updateReview);

// Delete a review by ID
router.delete("/:id", reviewController.deleteReview);

export default router;

import Review from "../models/reviewSchema.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

// Create a review
export const createReview = async (reviewData, token) => {
  const tokenDATA = token.split(" ")[1];
  if (!tokenDATA) {
    throw new Error("Authorization token missing");
  }

  // Verify the token and extract payload (use Promise to handle async code)
  const payload = jwt.verify(tokenDATA, process.env.JWT_SECRET);
  const userId = payload.authorId;
  // const userId = payload.;
  const review = new Review({ ...reviewData, user: userId });

  return await review.save();
};

// Get all reviews
export const getAllReviews = async (facilityId) => {
  return await Review.find({ facility: { $eq: facilityId } })
    .populate("user")
    .populate("facility");
  // Populate user information
};

// Get a review by ID
export const getReviewById = async (id) => {
  return await Review.findById(id).populate("user", "name email"); // Populate user information
};

// Update a review by ID
export const updateReviewById = async (id, reviewData) => {
  return await Review.findByIdAndUpdate(id, reviewData, {
    new: true,
    runValidators: true,
  });
};

// Delete a review by ID
export const deleteReviewById = async (id) => {
  return await Review.findByIdAndDelete(id);
};

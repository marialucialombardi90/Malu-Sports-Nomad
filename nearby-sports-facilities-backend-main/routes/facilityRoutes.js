import express from "express";
import * as facilityController from "../controllers/facility.controller.js";
import {
  // validateFacility,
  validateFacilityUpdate,
} from "../validators/facilityValidators.js";
import cloudinaryConfigMulter from "../middleware/cloudinaryConfigMulter.js";

const router = express.Router();

// Create a facility with validation
router.post(
  "/",
  cloudinaryConfigMulter.single("image"),
  facilityController.createFacility
);

// Get all facilities
router.get("/", facilityController.getAllFacilities);

// Get a facility by ID
router.get("/:id", facilityController.getFacilityById);

// Update a facility by ID with validation
router.put(
  "/:id",
  cloudinaryConfigMulter.single("image"),
  facilityController.updateFacility
);

// Delete a facility by ID
router.delete("/:id", facilityController.deleteFacility);

export default router;

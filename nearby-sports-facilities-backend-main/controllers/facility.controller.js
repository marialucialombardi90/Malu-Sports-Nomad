import { validationResult } from "express-validator";
import * as facilityService from "../services/facilityService.js";

// Create Facility
export const createFacility = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const facility = await facilityService.createFacility(req);
    res.status(201).json(facility);
  } catch (error) {
    res.status(500).json({ error: "Error saving facility" });
  }
};

// Get all Facilities
export const getAllFacilities = async (req, res) => {
  try {
    const facilities = await facilityService.getAllFacilities();
    res.status(200).json(facilities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching facilities" });
  }
};

// Get a Facility by ID
export const getFacilityById = async (req, res) => {
  try {
    const facility = await facilityService.getFacilityById(req.params.id);
    if (!facility) {
      return res.status(404).json({ error: "Facility not found" });
    }
    res.status(200).json(facility);
  } catch (error) {
    res.status(500).json({ error: "Error fetching facility" });
  }
};

// Update Facility
export const updateFacility = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  try {
    const updatedFacility = await facilityService.updateFacilityById(
      req.params.id,
      req
    );
    if (!updatedFacility) {
      return res.status(404).json({ error: "Facility not found" });
    }
    res.status(200).json(updatedFacility);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res.status(500).json({ error: "Error updating facility" });
  }
};

// Delete Facility
export const deleteFacility = async (req, res) => {
  try {
    const deletedFacility = await facilityService.deleteFacilityById(
      req.params.id
    );
    if (!deletedFacility) {
      return res.status(404).json({ error: "Facility not found" });
    }
    res.status(200).json({ message: "Facility deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting facility" });
  }
};

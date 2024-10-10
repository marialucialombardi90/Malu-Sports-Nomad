import Facilities from "../models/facilitySchema.js";

// Create a facility
export const createFacility = async (facilityData) => {
  const coverPath = facilityData.file
    ? facilityData.file.path
    : "https://picsum.photos/200";
  const facility = new Facilities({ ...facilityData.body, image: coverPath });
  return await facility.save();
};

// Get all facilities
export const getAllFacilities = async () => {
  return await Facilities.find();
};

// Get a facility by ID
export const getFacilityById = async (id) => {
  return await Facilities.findById(id);
};

// Update a facility by ID
export const updateFacilityById = async (id, facilityData) => {
  const coverPath = facilityData.file;
  console.log("====================================");
  console.log(coverPath);
  console.log("====================================");
  let newData = { ...facilityData.body };
  if (coverPath) {
    newData = { ...facilityData.body, image: coverPath.path };
  }
  return await Facilities.findByIdAndUpdate(id, newData, {
    new: true,
    runValidators: true,
  });
};

// Delete a facility by ID
export const deleteFacilityById = async (id) => {
  return await Facilities.findByIdAndDelete(id);
};

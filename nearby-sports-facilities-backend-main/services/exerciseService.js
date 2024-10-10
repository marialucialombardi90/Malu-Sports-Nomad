import Exercise from "../models/exerciseSchema.js";

// Create an exercise
export const createExercise = async (exerciseData) => {
  const coverPath = exerciseData.file
    ? exerciseData.file.path
    : "https://picsum.photos/200";

  const exercise = new Exercise({ ...exerciseData.body, image: coverPath });
  return await exercise.save();
};

// Get all exercises
export const getAllExercises = async () => {
  return await Exercise.find();
};

// Get an exercise by ID
export const getExerciseById = async (id) => {
  return await Exercise.findById(id);
};

// Update an exercise by ID
export const updateExerciseById = async (id, exerciseData) => {
  const coverPath = exerciseData.file;
  let newData = { ...exerciseData.body };
  if (coverPath) {
    newData = { ...facilityData.body, image: coverPath.path };
  }
  return await Exercise.findByIdAndUpdate(id, newData, {
    new: true,
    runValidators: true,
  });
};

// Delete an exercise by ID
export const deleteExerciseById = async (id) => {
  return await Exercise.findByIdAndDelete(id);
};

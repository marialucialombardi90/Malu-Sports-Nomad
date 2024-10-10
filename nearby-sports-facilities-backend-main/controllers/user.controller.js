import UserService from "../services/userService.js";

// Get all users (listing)
export const getUsers = async (req, res) => {
  try {
    // Assuming `req.user` contains the logged-in user's information
    const authorization = req.headers.authorization;

    // Fetch all users except the logged-in user
    const users = await UserService.getAllUsers(authorization);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};

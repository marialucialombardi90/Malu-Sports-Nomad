import express from "express";
import { validateContact } from "../validators/contactValidator.js";
import * as contactController from "../controllers/contact.controller.js";

const router = express.Router();

// Create a contact with validation
router.post("/", validateContact, contactController.createContact);

// Get all contacts
router.get("/", contactController.getAllContacts);

// Get a contact by ID
router.get("/:id", contactController.getContactById);

// Delete a contact by ID
router.delete("/:id", contactController.deleteContact);

export default router;

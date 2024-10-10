import { validationResult } from "express-validator";
import * as contactService from "../services/contactService.js";

// Create Contact
export const createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const contact = await contactService.createContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Error saving contact" });
  }
};

// Get all Contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching contacts" });
  }
};

// Get a Contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await contactService.getContactById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Error fetching contact" });
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await contactService.deleteContactById(
      req.params.id
    );
    if (!deletedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting contact" });
  }
};

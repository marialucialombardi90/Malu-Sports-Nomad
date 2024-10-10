import Contact from "../models/contactSchema.js";

// Create a contact
export const createContact = async (contactData) => {
  const contact = new Contact(contactData);
  return await contact.save();
};

// Get all contacts
export const getAllContacts = async () => {
  return await Contact.find();
};

// Get a contact by ID
export const getContactById = async (id) => {
  return await Contact.findById(id);
};

// Delete a contact by ID
export const deleteContactById = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

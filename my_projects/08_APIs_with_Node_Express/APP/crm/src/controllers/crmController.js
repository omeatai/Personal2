import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getContactWithId = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body,
      { new: true }
    );
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(
      req.params.contactId
    );
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully", deletedContact });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

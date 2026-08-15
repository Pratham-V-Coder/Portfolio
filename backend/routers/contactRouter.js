import express from "express";

import { submitContact } from "../controller/contactController.js";

const router = express.Router();

router.post("/", submitContact);

import Contact from "../models/contactModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("📩 Contact request received:", req.body); // debug log

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      contact,
    });
  } catch (error) {
    console.log("❌ Error in contact route:", error); // thoda aur detail
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

export default router;

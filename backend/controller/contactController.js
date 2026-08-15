import Contact from "../models/contactModel.js";

export const submitContact = async (req, res) => {
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
    // Detailed error sirf local/dev console mein — production mein chup
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error in submitContact:", error);
    } else {
      console.error("❌ submitContact failed:", error.message);
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

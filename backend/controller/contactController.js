<<<<<<< HEAD
import Contact from "../models/contactModel.js";

export const submitContact = async (req, res) => {
=======
const submitContact = async (req, res) => {
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

<<<<<<< HEAD
=======
    // Sirf MongoDB mein save karo
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
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
<<<<<<< HEAD
    // Detailed error sirf local/dev console mein — production mein chup
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error in submitContact:", error);
    } else {
      console.error("❌ submitContact failed:", error.message);
    }

=======
    console.log(error);
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

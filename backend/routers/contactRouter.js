import Contact from "../models/contactModel.js";
import transporter from "../config/mail.js";

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Save message to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form Submission - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2 style="color:#6d28d9;">New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <p><strong>Message:</strong></p>

          <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
            ${message}
          </div>

          <br>

          <small>
            This message was sent from your Portfolio Contact Form.
          </small>
        </div>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      contact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

export default submitContact;

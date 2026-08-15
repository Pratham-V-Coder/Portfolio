import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Check } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Wraps an input/textarea with focus animation and error shake
function FormField({ error, children }) {
  return (
    <motion.div
      variants={fieldVariants}
      animate={error ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
      transition={error ? { duration: 0.4 } : {}}
      className="relative"
    >
      <motion.div
        className="rounded-xl"
        initial={false}
        whileFocus={{
          boxShadow: "0 0 0 3px rgba(168,85,247,0.35)",
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-red-400 text-xs mt-1.5 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validate = () => {
    const next = {};

    if (!formData.name.trim()) {
      next.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      next.email = "Please enter your email";
    } else if (!EMAIL_RE.test(formData.email)) {
      next.email = "That email doesn't look right";
    }

    if (!formData.subject.trim()) {
      next.subject = "Please add a subject";
    }

    if (!formData.message.trim()) {
      next.message = "Please enter your message";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the highlighted fields");
      return;
    }

    setLoading(true);

    // Prevent backend from hanging forever
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);

    try {
      // Send data to backend
      await axios.post(
        "https://portfolio-wyuo.onrender.com/api/v1/contact",
        formData,
        {
          signal: controller.signal,
        },
      );

      // Send email through EmailJS
      await emailjs.send(
        "service_qs8wm0m",
        "template_21d5r1x",
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "73MuuWavvmOw0APZM",
      );

      toast.success("Message sent successfully!");

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 2500);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error(error);
      }

      if (error.code === "ERR_CANCELED" || error.name === "CanceledError") {
        toast.error("Server is taking too long — please try again shortly");
      } else if (error.response) {
        toast.error("Something went wrong on our end. Please try again.");
      } else {
        toast.error("Network issue — check your connection and try again");
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[350px_1fr] gap-10">
          {/* Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-sm font-semibold tracking-widest text-gray-400 mb-8"
            >
              CONTACT INFO
            </motion.h3>

            {/* Email */}
            <motion.div variants={itemVariants} className="flex gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                className="w-14 h-14 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl flex items-center justify-center"
              >
                <FaEnvelope />
              </motion.div>

              <div>
                <h4 className="text-gray-400 text-sm">MAIL US</h4>

                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=prathamverma8880@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors duration-200"
                >
                  prathamverma8880@gmail.com
                </motion.a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="flex gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                className="w-14 h-14 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl flex items-center justify-center"
              >
                <FaPhoneAlt />
              </motion.div>

              <div>
                <h4 className="text-gray-400 text-sm">CONTACT US</h4>

                <motion.a
                  href="tel:+919636586801"
                  className="text-white hover:text-purple-400 transition-colors duration-200"
                >
                  +91 9636586801
                </motion.a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                className="w-14 h-14 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl flex items-center justify-center"
              >
                <FaMapMarkerAlt />
              </motion.div>

              <div>
                <h4 className="text-gray-400 text-sm">LOCATION</h4>

                <p>Alwar, Rajasthan</p>
                <p>India</p>
              </div>
            </motion.div>

            {/* Social */}
            <motion.h3
              variants={itemVariants}
              className="text-sm font-semibold tracking-widest text-gray-400 mb-6"
            >
              SOCIAL INFO
            </motion.h3>

            <motion.div variants={itemVariants} className="flex gap-4">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/prathamverma777"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <FaLinkedin />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Pratham-V-Coder"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-slate-900/60 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800 rounded-[30px] p-8 md:p-12 backdrop-blur-lg"
          >
            <h2 className="text-4xl md:text-4xl font-bold mb-10">
              Let's work <span className="text-purple-500">together.</span>
            </h2>

            <motion.form
              className="space-y-5"
              onSubmit={handleSubmit}
              noValidate
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
            >
              {/* Name */}
              <FormField error={errors.name}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-zinc-800/80 border rounded-xl px-5 py-4 outline-none transition-colors ${
                    errors.name
                      ? "border-red-500"
                      : "border-zinc-700 focus:border-purple-500"
                  }`}
                />
              </FormField>

              {/* Email */}
              <FormField error={errors.email}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-zinc-800/80 border rounded-xl px-5 py-4 outline-none transition-colors ${
                    errors.email
                      ? "border-red-500"
                      : "border-zinc-700 focus:border-purple-500"
                  }`}
                />
              </FormField>

              {/* Subject */}
              <FormField error={errors.subject}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-zinc-800/80 border rounded-xl px-5 py-4 outline-none transition-colors ${
                    errors.subject
                      ? "border-red-500"
                      : "border-zinc-700 focus:border-purple-500"
                  }`}
                />
              </FormField>

              {/* Message */}
              <FormField error={errors.message}>
                <textarea
                  rows="3"
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-zinc-800/80 border rounded-xl px-5 py-4 outline-none resize-none transition-colors ${
                    errors.message
                      ? "border-red-500"
                      : "border-zinc-700 focus:border-purple-500"
                  }`}
                />
              </FormField>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                variants={fieldVariants}
                whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-purple-400 cursor-not-allowed"
                    : success
                      ? "bg-green-600"
                      : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {loading ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </motion.span>
                  ) : success ? (
                    <motion.span
                      key="success"
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={18} />
                      Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

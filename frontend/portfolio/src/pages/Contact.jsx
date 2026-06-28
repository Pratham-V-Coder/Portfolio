import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // MongoDB mein save karo
      await axios.post(
        "https://portfolio-wyuo.onrender.com/api/v1/contact",
        formData
      );

      // EmailJS se email bhejo
      await emailjs.send(
        "service_qs8wm0m",
        "template_21d5r1x",
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "73MuuWavvmOw0APZM"
      );
  return (
    <section className="min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[350px_1fr] gap-10">
          {/* Left Side */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-8">
              CONTACT INFO
            </h3>

            {/* Email */}
            <div className="flex gap-4 mb-8">
              <div className="w-14 h-14 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl flex items-center justify-center">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="text-gray-400 text-sm">MAIL US</h4>
                <p className="text-white">prathamverma8880@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-8">
              <div className="w-14 h-14 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl flex items-center justify-center">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="text-gray-400 text-sm">CONTACT US</h4>
                <p>+91 9636586801</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 mb-12">
              <div className="w-14 h-14 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="text-gray-400 text-sm">LOCATION</h4>
                <p>Alwar, Rajasthan</p>
                <p>India</p>
              </div>
            </div>

            {/* Social */}
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-6">
              SOCIAL INFO
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/prathamverma777"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-800 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Pratham-V-Coder"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-slate-900/60 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800 rounded-[30px] p-8 md:p-12 backdrop-blur-lg">
            <h2 className="text-4xl md:text-4xl font-bold mb-10">
              Let's work <span className="text-purple-500">together.</span>
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
              />

              <input
                type="text"
                placeholder="Your Subject *"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Message *"
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-5 py-4 outline-none resize-none focus:border-purple-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

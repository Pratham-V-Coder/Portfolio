import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-purple-500">Pratham</span> Verma
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Data Analyst & MERN Developer passionate about transforming data
              into insights and building scalable web applications.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/" className="hover:text-purple-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-purple-500 transition">
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/education"
                  className="hover:text-purple-500 transition"
                >
                  Education
                </Link>
              </li>

              <li>
                <Link
                  to="/certificates"
                  className="hover:text-purple-500 transition"
                >
                  Certificates
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/Pratham-V-Coder"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/prathamverma777"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 backdrop-blur-sm border border-slate-800 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* <p className="mt-5 text-slate-400">prathamverma8880@gmail.com</p> */}
            <a
              href="mailto:prathamverma8880@gmail.com"
              className="mt-5 text-slate-400 hover:text-purple-500 transition block"
            >
              prathamverma8880@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} Pratham Verma. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

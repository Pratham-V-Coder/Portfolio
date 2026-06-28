import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

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
                <a href="/" className="hover:text-purple-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-purple-500 transition">
                  About
                </a>
              </li>

              <li>
                <a
                  href="/education"
                  className="hover:text-purple-500 transition"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="/certificate"
                  className="hover:text-purple-500 transition"
                >
                  Certificates
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-purple-500 transition">
                  Contact
                </a>
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

            <p className="mt-5 text-slate-400">prathamverma8880@gmail.com</p>
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

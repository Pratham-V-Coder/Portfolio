import React from "react";
import { motion } from "framer-motion";

import python from "../assets/python.jpg";
import Cplusplus from "../assets/Cplusplus.jpg";
import dsa from "../assets/DSA.jpg";
import opps from "../assets/Opps.jpg";
import codesoft from "../assets/Codsoft.jpg";
import appco from "../assets/Appcosoftware.jpg";
import intern from "../assets/InternshipCertificate_pag.jpg";

const certificates = [
  {
    title: "DSA",
    issuer: "Infosys Springboard",
    date: "2024",
    image: dsa,
    link: dsa,
  },
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    date: "2024",
    image: python,
    link: python,
  },
  {
    title: "C++",
    issuer: "Infosys Springboard",
    date: "2024",
    image: Cplusplus,
    link: Cplusplus,
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Infosys Springboard",
    date: "2024",
    image: dsa,
    link: dsa,
  },
  {
    title: "Object Oriented Programming",
    issuer: "Infosys Springboard",
    date: "2025",
    image: opps,
    link: opps,
  },
  {
    title: "Internship Certificate",
    issuer: "CodeSoft",
    date: "2023",
    image: codesoft,
    link: codesoft,
  },
  {
    title: "Internship Certificate",
    issuer: "Appcosoftware Pvt. Ltd. Jaipur",
    date: "2023",
    image: appco,
    link: appco,
  },
  {
    title: "Internship Certificate",
    issuer: "KVON Tech Pvt. Ltd. Jaipur",
    date: "2026",
    image: intern,
    link: intern,
  },
];

// Section animation
const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Certificate card animation
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Heading animation
const headingVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Individual heading item animation
const headingItemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Certificates = () => {
  return (
    <motion.section
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={headingVariants}>
          <motion.span
            className="text-cyan-400 uppercase tracking-widest"
            variants={headingItemVariants}
          >
            Achievements & Learning
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4"
            variants={headingItemVariants}
          >
            My Certificates
          </motion.h2>

          <motion.p
            className="text-slate-400 mt-4 max-w-2xl mx-auto"
            variants={headingItemVariants}
          >
            Certifications that demonstrate my skills in Data Analytics,
            Programming, Databases, and Full Stack Development.
          </motion.p>
        </motion.div>

        {/* Certificate Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.5)",
                borderColor: "rgb(168, 85, 247)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {/* Certificate Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-56 object-cover"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{cert.title}</h3>

                <p className="text-purple-400 mt-2">{cert.issuer}</p>

                <p className="text-slate-400 mt-1">Issued: {cert.date}</p>

                {/* Download Button */}
                <motion.a
                  href={cert.link}
                  download={`${cert.title}.jpg`}
                  className="inline-block mt-5 px-5 py-3 bg-purple-600 rounded-lg"
                  whileHover={{
                    backgroundColor: "rgb(126, 34, 206)",
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  Download Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certificates;

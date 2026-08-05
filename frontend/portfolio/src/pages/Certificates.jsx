import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion"; // Import motion from framer-motion
=======
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0

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

<<<<<<< HEAD
// Define animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of children
      delayChildren: 0.2, // Delay before children start animating
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Fade in and slide up
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15, // Stagger header elements
      delayChildren: 0.1,
    },
  },
};

const headingItemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Certificates = () => {
  return (
    <motion.section
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
      initial="hidden"
      whileInView="show" // Animate when the section comes into view
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the section is visible
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants} // Apply variants to the heading container
        >
          <motion.span
            className="text-cyan-400 uppercase tracking-widest"
            variants={headingItemVariants} // Apply variants to individual heading elements
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
          variants={containerVariants} // Apply container variants to stagger the cards within the grid
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
              variants={itemVariants} // Each card uses item variants for its own entrance animation
              whileHover={{
                scale: 1.03, // Slightly enlarge on hover
                boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.5)", // Add a glowing shadow on hover
                borderColor: "rgb(168, 85, 247)", // Change border color
                y: -5, // Slight lift on hover
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring transition for hover
=======
const Certificates = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest">
            Achievements & Learning
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My Certificates
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Certifications that demonstrate my skills in Data Analytics,
            Programming, Databases, and Full Stack Development.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
<<<<<<< HEAD
                  className="w-full h-56 object-cover" // Tailwind's hover:scale-105 is removed as Framer Motion handles the animation
=======
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{cert.title}</h3>

                <p className="text-purple-400 mt-2">{cert.issuer}</p>

                <p className="text-slate-400 mt-1">Issued: {cert.date}</p>

<<<<<<< HEAD
                <motion.a
                  href={cert.link}
                  // CHANGE THIS LINE:
                  download={cert.title + ".jpg"} // Changed template literal to string concatenation
                  className="inline-block mt-5 px-5 py-3 bg-purple-600 rounded-lg"
                  whileHover={{ backgroundColor: "rgb(147, 51, 234)" }} // Darker purple on hover
                  transition={{ duration: 0.2 }}
                >
                  Download Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
=======
                <a
                  href={cert.link}
                  download={`${cert.title}.jpg`}
                  className="inline-block mt-5 px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300"
                >
                  Download Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
  );
};

export default Certificates;

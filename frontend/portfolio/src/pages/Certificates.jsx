import React from "react";

import python from "../assets/python.jpg";
import Cplusplus from "../assets/Cplusplus.jpg";
import dsa from "../assets/DSA.jpg";
import opps from "../assets/Opps.jpg";
import codesoft from "../assets/Codsoft.jpg";
import appco from "../assets/Appcosoftware.jpg";

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
];

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
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{cert.title}</h3>

                <p className="text-purple-400 mt-2">{cert.issuer}</p>

                <p className="text-slate-400 mt-1">Issued: {cert.date}</p>

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
  );
};

export default Certificates;

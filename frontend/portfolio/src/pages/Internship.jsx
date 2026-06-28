import React from "react";
import { Briefcase, MapPin, FolderOpen } from "lucide-react";

const experiences = [
  {
    company: "Appcosoftware",
    role: "PHP Developer Intern",
    location: "Jaipur",
    duration: "May 2023 - Aug 2023",
    projects: ["Portfolio Website", "E-commerce Website", "and many more"],
  },
  {
    company: "Kvon Tech Pvt Ltd",
    role: "MERN Stack Developer Intern",
    location: "Jaipur",
    duration: "Jan 2026 - May 2026",
    projects: ["Admin Dashboard", "Task Management App", "and many more"],
  },
  {
    company: "Kvon Tech Pvt Ltd",
    role: "Data Analyst Intern",
    location: "Jaipur",
    duration: "Jan 2026 - May 2026",
    projects: ["Sales Dashboard", "Customer Churn Analysis", "and many more"],
  },
];

const Internship = () => {
  return (
    <section id="experience" className="min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work Experience
        </h2>

        <p className="text-center text-gray-400 mb-16">
          My professional journey and internship experiences.
        </p>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:scale-105 hover:border-purple-500 transition-all duration-300 shadow-lg"
            >
              {/* Company */}
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
              </div>

              {/* Role */}
              <p className="text-purple-400 font-medium mb-2">{exp.role}</p>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <MapPin size={18} />
                <span>{exp.location}</span>
              </div>

              {/* Duration */}
              <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>

              {/* Projects */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FolderOpen size={18} />
                  <span className="font-medium">Projects</span>
                </div>

                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.projects.map((project, idx) => (
                    <li key={idx}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;

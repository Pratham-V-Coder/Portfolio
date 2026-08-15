import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, FolderOpen } from "lucide-react";

const experiences = [
  {
    company: "Appcosoftware",
    role: "PHP Developer Intern",
    location: "Jaipur",
    duration: "May 2023 - Aug 2023",
    projects: ["Portfolio Website", "E-commerce Website", "And many more"],
  },

  {
    company: "Kvon Tech Pvt Ltd",
    role: "MERN Stack Developer Intern",
    location: "Jaipur",
    duration: "Jan 2026 - May 2026",
    projects: ["Admin Dashboard", "Task Management App", "And many more"],
  },

  {
    company: "Kvon Tech Pvt Ltd",
    role: "Data Analyst Intern",
    location: "Jaipur",
    duration: "Jan 2026 - May 2026",
    projects: ["Sales Dashboard", "Customer Churn Analysis", "And many more"],
  },
];

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.3,
        margin: "0px 0px -10% 0px",
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-5 sm:p-6 shadow-lg transition-colors duration-300 hover:border-purple-500"
    >
      {/* Company */}
      <div className="mb-4 flex items-center gap-3">
        <Briefcase size={24} className="text-purple-400 flex-shrink-0" />

        <h3 className="text-xl sm:text-2xl font-semibold break-words">
          {exp.company}
        </h3>
      </div>

      {/* Role */}
      <p className="mb-3 text-base sm:text-lg font-medium text-purple-400">
        {exp.role}
      </p>

      {/* Location */}
      <div className="mb-2 flex items-center gap-2 text-gray-400">
        <MapPin size={18} className="flex-shrink-0" />

        <span>{exp.location}</span>
      </div>

      {/* Duration */}
      <p className="mb-5 text-sm text-gray-500">{exp.duration}</p>

      {/* Projects */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <FolderOpen size={18} />
          <span className="font-medium">Projects</span>
        </div>

        <ul className="space-y-1 text-gray-300">
          {exp.projects.map((project, idx) => (
            <motion.li
              key={`${project}-${idx}`}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.3,
                delay: 0.2 + idx * 0.08,
              }}
              className="flex items-start gap-2"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />

              <span>{project}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const Internship = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Work Experience
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            My professional journey and internship experiences.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}-${index}`}
              exp={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;

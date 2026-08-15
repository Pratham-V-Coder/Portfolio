import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "JECRC University Jaipur",
    duration: "2024 - 2026",
    score: "Pursuing",
    description:
      "Advanced studies in Software Engineering, Data Analytics, Artificial Intelligence, Cloud Computing, Database Systems, and Full Stack Development.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "ICFAI University, Jaipur",
    duration: "2021 - 2024",
    score: "CGPA: 7.07/10",
    description:
      "Focused on Programming, Database Management, Data Structures, Web Development, Data Analytics, and Software Engineering.",
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "Yeshwant Sr Sec School",
    duration: "2020 - 2021",
    score: "Percentage: 78%",
    description:
      "Completed higher secondary education with Mathematics and Computer Science.",
  },
  {
    degree: "Secondary School (10th)",
    institution: "Happy Sr Sec School",
    duration: "2019 - 2020",
    score: "Percentage: 51%",
    description:
      "Built a strong academic foundation in Science, Mathematics, and Computer Fundamentals.",
  },
];

/* =========================================
   SECTION ANIMATION
========================================= */

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

/* =========================================
   HEADING ANIMATION
========================================= */

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

/* =========================================
   TIMELINE ANIMATION
========================================= */

const timelineItemVariantsLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const timelineItemVariantsRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================
   TIMELINE DOT ANIMATION
========================================= */

const dotVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },

  show: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
};

/* =========================================
   COURSEWORK ANIMATION
========================================= */

const skillsContainerVariants = {
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

const skillTagVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/* =========================================
   EDUCATION COMPONENT
========================================= */

const Education = () => {
  const coursework = [
    "Data Structures",
    "DBMS",
    "Python",
    "SQL",
    "Web Development",
    "Operating Systems",
    "Data Analytics",
    "Software Engineering",
  ];

  return (
    <motion.section
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* =====================================
            HEADING
        ====================================== */}

        <motion.div className="text-center mb-16" variants={headingVariants}>
          <motion.span
            className="text-cyan-400 uppercase tracking-widest font-medium"
            variants={headingItemVariants}
          >
            Academic Journey
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4"
            variants={headingItemVariants}
          >
            Education
          </motion.h2>

          <motion.p
            className="text-slate-400 mt-4 max-w-2xl mx-auto"
            variants={headingItemVariants}
          >
            My educational background has provided a strong foundation in
            computer science, software development, and data analytics.
          </motion.p>
        </motion.div>

        {/* =====================================
            EDUCATION TIMELINE
        ====================================== */}

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2" />

          {/* Education Items */}
          {educationData.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${index}`}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              variants={
                index % 2 === 0
                  ? timelineItemVariantsLeft
                  : timelineItemVariantsRight
              }
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 w-5 h-5 bg-purple-500 rounded-full border-4 border-slate-950 transform -translate-x-1/2 z-10"
                variants={dotVariants}
              />

              {/* Education Card */}
              <div className="ml-12 md:ml-0 md:w-[45%] bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-purple-500 transition-all duration-300">
                {/* Duration */}
                <span className="text-cyan-400 text-sm font-medium">
                  {edu.duration}
                </span>

                {/* Degree */}
                <h3 className="text-2xl font-bold mt-2">{edu.degree}</h3>

                {/* Institution */}
                <h4 className="text-purple-400 mt-2">{edu.institution}</h4>

                {/* Score */}
                <p className="text-green-400 mt-2 font-medium">{edu.score}</p>

                {/* Description */}
                <p className="text-slate-400 mt-4 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================
            RELEVANT COURSEWORK
        ====================================== */}

        <div className="mt-20">
          {/* Coursework Heading */}
          <motion.h3
            className="text-3xl font-bold text-center mb-8"
            initial={{
              opacity: 0,
              y: -20,
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
          >
            Relevant Coursework
          </motion.h3>

          {/* Coursework Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            {coursework.map((course) => (
              <motion.span
                key={course}
                className="px-5 py-3 bg-slate-900 border border-slate-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                variants={skillTagVariants}
                whileHover={{
                  scale: 1.05,
                }}
              >
                {course}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;

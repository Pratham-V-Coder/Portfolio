import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import profileImg from "../assets/my.jpeg";
import resume from "../assets/Pratham.pdf";
import { Link } from "react-router-dom";

const leftVariants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 120, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

const badgeVariants = {
  hidden: (custom) => ({ opacity: 0, x: custom.x, y: custom.y, scale: 0.8 }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 14, delay: 0.5 },
  },
};

=======
import profileImg from "../assets/my.jpeg";
import resume from "../assets/Pratham.pdf";
import Projects from "./Projects";
import { Link } from "react-router-dom";

>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
const About = () => {
  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
  ];

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-[#0b0120] to-slate-950 text-white pt-8 sm:pt-10 lg:pt-0">
      <div className="absolute top-0 right-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
<<<<<<< HEAD
          <motion.div
            className="order-2 xl:order-1"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-medium"
            >
              Data Analyst & MERN Developer
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-extrabold leading-tight"
            >
              Hi, I'm <span className="text-purple-500">Pratham Verma</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base sm:text-lg leading-9 text-slate-400"
            >
=======
          <div className="order-2 xl:order-1">
            <span className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-medium">
              Data Analyst & MERN Developer
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-extrabold leading-tight">
              Hi, I'm <span className="text-purple-500">Pratham Verma</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-9 text-slate-400">
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
              Passionate Data Analyst and Full Stack Developer skilled in
              Python, SQL, Power BI, Excel, React.js, Node.js, Express.js and
              MongoDB.
              <br />I enjoy transforming raw data into meaningful insights,
              creating interactive dashboards, and building scalable web
              applications that solve real-world problems.
<<<<<<< HEAD
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mt-7"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 hover:border-purple-400 hover:bg-purple-500/30 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 transition-colors duration-300 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/projects"
                  className="w-full sm:w-auto block px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition-colors duration-300 font-semibold shadow-lg shadow-purple-600/30 text-center"
                >
                  View Projects
                </Link>
              </motion.div>

              <motion.a
                href={resume}
                download="Pratham_Verma_Resume.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors duration-300 font-semibold text-center inline-flex items-center justify-center"
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 mt-14 max-w-xl"
            >
=======
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 hover:border-purple-400 hover:bg-purple-500/30 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold shadow-lg shadow-purple-600/30"
              >
                View Projects
              </Link>

              <a
                href={resume}
                download="Pratham_Verma_Resume.pdf"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-all duration-300 font-semibold text-center inline-flex items-center justify-center"
              >
                Download Resume
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-14 max-w-xl">
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
              <div>
                <h3 className="text-3xl font-bold text-purple-500">15+</h3>
                <p className="text-slate-400 mt-2">Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
                <p className="text-slate-400 mt-2">Internships</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-400">10+</h3>
                <p className="text-slate-400 mt-2">Certificates</p>
              </div>
<<<<<<< HEAD
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 xl:order-2 flex justify-center"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
=======
            </div>
          </div>

          <div className="order-1 xl:order-2 flex justify-center">
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
            <div className="relative pt-6 pb-6 px-6 sm:px-10">
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl"></div>

              <img
                src={profileImg}
                alt="Pratham Verma"
                className="
                relative z-10
                w-[220px] h-[220px]
                sm:w-[280px] sm:h-[280px]
                md:w-[340px] md:h-[400px]
                lg:w-[380px] lg:h-[460px]
                xl:w-[420px] xl:h-[500px]
                2xl:w-[460px] 2xl:h-[540px]
                object-cover
                rounded-full
                border-4
                border-purple-500
                shadow-2xl
                mx-auto
                animate-[float_5s_ease-in-out_infinite]
                "
              />

<<<<<<< HEAD
              <motion.div
                custom={{ x: -30, y: -20 }}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="hidden sm:block absolute z-20 left-0 sm:-left-4 md:-left-10 lg:-left-8 top-4 sm:top-8"
              >
                <div className="bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap text-sm sm:text-base">
                  📊 Power BI & SQL
                </div>
              </motion.div>

              <motion.div
                custom={{ x: 30, y: 20 }}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="hidden sm:block absolute z-20 right-0 sm:-right-2 md:-right-6 lg:-right-10 bottom-6 sm:bottom-10"
              >
                <div className="bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap text-sm sm:text-base">
                  💻 MERN Developer
                </div>
              </motion.div>

              <motion.div
                custom={{ x: 30, y: 0 }}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="hidden sm:block absolute z-20 right-0 sm:-right-0 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2"
              >
                <div className="bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap text-sm sm:text-base">
                  🐍 Python
                </div>
              </motion.div>
            </div>
          </motion.div>
=======
              <div className="hidden sm:block absolute z-20 left-0 sm:-left-4 md:-left-10 lg:-left-8 top-4 sm:top-8">
                <div className="bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap text-sm sm:text-base">
                  📊 Power BI & SQL
                </div>
              </div>

              <div className="hidden sm:block absolute z-20 right-0 sm:-right-2 md:-right-6 lg:-right-10 bottom-6 sm:bottom-10">
                <div className="bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap text-sm sm:text-base">
                  💻 MERN Developer
                </div>
              </div>

              <div className="hidden sm:block absolute z-20 right-0 sm:-right-0 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2">
                <div className="bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap text-sm sm:text-base">
                  🐍 Python
                </div>
              </div>
            </div>
          </div>
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
        </div>
      </div>
    </section>
  );
};

export default About;

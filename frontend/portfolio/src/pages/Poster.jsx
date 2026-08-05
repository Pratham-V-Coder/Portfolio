import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { motion, useInView } from "framer-motion";
=======
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
import guyImg from "../assets/guy.png";
import resume from "../assets/Pratham.pdf";

const PHRASES = [
  "Software Engineer Aspirant.",
  "MERN Stack Developer.",
  "Web Developer.",
  "Data Analyst.",
];

function useTypewriter() {
  const [text, setText] = useState("");
  const index = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    function tick() {
      const current = PHRASES[index.current];

      if (!deleting.current) {
        charIndex.current++;
        setText(current.slice(0, charIndex.current));

        if (charIndex.current === current.length) {
          deleting.current = true;
          timerRef.current = setTimeout(tick, 1500);
          return;
        }
      } else {
        charIndex.current--;
        setText(current.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          deleting.current = false;
          index.current = (index.current + 1) % PHRASES.length;
        }
      }

      timerRef.current = setTimeout(tick, deleting.current ? 15 : 30);
    }

    timerRef.current = setTimeout(tick, 500);

    return () => clearTimeout(timerRef.current);
  }, []);

  return text;
}

<<<<<<< HEAD
// Left block: slides in from the left, children stagger in after it arrives
const leftVariants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Right block: slides in from the right
const rightVariants = {
  hidden: { opacity: 0, x: 120, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

export default function Poster() {
  const typed = useTypewriter();
  const sectionRef = useRef(null);

  // Buffer margin (same pattern used in the Internship section) so the
  // animation doesn't flip-flop if scroll oscillates right at the edge.
  // No "once" flag on purpose — this should replay every time the
  // section enters view, from either scroll direction.
  const isInView = useInView(sectionRef, {
    amount: 0.35,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16">
        {/* Left Section */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-5"
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ pointerEvents: isInView ? "auto" : "none" }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
          >
            Hi, Myself <span className="text-purple-500">Pratham Verma</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Transforming complex challenges into simple, scalable, and impactful
            software solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="h-8 text-cyan-400 font-mono text-base sm:text-lg"
          >
            {typed}
            <span className="animate-pulse ml-1">|</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >
            {/* Download Resume */}
            <motion.a
              href={resume}
              download="Pratham_Verma_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-purple-500/30"
            >
              Download Resume
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Pratham-V-Coder"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium rounded-lg transition-colors duration-300"
            >
              Visit GitHub
            </motion.a>

            {/* Hire Me */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <div className="flex justify-center flex-1">
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -6 }}
            style={{ pointerEvents: isInView ? "auto" : "none" }}
            className="will-change-transform"
          >
            <motion.img
              src={guyImg}
              alt="Pratham Verma"
              // Fix is here: changed `{}` to `undefined`
              animate={isInView ? { y: [0, -20, 0] } : undefined}
              transition={{
                duration: 3.5, // Slightly decreased duration for faster bobbing
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[280px] sm:w-[340px] lg:w-[420px] h-auto object-contain"
            />
          </motion.div>
=======
export default function Poster() {
  const typed = useTypewriter();

  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Hi, Myself <span className="text-purple-500">Pratham Verma</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Transforming complex challenges into simple, scalable, and impactful
            software solutions.
          </p>

          <div className="h-8 text-cyan-400 font-mono text-base sm:text-lg">
            {typed}
            <span className="animate-pulse ml-1">|</span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            {/* Download Resume */}
            <a
              href={resume}
              download="Pratham_Verma_Resume.pdf"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
            >
              Download Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Pratham-V-Coder"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium rounded-lg transition-all duration-300"
            >
              Visit GitHub
            </a>

            {/* Hire Me */}
            <Link
              to="/contact"
              className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center flex-1">
          <div className="bg-slate-800/20 rounded-3xl p-0 border border-purple-500/20 shadow-2xl">
            <img
              src={guyImg}
              alt="Pratham Verma"
              className="w-[280px] sm:w-[340px] lg:w-[420px] h-auto object-contain"
            />
          </div>
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
        </div>
      </div>
    </section>
  );
}

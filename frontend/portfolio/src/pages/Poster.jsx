import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

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
    const tick = () => {
      const current = PHRASES[index.current];

      if (!deleting.current) {
        charIndex.current += 1;

        setText(current.slice(0, charIndex.current));

        if (charIndex.current === current.length) {
          deleting.current = true;

          timerRef.current = setTimeout(tick, 1500);
          return;
        }
      } else {
        charIndex.current -= 1;

        setText(current.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          deleting.current = false;

          index.current = (index.current + 1) % PHRASES.length;
        }
      }

      timerRef.current = setTimeout(tick, deleting.current ? 15 : 30);
    };

    timerRef.current = setTimeout(tick, 500);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return text;
}

/* Left Section Animation */
const leftVariants = {
  hidden: {
    opacity: 0,
    x: -120,
  },

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

/* Individual Left Section Items */
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* Right Section Animation */
const rightVariants = {
  hidden: {
    opacity: 0,
    x: 120,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

export default function Poster() {
  const typed = useTypewriter();

  const sectionRef = useRef(null);

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
        {/* =========================
            LEFT SECTION
        ========================== */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-5"
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            pointerEvents: isInView ? "auto" : "none",
          }}
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
          >
            Hi, Myself <span className="text-purple-500">Pratham Verma</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Transforming complex challenges into simple, scalable, and impactful
            software solutions.
          </motion.p>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            className="h-8 text-cyan-400 font-mono text-base sm:text-lg"
          >
            {typed}
            <span className="animate-pulse ml-1">|</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >
            {/* Download Resume */}
            <motion.a
              href={resume}
              download="Pratham_Verma_Resume.pdf"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-purple-500/30"
            >
              Download Resume
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Pratham-V-Coder"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium rounded-lg transition-colors duration-300"
            >
              Visit GitHub
            </motion.a>

            {/* Hire Me */}
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
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

        {/* =========================
            RIGHT SECTION
        ========================== */}
        <div className="flex justify-center flex-1">
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              y: -6,
            }}
            style={{
              pointerEvents: isInView ? "auto" : "none",
            }}
            className="will-change-transform bg-slate-800/20 rounded-3xl p-0 border border-purple-500/20 shadow-2xl"
          >
            <motion.img
              src={guyImg}
              alt="Pratham Verma"
              animate={
                isInView
                  ? {
                      y: [0, -20, 0],
                    }
                  : undefined
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[280px] sm:w-[340px] lg:w-[420px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

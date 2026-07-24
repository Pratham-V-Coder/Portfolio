import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
        </div>
      </div>
    </section>
  );
}

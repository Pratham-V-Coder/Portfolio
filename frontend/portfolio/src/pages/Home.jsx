import React from "react";
import Poster from "./Poster.jsx";
import Internship from "./Internship.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";

function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-[#0b0120] to-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Page content sits above the glow */}
      <div className="relative z-10">
        <Poster />
        <Internship />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default Home;

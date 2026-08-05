import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import greencart from "../assets/greencartImg.png";
import jobportal from "../assets/jobPortal.png";
import dashboard from "../assets/dashboard.png";
import zomato from "../assets/zomatoDataAnalysis.png";
import netflix from "../assets/Netflix.png";

const projects = [
  {
    title: "GreenCart E-Commerce Website",
    description:
      "GreenCart is a full-stack MERN e-commerce platform that enables users to browse, purchase, and manage products through a secure and responsive shopping experience.",
    image: greencart,
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Pratham-V-Coder",
  },
  {
    title: "Job Portal",
    description:
      "Developed a full-stack Job Portal using the MERN stack that enables users to search and apply for jobs while allowing recruiters to post and manage job listings. Implemented secure authentication, role-based access control, resume uploads, and a responsive user interface for a seamless experience.",
    image: jobportal,
    tech: ["React.js", "Tailwind", "Node.js", "Express.js", "Mongodb"],
    github: "https://github.com/Pratham-V-Coder",
  },
  {
    title: "Customer Behavior Analysis",
    description:
      "Analyzed customer purchasing behavior using Python, SQL, and Power BI to uncover insights that support data-driven business decisions.",
    image: dashboard,
    tech: ["NumPy", "Pandas", "MatplotLib", "Postgre SQL", "Power BI"],
    github: "https://github.com/Pratham-V-Coder",
  },
  {
    title: "Website Performance Analysis",
    description:
      "This project focuses on identifying trends in customer demographics, product categories, payment methods, seasonal sales, and purchasing habits through interactive visualizations and KPI metrics. It demonstrates practical data analysis and dashboard design skills using real-world retail data.",
    image: dashboard,
    tech: ["Excel", "Power BI"],
    github: "https://github.com/Pratham-V-Coder/Website_Performance_Analysis",
  },
  {
    title: "Zomato-Data-Analysis",
    description:
      "Developed a comprehensive business intelligence dashboard that transformed raw Zomato restaurant data into meaningful visual insights, enabling effective analysis of customer preferences, restaurant performance, pricing trends, and operational factors to support data-driven decision-making.",
    image: zomato,
    tech: ["Excel", "Power BI"],
    github: "https://github.com/Pratham-V-Coder/Website_Performance_Analysis",
  },
  {
    title: "Netflix-Movie-Data-Analysis",
    description:
      "Designed a visually appealing and interactive Power BI dashboard that enables users to explore Netflix content trends, compare Movies and TV Shows, and analyze content distribution across genres, countries, ratings, and release years.",
    image: netflix,
    tech: ["Excel", "Power BI"],
    github: "https://github.com/Pratham-V-Coder/Netflix-Movie-Data-Analysis",
  },
  // add more projects here
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  // Same buffer margin used in the Internship section — prevents the
  // animation from flip-flopping on tiny scroll oscillations
  const isInView = useInView(ref, {
    amount: 0.2,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.96 }
      }
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: isInView ? (index % 3) * 0.1 : 0, // stagger only on entry, not exit
      }}
      style={{ pointerEvents: isInView ? "auto" : "none" }}
      whileHover={{ y: -6 }}
      className="group relative z-0 bg-slate-900/60 border border-slate-700 hover:border-purple-500/50 rounded-2xl overflow-hidden transition-colors duration-300 hover:shadow-lg hover:shadow-purple-600/10 flex flex-col will-change-transform"
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{
                duration: 0.3,
                delay: isInView ? 0.2 + i * 0.05 : 0,
              }}
              className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-5">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 3, color: "#c084fc" }}
            className="flex items-center gap-1.5 text-sm text-slate-300 transition-colors"
          >
            <FaGithub size={16} /> Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { amount: 0.5, once: true });

  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading — relative z-10 keeps it above any card that hasn't
            settled into place yet, same fix as the Internship section */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-center">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
            A few things I've built — from full-stack apps to smaller
            experiments.
          </p>
        </motion.div>

        <div className="relative z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

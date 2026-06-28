import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import greencart from "../assets/greencartImg.png";
import jobportal from "../assets/jobPortal.png";
import dashboard from "../assets/dashboard.png";

const projects = [
  {
    title: "GreenCart E-Commerce Website",
    description:
      "GreenCart is a full-stack MERN e-commerce platform that enables users to browse, purchase, and manage products through a secure and responsive shopping experience.",
    image: greencart, // or import like guyImg
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Pratham-V-Coder",
    // demo: "https://project-one-demo.com",
  },
  {
    title: "Job Portal",
    description:
      "Developed a MERN-based Customer Relationship Management (CRM) system with role-based authentication, ticket management, customer management, and admin dashboard functionalities.",
    image: jobportal,
    tech: ["React.js", "Tailwind", "Node.js", "Express.js", "Mongodb"],
    github: "https://github.com/Pratham-V-Coder",
    // demo: "https://project-two-demo.com",
  },
  {
    title: "Customer Behavior Analysis",
    description:
      "Analyzed customer purchasing behavior using Python, SQL, and Power BI to uncover insights that support data-driven business decisions.",
    image: dashboard,
    tech: ["NumPy", "Pandas", "MatplotLib", "Postgre SQL", "Power BI"],
    github: "https://github.com/Pratham-V-Coder",
    // demo: "https://project-two-demo.com",
  },
  // add more projects here
];

function ProjectCard({ project }) {
  return (
    <div className="group bg-slate-900/60 border border-slate-700 hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/10 flex flex-col">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-purple-400 transition-colors"
          >
            <FaGithub size={16} /> Code
          </a>
          {/* <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-center">
          My <span className="text-purple-500">Projects</span>
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
          A few things I've built — from full-stack apps to smaller experiments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

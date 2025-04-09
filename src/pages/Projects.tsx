import { JSX } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Project } from "../types/Project";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    image: "/assets/portfolio.png",
    link: "https://github.com/yourusername/portfolio"
  }
];

export default function Projects(): JSX.Element {
  useDocumentTitle("Projects");

  return (
    <motion.section
      className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="border rounded p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <div className="mt-2 text-sm text-gray-500">{project.tags.join(", ")}</div>
            <a href={project.link} className="text-blue-500" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

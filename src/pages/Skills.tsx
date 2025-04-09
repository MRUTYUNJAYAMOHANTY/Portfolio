import { JSX } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
  useDocumentTitle("Skills");

  return (
    <motion.section
      className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>React, Angular</li>
        <li>TypeScript, JavaScript, HTML, CSS</li>
        <li>Tailwind CSS, SCSS</li>
        <li>Git, GitHub</li>
      </ul>
    </motion.section>
  );
}

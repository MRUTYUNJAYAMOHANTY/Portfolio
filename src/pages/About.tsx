import { motion } from "framer-motion";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { JSX } from "react";

export default function About(): JSX.Element {
  useDocumentTitle("About");

  return (
    <motion.section
      className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300">
        I’m a frontend developer specializing in modern JavaScript frameworks like React and Angular.
      </p>
    </motion.section>
  );
}
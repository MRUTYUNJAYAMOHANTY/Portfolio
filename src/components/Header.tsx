import { JSX } from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="bg-white dark:bg-gray-900 shadow p-4">
      <nav className="flex justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyPortfolio
        </Link>
        <div className="space-x-4">
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
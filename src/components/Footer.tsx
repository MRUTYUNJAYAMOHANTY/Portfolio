import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 text-center text-sm p-4 text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </footer>
    );
  }
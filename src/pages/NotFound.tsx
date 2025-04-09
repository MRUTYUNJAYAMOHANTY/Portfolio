import { JSX } from "react";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="mb-4">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500">Go back home</Link>
    </div>
  );
}

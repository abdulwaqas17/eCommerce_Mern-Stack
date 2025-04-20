import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-silver-200 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;

// Breadcrumb.jsx
import React from "react";
import { FaHome } from "react-icons/fa";



const Breadcrumb = (props) => {
  return (
    <div className="w-full px-4 py-4">
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex items-center justify-center space-x-2" role="list">
        <li className="flex items-center">
          <a
            href="/"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <FaHome className="w-5 h-5 mr-2 mb-[2px]" />
            Home
          </a>
        </li>
        <li className="text-gray-400">/</li>
        <li>
          <span className="text-gray-700">{props.val}</span>
        </li>
      </ol>
    </nav>
  </div>
  );
};

export default Breadcrumb;

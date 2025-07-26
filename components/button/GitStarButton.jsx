import React from "react";
import { FaGithub } from "react-icons/fa";

const GitStarButton = () => {
  return (
    <button className="relative w-auto px-8 py-4 bg-gray-800 text-white font-semibold text-sm rounded-lg shadow-lg flex items-center gap-2 overflow-hidden transition-all duration-300  hover:bg-gray-700   group cursor-pointer  ease-in-out transform hover:scale-105">
      {/* Shine animation */}
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40 pointer-events-none" />

      {/* GitHub Icon & Text */}
      <div className="flex items-center gap-2 z-10 relative">
        <FaGithub className="w-5 h-5" />
        <span>Star on GitHub</span>
      </div>
    </button>
  );
};

export default GitStarButton;

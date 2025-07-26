import React from "react";
import { FaDiscord } from "react-icons/fa";

const Button = ({ children }) => {
  return (
    <button className="relative inline-flex h-12 active:scale-95 transition-transform duration-500 overflow-hidden rounded-lg p-[1px] focus:outline-none  cursor-pointer transform hover:-translate-y-2">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22c55e_0%,#2dd4bf_100%)]"></span>

      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 relative z-10 hover:bg-slate-900 hover:text-teal-300 transition-colors duration-300">
        <FaDiscord size={20} /> Join Our Discord Server
      </span>
    </button>
  );
};

export default Button;

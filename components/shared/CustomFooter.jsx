import Link from "next/link";
import React from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";

// Social Links Configuration Object
const SOCIAL_LINKS = [
  {
    icon: <FaGithub className="text-white" size={20} />,
    gradient: "from-gray-700 to-gray-900",
    border: "border-gray-600/50",
    link: "https://github.com/abdullahalsuad/dev-crack",
  },
  {
    icon: <FaDiscord className="text-white" size={20} />,
    gradient: "from-indigo-500 to-indigo-700",
    border: "border-indigo-400/50",
    link: "https://discord.gg/Gzht2qKAn8",
  },
];

const CustomFooter = () => {
  return (
    <footer className="w-full py-8 px-4 bg-black text-white border-t-2 border-gray-800">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-[16px] text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Dev Crack × DEV ZeroOne. All rights
          reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg ${item.border} cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;

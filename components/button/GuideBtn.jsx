import { SiGithubactions } from "react-icons/si";

const GuideBtn = () => {
  return (
    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center gap-2 group overflow-hidden">
      {/* Shine animation */}
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40 pointer-events-none" />

      {/* Button Content */}
      <span className="flex items-center gap-2 relative z-10">
        <SiGithubactions size={20} /> Contribution Guide
      </span>
    </button>
  );
};

export default GuideBtn;

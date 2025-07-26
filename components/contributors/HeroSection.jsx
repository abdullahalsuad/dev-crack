import React from "react";

const HeroSection = () => {
  // Define stats data to match the new structure
  const stats = [
    { id: "contributors", value: "6", label: "Total Contributors" },
    { id: "questions", value: "500+", label: "Questions Added" },
    { id: "commits", value: "1,200+", label: "Code Commits" },
    { id: "hours", value: "2,500+", label: "Hours Contributed" },
  ];

  return (
    <section
      className="py-40 px-4"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Gradient Highlight */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
          {" "}
          {/* Added text-white */}
          Meet Our Amazing{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
            Contributors
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          The passionate developers, writers, and engineers who make DevCrack
          the best interview preparation platform for developers worldwide.
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-30">
          {/* Adjusted margin-top */}
          {stats.map(({ id, value, label }) => (
            <div
              key={id}
              className="bg-gray-800/30 backdrop-blur-md border border-teal-800/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-700/90 transition-shadow duration-300 cursor-pointer"
              role="region"
              aria-labelledby={`stat-label-${id}`}
            >
              {/* Conditional rendering for icons based on label, or use generic icons */}
              <div className="text-emerald-400 mb-3 flex justify-center"></div>
              <h3
                id={`stat-label-${id}`}
                className="text-emerald-400 text-4xl font-bold mb-2"
              >
                {value}
              </h3>
              <p className="text-gray-400 text-lg">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

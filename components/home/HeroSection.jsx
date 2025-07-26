import Link from "next/link";
import GitStarButton from "../button/GitStarButton";
import StartLearning from "../button/StartLearning";

// stat card with value and label.

const stats = [
  {
    id: 1,
    value: "500+",
    label: "Questions",
  },
  {
    id: 2,
    value: "8",
    label: "Technologies",
  },
  {
    id: 3,
    value: "100%",
    label: "Free",
  },
  {
    id: 4,
    value: "24/7",
    label: "Available",
  },
];

const HeroSection = () => {
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
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Master Your{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
            Tech Interviews
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Comprehensive collection of interview questions for modern web
          development. From frontend fundamentals to backend mastery.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <Link href="/docs">
            <StartLearning />
          </Link>

          <Link
            href="https://github.com/abdullahalsuad/dev-crack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitStarButton />
          </Link>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-30">
          {stats.map(({ id, value, label }) => (
            <div
              key={id}
              className="bg-gray-800/30 backdrop-blur-md border border-teal-800/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-700/90 transition-shadow duration-300 cursor-pointer"
              role="region"
              aria-labelledby={`stat-label-${id}`}
            >
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

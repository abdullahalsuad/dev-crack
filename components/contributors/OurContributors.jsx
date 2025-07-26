import Link from "next/link";
import React from "react";
import { TbBrandGithub } from "react-icons/tb";

const OurContributors = () => {
  const contributors = [
    {
      id: 1,
      name: "Kawser Kabir",
      title: "Full-Stack Developer",
      description:
        "Expert in server-side development and database optimization for scalable applications.",
      contributions: 203,

      github: "kawsarkabir",
      imageUrl: "https://avatars.githubusercontent.com/u/92666144?v=4",
    },
    {
      id: 2,
      name: "Abdullah AL Suad",
      title: "Programmer",
      description:
        "Specializes in creating beautiful, responsive interfaces and React component architecture.",
      contributions: 127,

      github: "abdullahalsuad",
      imageUrl:
        "https://i.ibb.co/LXh2sMvm/Whats-App-Image-2025-02-24-at-14-52-49-69d17215.jpg",
    },

    // {
    //   id: 3,
    //   name: "David Kim",
    //   title: "Full Stack Developer",
    //   description:
    //     "Bridges frontend and backend development with expertise in modern web frameworks.",
    //   contributions: 89,
    //   joined: "Feb 2024",
    //   github: "@davidkim",
    //   imageUrl: "https://placehold.co/100x100/1a202c/ffffff?text=DK", // Placeholder image
    // },
  ];

  return (
    <section
      className="bg-black text-white py-50 px-4 font-inter"
      style={{
        backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Our Amazing{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
            Contributors
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-16">
          Each contributor brings unique expertise and passion to create the
          best learning experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 flex flex-col items-start text-left
                         hover:-translate-y-2 transition-all duration-300 ease-in-out
                         hover:shadow-green-500/20 hover:shadow-xl
                          hover:border-green-900 cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={contributor.imageUrl}
                    alt={contributor.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
                  />
                  <div className="absolute bottom-0 right-0 bg-teal-600 rounded-full p-1 border-2 border-gray-900">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white hover:text-green-400 transition-colors duration-300">
                    {contributor.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{contributor.title}</p>
                </div>
              </div>

              {/* <p className="text-gray-300 text-base mb-6 flex-grow">
                {contributor.description}
              </p> */}

              <div className="w-full">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400">Contributions</span>
                  <span className="text-white font-medium">
                    {contributor.contributions}
                  </span>
                </div>
              </div>

              <div className="flex items-center mt-6 text-gray-400 hover:text-green-400 transition-colors duration-200 cursor-pointer">
                <Link
                  href={`https://github.com/${contributor.github}`}
                  className="flex items-center justify-center gap-1"
                  target="_blank"
                >
                  <TbBrandGithub />
                  <span className="mr-2">{contributor.github}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurContributors;

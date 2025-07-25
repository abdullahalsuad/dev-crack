import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose } from "react-icons/si";

const DevCrackPage = () => {
  return (
    <div className="min-h-screen bg-[#171717] text-white">
      {/* Hero Section */}
      {/* #0a1410 */}
      <section className="py-40 px-4 bg-gradient-to-r from-[#0a1410] via-teal-950 to-[#0a1410] text-gray-300">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Master Your{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
              Tech Interviews
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Comprehensive collection of interview questions for modern web
            development. From frontend fundamentals to backend mastery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center gap-2">
              <MdOutlineArrowOutward size={20} /> Start Learning
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border border-gray-700 cursor-pointer flex items-center gap-2">
              <FaGithub size={20} /> View on GitHub
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-30">
            {/* question */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-teal-800/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-700/90 transition-shadow duration-300 cursor-pointer">
              <h3 className="text-emerald-400 text-4xl font-bold mb-2">500+</h3>
              <p className="text-gray-400 text-lg">Questions</p>
            </div>

            {/* technologies */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-teal-800/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-700/90 transition-shadow duration-300 cursor-pointer">
              <h3 className="text-emerald-400 text-4xl font-bold mb-2">8</h3>
              <p className="text-gray-400 text-lg">Technologies</p>
            </div>

            {/* free */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-teal-800/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-700/90 transition-shadow duration-300 cursor-pointer">
              <h3 className="text-emerald-400 text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-400 text-lg">Free</p>
            </div>

            {/* Available */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-teal-800/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-teal-700/90 transition-shadow duration-300 cursor-pointer">
              <h3 className="text-emerald-400 text-4xl font-bold mb-2">24/7</h3>
              <p className="text-gray-400 text-lg">Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions by Technology */}
      <section className="py-20 bg-gradient-to-r from-[#0a1410] via-gray-900 to-[#0a1410] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="py-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
              Interview Questions{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                by Technology
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Choose your technology stack and dive deep into curated interview
              questions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "HTML",
                level: "Beginner",
                levelColor: "bg-green-600",
                icon: <FaHtml5 />,
                desc: "Fundamental markup language questions covering semantic HTML, accessibility, and modern standards.",
                questions: 50,
              },
              {
                name: "CSS",
                levelColor: "bg-yellow-500",
                icon: <IoLogoCss3 />,
                desc: "Styling questions including Flexbox, Grid, animations, and responsive design principles.",
                questions: 75,
              },
              {
                name: "React",
                levelColor: "bg-red-600",
                icon: <RiReactjsFill />,
                desc: "Component-based questions covering hooks, state management, lifecycle, and performance optimization.",
                questions: 100,
              },
              {
                name: "Node.js",
                levelColor: "bg-red-600",
                icon: <FaNodeJs />,
                desc: "Server-side JavaScript questions including APIs, middleware, streams, and event-driven architecture.",
                questions: 85,
              },
              {
                name: "Next.js",
                levelColor: "bg-red-600",
                icon: <RiNextjsFill />,
                desc: "Full-stack React framework questions covering SSR, SSG, routing, and performance optimization.",
                questions: 60,
              },
              {
                name: "Express",
                levelColor: "bg-yellow-500",
                icon: <SiExpress />,
                desc: "Web framework questions including routing, middleware, error handling, and RESTful APIs.",
                questions: 70,
              },
              {
                name: "MongoDB",
                levelColor: "bg-yellow-500",
                icon: <SiMongodb />,
                desc: "NoSQL database questions covering queries, indexing, aggregation, and data modeling.",
                questions: 65,
              },
              {
                name: "Mongoose",
                levelColor: "bg-yellow-500",
                icon: <SiMongoose />,
                desc: "ODM questions including schemas, validation, middleware, and population techniques.",
                questions: 45,
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 shadow-md backdrop-blur-md  hover:shadow-teal-700 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{tech.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tech.desc}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-emerald-400 font-semibold">
                    {tech.questions} questions
                  </span>
                  <span className="text-emerald-400">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20  bg-[#111111] text-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-15 text-center shadow-lg backdrop-blur-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              🚀 Join Our{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                Developer Community
              </span>
            </h2>
            <p className="text-gray-400 my-10 mb-8 text-base sm:text-lg leading-relaxed">
              Be part of a growing tech community where we build, share, and
              grow together. <br />
              Whether you're fixing bugs, adding features, or improving docs —
              your contribution drives us forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://discord.gg/Qr7RbnJu" target="_blank">
                <button
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg  transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center gap-2"
                >
                  <FaDiscord size={20} /> Join Our Discord Server
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevCrackPage;

import Link from "next/link";
import React from "react";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose } from "react-icons/si";

// Tech List Extracted
const techList = [
  {
    name: "HTML + CSS ",
    icon: <FaHtml5 />,
    desc: "Fundamental markup language questions covering semantic HTML, accessibility, and modern standards.",
    questions_link: "/docs/html_css/basic",
  },
  {
    name: "JavaScript",
    icon: <FaSquareJs />,
    desc: "JavaScript makes web pages interactive by handling events, animations, and responsiveness dynamically.",
    questions_link: "/docs/javascript/basic",
  },
  {
    name: "React",
    icon: <RiReactjsFill />,
    desc: "Component-based questions covering hooks, state management, lifecycle, and performance optimization.",
    questions_link: "/docs/react/basic",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    desc: "Server-side JavaScript questions including APIs, middleware, streams, and event-driven architecture.",
    questions_link: "/docs/redux/basic",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    desc: "Full-stack React framework questions covering SSR, SSG, routing, and performance optimization.",
    questions_link: "/docs/nextjs/basic",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    desc: "Web framework questions including routing, middleware, error handling, and RESTful APIs.",
    questions_link: "/docs/expressjs/basic",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    desc: "NoSQL database questions covering queries, indexing, aggregation, and data modeling.",
    questions_link: "/docs/mongodb/basic",
  },
  {
    name: "Mongoose",
    icon: <SiMongoose />,
    desc: "ODM questions including schemas, validation, middleware, and population techniques.",
    questions_link: "/docs/mongoose/basic",
  },
];

const QuestionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0a1410] via-gray-900 to-[#0a1410] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Heading */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techList.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 shadow-md backdrop-blur-md hover:shadow-teal-700 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{tech.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{tech.desc}</p>
              <Link href={tech.questions_link}>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-emerald-400 font-semibold">
                    Read Now
                  </span>
                  <span className="text-emerald-400">→</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;

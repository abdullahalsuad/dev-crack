import Link from "next/link";
import Button from "../button/Button";
import { FaUsers, FaCode, FaRocket, FaGithub } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const JoinCommunity = () => {
  const stats = [
    { icon: <FaUsers />, value: "1K+", label: "Active Members" },
    { icon: <FaCode />, value: "50+", label: "Contributors" },
    { icon: <FaRocket />, value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-24 bg-[#000000] text-gray-200 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90 border border-teal-900/30 rounded-3xl p-12 lg:p-16 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-teal-500/20 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-green-500/20 rounded-br-3xl"></div>

          {/* Sparkle Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-400 rounded-full blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-green-500 to-teal-400 p-4 rounded-full">
                <HiSparkles className="text-3xl text-white" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold mb-6 leading-tight">
              Join Our{" "}
              <span className="bg-gradient-to-r from-green-500 via-teal-400 to-green-500 bg-clip-text text-transparent animate-pulse">
                Developer Community
              </span>
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Connect with passionate developers worldwide. Share knowledge,
              collaborate on projects, and accelerate your growth in a
              supportive environment where every contribution matters.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {/* Modern Gradient Border - Subtle */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-green-500/20 rounded-2xl"
                    style={{
                      animation: `borderGlow ${
                        4 + index
                      }s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  ></div>

                  {/* Elegant Moving Border Line */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div
                      className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"
                      style={{
                        animation: `borderSlide ${
                          3 + index * 0.5
                        }s linear infinite`,
                      }}
                    ></div>
                    <div
                      className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-green-400 to-transparent"
                      style={{
                        animation: `borderSlide ${
                          3 + index * 0.5
                        }s linear infinite`,
                        animationDelay: `${1.5 + index * 0.25}s`,
                      }}
                    ></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900/90 transition-all duration-500 hover:transform hover:translateY(-4px) hover:shadow-2xl hover:shadow-teal-500/10">
                    {/* Professional Icon Container */}
                    <div className="relative flex justify-center mb-4">
                      {/* Subtle Glow Behind Icon */}
                      <div
                        className="absolute w-12 h-12 bg-gradient-to-br from-teal-400/30 to-green-400/30 rounded-full blur-2xl"
                        style={{
                          animation: `breathe ${
                            3 + index * 0.3
                          }s ease-in-out infinite`,
                        }}
                      ></div>

                      {/* Icon with Modern Styling */}
                      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl border border-teal-500/20">
                        <div className="text-teal-400 text-2xl transform transition-transform duration-300 group-hover:scale-110">
                          {stat.icon}
                        </div>
                      </div>
                    </div>

                    {/* Clean Value Display */}
                    <div className="relative">
                      <div
                        className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2"
                        style={{
                          animation: `countUp ${2}s ease-out forwards`,
                          animationDelay: `${0.5 + index * 0.2}s`,
                        }}
                      >
                        {stat.value}
                      </div>

                      {/* Subtle Underline */}
                      <div
                        className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent mx-auto w-12"
                        style={{
                          animation: `expandWidth ${2}s ease-out forwards`,
                          animationDelay: `${0.8 + index * 0.2}s`,
                        }}
                      ></div>
                    </div>

                    {/* Clean Label */}
                    <div className="text-sm text-gray-400 mt-2 font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 right-2 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <Link href="https://discord.gg/hECbGhyY5b" target="_blank">
                <Button />
              </Link>

              <Link
                href="https://github.com/abdullahalsuad/dev-crack"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
                <span className="font-medium">View on GitHub</span>
                <span className="text-teal-400">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;

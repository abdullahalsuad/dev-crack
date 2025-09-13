import Link from "next/link";
import GitStarButton from "../button/GitStarButton";
import StartLearning from "../button/StartLearning";
import { 
  HiOutlineQuestionMarkCircle, 
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineClock
} from "react-icons/hi";
import { 
  BiCodeAlt,
  BiRocket,
  BiInfinite
} from "react-icons/bi";
import { 
  FiTarget,
  FiZap,
  FiGift,
  FiActivity
} from "react-icons/fi";

// stat card with value and label.

const stats = [
  {
    id: 1,
    value: "500+",
    label: "Questions",
    icon: <HiOutlineQuestionMarkCircle className="w-6 h-6" />,
    gradient: "from-blue-400 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    description: "Curated from real interviews"
  },
  {
    id: 2,
    value: "8",
    label: "Technologies",
    icon: <BiCodeAlt className="w-6 h-6" />,
    gradient: "from-purple-400 to-pink-400",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    description: "Full-stack coverage"
  },
  {
    id: 3,
    value: "100%",
    label: "Free",
    icon: <FiGift className="w-6 h-6" />,
    gradient: "from-green-400 to-emerald-400",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    description: "Forever free & open-source"
  },
  {
    id: 4,
    value: "24/7",
    label: "Available",
    icon: <BiInfinite className="w-6 h-6" />,
    gradient: "from-orange-400 to-red-400",
    bgGradient: "from-orange-500/10 to-red-500/10",
    description: "Learn at your own pace"
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

        {/* Statistics Grid - Professional Creative Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="relative group"
              style={{
                animation: `fadeInScale 0.6s ease-out forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                perspective: '1000px'
              }}
            >
              {/* Card Container with 3D Hover Effect */}
              <div className="relative transition-transform duration-700 group-hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Glow Effect Behind Card */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-700`}
                ></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-500 overflow-hidden">
                  
                  {/* Premium Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent"></div>
                  
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 rounded-2xl">
                    <div 
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                      style={{
                        background: `linear-gradient(90deg, transparent, ${stat.gradient.includes('blue') ? '#60a5fa' : stat.gradient.includes('purple') ? '#c084fc' : stat.gradient.includes('green') ? '#34d399' : '#fb923c'}, transparent)`,
                        backgroundSize: '200% 100%',
                        animation: 'shimmerBorder 3s linear infinite',
                      }}
                    ></div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="relative p-8">
                    
                    {/* Icon Section */}
                    <div className="flex items-center justify-between mb-6">
                      {/* Icon Box */}
                      <div className="relative">
                        <div className={`p-3 bg-gradient-to-br ${stat.bgGradient} rounded-xl group-hover:scale-110 transition-transform duration-500`}>
                          <div className={`text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                            {stat.icon}
                          </div>
                        </div>
                        
                        {/* Icon Animation Line */}
                        <div 
                          className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                        ></div>
                      </div>
                      
                      {/* Indicator Dot */}
                      <div className="relative">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}>
                          <div className="absolute inset-0 rounded-full bg-white/50 animate-ping"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Value Section */}
                    <div className="mb-4">
                      <h3 className="text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-500 origin-left">
                        {stat.value}
                      </h3>
                      
                      {/* Progress Bar */}
                      <div className="mt-3 h-1 bg-gray-800/50 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: '0%',
                            animation: `progressFill 2s ease-out forwards`,
                            animationDelay: `${0.5 + index * 0.15}s`
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Label & Description */}
                    <div>
                      <p className="text-gray-300 font-medium text-base mb-1">
                        {stat.label}
                      </p>
                      <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {stat.description}
                      </p>
                    </div>
                    
                    {/* Hover Arrow Indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    
                    {/* Corner Accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700`}>
                      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${stat.gradient}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

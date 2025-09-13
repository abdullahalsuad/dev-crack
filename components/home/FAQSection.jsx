"use client";
import React, { useState } from "react";
import {
  HiOutlineQuestionMarkCircle,
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineChevronRight,
} from "react-icons/hi";
import { BiCodeBlock, BiSupport, BiRocket } from "react-icons/bi";
import { FiBook, FiTarget, FiUsers, FiTrendingUp } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = [
    { id: "general", name: "General", icon: <HiOutlineLightBulb />, color: "from-blue-400 to-cyan-400" },
    { id: "learning", name: "Learning Path", icon: <HiOutlineAcademicCap />, color: "from-purple-400 to-pink-400" },
    { id: "technical", name: "Technical", icon: <BiCodeBlock />, color: "from-green-400 to-emerald-400" },
    { id: "community", name: "Community", icon: <FiUsers />, color: "from-orange-400 to-red-400" },
  ];

  const faqs = {
    general: [
      {
        question: "What makes Dev Crack different from other interview prep platforms?",
        answer: "Dev Crack is 100% free, open-source, and community-driven. We focus on real interview questions from actual developer experiences, with detailed explanations and multiple solution approaches. Our content is constantly updated by active developers worldwide.",
        icon: <FiTarget className="w-5 h-5" />,
      },
      {
        question: "Is Dev Crack really free forever?",
        answer: "Yes! Dev Crack is completely free and will always remain free. We believe in democratizing technical education and interview preparation. No hidden fees, no premium tiers - everything is accessible to everyone.",
        icon: <BiRocket className="w-5 h-5" />,
      },
      {
        question: "How often is the content updated?",
        answer: "Our content is updated daily through community contributions. We review and merge pull requests regularly, ensuring you always have access to the latest interview trends and questions from the tech industry.",
        icon: <FiTrendingUp className="w-5 h-5" />,
      },
    ],
    learning: [
      {
        question: "What's the recommended learning path for beginners?",
        answer: "Start with HTML/CSS fundamentals, then progress to JavaScript basics. Once comfortable, move to React for frontend or Node.js for backend. We recommend spending 2-3 weeks on each technology, practicing with our questions daily.",
        icon: <FiBook className="w-5 h-5" />,
      },
      {
        question: "How should I use Dev Crack for interview preparation?",
        answer: "Begin with basic questions in your chosen technology, then progress to intermediate and advanced levels. Practice explaining your solutions out loud, and try to solve each problem multiple ways. Aim for 5-10 questions daily for optimal retention.",
        icon: <HiOutlineAcademicCap className="w-5 h-5" />,
      },
      {
        question: "Can I track my learning progress?",
        answer: "Currently, we encourage self-tracking through note-taking. However, we're working on implementing a progress tracking feature that will help you monitor your learning journey and identify areas for improvement.",
        icon: <FiTarget className="w-5 h-5" />,
      },
    ],
    technical: [
      {
        question: "What technologies are covered in Dev Crack?",
        answer: "We cover HTML/CSS, JavaScript, React, Redux, Next.js, Node.js, Express.js, MongoDB, and Mongoose. Each technology has questions categorized into basic, intermediate, and advanced levels with comprehensive explanations.",
        icon: <BiCodeBlock className="w-5 h-5" />,
      },
      {
        question: "Are code examples provided with answers?",
        answer: "Yes! Every answer includes practical code examples with detailed explanations. We show multiple approaches when applicable, discuss time/space complexity, and highlight best practices and common pitfalls.",
        icon: <HiOutlineLightBulb className="w-5 h-5" />,
      },
      {
        question: "How technical are the advanced questions?",
        answer: "Our advanced questions cover system design, performance optimization, security considerations, and complex problem-solving scenarios that you might encounter in senior developer interviews at top tech companies.",
        icon: <BiRocket className="w-5 h-5" />,
      },
    ],
    community: [
      {
        question: "How can I contribute to Dev Crack?",
        answer: "You can contribute by submitting new questions, improving existing answers, fixing bugs, or enhancing documentation. Simply fork our GitHub repository, make your changes, and submit a pull request. Check our CONTRIBUTING.md for guidelines.",
        icon: <FiUsers className="w-5 h-5" />,
      },
      {
        question: "Is there a community where I can discuss questions?",
        answer: "Yes! Join our Discord server with 1000+ active members. You can discuss questions, share interview experiences, participate in mock interviews, and get help from experienced developers worldwide.",
        icon: <BiSupport className="w-5 h-5" />,
      },
      {
        question: "Can I request specific topics or questions?",
        answer: "Absolutely! Open an issue on our GitHub repository or discuss it in our Discord community. We actively consider community requests and prioritize topics based on demand and relevance to current interview trends.",
        icon: <HiOutlineQuestionMarkCircle className="w-5 h-5" />,
      },
    ],
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full mb-4 backdrop-blur-sm border border-teal-500/20">
            <HiOutlineQuestionMarkCircle className="w-5 h-5 text-teal-400 mr-2" />
            <span className="text-sm font-bold text-teal-400 uppercase tracking-wider">Frequently Asked</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Got Questions?</span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Everything you need to know about Dev Crack and your journey to interview success
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveIndex(null);
              }}
              className={`relative group px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg shadow-teal-500/20'
                  : 'bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Active Indicator */}
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-white/10 rounded-xl animate-pulse"></div>
              )}
              
              <div className="relative flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                {activeCategory === category.id && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {faqs[category.id].length}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs[activeCategory].map((faq, index) => (
            <div
              key={index}
              className="group"
              style={{
                animation: `fadeInUp 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  categories.find(c => c.id === activeCategory)?.color
                } rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                
                {/* Accordion Item */}
                <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden hover:border-gray-700/50 transition-all duration-300">
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Icon Container */}
                      <div className={`p-3 bg-gradient-to-br ${
                        categories.find(c => c.id === activeCategory)?.color
                      } rounded-xl opacity-80`}>
                        <div className="text-white">
                          {faq.icon}
                        </div>
                      </div>
                      
                      {/* Question Text */}
                      <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Toggle Icon */}
                    <div className={`ml-4 p-2 rounded-lg bg-gray-800/50 transition-all duration-300 ${
                      activeIndex === index ? 'rotate-180 bg-teal-500/10' : ''
                    }`}>
                      {activeIndex === index ? (
                        <HiOutlineMinus className="w-5 h-5 text-teal-400" />
                      ) : (
                        <HiOutlinePlus className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {/* Answer Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <div className="px-8 pb-6">
                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
                      
                      {/* Answer Text */}
                      <p className="text-gray-300 leading-relaxed pl-16">
                        {faq.answer}
                      </p>
                      
                      {/* Action Link */}
                      <div className="mt-4 pl-16">
                        <a href="#" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Learn more</span>
                          <HiOutlineChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/abdullahalsuad/dev-crack/issues"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-teal-500/50 hover:bg-gray-900/70 transition-all duration-300"
            >
              <BiSupport className="text-xl text-teal-400" />
              <span className="text-white font-medium">Contact Support</span>
            </a>
            <a
              href="https://discord.gg/hECbGhyY5b"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
            >
              <FiUsers className="text-xl" />
              <span>Join Community</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
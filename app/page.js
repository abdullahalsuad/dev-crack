import React from "react";

const DevCrackPage = () => {
  return (
    <div className="min-h-screen bg-[#171717] text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-900 text-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Master Your{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-700 bg-clip-text text-transparent">
              Tech Interviews
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Comprehensive collection of interview questions for modern web
            development. From frontend fundamentals to backend mastery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Start Learning
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border border-gray-700">
              View Questions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-xl">
              <h3 className="text-emerald-400 text-4xl font-bold mb-2">500+</h3>
              <p className="text-gray-400 text-lg">Questions</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-xl">
              <h3 className="text-emerald-400 text-4xl font-bold mb-2">8</h3>
              <p className="text-gray-400 text-lg">Technologies</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-xl">
              <h3 className="text-emerald-400 text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-400 text-lg">Free</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-xl">
              <h3 className="text-emerald-400 text-4xl font-bold mb-2">24/7</h3>
              <p className="text-gray-400 text-lg">Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-500">1000+</div>
            <div className="text-gray-400">Questions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">50+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">10K+</div>
            <div className="text-gray-400">Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Questions by Technology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Interview Questions by Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "JavaScript", questions: 120, color: "bg-yellow-500" },
              { name: "React", questions: 95, color: "bg-blue-500" },
              { name: "Node.js", questions: 80, color: "bg-green-500" },
              { name: "Python", questions: 110, color: "bg-blue-400" },
              { name: "Java", questions: 130, color: "bg-red-500" },
              { name: "SQL", questions: 75, color: "bg-purple-500" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <span className="font-bold">{tech.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Comprehensive question bank with solutions
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-500 font-bold">
                    {tech.questions} Questions
                  </span>
                  <button className="text-amber-500 hover:text-amber-400">
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DevCrack */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose DevCrack?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Interview Questions",
                desc: "Practice with actual questions asked in real interviews",
                icon: "🔍",
              },
              {
                title: "Detailed Solutions",
                desc: "Step-by-step explanations for every problem",
                icon: "📝",
              },
              {
                title: "Progress Tracking",
                desc: "Monitor your improvement over time",
                icon: "📊",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ace Your Interview?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have improved their skills with
            DevCrack
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg">
            Start Practicing Now
          </button>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default DevCrackPage;

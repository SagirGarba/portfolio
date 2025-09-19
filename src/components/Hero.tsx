"use client";

import Image from "next/image";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              I build <span className="text-blue-600">problem-solving</span>{" "}
              interfaces with React & Next.js
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Frontend Engineer specializing in modern JavaScript, TypeScript,
              React, and Next.js. I create solutions that solve real problems
              and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover-lift focus-ring"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover-lift focus-ring"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Portrait/Illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover-lift transition-transform duration-300">
                {/* Portrait Image */}
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/sagir2.jpg"
                    alt="Sagir Garba - Frontend Engineer"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce hover-lift">
                <span className="text-white text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse hover-lift">
                <span className="text-white text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-blue-600 transition-colors focus-ring rounded-full p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

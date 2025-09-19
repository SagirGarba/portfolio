"use client";

import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "TypeScript", level: 85, icon: "🔷" },
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "Redux", level: 80, icon: "🔄" },
    { name: "Tailwind CSS", level: 88, icon: "🎨" },
    { name: "Git", level: 85, icon: "📚" },
    { name: "API Integration", level: 90, icon: "🔗" },
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      level: 95,
      description: "Analytical thinking and creative solutions",
    },
    {
      name: "Communication",
      level: 90,
      description: "Clear articulation of technical concepts",
    },
    {
      name: "Teamwork",
      level: 92,
      description: "Collaborative development environment",
    },
    {
      name: "Time Management",
      level: 88,
      description: "Efficient project delivery",
    },
    {
      name: "Adaptability",
      level: 85,
      description: "Quick learning in dynamic environments",
    },
    {
      name: "Leadership",
      level: 80,
      description: "Mentoring and guiding new team members",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and
            user-centric applications
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-700 p-1 rounded-lg shadow-md">
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === "technical"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === "soft"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Technical Skills */}
        {activeTab === "technical" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-blue-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Skills Showcase */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Redux",
              "Tailwind CSS",
              "Git",

              "REST APIs",
              "GraphQL",
              "Node.js",
              "Express",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

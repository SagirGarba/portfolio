const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Frontend Developer with extensive experience in
                the React ecosystem. I specialize in creating modern,
                responsive, and user-friendly web applications that not only
                look great but also solve real-world problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Unique Value
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I don't just code interfaces—I create solutions that solve real
                problems. My approach combines technical expertise with a deep
                understanding of user needs, resulting in applications that are
                both functional and delightful to use.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                What Drives Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                What started as curiosity about how websites work has evolved
                into a passion for crafting digital experiences that make a
                difference. I love the challenge of turning complex problems
                into simple, elegant solutions that users love to interact with.
              </p>
            </div>
          </div>

          {/* Skills & Values Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Key Strengths
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "🤝",
                    title: "Teamwork",
                    desc: "Collaborate effectively with cross-functional teams",
                  },
                  {
                    icon: "💬",
                    title: "Communication",
                    desc: "Clear and concise communication with stakeholders",
                  },
                  {
                    icon: "⏰",
                    title: "Time Management",
                    desc: "Deliver projects on time with high quality",
                  },
                  {
                    icon: "🎯",
                    title: "Problem Solving",
                    desc: "Analytical thinking and creative solutions",
                  },
                  {
                    icon: "🔧",
                    title: "Adaptability",
                    desc: "Quick learner in fast-paced environments",
                  },
                  {
                    icon: "🎨",
                    title: "Creativity",
                    desc: "Innovative approaches to design challenges",
                  },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Collaboration & Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I excel at working with backend developers, using Git for
                version control, and integrating APIs seamlessly into frontend
                applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "API Integration",
                  "Agile/Scrum",
                  "Code Reviews",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

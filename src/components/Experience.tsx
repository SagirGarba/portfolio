const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "Neonwave",
      period: "March, 2025 - Present",
      location: "Remote",
      description:
        "Leading frontend development for enterprise-level applications, mentoring junior developers, and collaborating with cross-functional teams.",
      achievements: [
        "Improved application performance by 40% through code optimization and lazy loading",
        "Led a team of 4 developers in delivering a complex dashboard under tight deadline",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted technical interviews",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Redux", "RESTful APIs"],
      current: true,
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "Zarttech",
      period: "July 2024 - March 2025",
      location: "Remote",
      description:
        "Developed responsive web applications and collaborated with backend teams to integrate RESTful APIs and GraphQL endpoints.",
      achievements: [
        "Built donor management dashboard serving 10,000+ active users",
        "Reduced bug reports by 35% through comprehensive testing strategies",
        "Implemented responsive design patterns increasing mobile traffic by 25%",
        "Collaborated with UX team to improve user satisfaction scores by 20%",
      ],
      technologies: ["React", "Typescript", "JavaScript"],
      current: false,
    },
    {
      id: 3,
      title: "Junior Frontend Engineer",
      company: "RahaPay",
      period: "January 2024 - June 2024",
      location: "Remote",
      description:
        "Contributed to the development of Fintech web applications and learned modern frontend development practices.",
      achievements: [
        "Developed Fintech platform handling 2M+ in annual transactions",

        "Created reusable component library adopted across 5+ projects",
        "Participated in agile development process and daily stand-ups",
      ],
      technologies: ["JavaScript", "React", "Tailwind", "Git"],
      current: false,
    },
    {
      id: 4,
      title: "Technical Officer",
      company: "Tati Technology",
      period: "May 2021 - December 2023",
      location: "Yola, Nigeria",
      description:
        "Managed and oversaw all technical operations, ensuring the company’s website remains fully functional and optimized",
      achievements: [
        "Built responsive landing pages for client campaigns",
        "Learned version control with Git and collaborative development",
        "Contributed to WordPress theme customization and plugin development",
        "Gained experience with SEO optimization and web performance",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      current: false,
    },
    {
      id: 5,
      title: "Web Development Intern",
      company: "Bitpoint inc",
      period: "January 2020 - April 2021",
      location: "Yola, Nigeria",
      description:
        "Assisted in web development projects and gained hands-on experience with modern web technologies.",
      achievements: [
        "Built responsive landing pages for client campaigns",
        "Learned version control with Git and collaborative development",
        "Contributed to WordPress theme customization and plugin development",
        "Gained experience with SEO optimization and web performance",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in frontend development, highlighting achievements and
            continuous growth
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-left"
                      : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div
                        className={`mt-2 md:mt-0 ${
                          index % 2 === 0 ? "md:text-left" : "md:text-right"
                        }`}
                      >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.period}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className={`text-sm text-gray-600 dark:text-gray-300 flex items-start ${
                              index % 2 === 0
                                ? "md:justify-start"
                                : "md:justify-start"
                            }`}
                          >
                            <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                              •
                            </span>
                            <span
                              className={`${
                                index % 2 === 0
                                  ? "md:text-left"
                                  : "md:text-left"
                              }`}
                            >
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies:
                      </h4>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          index % 2 === 0
                            ? "md:justify-start"
                            : "md:justify-start"
                        }`}
                      >
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {exp.current && (
                      <div className="mt-4">
                        <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                          Current Position
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Professional Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-600 dark:text-gray-300">
                Years of Experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600 dark:text-gray-300">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-600 dark:text-gray-300">
                Technologies Mastered
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about creating exceptional user experiences and
              continuously learning new technologies to stay at the forefront of
              frontend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

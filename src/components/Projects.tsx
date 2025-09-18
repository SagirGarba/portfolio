const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Donor Dashboard & Super Admin",
      tagline: "Comprehensive management platform for donor relations",
      description:
        "Built a full-featured dashboard for managing donor relationships, including real-time analytics, donor tracking, and administrative controls. Features include data visualization, automated reporting, and secure user management.",
      image: "/api/placeholder/600/400", // Placeholder for screenshot
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "Prisma",
      ],
      role: "Lead Frontend Developer - Built donor dashboard & super admin interface",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      tagline: "Modern shopping experience with advanced features",
      description:
        "Developed a responsive e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Includes admin panel for inventory management and order processing.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      role: "Full-Stack Developer - End-to-end development and deployment",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      tagline: "Collaborative project management tool",
      description:
        "Created a real-time task management application with team collaboration features, drag-and-drop functionality, and progress tracking. Includes notifications and file sharing capabilities.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Firebase",
        "Material-UI",
        "React DnD",
        "Socket.io",
      ],
      role: "Frontend Developer - UI/UX design and implementation",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Weather Analytics Dashboard",
      tagline: "Interactive weather data visualization",
      description:
        "Built a comprehensive weather dashboard with interactive maps, historical data analysis, and predictive modeling. Features real-time weather updates and customizable alerts.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js", "SCSS"],
      role: "Frontend Developer - Data visualization and API integration",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      tagline: "Personal branding and project showcase",
      description:
        "Designed and developed a responsive portfolio website with modern animations, optimized performance, and SEO best practices. Includes blog functionality and contact forms.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "MDX",
      ],
      role: "Full-Stack Developer - Complete website development",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      tagline: "Comprehensive social media performance tracking",
      description:
        "Developed a dashboard for tracking social media engagement across multiple platforms. Includes automated reporting, competitor analysis, and growth recommendations.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Plotly",
        "Docker",
      ],
      role: "Frontend Developer - Dashboard design and data visualization",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work, from team collaborations to independent
            projects that solve real problems
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Highlight Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <p className="text-sm opacity-90">Project Screenshot</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-blue-600 font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        My Role:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {project.role}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Technologies:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-center py-2 px-4 rounded-lg font-medium transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-1">💻</div>
                      <p className="text-xs opacity-90">Project Preview</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-blue-600 text-sm font-medium mb-2">
                      {project.tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-1.5 px-3 rounded text-sm font-medium transition-colors"
                      >
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-center py-1.5 px-3 rounded text-sm font-medium transition-colors"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

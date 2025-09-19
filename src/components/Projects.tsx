import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Super Admin 4 Convexity Humanitarian Aid System",
      tagline:
        "Enterprise-Grade Administrative Control Center for Social Impact Platform",
      description:
        "Developed a comprehensive super-admin dashboard for managing a complete social impact and donation platform, featuring multi-tenant project management, real-time financial analytics, user lifecycle management, and secure administrative controls. ",

      image: "/SuparAdmin.png", // Super Admin Dashboard Screenshot
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Redux",
        "RESTful APIs",
      ],
      role: "Lead Frontend Engineer - Built donor dashboard & super admin interface",
      liveUrl: "https://su.cchats.live/dashboard",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Donor Dashboard 4 Convexity Humanitarian Aid System",
      tagline: "Comprehensive donor management platform for charitable giving",
      description:
        "Developed a full-featured donor dashboard for managing charitable organizations (donees), their projects, and donation workflows. Includes detailed project listings with filtering, donee profiles with contact and location information, real-time project status tracking, and interactive donation actions. Features include advanced search functionality, responsive data tables, organization summaries, and seamless navigation between donor and project views.",
      image: "/Donor.png", // Donor Dashboard Screenshot
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "React Query", // Inferred from custom hooks like useGetDoneeProjects
      ],
      role: "Lead Front end Engineer - End-to-end development and deployment",
      liveUrl: "#https://auth.cchats.live/",
      githubUrl: "#",
      featured: true,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
                    {project.image && !project.image.includes("placeholder") ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority={project.id <= 2}
                      />
                    ) : (
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">🚀</div>
                        <p className="text-sm opacity-90">Project Screenshot</p>
                      </div>
                    )}
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

                    <div className="flex justify-center mt-6">
                      <a
                        href={project.liveUrl}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-6 rounded-lg font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together? Let&apos;s discuss your next
            project.
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

import { FaGithub, FaExternalLinkAlt, FaLaravel, FaReact, FaDatabase } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Job Portal Web Application",
      description: "A comprehensive job platform with advanced search, filtering, and application management features. Built with Laravel backend and modern frontend technologies.",
      image: "/Images/projects/job-portal.jpg",
      github: "https://github.com/merhawi29/Jobportal",
      live: "#",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      icons: [FaLaravel, FaDatabase]
    },
    {
      title: "WeGive – Online Donation Platform",
      description: "A secure donation management system with payment integration, donor tracking, and campaign management. Features real-time analytics and reporting.",
      image: "/Images/projects/wegive.jpg",
      github: "https://github.com/merhawi29/wigive",
      live: "#",
      technologies: ["Laravel", "MySQL", "Stripe API", "Vue.js"],
      icons: [FaLaravel, FaDatabase]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and mobile-first design.",
      image: "/Images/projects/portfolio.jpg",
      github: "https://github.com/merhawi29/portfolio",
      live: "#",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icons: [FaReact, FaDatabase]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a gradient background if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                          ${project.title.split(' ')[0]}
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <FaGithub className="text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href={project.live}
            target="_blank"
            rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tech Icons */}
                <div className="flex space-x-3">
                  {project.icons.map((Icon, iconIndex) => (
                    <Icon
                      key={iconIndex}
                      className="text-2xl text-gray-400 dark:text-gray-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/merhawi29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <FaGithub className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
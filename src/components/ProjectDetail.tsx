import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import type { Project } from "../data/projects";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 glass rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
        >
          <FaTimes />
        </button>

        {/* Project Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-64 md:h-80 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                    ${project.title.split(" ")[0]}
                  </div>
                `;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title and Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <div className="flex space-x-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 glass rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              >
                <FaGithub className="mr-2" />
                Source Code
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg text-sm font-medium text-white transition-all duration-200"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Full Description */}
          <p className="text-gray-400 leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start text-sm text-gray-400"
                >
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Technical Highlights
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start text-sm text-gray-400"
                >
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Demo Notice */}
          {project.live !== "#" && (
            <div className="p-4 glass rounded-xl border border-cyan-500/20">
              <p className="text-sm text-cyan-300">
                <strong>You can see a live demo here:</strong>{" "}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-cyan-200"
                >
                  {project.live}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

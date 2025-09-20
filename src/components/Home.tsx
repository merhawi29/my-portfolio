import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image without Animation */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            <img
              src="/Images/meraphoto.jpg"
              alt="Merhawi Nguse"
              className="w-44 h-44 mx-auto rounded-full shadow-2xl relative z-10 border-4 border-white dark:border-gray-800 object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Merhawi Nguse
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400 font-semibold animate-slide-up">
            Full-Stack Developer
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Experienced Full-Stack Developer with expertise in building scalable web applications using cutting-edge technologies. 
            Proficient in Laravel, React, TypeScript, and modern database solutions.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {['Laravel', 'React', 'MySQL', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12 animate-slide-up" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com/merhawi29"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/merhawi-nguse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:merahwinguse29@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
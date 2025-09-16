import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Merhawi Nguse</h3>
            <p className="text-gray-300 mb-4">
              Full-Stack Developer passionate about creating beautiful, functional web applications.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/merhawi29"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-full transition-colors duration-200"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/merhawi-nguse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-full transition-colors duration-200"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:merhawi@example.com"
                className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-full transition-colors duration-200"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 merhawi@example.com</p>
              <p>🌍 Available for remote work</p>
              <p>💼 Open to new opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Merhawi Nguse. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080c16] border-t border-white/5 text-white py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">Merhawi Nguse</h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer passionate about creating beautiful, functional web applications.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/merhawi29"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass hover:border-cyan-500/30 hover:text-cyan-400 rounded-full transition-all duration-200 text-gray-400"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/merhawi-nguse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass hover:border-cyan-500/30 hover:text-cyan-400 rounded-full transition-all duration-200 text-gray-400"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:merhawinguse29@gmail.com"
                className="p-2 glass hover:border-cyan-500/30 hover:text-cyan-400 rounded-full transition-all duration-200 text-gray-400"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>merhawinguse29@gmail.com</p>
              <p>0992613985 / 0714613985</p>
              <p>Available for remote work</p>
              <p>Open to new opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Merhawi Nguse. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              Made with <FaHeart className="text-cyan-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

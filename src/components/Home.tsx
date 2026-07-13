import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const typewriterTexts = [
  "Full-Stack Developer",
  "AI Automation Enthusiast",
  "Laravel & React Expert",
  "Workflow Builder"
];

function useTypewriter(texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

export default function Home() {
  const typedText = useTypewriter(typewriterTexts);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="relative mb-10">
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-pulse-glow"></div>
            <div className="absolute inset-1 bg-[#0a0e1a] rounded-full"></div>
            <img
              src="/Images/meraphoto.jpg"
              alt="Merhawi Nguse"
              className="w-44 h-44 mx-auto rounded-full shadow-2xl relative z-10 border-2 border-cyan-500/30 object-cover"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#0a0e1a] animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            <span className="gradient-text">
              Merhawi Nguse
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold animate-slide-up min-h-[2.5rem]">
            {typedText}
            <span className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            I&apos;m a Full-Stack Developer passionate about building modern web applications and AI-powered automation solutions. 
            Skilled in Laravel, React, Next.js, TypeScript, MySQL, n8n, and REST APIs, I enjoy creating scalable applications, 
            automating workflows, and solving real-world problems.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {['Laravel', 'React', 'Next.js', 'TypeScript', 'MySQL', 'n8n', 'REST APIs'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-cyan-300 hover:text-cyan-200 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
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
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-5 mt-12 animate-slide-up" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com/merhawi29"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/merhawi-nguse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:merahwinguse29@gmail.com"
              className="p-3 glass rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

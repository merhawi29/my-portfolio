import { useState, useEffect } from "react";
import { 
  FaReact, 
  FaLaravel, 
  FaDatabase, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaAws,
  FaBootstrap
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiFigma } from "react-icons/si";

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  const skills = [
    { name: "Laravel", icon: FaLaravel, color: "text-red-500", level: 90 },
    { name: "React", icon: FaReact, color: "text-blue-500", level: 85 },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", level: 80 },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500", level: 85 },
    { name: "MySQL", icon: FaDatabase, color: "text-orange-500", level: 80 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700", level: 75 },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-600", level: 90 },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", level: 85 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", level: 85 },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500", level: 80 },
    { name: "Figma", icon: SiFigma, color: "text-pink-500", level: 80 },
    { name: "Git", icon: FaGitAlt, color: "text-red-600", level: 85 },
    { name: "AWS", icon: FaAws, color: "text-orange-500", level: 65 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skills.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-indigo-600 dark:text-indigo-400">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isVisible = visibleSkills.includes(index);
            
            return (
              <div
                key={skill.name}
                className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <IconComponent 
                      className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1 + 0.5}s`
                      }}
                    ></div>
                  </div>
                  
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </section>
  );
}
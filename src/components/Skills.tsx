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
  FaBootstrap,
  FaNodeJs
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiFigma, SiNextdotjs, SiN8N } from "react-icons/si";
import { useTypewriter } from "../hooks/useTypewriter";

const skillsTexts = [
  "Here are the technologies and tools I work with to bring ideas to life",
  "My toolkit for building modern, scalable applications",
  "Technologies that power my creative workflow"
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const typedSkillsText = useTypewriter(skillsTexts, 60, 30, 3000);

  const skills = [
    { name: "Laravel", icon: FaLaravel, color: "text-red-400", level: 100 },
    { name: "React", icon: FaReact, color: "text-cyan-400", level: 100 },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", level: 95 },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-400", level: 80 },
    { name: "AI Automation", icon: SiN8N, color: "text-purple-400", level: 90 },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", level: 90 },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400", level: 95 },
    { name: "MySQL", icon: FaDatabase, color: "text-orange-400", level: 100 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300", level: 85 },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-400", level: 100 },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400", level: 80 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", level: 90 },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-400", level: 100 },
    { name: "Figma", icon: SiFigma, color: "text-pink-400", level: 100 },
    { name: "Git", icon: FaGitAlt, color: "text-red-400", level: 85 },
    { name: "AWS", icon: FaAws, color: "text-orange-400", level: 75 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skills.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto min-h-[1.5rem]">
            {typedSkillsText}
            <span className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isVisible = visibleSkills.includes(index);
            
            return (
              <div
                key={skill.name}
                className={`group glass-card rounded-2xl p-6 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <IconComponent 
                      className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2 overflow-hidden">
                    <div 
                      className="h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.08 + 0.5}s`
                      }}
                    ></div>
                  </div>
                  
                  <span className="text-xs text-gray-500">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/5 rounded-full animate-float border border-cyan-500/10"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/5 rounded-full animate-float border border-purple-500/10" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500/5 rounded-full animate-float border border-blue-500/10" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </section>
  );
}

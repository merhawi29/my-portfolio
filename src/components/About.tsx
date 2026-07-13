import { FaCode, FaGraduationCap, FaMapMarkerAlt, FaRocket } from "react-icons/fa";
import { useTypewriter } from "../hooks/useTypewriter";

const aboutTexts = [
  "Get to know more about my journey, passion, and what drives me as a developer",
  "Discover my story, my skills, and what makes me tick",
  "From Mek'ele to the world — building the future, one line at a time"
];

export default function About() {
  const typedAboutText = useTypewriter(aboutTexts, 60, 30, 3000);

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto min-h-[1.5rem]">
            {typedAboutText}
            <span className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl rotate-6 opacity-60"></div>
              <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
                <img
                  src="/Images/mera.jpg"
                  alt="Merhawi Nguse"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full animate-float border border-cyan-500/20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full animate-float border border-purple-500/20" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Full-Stack Developer & Problem Solver
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                I am a passionate Full-Stack Developer from <strong className="text-cyan-400">Mek'ele, Ethiopia</strong> with
                a dual academic background in Information Systems and Management. I specialize in creating
                user-focused web applications that combine clean code with meaningful impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <FaCode className="text-2xl text-cyan-400" />
                  <div>
                    <h4 className="font-semibold text-white">3+ Years</h4>
                    <p className="text-sm text-gray-400">Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <FaRocket className="text-2xl text-purple-400" />
                  <div>
                    <h4 className="font-semibold text-white">20+ Projects</h4>
                    <p className="text-sm text-gray-400">Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="glass-card rounded-xl p-6">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <FaGraduationCap className="text-cyan-400 mr-2" />
                Technical Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'React', 'MySQL', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 text-gray-400">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Based in Mek'ele, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

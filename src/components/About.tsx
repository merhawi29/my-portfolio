import { FaCode, FaGraduationCap, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl rotate-6"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/Images/mera.jpg"
                  alt="Merhawi Nguse"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-500 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Full-Stack Developer & Problem Solver
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a passionate Full-Stack Developer from <strong className="text-indigo-600 dark:text-indigo-400">Mek'ele, Ethiopia</strong> with
                a dual academic background in Information Systems and Management. I specialize in creating
                user-focused web applications that combine clean code with meaningful impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <FaCode className="text-2xl text-indigo-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">3+ Years</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <FaRocket className="text-2xl text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">20+ Projects</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FaGraduationCap className="text-indigo-600 mr-2" />
                Technical Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'React', 'MySQL', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
              <FaMapMarkerAlt className="text-indigo-600" />
              <span>Based in Mek'ele, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
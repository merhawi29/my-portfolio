import { useState, useEffect } from "react";
import { z } from "zod";
import { sendContactEmail } from "../lib/email";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message is too short'),
});

const contactTypewriterTexts = [
  "Have a project in mind?",
  "Want to collaborate?",
  "Need a developer?",
  "Let's build something amazing!"
];

function useContactTypewriter(texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
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

export default function Contact() {
  const typedContactText = useContactTypewriter(contactTypewriterTexts);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const parsed = formSchema.safeParse(formData);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Invalid form');
      return;
    }
    try {
      setIsSubmitting(true);
      await sendContactEmail(parsed.data);
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (err?.text) {
        errorMessage = err.text;
      } else if (err?.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto min-h-[1.5rem]">
            {typedContactText}
            <span className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  <FaEnvelope className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400 text-sm">merahwinguse29@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  <FaMapMarkerAlt className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400 text-sm">Mek'ele, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  <FaPhone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400 text-sm">0992613985 / 0714613985</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
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

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}
              {success && (
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  {success}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 bg-transparent text-white placeholder-gray-500 outline-none transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 bg-transparent text-white placeholder-gray-500 outline-none transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 bg-transparent text-white placeholder-gray-500 outline-none resize-none transition-all duration-200"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

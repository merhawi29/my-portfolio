import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0a0e1a] text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
        {/* Background Gradient Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
        </div>
        <Navbar />
        <main className="pt-20 relative z-10">
          <Home />
          <div className="section-divider max-w-4xl mx-auto" />
          <About />
          <div className="section-divider max-w-4xl mx-auto" />
          <Skills />
          <div className="section-divider max-w-4xl mx-auto" />
          <Projects />
          <div className="section-divider max-w-4xl mx-auto" />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

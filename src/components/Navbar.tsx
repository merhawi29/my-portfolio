import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, resetTheme } = useTheme();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full glass shadow-lg shadow-black/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold gradient-text">Merhawi Nguse</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-400 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg glass text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          {/* Debug: Reset button (double-click to reset) */}
          <button
            onDoubleClick={(e) => {
              e.preventDefault();
              resetTheme();
              alert('Theme reset to light mode!');
            }}
            className="hidden p-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            title="Double-click to reset theme"
            style={{ fontSize: '10px' }}
          >
            Reset
          </button>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass shadow-lg shadow-black/20">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-400 font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={() => setMenuOpen(false)} 
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

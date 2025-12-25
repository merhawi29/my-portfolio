import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get saved theme or default to light
    try {
      const savedTheme = localStorage.getItem('theme');
      const initialTheme = (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'light';
      
      // Apply theme immediately to prevent flash
      const html = document.documentElement;
      if (initialTheme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      
      return initialTheme as Theme;
    } catch (error) {
      // If localStorage fails, default to light
      const html = document.documentElement;
      html.classList.remove('dark');
      return 'light';
    }
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme class to HTML element
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      // Apply immediately for instant feedback
      const html = document.documentElement;
      
      // Force remove first, then add to ensure it works
      html.classList.remove('dark');
      if (newTheme === 'dark') {
        html.classList.add('dark');
      }
      
      // Debug: Log to console
      console.log('Theme toggled to:', newTheme);
      console.log('HTML classes:', html.classList.toString());
      console.log('Has dark class?', html.classList.contains('dark'));
      
      try {
        localStorage.setItem('theme', newTheme);
      } catch (error) {
        console.error('Failed to save theme to localStorage:', error);
      }
      return newTheme;
    });
  };

  const resetTheme = () => {
    // Force reset to light mode
    const html = document.documentElement;
    html.classList.remove('dark');
    setTheme('light');
    try {
      localStorage.setItem('theme', 'light');
      localStorage.removeItem('theme'); // Clear it completely
    } catch (error) {
      console.error('Failed to reset theme:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, resetTheme }}>
      {children}  
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

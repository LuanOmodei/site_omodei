import { FC, useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all z-50"
      aria-label="Toggle theme"
      style={{ boxShadow: '0 4px 20px rgba(52, 144, 220, 0.5)' }}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
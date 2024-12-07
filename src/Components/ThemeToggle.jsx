// src/components/ThemeToggle.js

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing icons from react-icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Check saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme("light"); // Default theme is light
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-800 text-white rounded flex items-center justify-center"
    >
      {/* Conditionally render the icon based on the current theme */}
      {theme === "light" ? (
        <FaMoon className="text-xl" /> // Moon icon for dark mode
      ) : (
        <FaSun className="text-xl" /> // Sun icon for light mode
      )}
    </button>
  );
};

export default ThemeToggle;

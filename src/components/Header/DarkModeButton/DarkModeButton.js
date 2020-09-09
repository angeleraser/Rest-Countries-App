import React from "react";
import "./css/DarkModeButton.css";
import { moonIcon, sunIcon } from "../../../svg-icons";
import { useState } from "react";
const DarkModeButton = () => {
  const [darkMode, setdarkMode] = useState(false);
  const toggleTheme = () => {
    document.querySelector(".app-wrapper").classList.toggle("dark");
    setdarkMode(!darkMode);
  };
  return (
    <button
      onClick={toggleTheme}
      className={`dark-mode-toggle flex items-center ${
        darkMode ? "active" : ""
      }`}
      aria-label="Dark mode toggle button">
      {!darkMode ? "Dark Mode" : "Light Mode"}
      {!darkMode ? moonIcon : sunIcon}
    </button>
  );
};

export default DarkModeButton;

import React, { useEffect, useState } from "react";
import { Github, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
  );

  // Apply stored theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle theme toggle
  const handleToggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <footer className="bg-primary-light dark:bg-gray-900 text-white dark:text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Theme Toggle */}
        <div className="flex items-center space-x-2">
          <Sun className="h-5 w-5 text-yellow-400" />
          <Switch checked={isDarkMode} onCheckedChange={handleToggleTheme} />
          <Moon className="h-5 w-5 text-gray-400" />
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/pettiboy/google-auth"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:underline"
        >
          <Github className="h-5 w-5" />
          <span>View on GitHub</span>
        </a>

        {/* Signature */}
        <p className="text-sm mt-4 md:mt-0">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            href="https://pettiboy.com"
          >
            pettiboy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

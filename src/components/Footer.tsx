import React from "react";
import { Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <a
          href="https://github.com/yourusername/yourrepository"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 hover:text-gray-800 dark:hover:text-gray-100"
        >
          <Github className="h-5 w-5" />
          <span>View on GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

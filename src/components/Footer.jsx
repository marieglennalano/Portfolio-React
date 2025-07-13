// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-center py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="text-gray-700 dark:text-gray-400 mb-3">
        © {new Date().getFullYear()} Marie Glenn Alano
      </div>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;

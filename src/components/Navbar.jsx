import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            MyPortfolio
          </div>
          <div className="space-x-4 hidden md:flex">
            <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">About</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

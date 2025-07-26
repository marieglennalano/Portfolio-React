import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (hash) => {
    setActiveHash(hash);
    closeMenu();
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinkClass = (hash) =>
    `hover:text-blue-500 ${
      activeHash === hash ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="#home" onClick={() => handleNavClick('#home')} className="text-2xl font-bold text-gray-800 dark:text-white">
              MG
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" onClick={() => handleNavClick('#about')} className={navLinkClass('#about')}>
              About
            </a>
            <a href="#projects" onClick={() => handleNavClick('#projects')} className={navLinkClass('#projects')}>
              Projects
            </a>
            <a href="#contact" onClick={() => handleNavClick('#contact')} className={navLinkClass('#contact')}>
              Contact
            </a>

            <a
              href="https://drive.google.com/file/d/1wWxhrUQfuw9Fmsnk5JRj7ce2v6de2RQU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
              Resume
            </a>

            <DarkModeToggle />
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white focus:outline-none text-2xl"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 pb-4 pt-2 space-y-2">
          <a href="#about" onClick={() => handleNavClick('#about')} className={navLinkClass('#about') + ' block'}>
            About
          </a>
          <a href="#projects" onClick={() => handleNavClick('#projects')} className={navLinkClass('#projects') + ' block'}>
            Projects
          </a>
          <a href="#contact" onClick={() => handleNavClick('#contact')} className={navLinkClass('#contact') + ' block'}>
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1wWxhrUQfuw9Fmsnk5JRj7ce2v6de2RQU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

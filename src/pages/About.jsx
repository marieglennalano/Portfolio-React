import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm a frontend developer who loves crafting elegant and accessible user interfaces using modern web technologies. With a background in electronics engineering and a passion for design, I bring both logic and creativity into everything I build.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          My current focus is on React, Tailwind CSS, and creating responsive, mobile-first web apps that deliver seamless user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;

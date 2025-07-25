import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Postman', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-14 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Curious creator. Code enthusiast. Problem solver. I blend design, engineering, and empathy to craft user-first experiences.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get to know me</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
              I’m a <strong>Frontend-Focused Web Developer</strong> with a knack for clean code and responsive UI. I love turning ideas into beautiful, accessible websites that perform and impress.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I also enjoy mentoring and sharing knowledge within the dev community. You’ll often find me exploring new tech stacks or designing in Figma. Let’s connect on
              <a
                href="https://www.linkedin.com/in/marie-glenn-alano-4aab99118/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline mx-1"
              >
                LinkedIn
              </a>
              or
              <a
                href="https://github.com/marieglennalano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline mx-1"
              >
                GitHub
              </a>
              to see more.
            </p>
          </motion.div>

          {/* Right Column - Skill Logos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Toolbox</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={skill.src}
                    alt={`${skill.name} logo`}
                    title={skill.name}
                    className="w-12 h-12 mb-2 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                  />
                  <span className="text-sm text-gray-800 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

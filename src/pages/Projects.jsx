import React from 'react';
import { motion } from 'framer-motion';

import portfolioImg from '../assets/projects/portfolio.png';
import ecommerceImg from '../assets/projects/ecommerceAPI.png';
import blogifyImg from '../assets/projects/blogify.png';
import movieCatalogImg from '../assets/projects/movie.png';
import fitnessTrackerImg from '../assets/projects/fitness.png';
import SkinImg from '../assets/projects/skin.png';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio website built with Vite, React, and Tailwind CSS. Showcasing my projects, skills, and experience in web development.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: portfolioImg,
    github: 'https://github.com/marieglennalano/Portfolio-React',
    demo: 'https://mgalano.vercel.app/',
  },
  {
    title: 'E-Commerce API Documentation',
    description: 'Dynamic E-commerce Workflow Management. The system features dynamic routes for order processing, real-time inventory updates, and secure user authentication.',
    tech: ['Express.js', 'Node.js', 'MongoDB', 'Postman', 'AWS'],
    image: ecommerceImg,
    github: 'https://github.com/marieglennalano',
    demo: 'https://documenter.getpostman.com/view/44617324/2sB2xCgos6',
  },
  {
    title: 'Fitness Tracker',
    description: 'A modern full-stack fitness tracking app with workout logging, progress visualization, and user management.',
    tech: ['React', 'Bootstrap', 'MongoDB', 'Express.js'],
    image: fitnessTrackerImg,
    github: 'https://github.com/marieglennalano/Fitness-Tracker-FS',
    demo: 'https://fitness-tracker-fs.vercel.app/',
  },
  {
    title: 'Blogify',
    description: 'A responsive blogging platform with Google OAuth, comment system, and modern animation.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: blogifyImg,
    github: 'https://github.com/marieglennalano/Blogify',
    demo: 'https://blogify-sigma-seven.vercel.app/',
  },
  {
    title: 'Movie Catalog',
    description: 'A full-stack app to browse, manage, and comment on movie entries. Admin dashboard included.',
    tech: ['React', 'Bootstrap', 'Express.js', 'MongoDB'],
    image: movieCatalogImg,
    github: 'https://github.com/marieglennalano/Movie-Catalog-FS',
    demo: 'https://movie-catalog-fs.vercel.app/',
  },
  {
    title: 'SkinCredible',
    description: 'Capstone full-stack e-commerce platform with admin dashboard, authentication, and cart management.',
    tech: ['React', 'Bootstrap', 'Express.js', 'MongoDB', 'AWS'],
    image: SkinImg,
    github: 'https://github.com/marieglennalano/csp3-hosting-montesor-alano',
    demo: 'https://csp3-hosting-montesor-alano.vercel.app/',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        PROJECTS
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 dark:hover:bg-gray-600"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

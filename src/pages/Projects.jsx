// src/pages/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Tailwind CSS, showcasing my projects and skills.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://yourportfolio.netlify.app',
  },
  {
    title: 'E-Commerce App',
    description: 'A full-stack e-commerce app with user auth, product catalog, cart, and order system.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/ecommerce-app',
    live: 'https://ecommerce-demo.netlify.app',
  },
  {
    title: 'Workout Tracker',
    description: 'A MERN stack app to log workouts, with user login and dashboard for tracking progress.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/yourusername/workout-tracker',
    live: 'https://workout-tracker-demo.netlify.app',
  },
  {
    title: 'Movie Catalog API',
    description: 'RESTful API built with Express and MongoDB for managing a movie collection with comments.',
    tech: ['Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/yourusername/movie-catalog-api',
    live: 'https://movie-api-demo.netlify.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 transition hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm px-2 py-1 rounded"
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
                  className="text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

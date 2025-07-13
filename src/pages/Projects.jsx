import React from 'react';

const projects = [
  {
    title: 'Toki AI Assistant',
    description: 'A personal AI assistant UI built with Vite, React, and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'E-Commerce Homepage',
    description: 'Responsive product showcase using HTML, Bootstrap, and animation.',
    link: '#',
  },
  {
    title: 'Workout Tracker API',
    description: 'A RESTful API built with Express and MongoDB for managing workouts.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank" rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

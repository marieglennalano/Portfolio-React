import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio website built with Vite, React, and Tailwind CSS. Showcasing my projects, skills, and experience in web development.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: 'https://source.unsplash.com/featured/?portfolio',
    github: 'https://github.com/marieglennalano/portfolio',
    demo: '#'
  },
  {
    title: 'E-Commerce API Documentation',
    description: 'Dynamic E-commerce Workflow Management. The system features dynamic routes for order processing, real-time inventory updates, and secure user authentication. It also supports seamless automated order reporting and comprehensive product management. Documented Backend API published publicly using Postman.',
    tech: ['Express.js', 'Node.js', 'MongoDB', 'Postman'],
    image: 'https://source.unsplash.com/featured/?api',
    github: 'https://github.com/marieglennalano',
    demo: 'https://documenter.getpostman.com/view/44617324/2sB2xCgos6'
  },
  {
    title: 'Fitness Tracker App',
    description: 'Track your workouts, set goals, and monitor progress with a sleek, responsive dashboard.',
    tech: ['React', 'Bootstrap', 'MongoDB', 'Express.js'],
    image: 'https://source.unsplash.com/featured/?fitness',
    github: 'https://github.com/marieglennalano/fitness-tracker',
    demo: '#'
  },
  {
    title: 'Blogify Platform',
    description: 'A full-stack blog platform with rich text editor, comments, authentication, and admin dashboard.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: 'https://source.unsplash.com/featured/?blog',
    github: 'https://github.com/marieglennalano/blogify',
    demo: '#'
  },
  {
    title: 'Movie Catalog App',
    description: 'A responsive app to browse, filter, and manage movies. Includes admin features to manage data.',
    tech: ['React', 'Express.js', 'MongoDB'],
    image: 'https://source.unsplash.com/featured/?movies',
    github: 'https://github.com/marieglennalano/movie-catalog',
    demo: '#'
  },
  {
    title: 'AI Assistant UI (Toki)',
    description: 'A voice-enabled AI assistant UI using Web Speech API and chat interface.',
    tech: ['Vite', 'React', 'Tailwind CSS'],
    image: 'https://source.unsplash.com/featured/?ai',
    github: 'https://github.com/marieglennalano/toki-ai-ui',
    demo: '#'
  },
  {
    title: 'Educational Resource Hub',
    description: 'Single-page learning platform featuring categorized resources, interactive navigation, and smooth UI.',
    tech: ['HTML', 'Bootstrap', 'JavaScript'],
    image: 'https://source.unsplash.com/featured/?education',
    github: 'https://github.com/marieglennalano/educational-hub',
    demo: '#'
  },
  {
    title: 'Certification Gallery',
    description: 'Interactive showcase of professional certifications with modal previews and badge overlays.',
    tech: ['Framer Motion', 'React', 'Tailwind CSS'],
    image: 'https://source.unsplash.com/featured/?certificate',
    github: 'https://github.com/marieglennalano/certifications',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition hover:scale-[1.02] duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

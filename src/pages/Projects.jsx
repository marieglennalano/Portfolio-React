import React from 'react';
import portfolioImg from '../assets/projects/portfolio.png';
import ecommerceImg from '../assets/projects/ecommerceAPI.png';
import blogifyImg from '../assets/projects/blogify.png';
import movieCatalogImg from '../assets/projects/movie.png';
import fitnessTrackerImg from '../assets/projects/fitness.png';
// import eduHubImg from '../assets/projects/project6.png';
import SkinImg from '../assets/projects/skin.png';
// import taskManagerImg from '../assets/projects/project8.png';


const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio website built with Vite, React, and Tailwind CSS. Showcasing my projects, skills, and experience in web development.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: portfolioImg,
    github: 'https://github.com/marieglennalano/Portfolio-React',
    demo: '#'
  },
  {
    title: 'E-Commerce API Documentation',
    description: 'Dynamic E-commerce Workflow Management. The system features dynamic routes for order processing, real-time inventory updates, and secure user authentication. It also supports seamless automated order reporting and comprehensive product management. Documented Backend API published publicly using Postman.',
    tech: ['Express.js', 'Node.js', 'MongoDB', 'Postman', 'AWS'],
    image: ecommerceImg,
    github: 'https://github.com/marieglennalano',
    demo: 'https://documenter.getpostman.com/view/44617324/2sB2xCgos6'
  },
  {
    title: 'Fitness Tracker',
    description: 'Fitness Tracker Full Stack App A modern full-stack fitness tracking application built with React, Node.js, and MongoDB. Features include workout logging, progress visualization, user profile management, and responsive design. Frontend: React + Bootstrap Backend: Express + MongoDB + JWT Auth Deployed on: Vercel (Frontend) & Render (Backend)',
    tech: ['React', 'Bootstrap', 'MongoDB', 'Express.js'],
    image: fitnessTrackerImg,
    github: 'https://github.com/marieglennalano/Fitness-Tracker-FS',
    demo: 'https://fitness-tracker-fs.vercel.app/'
  },
  {
    title: 'Blogify',
    description: 'A responsive and modern blogging platform built with React, Bootstrap, and Google OAuth. This frontend connects to the Blogify backend API to allow users to create, read, comment on, and manage blog posts with authentication and animation features.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: blogifyImg,
    github: 'https://github.com/marieglennalano/Blogify',
    demo: 'https://blogify-sigma-seven.vercel.app/'
  },
  {
    title: 'Movie Catalog',
    description: 'A full-stack Movie Catalog web app where users can browse movies, view detailed information, and leave comments. Admins can manage the catalog by adding, editing, and deleting movies via a secure dashboard.',
    tech: ['React', 'Bootsrap', 'Express.js', 'MongoDB'],
    image: movieCatalogImg,
    github: 'https://github.com/marieglennalano/Movie-Catalog-FS',
    demo: '#https://movie-catalog-fs.vercel.app/'
  },
  {
    title: 'SkinCredible',
    description: ' Full-stack e-commerce web application built as a capstone project. It features user authentication, product browsing, cart management, search functionality, and an admin dashboard for product and order management.',
    tech: ['React', 'Bootstrap', 'Express.js', 'MongoDB', 'AWS'],
    image: SkinImg,
    github: 'https://github.com/marieglennalano/csp3-hosting-montesor-alano',
    demo: 'https://csp3-hosting-montesor-alano.vercel.app/'
  },
  // {
  //   title: 'Educational Resource Hub',
  //   description: 'Single-page learning platform featuring categorized resources, interactive navigation, and smooth UI.',
  //   tech: ['HTML', 'Bootstrap', 'JavaScript'],
  //   image: 'https://source.unsplash.com/featured/?education',
  //   github: 'https://github.com/marieglennalano/educational-hub',
  //   demo: '#'
  // },
  // {
  //   title: 'Certification Gallery',
  //   description: 'Interactive showcase of professional certifications with modal previews and badge overlays.',
  //   tech: ['Framer Motion', 'React', 'Tailwind CSS'],
  //   image: 'https://source.unsplash.com/featured/?certificate',
  //   github: 'https://github.com/marieglennalano/certifications',
  //   demo: '#'
  // }
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>
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

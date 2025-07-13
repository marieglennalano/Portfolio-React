// src/pages/Certifications.jsx
import React from 'react';

const certifications = [
  {
    title: 'Zuitt Web Development Bootcamp',
    image: 'https://drive.google.com/uc?export=view&id=1zvykKgPlb3spqwm9trJNFHCenaPO1AUz',
    issuer: 'Zuitt Coding Bootcamp',
    date: '2024',
    link: 'https://drive.google.com/file/d/1zvykKgPlb3spqwm9trJNFHCenaPO1AUz/view',
  },
  {
    title: 'Responsive Web Design',
    image: 'https://drive.google.com/uc?export=view&id=1secDVA2o03TM5kDRN-Oy8TY3_UKoWEdo',
    issuer: 'freeCodeCamp',
    date: '2023',
    link: 'https://drive.google.com/file/d/1secDVA2o03TM5kDRN-Oy8TY3_UKoWEdo/view',
  },
  // Add more certs here if needed
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Certifications</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-contain mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer} &bull; {cert.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

// src/pages/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';
import frontendImg from '../assets/frontend.png';
import backendImg from '../assets/backend.png';
// import fullstackImg from '../assets/fullstack.png';

const certifications = [
  {
    title: 'Frontend Development Course',
    image: frontendImg,
    issuer: 'Zuitt Coding Bootcamp',
    date: '2024',
    link: 'https://drive.google.com/file/d/1zvykKgPlb3spqwm9trJNFHCenaPO1AUz/view',
  },
  {
    title: 'Backend Development Course',
    image: backendImg,
    issuer: 'Zuitt Coding Bootcamp',
    date: '2023',
    link: 'https://drive.google.com/file/d/1secDVA2o03TM5kDRN-Oy8TY3_UKoWEdo/view',
  },
  {
    title: 'Full Stack Development Course',
    // image: fullstackImg,
    issuer: 'Zuitt Coding Bootcamp',
    date: '2023',
    link: 'https://drive.google.com/file/d/1secDVA2o03TM5kDRN-Oy8TY3_UKoWEdo/view',
  },
  // Add more certs here if needed
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          CERTIFICATIONS
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-contain mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer} &bull; {cert.date}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const randomSeed = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/seed/${randomSeed}/1600/900`;

  const glowStyle = {
    transition: 'all 0.3s ease-in-out',
  };

  const glowHoverStyle = {
    textShadow: `
      0 0 10px #3b82f6,
      0 0 20px #60a5fa,
      0 0 40px #93c5fd
    `,
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/70 to-black/80 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4"
      >
        <motion.h1
          whileHover={{ scale: 1.1, ...glowHoverStyle }}
          className="text-8xl font-extrabold text-blue-500"
          style={glowStyle}
        >
          404
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;

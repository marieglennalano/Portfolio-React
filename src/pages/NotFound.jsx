import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300 px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-7xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
        <p className="text-xl text-gray-800 dark:text-white mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;

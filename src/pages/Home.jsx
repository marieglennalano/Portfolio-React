import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300"
    >
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hi, I'm{' '}
          <span className="text-blue-600 dark:text-blue-400">MARIE GLENN</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A Frontend Developer passionate about building beautiful, user-friendly websites.
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I love transforming ideas into reality using modern web technologies. With a focus on responsive design and interactive experiences, I build websites that work beautifully on any device.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
        >
          View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;

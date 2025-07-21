import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/hero-bg.jpg';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center text-center bg-fixed bg-cover bg-center transition-colors duration-300"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hi, I'm <span className="text-blue-400">MARIE GLENN</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl mb-6 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A Frontend Developer passionate about building beautiful, user-friendly websites.
        </motion.h2>

        <motion.p
          className="text-gray-300 leading-relaxed mb-8"
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

      {/* Scroll-down hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown className="text-white w-7 h-7" />
        </a>
      </div>
    </section>
  );
};

export default Home;

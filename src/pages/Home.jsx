import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import bgVideo from '../assets/bg-video.mp4';       
import fallbackImg from '../assets/fallback-ink.jpg'; // the downloaded fallback image

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        poster={fallbackImg}
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Hi, I’m <span className="text-blue-400">MARIE GLENN</span>
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl font-medium text-blue-300 mb-6 h-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typewriter
            words={['Design Engineer', 'Web Developer', 'Equipment Engineer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Building engaging, modern, and responsive web experiences that connect people with technology—one pixel at a time.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          View My Projects
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown className="text-white w-7 h-7" />
        </a>
      </div>
    </section>
  );
};

export default Home;

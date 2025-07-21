// src/components/ScrollProgress.jsx
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-cyan-500 to-blue-500 z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;

import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">MARIE GLENN</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          A Frontend Developer passionate about building beautiful, user-friendly websites.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          I love transforming ideas into reality using modern web technologies. With a focus on responsive design and interactive experiences, I build websites that work beautifully on any device.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;

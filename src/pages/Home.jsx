import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        Hi, I'm Glenn 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        I’m a passionate Frontend Developer building beautiful and responsive web experiences using React and Tailwind CSS.
      </p>
      <a
        href="#projects"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;

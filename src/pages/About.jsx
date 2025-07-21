import React from 'react';

const skills = [
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Postman', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">ABOUT ME</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Here you will find more information about me, what I do, and my current skills mostly in terms
          of programming and technology.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get to know me!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a <strong>Frontend Focused Web Developer</strong> building and managing the front-end of websites and web applications that lead to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy sharing content about what I've learned in <strong>Web Development</strong> to help others in the dev community. Feel free to connect with me on
              <a href="https://linkedin.com" target="_blank" className="text-purple-600 dark:text-purple-400 underline mx-1">LinkedIn</a>
              or see my work on
              <a href="https://github.com" target="_blank" className="text-purple-600 dark:text-purple-400 underline mx-1">GitHub</a>.
            </p>
          </div>

          {/* Right Column - Skill Logos */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">SKILLS</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img
                    src={skill.src}
                    alt={skill.name}
                    title={skill.name}
                    className="w-12 h-12 mb-2 grayscale hover:grayscale-0 transition duration-300"
                  />
                  <span className="text-sm text-gray-800 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

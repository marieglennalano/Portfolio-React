// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I’m always open to discussing new opportunities, collaborations, or just having a friendly chat. Feel free to drop me a message!
        </p>
        <a
          href="mailto:marieglennalano@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;

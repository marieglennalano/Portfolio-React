import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_39pq36a',
    'template_7o666r6',
    form.current,
    'ipvRulV2QTsvEx43a'
  ).then(
    (result) => {
      toast.success("Message sent successfully!");
      form.current.reset();
    },
    (error) => {
      toast.error("Message failed to send. Please try again.");
      console.error(error);
    }
  );
};


  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            DO YOU HAVE A PROJECT TO DISCUSS?
          </h2>
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">GET IN TOUCH 💬</p>

          <div>
            <h4 className="text-gray-600 dark:text-gray-400 uppercase mb-1 text-sm tracking-wider">CONTACT</h4>
            <a
              href="mailto:marieglennalano@gmail.com"
              className="text-blue-600 hover:underline text-lg"
            >
              marieglennalano@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-gray-600 dark:text-gray-400 uppercase mb-1 text-sm tracking-wider">SOCIAL MEDIA</h4>
            <div className="flex items-center space-x-4 text-2xl text-gray-700 dark:text-white">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">CONTACT FORM</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full bg-transparent border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-transparent border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg focus:outline-none"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Message"
              required
              className="w-full bg-transparent border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="relative inline-block px-8 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-90 transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

    </div>
  );
}

export default App;

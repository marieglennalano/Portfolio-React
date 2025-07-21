// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainSections() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Home />
      <About />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <Routes>
          <Route path="/" element={<MainSections />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </div>
    </Router>
  );
}

export default App;

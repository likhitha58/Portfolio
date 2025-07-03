import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.js';
import About from '../pages/About/About.js';
import Projects from '../pages/Projects/Projects.js';
import Contact from '../pages/Contact/Contact.js';

function PortfolioRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default PortfolioRoutes;

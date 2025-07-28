import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Education from './pages/Education.jsx';
import TechStack from './pages/TechStack.jsx';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground.jsx';
import Loader from './components/Loader.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showLoader, setShowLoader] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  // 👇 Handle loader show and fade-out
  useEffect(() => {
    const loaderDuration = 2500;
    const fadeDuration = 600;

    const timer = setTimeout(() => {
      setHideLoader(true); // trigger CSS fade out
      setTimeout(() => {
        setShowLoader(false); // unmount loader after fade out
      }, fadeDuration);
    }, loaderDuration);

    return () => clearTimeout(timer);
  }, []);

  // 👇 Track mouse position for cursor effect
  useEffect(() => {
    const handleMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="App">
      <div className="background-gradient" />
      <ParticleBackground />

      {showLoader && <Loader hide={hideLoader} />}

      {!showLoader && (
        <>
          <div
            className="cursor-effect"
            style={{ top: cursorPos.y, left: cursorPos.x }}
          />

          <motion.div
            className="content-overlay"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Navbar />
            <Home />
            <br />
            <About />
            <Education />
            <TechStack />
            <Projects />
            <Footer />
          </motion.div>
        </>
      )}
    </div>
  );
}

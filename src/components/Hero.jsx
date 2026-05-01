import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import pp from '../assets/pp.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 bg-dark overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side: Content */}
        <div className="flex flex-col items-start gap-8">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Building  <br />
            <span className="text-primary italic font-serif">AI-Driven</span> <br />
            Applications.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium"
          >
            I'm <span className="text-white font-bold">Likhitha</span>, a pre-final year Computer Science student building scalable MERN applications and integrating AI, GenAI, and NLP to solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-8"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <div className="flex items-center gap-6 text-2xl text-gray-400">
              <a href="https://github.com/likhitha58" target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/likhitha-tanuboddi-05a34a289/" target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1">
                <FaLinkedin />
              </a>
              <a href="mailto:likhithatanuboddi58@gmail.com" className="hover:text-white transition-all transform hover:-translate-y-1">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image Placeholder (User's Face) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          {/* Decorative Frame */}
          <div className="relative w-full max-w-md aspect-[4/5] group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-full bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
              <img
                src={pp}
                alt="Likhitha"
                className="w-full h-full object-cover filter contrast-110 saturate-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>

              {/* Corner Accent */}
              <div className="absolute bottom-6 left-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Based in</div>
                <div className="text-sm font-bold text-white">Hyderabad, India</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Brand Logos Bar (Binke Style) */}
      <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 hidden md:block">
        <div className="container mx-auto flex items-center justify-between border-t border-white/10 pt-8">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Technologies I Love</span>
          <div className="flex gap-12 text-2xl text-gray-400 font-bold">
            <span>React</span> <span>Node.js</span> <span>MongoDB</span> <span>Python</span> <span>AI / NLP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

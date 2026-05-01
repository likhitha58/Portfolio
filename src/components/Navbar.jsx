import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'py-4 glass-light shadow-sm' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo - Binke style */}
        <a href="#home" className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-dark' : 'text-light'}`}>
          Likhitha<span className="text-primary"> Tanuboddi </span>
        </a>

        {/* Desktop Nav - Capsule style */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-200/50 p-1.5 rounded-full border border-gray-300">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-dark transition-all hover:bg-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:block px-6 py-2.5 rounded-full bg-dark text-white text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-dark' : 'text-light'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-6 py-3 rounded-full bg-dark text-white text-center font-bold"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

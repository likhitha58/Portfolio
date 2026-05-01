import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-dark text-white relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12">
        <div className="text-2xl font-bold tracking-tight">
          Likhitha<span className="text-primary">.</span>
        </div>
        
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} Designed with passion. All rights reserved.
        </p>

        <div className="flex items-center gap-8 text-sm font-bold text-gray-400">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
}

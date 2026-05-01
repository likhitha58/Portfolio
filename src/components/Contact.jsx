import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const socials = [
    { 
      name: 'Email', 
      value: 'likhitha@example.com', 
      link: 'mailto:likhitha@example.com', 
      icon: <FaEnvelope />, 
      color: 'bg-primary' 
    },
    { 
      name: 'LinkedIn', 
      value: 'linkedin.com/in/likhitha', 
      link: 'https://linkedin.com/in/likhitha', 
      icon: <FaLinkedin />, 
      color: 'bg-blue-600' 
    },
    { 
      name: 'GitHub', 
      value: 'github.com/likhitha58', 
      link: 'https://github.com/likhitha58', 
      icon: <FaGithub />, 
      color: 'bg-dark' 
    }
  ];

  return (
    <section id="contact" className="w-full py-32 px-6 md:px-12 bg-dark text-white rounded-t-[3rem] -mt-12 relative z-20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight"
          >
            Let's build something <br />
            <span className="text-secondary">extraordinary.</span>
          </motion.h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center gap-6 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white ${social.color} shadow-lg transition-transform group-hover:scale-110`}>
                {social.icon}
              </div>
              <div className="text-center">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{social.name}</h4>
                <p className="text-lg font-bold text-white group-hover:text-primary transition-colors truncate max-w-[200px]">
                  {social.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

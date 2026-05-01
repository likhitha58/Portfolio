import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const contactLinks = [
    {
      name: 'Email',
      value: 'likhithatanuboddi58@gmail.com',
      link: 'mailto:likhithatanuboddi58@gmail.com',
      icon: <FaEnvelope />,
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      value: 'Likhitha Tanuboddi',
      link: 'https://www.linkedin.com/in/likhitha-tanuboddi-05a34a289/',
      icon: <FaLinkedin />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      value: 'likhitha58',
      link: 'https://github.com/likhitha58',
      icon: <FaGithub />,
      color: 'hover:text-dark'
    }
  ];

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Contact Me</h2>
          <p className="text-gray-500 font-medium mb-10 max-w-lg mx-auto">
            I’m open to opportunities and collaborations. Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {contactLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-center gap-3 text-gray-400 font-bold transition-all ${item.color} group`}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="hidden sm:inline text-sm tracking-tight">{item.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

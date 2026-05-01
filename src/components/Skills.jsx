import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiFastapi, SiTensorflow } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'FastAPI', icon: <SiFastapi /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Figma', icon: <FaFigma /> },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 md:px-12 bg-dark text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-secondary text-dark text-xs font-bold uppercase mb-6"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Proficiency.</span></h2>
          <p className="text-gray-400 max-w-lg">A curated selection of technologies I use to bring complex digital visions to life.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-primary/50 transition-all hover:bg-white/10 group"
            >
              <div className="text-4xl text-gray-400 group-hover:text-primary transition-colors">
                {skill.icon}
              </div>
              <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

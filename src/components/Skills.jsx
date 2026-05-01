import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaLaptopCode, FaDatabase, FaRobot, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: "C, C++, Python, Java"
  },
  {
    title: "Core Concepts",
    icon: <FaBrain />,
    skills: "Data Structures, OOP, Operating Systems, Computer Networks, DBMS"
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    skills: "React.js, Node.js, Express.js, JavaScript, Bootstrap, REST APIs, JWT Authentication"
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: "SQL Server, MongoDB"
  },
  {
    title: "AI / ML",
    icon: <FaRobot />,
    skills: "NLP, TF-IDF, Generative AI, Model Evaluation"
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: "GitHub, VS Code"
  }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Skills.</span></h2>
          <p className="text-gray-400 max-w-lg">Technologies I have worked with to build my projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <div className="text-3xl text-primary mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

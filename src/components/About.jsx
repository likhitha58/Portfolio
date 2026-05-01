import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaChartLine, FaPalette } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 relative z-10 bg-[#f3f4f6]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-600 text-xs font-bold uppercase mb-6">Discovery</div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">A Little <br /> <span className="text-primary italic font-serif">About Me.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              I’m a Computer Science student with a minor in Finance. I have a strong interest in building applications that are practical and helpful for users.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              I mostly work with the MERN stack and have been exploring AI, GenAI, and NLP. I focus on building real-world projects where I can apply what I've learned in a meaningful way.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              I believe in a learning-by-doing mindset. Every project is an opportunity for me to pick up new skills and improve how I solve problems through code.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col gap-2">
                <span className="text-5xl font-extrabold text-dark tracking-tighter">10+</span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Projects</span>
              </div>
              <div className="p-8 bg-dark rounded-[2.5rem] flex flex-col gap-2">
                <span className="text-5xl font-extrabold text-white tracking-tighter">4</span>
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Areas of Interest</span>
              </div>
            </div>
          </motion.div>

          {/* Visual/Highlights Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl relative z-10">
              <h4 className="text-2xl font-bold text-dark mb-8">What I Do</h4>

              <div className="space-y-8">
                {[
                  { title: "Full-Stack Development", desc: "Building web applications using React, Node.js, and databases.", icon: <FaCode className="text-primary" /> },
                  { title: "AI & NLP", desc: "Working on basic AI and NLP projects like text processing.", icon: <FaBrain className="text-primary" /> },
                  { title: "Financial Applications", desc: "Creating simple tools related to budgeting and finance.", icon: <FaChartLine className="text-primary" /> },
                  { title: "UI / UX", desc: "Designing clean and easy-to-use interfaces.", icon: <FaPalette className="text-primary" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-[#f3f4f6] flex items-center justify-center text-2xl border border-gray-100">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-dark font-bold text-lg mb-1">{item.title}</h5>
                      <p className="text-sm font-medium text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

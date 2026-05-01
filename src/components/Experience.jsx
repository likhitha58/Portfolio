import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-600 text-xs font-bold uppercase mb-6"
          >
            Track Record
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">Professional <span className="text-primary italic font-serif">Journey.</span></h2>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f3f4f6] p-10 rounded-[2.5rem] border border-gray-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-dark mb-1">Full-Stack Developer Intern</h3>
                <span className="text-primary font-bold text-lg">TechNova Solutions</span>
              </div>
              <div className="mt-4 md:mt-0 px-6 py-2 bg-dark text-white rounded-full text-sm font-bold">
                June 2024 - Present
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-dark font-bold mb-2 uppercase text-xs tracking-widest">Core Impact</h4>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Spearheaded the development of a real-time analytics dashboard, leading to a <span className="text-dark font-bold italic">40% reduction</span> in data processing latency and significantly improving stakeholder decision-making speed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Architected RESTful APIs with Node.js and Express.",
                  "Designed responsive UIs with React & Tailwind.",
                  "Managed complex data flows in MongoDB.",
                  "Integrated secure OAuth2 authentication systems."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-primary text-xl">✦</span>
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
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

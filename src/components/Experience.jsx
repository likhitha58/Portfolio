import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column: Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-dark mb-12 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              Experience
            </h2>

            <div className="relative pl-8 border-l-2 border-gray-100">
              <div className="mb-12 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                
                <h3 className="text-xl font-bold text-dark mb-1">Web Development Intern</h3>
                <div className="text-primary font-bold text-lg mb-2">COSYN Limited</div>
                <div className="text-sm text-gray-500 font-bold mb-6 flex flex-wrap gap-x-4">
                  <span>June 2025 – July 2025</span>
                  <span className="text-gray-300">|</span>
                  <span>Hyderabad, Telangana</span>
                </div>

                <ul className="space-y-4">
                  {[
                    "Worked on web applications using React and Node.js",
                    "Improved backend performance by optimizing SQL queries",
                    "Contributed to real-time workflow-based systems"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-dark mb-12 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-secondary"></span>
              Education
            </h2>

            <div className="space-y-12">
              {/* College */}
              <div className="p-8 rounded-[2rem] bg-[#f9fafb] border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-dark mb-1">SRM University, AP</h3>
                <div className="text-gray-600 font-bold mb-4">B.Tech in Computer Science Engineering</div>
                
                <div className="flex flex-col gap-2 mb-4">
                  <div className="text-sm font-bold text-dark flex items-center gap-2">
                    <span className="text-secondary">✦</span> Minor in Finance
                  </div>
                  <div className="text-sm font-bold text-dark flex items-center gap-2">
                    <span className="text-secondary">✦</span> CGPA: 9.17/10
                  </div>
                </div>

                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest flex flex-wrap gap-x-4">
                  <span>Aug 2023 – Present</span>
                  <span>•</span>
                  <span>Amaravati, Andhra Pradesh</span>
                </div>
              </div>

              {/* School */}
              <div className="p-8 rounded-[2rem] bg-[#f9fafb] border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-dark mb-1">DDMS P. Obul Reddy Public School</h3>
                <div className="text-gray-600 font-bold mb-6">Secondary & Higher Secondary</div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-white rounded-2xl border border-gray-50">
                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Class XII</div>
                    <div className="text-lg font-bold text-dark">82.8%</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-gray-50">
                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Class X</div>
                    <div className="text-lg font-bold text-dark">96.0%</div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest flex flex-wrap gap-x-4">
                  <span>2021 – 2023</span>
                  <span>•</span>
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

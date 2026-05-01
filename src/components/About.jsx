import React from 'react';
import { motion } from 'framer-motion';

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
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">The Story Behind <br /> <span className="text-primary italic font-serif">the Vision.</span></h2>
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
              I’m a Computer Science student with a minor in Finance, which gives me a unique perspective on building <strong className="text-dark">intelligent, data-driven applications</strong>. 
            </p>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              My passion lies at the intersection of <span className="text-primary font-bold">Web Development</span> and <span className="text-dark font-bold">Financial Technology</span>. I engineer scalable platforms that solve real-world problems, from predictive models to seamless user interfaces.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col gap-2">
                <span className="text-5xl font-extrabold text-dark tracking-tighter">10+</span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Projects</span>
              </div>
              <div className="p-8 bg-dark rounded-[2.5rem] flex flex-col gap-2">
                <span className="text-5xl font-extrabold text-white tracking-tighter">4</span>
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Awards</span>
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
              <h4 className="text-2xl font-bold text-dark mb-8">Specializations</h4>
              
              <div className="space-y-8">
                {[
                  { title: "Full-Stack Development", desc: "Building high-performance MERN applications.", icon: "💻" },
                  { title: "Financial Engineering", desc: "Crafting intelligent tools for market analysis.", icon: "📈" },
                  { title: "User Experience", desc: "Designing intuitive and accessible interfaces.", icon: "✨" }
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "FinCalc-AI Advisor",
    category: "Finance + AI",
    problem: "Navigating complex financial calculations often requires specialized knowledge, leaving everyday users confused about loans, investments, and taxes.",
    solution: "An intelligent chatbot powered by LLMs that translates natural language queries into precise financial formulas and calculates exact outcomes.",
    impact: "Democratizes financial planning with high accuracy in interpreting complex financial scenarios.",
    tech: ["React", "Express", "Python", "LLMs", "Tailwind CSS"],
    features: [
      "Natural language financial query understanding",
      "Real-time dynamic calculations",
      "Context-aware conversation memory",
      "Detailed citation and breakdown of math"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Market Sentiment Analyzer",
    category: "AI/ML",
    problem: "Traders struggle to gauge real-time market sentiment from the flood of news articles and social media posts.",
    solution: "A scalable RAG application that scrapes financial news, processes text using NLP, and provides real-time bullish/bearish sentiment scores.",
    impact: "Reduces market research time by 80% and provides actionable insights for retail investors.",
    tech: ["Next.js", "FastAPI", "HuggingFace", "MongoDB", "Framer Motion"],
    features: [
      "Live news scraping & embedding",
      "Transformer-based sentiment classification",
      "Interactive data visualization charts",
      "User portfolio tracking"
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "OmniCart E-Commerce",
    category: "MERN Stack",
    problem: "Small businesses lack affordable, customizable, and high-performance online storefronts.",
    solution: "A complete multi-tenant e-commerce platform with a headless CMS, secure payments, and dynamic inventory management.",
    impact: "Enables small vendors to launch a tailored store within minutes, handling 10k+ concurrent requests.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    features: [
      "Role-based access control (Admin, Vendor, User)",
      "Secure Stripe payment integration",
      "Algorithmic product recommendations",
      "Real-time order tracking"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Finance + AI', 'AI/ML', 'MERN Stack'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="w-full py-24 px-6 md:px-12 relative z-10 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="px-4 py-1.5 rounded-full bg-secondary text-dark text-xs font-bold uppercase mb-6">Case Studies</div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">Showcasing <span className="text-primary italic font-serif">Impact.</span></h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${
                  filter === cat 
                    ? 'bg-dark border-dark text-white shadow-lg'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-dark hover:text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={project.id}
                className="group relative flex flex-col bg-[#f3f4f6] rounded-[3rem] overflow-hidden cursor-pointer border border-gray-100 hover:shadow-2xl transition-all duration-500"
                onClick={() => setActiveProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{project.category}</span>
                  <h4 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-sm text-gray-500 font-medium line-clamp-2 mb-6">{project.problem}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0,3).map(t => (
                      <span key={t} className="px-3 py-1 text-[10px] bg-white rounded-full text-dark font-bold border border-gray-100">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl relative"
            >
              <button 
                onClick={() => setActiveProject(null)} 
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center text-xl hover:bg-primary transition-colors"
              >
                ✕
              </button>

              <div className="w-full md:w-2/5 h-80 md:h-auto">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-10 md:p-14 md:w-3/5">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{activeProject.category}</span>
                <h3 className="text-4xl font-extrabold text-dark mt-2 mb-8">{activeProject.title}</h3>
                
                <div className="space-y-8 mt-6">
                  <div>
                    <h5 className="text-dark font-bold text-xs uppercase tracking-[0.2em] mb-3">The Problem</h5>
                    <p className="text-gray-500 font-medium leading-relaxed">{activeProject.problem}</p>
                  </div>
                  <div>
                    <h5 className="text-dark font-bold text-xs uppercase tracking-[0.2em] mb-3">The Impact</h5>
                    <p className="text-dark font-bold leading-relaxed border-l-4 border-primary pl-6 py-1 italic">
                      {activeProject.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h5 className="text-dark font-bold text-xs uppercase tracking-[0.2em] mb-4">Key Features</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeProject.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-12 pt-10 border-t border-gray-100">
                  <a href={activeProject.live} target="_blank" rel="noreferrer" className="btn-primary">
                    Live Project
                  </a>
                  <a href={activeProject.github} target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full border-2 border-dark text-dark font-bold hover:bg-dark hover:text-white transition-all">
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

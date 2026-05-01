import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import harmoneyImg from '../assets/harmoney.png';
import smarttaskImg from '../assets/smarttask.png';
import epicshelfImg from '../assets/epicshelf.jpeg';

const projectsData = [
  {
    id: 1,
    title: "NeuroAge XAI Lab",
    category: "AI & NLP",
    problem: "Detecting brain age from MRI scans is complex and often lacks transparency for medical professionals to trust AI results.",
    solution: "A deep learning system that predicts brain age and explains its decisions using visual heatmaps (XAI).",
    impact: "Provides clinicians with both a prediction and a 'why', increasing trust in AI-assisted diagnostics.",
    tech: ["Python", "PyTorch", "React", "Grad-CAM"],
    features: [
      "Brain age estimation using MRI scans",
      "Grad-CAM visual heatmaps for transparency",
      "Interactive clinical dashboard",
      "Multi-model architecture comparison"
    ],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop",
    github: "https://github.com/likhitha58/neuroage-xai-lab",
    live: "#"
  },
  {
    id: 2,
    title: "LLM Text Summarization",
    category: "AI & NLP",
    problem: "Reading long research papers and documents is time-consuming for students and professionals.",
    solution: "A tool that uses Large Language Models to condense long documents into short, easy-to-read summaries.",
    impact: "Reduces reading time by 70% while maintaining the core meaning of the original text.",
    tech: ["Python", "Hugging Face", "Flask", "React"],
    features: [
      "Automated extraction of key points",
      "Support for PDF and TXT file uploads",
      "Adjustable summary length",
      "Context-aware language processing"
    ],
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Payout AI (Financial RAG)",
    category: "Financial Tech",
    problem: "Manually searching for data in long financial reports is slow and often leads to missing important details.",
    solution: "A RAG-based application that retrieves specific data from financial PDFs to answer user questions.",
    impact: "Enables instant, accurate financial analysis with direct citations from the documents.",
    tech: ["Python", "LangChain", "FAISS", "Hugging Face"],
    features: [
      "Semantic search across financial PDFs",
      "Document-grounded AI answers",
      "Strict citation of source text",
      "Privacy-first local document processing"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    github: "https://github.com/likhitha58/FINANCIAL-RAG-APP",
    live: "#"
  },
  {
    id: 4,
    title: "FinCalc AI",
    category: "Financial Tech",
    problem: "AI chatbots often make mistakes with math, making them unreliable for financial planning.",
    solution: "A tool-augmented assistant that combines AI reasoning with reliable code functions for zero-error math.",
    impact: "Provides trustworthy financial calculations that users can actually rely on for planning.",
    tech: ["Python", "LLaMA 3.1", "Ollama", "JavaScript"],
    features: [
      "Natural language financial queries",
      "Zero-hallucination math calculations",
      "Interactive EMI and SIP calculators",
      "Context-aware conversational assistant"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    github: "https://github.com/likhitha58/FinCalc-AI",
    live: "#"
  },
  {
    id: 5,
    title: "LexAI (Legal Intelligence)",
    category: "AI & NLP",
    problem: "Reviewing long legal contracts for specific risks and clauses is tedious and expensive.",
    solution: "An intelligent system designed to help users review legal contracts and find specific clauses quickly.",
    impact: "Speeds up contract review and highlights key risks without needing manual searching.",
    tech: ["Python", "FAISS", "Google Gemini", "React"],
    features: [
      "Semantic clause search and retrieval",
      "Automated contract risk assessment",
      "Clause question-answering system",
      "Glassmorphism document viewer"
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/likhitha58/Legal-Document-Intelligence-",
    live: "#"
  },
  {
    id: 6,
    title: "Loan Eligibility Predictor",
    category: "AI & NLP",
    problem: "Manual loan processing is slow and prone to human error, leading to delays and inconsistent decisions.",
    solution: "A machine learning model that predicts loan approval based on financial and demographic data.",
    impact: "Speeds up the approval process while maintaining high precision in identifying eligible candidates.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Pandas"],
    features: [
      "Missing value imputation for numerical and categorical data",
      "Log transformation for normalized data distribution",
      "Random Forest classification for reliable results",
      "Manual input testing system for real-time validation"
    ],
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 7,
    title: "Harmoney",
    category: "MERN Stack",
    problem: "Tracking daily spending and staying within a budget is difficult without a centralized, simple tool.",
    solution: "A personal finance app built to help users track their daily spending and manage their budgets effectively.",
    impact: "Helps users achieve their savings goals by providing clear visibility into spending habits.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Real-time expense tracking",
      "Monthly budget limits and alerts",
      "Visual spending analytics charts",
      "Secure user data authentication"
    ],
    image: harmoneyImg,
    github: "#",
    live: "#"
  },
  {
    id: 8,
    title: "Smart Task",
    category: "MERN Stack",
    problem: "Managing tasks across work, study, and personal life often leads to missed deadlines and disorganized goals.",
    solution: "A streamlined task management system designed to help users organize their work and improve productivity.",
    impact: "Improves daily organization by centralizing all responsibilities in a simple dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Priority-based task organization",
      "Due date tracking and reminders",
      "Progress monitoring dashboard",
      "Category-based task filtering"
    ],
    image: smarttaskImg,
    github: "#",
    live: "#"
  },
  {
    id: 9,
    title: "YouTube Comment Analyzer",
    category: "AI & NLP",
    problem: "Understanding the overall mood of a video's comment section is impossible manually when there are thousands of comments.",
    solution: "A tool that fetches YouTube comments and uses AI to categorize them as positive, negative, or neutral.",
    impact: "Provides instant feedback on audience sentiment through visual charts and summaries.",
    tech: ["Python", "Streamlit", "Scikit-learn", "NLTK"],
    features: [
      "Real-time comment fetching via YouTube API",
      "Automated text cleaning and NLP processing",
      "Machine learning sentiment classification",
      "Interactive data visualization charts"
    ],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
    github: "https://github.com/likhitha58/Youtube_Comments_Sentiment_analysis",
    live: "#"
  },
  {
    id: 10,
    title: "EpicShelf",
    category: "MERN Stack",
    problem: "Finding affordable books or selling used ones can be a hassle without a dedicated community platform.",
    solution: "A complete marketplace for buying, selling, and renting books to make reading more accessible.",
    impact: "Promotes book reuse and helps readers find affordable books through a simple rental system.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Multi-user marketplace (Buyer, Seller, Admin)",
      "Automated book rental and return tracking",
      "Integrated wallet and payment system",
      "Verified user review and rating system"
    ],
    image: epicshelfImg,
    github: "https://github.com/likhitha58/EpicShelf",
    live: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('AI & NLP');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['AI & NLP', 'Financial Tech', 'MERN Stack'];

  const filteredProjects = projectsData.filter(p => p.category === filter);

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
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">Projects</h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${filter === cat
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
                    {project.tech.slice(0, 3).map(t => (
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
                    <h5 className="text-dark font-bold text-xs uppercase tracking-[0.2em] mb-3">What it does</h5>
                    <p className="text-gray-500 font-medium leading-relaxed">{activeProject.problem}</p>
                  </div>
                  <div>
                    <h5 className="text-dark font-bold text-xs uppercase tracking-[0.2em] mb-3">How it works</h5>
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

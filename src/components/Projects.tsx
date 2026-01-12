import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Semantica - E-commerce Semantic Search',
      description: 'E-commerce semantic search optimization with LLM-augmented reranking and measurable evaluation benchmarks. Advanced search system leveraging modern NLP techniques.',
      tech: ['Python', 'LLM', 'Semantic Search', 'NLP', 'Reranking', 'E-commerce'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07/semantica-',
      demo: 'https://github.com/abishake-07/semantica-',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Vector-Borne Diseases Analysis',
      description: 'Exploring robust approaches for Vector Borne Diseases (VBD) datasets with adversarial ML techniques including FGSM, PGD, and Boundary Attack for model robustness testing.',
      tech: ['Python', 'Jupyter', 'Adversarial ML', 'FGSM', 'PGD', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07/vector-borne-diseases',
      demo: 'https://github.com/abishake-07/vector-borne-diseases',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Joops - AI Job Insights Dashboard',
      description: 'Job-Operations dashboard helping users find valuable insights in the AI job market. Provides analytics and trends for AI-related positions.',
      tech: ['Python', 'Data Analytics', 'Dashboard', 'Job Market Analysis', 'Visualization'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07/joops',
      demo: 'https://github.com/abishake-07/joops',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Lending Club Credit Value Analysis',
      description: 'Comprehensive analysis of lending club data for credit risk assessment and value prediction. Data science project for financial analytics.',
      tech: ['Python', 'Jupyter', 'Credit Analysis', 'Risk Assessment', 'Financial ML'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07/lending-club-cva',
      demo: 'https://github.com/abishake-07/lending-club-cva',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Multilingual Chatbot',
      description: 'Experimenting with various approaches to build chatbots with multilingual capabilities. Exploring different NLP architectures and conversation flows.',
      tech: ['Python', 'NLP', 'Chatbot', 'Multilingual', 'Conversational AI'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07/multilingual-chatbot',
      demo: 'https://github.com/abishake-07/multilingual-chatbot',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'GenAI Things',
      description: 'Collection of Generative AI experiments and implementations. Exploring various GenAI techniques, prompting strategies, and model applications.',
      tech: ['Python', 'Jupyter', 'GenAI', 'LLM', 'Prompt Engineering'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07/GenAI-Things',
      demo: 'https://github.com/abishake-07/GenAI-Things',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Sales Data Analytics Dashboard',
      description: 'First data analytics project using Power BI. In-depth analysis of company sales data with interactive visualizations and actionable insights.',
      tech: ['Power BI', 'Data Analytics', 'Sales Analysis', 'Business Intelligence', 'Visualization'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07/sales_data_analytics-',
      demo: 'https://github.com/abishake-07/sales_data_analytics-',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Tudu - Smart ToDo & Expense Tracker',
      description: 'Custom ToDo app with expense tracking capabilities. Combines task management with financial planning for personal productivity.',
      tech: ['Python', 'Task Management', 'Expense Tracking', 'Personal Finance'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07/tudu',
      demo: 'https://github.com/abishake-07/tudu',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/5 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

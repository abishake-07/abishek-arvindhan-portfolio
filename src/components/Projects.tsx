import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Adversarial ML on Vector-Borne Diseases',
      description: 'Engineered a dataset with 64 binary features containing 11 diseases to model vector-borne disease spread. Tested model robustness against adversarial attacks.',
      tech: ['Python', 'PyTorch', 'FGSM', 'PGD', 'Boundary Attack', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07',
      demo: 'https://github.com/abishake-07',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Medical Image Segmentation with W-Net 3D',
      description: 'Automated segmentation of anatomical structures (intra-cochlea, ossicular chain, facial nerve) from clinical CT scans using deep learning architecture.',
      tech: ['PyTorch', 'W-Net 3D', 'Medical Imaging', 'NIfTI', 'Data Augmentation', 'K-Fold CV'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07',
      demo: 'https://github.com/abishake-07',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Industrial Anomaly Detection System',
      description: 'Built serverless ML pipelines for detecting anomalies in chemical plant sensor data. Achieved 40% improvement in operational efficiency.',
      tech: ['AWS Lambda', 'Step Functions', 'Python', 'Time-Series', 'MLOps', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07',
      demo: 'https://github.com/abishake-07',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Turbomachinery Predictive Maintenance',
      description: 'Developed predictive models for wind turbine health monitoring using vibrational sensor data and SHAP for feature interpretability.',
      tech: ['Python', 'Scikit-learn', 'SHAP', 'Kafka', 'Azure', 'Apache Airflow'],
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07',
      demo: 'https://github.com/abishake-07',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Labour Market Knowledge Graph (GLMO)',
      description: 'Designed and extended a knowledge graph to provide structured labour-market data for ML analytics and research insights.',
      tech: ['Python', 'Knowledge Graphs', 'Ontologies', 'Data Analytics', 'EDA'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07',
      demo: 'https://github.com/abishake-07',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Document AI Pipeline - Mortgage Processing',
      description: 'Built automated document processing workflows using Azure Form Recognizer for mortgage document analysis and field extraction.',
      tech: ['Python', 'Azure Form Recognizer', 'OCR', 'Document AI', 'ML Pipeline'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
      github: 'https://github.com/abishake-07',
      demo: 'https://github.com/abishake-07',
      gradient: 'from-indigo-500 to-purple-500'
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

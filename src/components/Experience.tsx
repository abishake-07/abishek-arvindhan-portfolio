import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: 'Data Engineer Intern – AI Services & Anomaly Detection',
      company: 'Covestro AG',
      period: 'Jun 2024 - Present',
      description: 'Working on anomaly detection for chemical plants, analyzing multivariate sensor time-series data and architecting serverless ML pipelines.',
      achievements: [
        'Analyzed sensor data from 10 chemical plants to support ML-based anomaly detection systems',
        'Architected serverless data pipelines using AWS Step Functions, Lambda, ECS, and S3',
        'Implemented CI/CD workflows with automated model training (hourly/daily/on-demand), improving operational efficiency by 40%',
        'Built feature pipelines for time-series data processing and visualization'
      ]
    },
    {
      title: 'Research Assistant – Knowledge Graphs & Pipeline Design',
      company: 'Bundesinstitut für Berufsbildung (BIBB)',
      period: 'Nov 2024 - Present',
      description: 'Designing and extending labour-market knowledge graphs to provide structured data for downstream ML and analytics.',
      achievements: [
        'Designed and extended GLMO knowledge graph for labour-market analytics',
        'Performed exploratory analysis on labour-market data to uncover patterns',
        'Collaborated with researchers to translate complex data into actionable insights',
        'Supported new research directions using knowledge graph technologies'
      ]
    },
    {
      title: 'Data Science Intern – Predictive Analytics',
      company: 'Bosch GmbH',
      period: 'Jun 2023 - Jul 2024',
      description: 'Developed predictive models for turbomachinery components including wind turbines, focusing on health monitoring and performance prediction.',
      achievements: [
        'Built predictive models for turbomachinery health monitoring using vibrational data',
        'Utilized SHAP values to interpret feature importance in component health prediction',
        'Developed data pipeline using Kafka and Azure for high-frequency sensor data storage',
        'Orchestrated CI/CD pipeline with dbt and performed real-time EDA using Apache Airflow',
        'Contributed to robust code structure packaged as a Python library for asset management'
      ]
    },
    {
      title: 'Software Engineer – Document AI & Data Pipelines',
      company: 'Flatworld Solutions',
      period: 'Oct 2021 - Sep 2022',
      description: 'Built document-processing workflows for mortgage documents using Azure Form Recognizer and ML-based prediction systems.',
      achievements: [
        'Annotated 10+ mortgage documents for ML-based loan prediction and credit analysis',
        'Built document-processing workflows on Azure Form Recognizer',
        'Processed image and text-based mortgage documents at scale',
        'Contributed to ML pipeline for automated document field extraction'
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gradient mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Briefcase size={18} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-gray-400">
                      <span className="text-cyan-400 mr-2">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

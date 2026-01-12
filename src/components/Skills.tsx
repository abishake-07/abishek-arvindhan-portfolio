import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, Cpu, Cloud, Palette } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'ML & AI',
      icon: <Brain size={32} />,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Deep Learning', 'Anomaly Detection', 'Computer Vision'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Data & Analytics',
      icon: <Database size={32} />,
      skills: ['SQL', 'Pandas', 'NumPy', 'EDA', 'Matplotlib', 'Seaborn'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Programming',
      icon: <Code size={32} />,
      skills: ['Python', 'SHAP', 'Feature Engineering', 'Model Evaluation', 'Prototyping', 'CI/CD'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={32} />,
      skills: ['AWS Lambda', 'Step Functions', 'ECS', 'S3', 'Azure', 'Docker'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Data Engineering',
      icon: <Cpu size={32} />,
      skills: ['Kafka', 'dbt', 'Apache Airflow', 'ETL Pipelines', 'Data Orchestration', 'Time-Series'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Visualization',
      icon: <Palette size={32} />,
      skills: ['Power BI', 'Matplotlib', 'Seaborn', 'Data Storytelling', 'Dashboards', 'EDA'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            My <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

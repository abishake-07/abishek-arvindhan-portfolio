import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm an M.Sc. Web and Data Science student at the University of Koblenz with a strong focus on 
                production-ready machine learning and computer vision. My experience spans industrial time-series 
                analysis, anomaly detection, and building scalable data pipelines.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With hands-on experience at Covestro, Bosch, and BIBB, I've worked on real-world ML systems—from 
                analyzing sensor data from chemical plants to developing predictive models for turbomachinery. 
                I'm passionate about bridging the gap between research and production.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">What I Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Design and deploy ML models for anomaly detection, predictive analytics, and computer vision
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Build scalable data pipelines using AWS, Kafka, Azure, and modern MLOps tools
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Analyze complex time-series data and develop feature engineering pipelines
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Apply adversarial ML techniques and model interpretability methods (SHAP)
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

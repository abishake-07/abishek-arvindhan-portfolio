import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              Abhishek Arvindhan
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Data Scientist | ML Engineer | Computer Vision Specialist
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            M.Sc. Web and Data Science student specializing in production-focused ML, anomaly detection, 
            and computer vision. Turning research ideas into practical solutions.
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="https://github.com/abishake-07"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-arvindhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:abishekarvind1999@gmail.com"
              className="glass p-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Abhishek's AI assistant. Feel free to ask me about his experience, skills, projects, or education!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response (replace with actual API call later)
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
      return "Abhishek is currently a Data Engineer Intern at Covestro AG, working on anomaly detection for chemical plants. He's also a Research Assistant at BIBB. Previously, he worked at Bosch GmbH on predictive analytics for turbomachinery and at Flatworld Solutions on Document AI pipelines.";
    } else if (lowerQuery.includes('skill') || lowerQuery.includes('technology')) {
      return "Abhishek specializes in Python, PyTorch, TensorFlow, and Scikit-learn for ML. He's experienced with AWS (Lambda, Step Functions, ECS), Kafka, Azure, dbt, and Apache Airflow for data engineering. He also uses SQL, Pandas, and Power BI for analytics.";
    } else if (lowerQuery.includes('project')) {
      return "Notable projects include: Adversarial ML on Vector-Borne Diseases, Medical Image Segmentation with W-Net 3D, Industrial Anomaly Detection System at Covestro, and Labour Market Knowledge Graph (GLMO) at BIBB. Check out the Projects section for details!";
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('hire') || lowerQuery.includes('email')) {
      return "You can reach Abhishek at abishekarvind1999@gmail.com or call +49 1575 4085577. He's based in Koblenz, Germany and available on LinkedIn and GitHub!";
    } else if (lowerQuery.includes('education') || lowerQuery.includes('degree') || lowerQuery.includes('university')) {
      return "Abhishek is pursuing M.Sc. Web and Data Science at University of Koblenz, Germany (Current Grade: 2.4), focusing on Machine Learning, Data Engineering, and Computer Vision. He completed B.E. in Information Science & Technology from JSS Science and Technology University, India.";
    } else if (lowerQuery.includes('anomaly') || lowerQuery.includes('detection')) {
      return "Abhishek has hands-on experience with anomaly detection at Covestro AG, analyzing multivariate sensor time-series from 10 chemical plants. He built serverless ML pipelines using AWS services with automated training schedules, improving operational efficiency by 40%.";
    } else if (lowerQuery.includes('ml') || lowerQuery.includes('machine learning')) {
      return "Abhishek specializes in production-focused ML, including deep learning with PyTorch, anomaly detection, computer vision (W-Net 3D), adversarial ML (FGSM, PGD), and model interpretability using SHAP values. He bridges research and production effectively.";
    } else {
      return "That's an interesting question! Abhishek is a Data Scientist specializing in ML, anomaly detection, and computer vision. Feel free to explore different sections of the portfolio or reach out directly!";
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] glass rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-white/80">Ask me anything!</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-2 rounded-full ${
                    message.sender === 'bot' 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600' 
                      : 'bg-gradient-to-br from-purple-500 to-pink-600'
                  }`}>
                    {message.sender === 'bot' ? <Bot size={20} /> : <User size={20} />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl ${
                    message.sender === 'bot' 
                      ? 'bg-white/5' 
                      : 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="p-2 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Bot size={20} />
                  </div>
                  <div className="bg-white/5 p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

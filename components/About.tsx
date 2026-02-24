import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Brain, TrendingUp, Users } from 'lucide-react';
import { portfolioData } from '../constants/data';

export const About: React.FC = () => {
  const icons = [
    <TrendingUp className="w-8 h-8 text-blue-400" />,
    <Brain className="w-8 h-8 text-purple-400" />,
    <Users className="w-8 h-8 text-teal-400" />
  ];

  return (
    <section id={SectionId.ABOUT} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{portfolioData.about.title}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {portfolioData.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.about.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl transition-colors"
            >
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg shadow-inner">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
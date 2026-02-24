import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { portfolioData } from '../constants/data';

export const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 border-b border-gray-800 pb-8"
        >
             <h2 className="text-4xl md:text-6xl font-bold text-white">
                {portfolioData.skills.title}
            </h2>
            <p className="text-blue-400 font-mono mt-4 md:mt-0">
                {portfolioData.skills.subtitle}
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {portfolioData.skills.list.map((skill, index) => (
            <div key={skill.name} className="relative group">
              <div className="flex justify-between mb-3 items-end">
                <span className="text-white text-lg font-medium tracking-wide group-hover:text-blue-400 transition-colors">
                    {skill.name}
                </span>
                <span className="text-gray-500 font-mono text-sm">{skill.level}%</span>
              </div>
              
              {/* Background Bar */}
              <div className="h-2 w-full bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                {/* Fill Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: "circOut" }}
                  className="h-full relative rounded-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400" />
                    {/* Glow effect on the bar */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[4px]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Tags Cloud */}
        <div className="mt-20">
            <div className="text-center mb-8 text-gray-500 text-sm font-mono uppercase tracking-widest">{portfolioData.skills.secondaryTitle}</div>
            <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.skills.tags.map((tag, i) => (
                <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm cursor-default transition-all hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                {tag}
                </motion.span>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};
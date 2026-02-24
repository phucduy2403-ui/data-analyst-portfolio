import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { SectionId } from '../types';
import { portfolioData } from '../constants/data';

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HERO} 
      className="min-h-screen flex flex-col justify-center items-center relative text-center pt-16 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 px-4"
      >
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md">
           <span className="text-blue-400 font-mono text-xs md:text-sm tracking-widest uppercase">
              • {portfolioData.hero.tagline} •
           </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
            {portfolioData.personal.firstName}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
             .Data
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {portfolioData.personal.shortDesc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-3 bg-white text-black rounded-full font-bold transition-all hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors">{portfolioData.hero.primaryButton}</span>
            </button>
            
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-white/20 hover:border-blue-500/50 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              {portfolioData.hero.secondaryButton}
            </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-white/30 hover:text-white transition-colors w-6 h-6" />
      </motion.div>
    </section>
  );
};
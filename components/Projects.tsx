import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { SectionId, Project } from '../types';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { portfolioData } from '../constants/data';

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.1deg)`; // Vertical tilt
  const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.1deg)`; // Horizontal tilt

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 20); // Sensitivity
    y.set(yPct * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="group relative bg-gray-900/40 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors duration-500 backdrop-blur-sm perspective-1000"
    >
      {/* Hover Gradient Glow */}
      <div 
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20"
      />

      {/* Image */}
      <div className="h-56 overflow-hidden relative rounded-t-2xl">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-20" style={{ transform: "translateZ(20px)" }}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-blue-300 bg-blue-900/20 border border-blue-500/20 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center">
          {project.title}
          <Zap className="w-4 h-4 ml-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex gap-4">
          <a href={project.link} className="flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
          </a>
          <a href={project.link} className="flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
            <Github className="w-4 h-4 mr-2" /> Codebase
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
                {portfolioData.projects.title.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{portfolioData.projects.title.split(" ").slice(1).join(" ")}</span>
            </motion.h2>
            <p className="text-gray-500 max-w-xl mx-auto">
                {portfolioData.projects.subtitle}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.projects.list.map((project, index) => (
             <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Key Initiatives</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Selected Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-xl text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                  <FolderGit2 size={24} />
                </div>
                {project.link && (
                    <a href={project.link} className="text-slate-500 hover:text-primary transition-colors">
                        <ArrowUpRight size={20} />
                    </a>
                )}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
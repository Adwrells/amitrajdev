import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Career Path</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Professional Experience</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-6 md:pl-0 md:px-8">
                  <div className="bg-surface p-6 rounded-xl border border-slate-700/50 hover:border-primary/30 transition-all shadow-lg hover:shadow-primary/5 group">
                    <div className="flex flex-col gap-1 mb-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                      <h5 className="text-lg text-slate-300 font-medium">{exp.company}</h5>
                      <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-2">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
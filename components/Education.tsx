import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Academic Background</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Education</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="bg-slate-700/50 p-4 rounded-full text-primary mb-6">
                <GraduationCap size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
              <h5 className="text-lg text-primary mb-1">{edu.institution}</h5>
              <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-400 border border-slate-700 mb-4">
                {edu.period}
              </span>
              {edu.details && (
                <p className="text-slate-400 text-sm leading-relaxed">
                  {edu.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { CheckCircle2, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="mb-10">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Expertise</h2>
              <h3 className="text-3xl font-display font-bold text-white">Technical Skills</h3>
            </div>

            <div className="space-y-8">
              {SKILLS.map((category) => (
                <div key={category.title}>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:text-white hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Credentials</h2>
              <h3 className="text-3xl font-display font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{cert.name}</h4>
                    {cert.issuer && (
                      <p className="text-sm text-slate-400 mt-1">{cert.issuer}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-2">Always Learning</h4>
              <p className="text-slate-300 text-sm mb-4">
                Currently pursuing a Master's in Data Analytics to deepen my expertise in statistical modeling and big data technologies.
              </p>
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-mono text-primary uppercase">Active Student</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
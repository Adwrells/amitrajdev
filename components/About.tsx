import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Database, Terminal, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Engineering Logic meets Data Strategy</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors">
              <Database className="text-primary mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Data Analytics</h4>
              <p className="text-slate-400 text-sm">Transforming complex datasets into clear, actionable business intelligence using SQL and Python.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors">
              <Terminal className="text-primary mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Development</h4>
              <p className="text-slate-400 text-sm">Automating workflows and building visualization tools with code and modern frameworks.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors">
              <Shield className="text-primary mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">IT Infrastructure</h4>
              <p className="text-slate-400 text-sm">Ensuring robust security and networking uptime for critical business operations.</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
              {PERSONAL_INFO.keyFacts.map((fact, index) => (
                <div key={index}>
                  <p className="text-slate-500 text-sm uppercase tracking-wider mb-1">{fact.label}</p>
                  <p className="text-xl font-bold text-white">{fact.value}</p>
                </div>
              ))}
              <div>
                 <p className="text-slate-500 text-sm uppercase tracking-wider mb-1">Education</p>
                 <p className="text-xl font-bold text-white">Master's</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
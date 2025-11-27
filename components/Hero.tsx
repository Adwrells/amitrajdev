import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

// Add your image filenames here
const profileImages = [
  '/images/profile.jpg'
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white leading-tight mb-6">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary font-medium mb-6">
            {PERSONAL_INFO.role}
          </h2>
          
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            {PERSONAL_INFO.tagline} Based in <span className="text-slate-200 inline-flex items-center gap-1"><MapPin size={16} />{PERSONAL_INFO.location}</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="px-8 py-3 bg-primary text-slate-900 font-bold rounded-lg hover:bg-primary-dark transition-all flex items-center gap-2 group cursor-pointer"
            >
              Contact Me 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/CV_2025_DA_Amit Raj Dev.pdf" 
              download
              className="px-8 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              Download CV 
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-80 h-96 mx-auto">
            <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence>
                <motion.img
                  key={currentImageIndex}
                  src={profileImages[currentImageIndex]}
                  alt="Amit Raj Dev"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
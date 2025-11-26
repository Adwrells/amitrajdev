import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold font-display text-slate-100 tracking-tighter">
            ARD<span className="text-primary">.</span>
          </span>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-primary hover:bg-slate-700 transition-all border border-slate-700"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
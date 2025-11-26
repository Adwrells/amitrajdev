import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Get in Touch</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-6">Let's Work Together</h3>
            <p className="text-slate-400 text-lg mb-12">
              I'm always open to discussing product design work or partnership opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors group">
                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Email</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Phone</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors group">
                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">LinkedIn</p>
                  <p className="text-white font-medium">Connect with me</p>
                </div>
              </a>

               <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Location</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Project inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-slate-900 font-bold py-4 rounded-lg hover:bg-primary-dark transition-all flex justify-center items-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
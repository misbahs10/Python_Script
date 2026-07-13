import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  BrainCircuit, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  CheckCircle,
  Loader2
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
      setEmail('');
      // Store in localStorage
      const subs = JSON.parse(localStorage.getItem('newsletter_subs') || '[]');
      subs.push({ email, date: new Date().toISOString() });
      localStorage.setItem('newsletter_subs', JSON.stringify(subs));
    }, 1500);
  };

  return (
    <footer id="portfolio-footer-section" className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2 text-left group"
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all">
                <BrainCircuit className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="block font-sans text-lg font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  ML Vision Hub
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold -mt-1">
                  AI Solutions Portfolio
                </span>
              </div>
            </button>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Developing state-of-the-art predictive frameworks, neural models, and scalable analytical pipelines to transform unstructured operational records into tangible enterprise assets.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/misbahsajjad23' },
                { icon: <Github className="w-4 h-4" />, href: 'https://github.com/misbahs10/Python-ML-Lab.git' },
                { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-400 transition-all border border-slate-700/50"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About ML' },
                { id: 'projects', label: 'ML Projects' },
                { id: 'datasets', label: 'Free Datasets' },
                { id: 'blog', label: 'Tech Blog' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveTab(link.id)}
                    className="hover:text-blue-400 transition-colors text-left font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-white">Core Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                'Data Cleaning & Prep',
                'Exploratory Data Analysis',
                'Deep Learning Networks',
                'Natural Language Processing',
                'Computer Vision Systems',
                'Model Microservices'
              ].map((serv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveTab('services')}
                    className="hover:text-blue-400 transition-colors text-left font-medium"
                  >
                    {serv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-white">Stay Tuned</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to my monthly newsletter to receive raw ML research papers, free datasets, and code tutorial assets.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting || subscribed}
                  className="w-full bg-slate-800 text-white placeholder-slate-500 border border-slate-700/80 pl-4 pr-10 py-2.5 rounded-xl text-xs outline-none focus:border-blue-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={submitting || subscribed}
                  className="absolute right-1.5 top-1.5 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-lg transition-all"
                >
                  {submitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <AnimatePresence>
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    Subscription activated! Check your inbox soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>San Francisco, California</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>contact@mlvisionhub.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-slate-500">
          <p>© 2026 ML Vision Hub. All rights reserved. Designed for AI & ML solutions excellence.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button onClick={() => setActiveTab('faq')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => setActiveTab('faq')} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={() => setActiveTab('faq')} className="hover:text-slate-300">Sitemap</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

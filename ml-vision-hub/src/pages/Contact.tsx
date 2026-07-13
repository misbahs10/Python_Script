import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Compass, 
  Globe2,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate contact submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Store locally
      const inquiries = JSON.parse(localStorage.getItem('contact_inquiries') || '[]');
      inquiries.push({ name, email, subject, message, newsletter, date: new Date().toISOString() });
      localStorage.setItem('contact_inquiries', JSON.stringify(inquiries));
    }, 1500);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <div className="space-y-16 pb-20 pt-28">
      
      {/* HEADER STATEMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Initiate Consultation
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
          Ready to standardise your organizational training pipelines? Connect with me directly to schedule a technical architecture review.
        </p>
      </section>

      {/* TWO COLUMN GRID: INFO + MAP / FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: CONTACT CARDS & DYNAMIC VECTOR MAP */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Detailed specifications */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6 md:p-8 rounded-3xl space-y-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Consultation Details
            </h3>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-350">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase font-bold text-slate-400">Headquarters</span>
                  <span className="block font-semibold">145 Mission St, San Francisco, CA 94103</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase font-bold text-slate-400">Secure Inbox</span>
                  <span className="block font-semibold">contact@mlvisionhub.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase font-bold text-slate-400">Direct Comms</span>
                  <span className="block font-semibold">+1 (415) 555-0196</span>
                </div>
              </div>
            </div>

            {/* Social Coordinates */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-850 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">Social Channels:</h4>
              <div className="flex items-center gap-2">
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
                    className="p-3 bg-slate-50 hover:bg-blue-600 dark:bg-slate-950 dark:hover:bg-blue-600 rounded-xl text-slate-400 hover:text-white border border-slate-200/20 dark:border-slate-800/40 transition-all cursor-pointer"
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* DYNAMIC VECTOR SVG MAP PLACEHOLDER */}
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
            {/* SVG Vector map decoration */}
            <svg viewBox="0 0 300 150" className="w-full h-auto opacity-40 overflow-visible">
              <defs>
                <pattern id="grid-map" width="15" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 15 0 L 0 0 0 15" fill="none" className="stroke-slate-300 dark:stroke-slate-800" strokeWidth="0.5" />
                </pattern>
              </defs>
              {/* Grid Background */}
              <rect width="100%" height="100%" fill="url(#grid-map)" />

              {/* Simulated topological vector contour lines */}
              <path d="M 20 80 Q 70 30 150 110 T 280 40" fill="none" className="stroke-blue-500/20" strokeWidth="1.5" />
              <path d="M 50 120 Q 120 70 180 130 T 260 90" fill="none" className="stroke-purple-500/20" strokeWidth="1" />

              {/* Tactical coordinate circle */}
              <circle cx="150" cy="75" r="40" fill="none" className="stroke-slate-300 dark:stroke-slate-750" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="150" cy="75" r="12" fill="none" className="stroke-blue-500/50" strokeWidth="1.5" />
              
              {/* Spinning radar beam decoration */}
              <line x1="150" y1="75" x2="185" y2="55" className="stroke-blue-500 origin-[150px_75px] animate-[spin_4s_linear_infinite]" strokeWidth="2" />
            </svg>

            {/* Geographical coordinates metadata */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1">
                  <Compass className="w-3 h-3 text-blue-500 animate-spin" />
                  SF Latent Node
                </span>
                <span className="text-[9px] font-mono text-slate-400">37.7749° N, 122.4194° W</span>
              </div>
              <div className="text-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-150 dark:border-slate-850 p-2.5 rounded-xl self-center max-w-[180px] shadow-sm">
                <span className="block text-[10px] font-bold text-slate-800 dark:text-white">ML Vision Hub HQ</span>
                <span className="block text-[8px] font-mono text-slate-400 uppercase">Operational Node</span>
              </div>
              <div className="flex items-center gap-1 text-[8px] font-mono uppercase text-slate-400">
                <Globe2 className="w-3 h-3 text-purple-500" />
                Silicon Valley Grid
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: CONSULTATION FORM */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6 md:p-8 rounded-3xl shadow-sm relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Full Name:
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. Dr. Alexis Vance"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Corporate Email:
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. alexis@vance.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Subject Matter:
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="e.g. Predictive Underwriting Estimator Stack"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm outline-none focus:border-blue-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Consultation Request & Details:
                    </label>
                    <textarea
                      required
                      disabled={isSubmitting}
                      placeholder="Detail your dataset layout and target prediction outcomes..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm outline-none focus:border-blue-500 resize-none transition-all"
                    />
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="newsletter-chk"
                      disabled={isSubmitting}
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="w-4 h-4 accent-blue-600 rounded"
                    />
                    <label htmlFor="newsletter-chk" className="text-xs text-slate-500 dark:text-slate-400 select-none cursor-pointer">
                      Yes, enroll my email in the ML newsletter to receive preprocessed datasets.
                    </label>
                  </div>

                  {/* Submit trigger */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Synchronizing matrices...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request Coordinates
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                /* SUCCESS PANEL */
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 rounded-full animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      Request Coordinates Transmitted!
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                      Thank you, <span className="font-bold text-slate-800 dark:text-white">{name}</span>. Your request regarding <span className="font-bold text-slate-850 dark:text-white">"{subject}"</span> is logged on our system index.
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                    A secure developer pipeline invitation has been triggered to <span className="font-mono text-blue-500 font-semibold">{email}</span>. Please verify your inbox soon.
                  </p>

                  <button
                    onClick={handleResetForm}
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-semibold py-2.5 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </section>

    </div>
  );
}

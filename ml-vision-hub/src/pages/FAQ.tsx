import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Brain,
  MessageCircleQuestion
} from 'lucide-react';
import { FAQS } from '../data';
import { FAQItem } from '../types';

export function FAQ() {
  const [activeFAQId, setActiveFAQId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveFAQId(activeFAQId === id ? null : id);
  };

  return (
    <div className="space-y-16 pb-20 pt-28">
      
      {/* HEADER STATEMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          Clear, definitive answers to common inquiries regarding model tuning, pipeline designs, and deep learning architectures.
        </p>
      </section>

      {/* ACCORDIONS LIST */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = activeFAQId === faq.id;

            return (
              <div 
                key={faq.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans text-sm sm:text-base font-bold text-slate-850 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-850 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircleQuestion className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>

                {/* Accordion content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed space-y-3">
                        <p>{faq.answer}</p>
                        <span className="inline-block text-[9px] font-mono font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md">
                          Domain: {faq.category}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>
      </section>

      {/* LOWER ASSURANCE CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-full">
            <Brain className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Have a highly custom engineering query?</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            If your question concerns custom neural networks, specific multi-modal embeddings, or enterprise dataset migrations, submit our contact form to open a direct developer channel.
          </p>
        </div>
      </section>

    </div>
  );
}

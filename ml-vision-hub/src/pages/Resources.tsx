import React, { useState } from 'react';
import { 
  BookOpen, 
  Terminal, 
  Layers, 
  Users, 
  ArrowUpRight, 
  HelpCircle 
} from 'lucide-react';
import { RESOURCES } from '../data';
import { MLResource } from '../types';

export function Resources() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Books' | 'Tutorials' | 'Libraries' | 'Community'>('All');

  const categories: ('All' | 'Books' | 'Tutorials' | 'Libraries' | 'Community')[] = [
    'All', 'Books', 'Tutorials', 'Libraries', 'Community'
  ];

  const filteredResources = activeCategory === 'All'
    ? RESOURCES
    : RESOURCES.filter(res => res.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Books': return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'Tutorials': return <Terminal className="w-5 h-5 text-purple-500" />;
      case 'Libraries': return <Layers className="w-5 h-5 text-cyan-500" />;
      case 'Community': return <Users className="w-5 h-5 text-rose-500" />;
      default: return <HelpCircle className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-16 pb-20 pt-28">
      
      {/* HEADER STATEMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          ML Study Library
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          Curated reference materials, textbook resources, core open-source packages, and global data communities to streamline your machine learning journey.
        </p>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl gap-1 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((res) => (
            <div 
              key={res.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all space-y-6"
            >
              
              <div className="space-y-4">
                {/* Header icon and category label */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-850 rounded-xl">
                    {getCategoryIcon(res.category)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 px-2.5 py-1 rounded-full">
                    {res.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                    {res.title}
                  </h3>
                  <span className="block text-[11px] text-slate-400 font-semibold font-sans">
                    By: {res.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {res.description}
                </p>
              </div>

              {/* URL link button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-850">
                <a
                  href={res.url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Access Resource
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* LOWER STATISTICAL RESOURCE COMPLIANCE BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Looking to submit study assets?</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            I continuously update this catalog with open-source reference manuals. If you authored a practical ML paper or created a clean notebook asset you'd like to feature, contact us.
          </p>
        </div>
      </section>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Search, 
  ArrowRight, 
  BookOpen, 
  User, 
  ChevronLeft 
} from 'lucide-react';
import { BLOGS } from '../data';
import { BlogPost } from '../types';

interface BlogProps {
  selectedBlogFilter?: string | null;
  setSelectedBlogFilter?: (id: string | null) => void;
}

export function Blog({ selectedBlogFilter, setSelectedBlogFilter }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Focus a specific post if navigated via global search
  useEffect(() => {
    if (selectedBlogFilter) {
      const matched = BLOGS.find(b => b.id === selectedBlogFilter);
      if (matched) {
        setActiveCategory('All');
        setActivePost(matched);
      }
    }
  }, [selectedBlogFilter]);

  const categories = ['All', 'Foundations', 'Algorithms', 'Neural Networks', 'Practices'];

  const filteredPosts = BLOGS.filter(post => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-16 pb-20 pt-28">
      
      <AnimatePresence mode="wait">
        {!activePost ? (
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            {/* HEADER STATEMENT */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                ML & Deep Learning Log
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                Technical articles detailing algorithmic optimizations, neural layouts, clean data practices, and explainable AI paradigms.
              </p>
            </section>

            {/* FILTER & SEARCH */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-100 dark:border-slate-850 pb-6">
              {/* Category tabs */}
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl gap-1 overflow-x-auto max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all shrink-0 cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 pl-10 pr-4 py-2.5 rounded-xl text-xs outline-none focus:border-blue-500"
                />
              </div>
            </section>

            {/* ARTICLE GRID */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20 text-slate-400 text-sm">
                  No analytical posts match your search or category selection.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <div 
                      id={`blog-${post.id}`}
                      key={post.id}
                      className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                      onClick={() => setActivePost(post)}
                    >
                      {/* Image header */}
                      <div className="relative h-44 overflow-hidden shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-4 left-4 text-[9px] font-mono uppercase bg-slate-900/90 text-white px-2.5 py-1 rounded-full font-bold">
                          {post.category}
                        </span>
                      </div>

                      {/* Details Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2.5">
                          {/* Temporal stats */}
                          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 font-bold">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Read more button */}
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                            <User className="w-3.5 h-3.5" />
                            <span>{post.author}</span>
                          </div>
                          <button className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                            Read article
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </section>
          </motion.div>
        ) : (
          /* SINGLE FULL POST READ VIEW */
          <motion.div
            key="blog-detail"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8"
          >
            {/* Back button */}
            <button
              onClick={() => {
                setActivePost(null);
                if (setSelectedBlogFilter) setSelectedBlogFilter(null);
              }}
              className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 py-2.5 px-4 rounded-xl cursor-pointer w-fit"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to all logs
            </button>

            {/* Title Block */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400 tracking-widest">
                {activePost.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {activePost.title}
              </h1>

              <div className="flex items-center gap-6 pt-2 text-xs font-mono text-slate-400 font-bold border-y border-slate-100 dark:border-slate-850 py-3">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {activePost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {activePost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {activePost.readTime}
                </span>
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/40">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content paragraph blocks */}
            <div className="space-y-5 text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {activePost.content.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* End Author Signoff */}
            <div className="pt-8 mt-12 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-extrabold">
                <BookOpen className="w-5.5 h-5.5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Author Profile: {activePost.author}</h4>
                <p className="text-xs text-slate-400">Principal algorithm designer and production pipelines lead at ML Vision Hub.</p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

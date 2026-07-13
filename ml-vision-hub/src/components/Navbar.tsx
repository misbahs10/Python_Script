import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Search, 
  BrainCircuit, 
  ChevronRight, 
  Database, 
  FolderGit2, 
  BookOpen, 
  Cpu 
} from 'lucide-react';
import { SERVICES, PROJECTS, DATASETS, BLOGS } from '../data';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  setSearchFilter?: (text: string) => void;
  setSelectedProjectFilter?: (id: string | null) => void;
  setSelectedBlogFilter?: (id: string | null) => void;
}

export function Navbar({ 
  activeTab, 
  setActiveTab, 
  darkMode, 
  toggleDarkMode,
  setSearchFilter,
  setSelectedProjectFilter,
  setSelectedBlogFilter
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Detect scroll to make navbar sticky and glassmorphic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'datasets', label: 'Datasets' },
    { id: 'blog', label: 'Blog' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  // Perform search across datasets, projects, blogs, services
  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results: { type: 'project' | 'blog' | 'service' | 'dataset'; id: string; title: string; category: string }[] = [];

    SERVICES.forEach(s => {
      if (s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)) {
        results.push({ type: 'service', id: s.id, title: s.title, category: 'Services' });
      }
    });

    PROJECTS.forEach(p => {
      if (p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query))) {
        results.push({ type: 'project', id: p.id, title: p.title, category: p.category });
      }
    });

    DATASETS.forEach(d => {
      if (d.name.toLowerCase().includes(query) || d.description.toLowerCase().includes(query)) {
        results.push({ type: 'dataset', id: d.id, title: d.name, category: 'Datasets' });
      }
    });

    BLOGS.forEach(b => {
      if (b.title.toLowerCase().includes(query) || b.excerpt.toLowerCase().includes(query) || b.category.toLowerCase().includes(query)) {
        results.push({ type: 'blog', id: b.id, title: b.title, category: b.category });
      }
    });

    return results.slice(0, 5); // Limit to top 5 results
  };

  const searchResults = getSearchResults();

  const handleSearchResultClick = (type: string, id: string) => {
    setSearchQuery('');
    setSearchOpen(false);
    
    if (type === 'service') {
      setActiveTab('services');
      setTimeout(() => {
        const el = document.getElementById(`service-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    } else if (type === 'project') {
      setActiveTab('projects');
      if (setSelectedProjectFilter) setSelectedProjectFilter(id);
      setTimeout(() => {
        const el = document.getElementById(`project-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    } else if (type === 'dataset') {
      setActiveTab('datasets');
      setTimeout(() => {
        const el = document.getElementById(`dataset-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    } else if (type === 'blog') {
      setActiveTab('blog');
      if (setSelectedBlogFilter) setSelectedBlogFilter(id);
      setTimeout(() => {
        const el = document.getElementById(`blog-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-100 dark:bg-slate-900 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
          style={{
            scaleX: scrolled ? 1 : 0,
            transformOrigin: '0%',
          }}
          animate={{
            scaleX: scrolled ? undefined : 0
          }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all">
              <BrainCircuit className="w-5.5 h-5.5 animate-pulse" />
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-left">
              <span className="block font-sans text-lg font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                ML Vision Hub
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold -mt-1">
                AI Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/50 dark:bg-slate-900/30 p-1 rounded-full border border-slate-200/40 dark:border-slate-800/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md shadow-blue-600/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Secondary controls (Search, Theme Toggle, Mobile Menu) */}
          <div className="flex items-center gap-2">
            
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 dark:text-slate-400 transition-all cursor-pointer"
              aria-label="Open Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 dark:text-slate-400 transition-all cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 dark:text-slate-400 transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Global Search Overlay Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden p-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search algorithms, models, datasets, or blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white text-sm"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchOpen(false);
                  }}
                  className="text-xs font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Realtime Results */}
              <div className="space-y-1 max-h-[300px] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="py-6 text-center text-slate-400 text-xs">
                    Type keywords like <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">XGBoost</span>,{' '}
                    <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">cleaning</span>, or{' '}
                    <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">Regression</span>...
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="py-6 text-center text-slate-400 text-xs">
                    No ML elements match your query. Try searching for "Regression", "Heart", "Spam", or "BERT".
                  </div>
                ) : (
                  searchResults.map((res, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchResultClick(res.type, res.id)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-left"
                    >
                      <div className="flex items-center gap-3">
                        {res.type === 'service' && <Cpu className="w-4 h-4 text-blue-500" />}
                        {res.type === 'project' && <FolderGit2 className="w-4 h-4 text-purple-500" />}
                        {res.type === 'dataset' && <Database className="w-4 h-4 text-cyan-500" />}
                        {res.type === 'blog' && <BookOpen className="w-4 h-4 text-rose-500" />}
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{res.title}</p>
                          <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                            {res.category}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-[260px] bg-white dark:bg-slate-950 shadow-2xl p-6 flex flex-col pt-24 border-l border-slate-200/50 dark:border-slate-800/40"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUp, 
  BrainCircuit, 
  Terminal, 
  CheckCircle2, 
  Activity 
} from 'lucide-react';

// Import Components & Pages
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Datasets } from './pages/Datasets';
import { Blog } from './pages/Blog';
import { Resources } from './pages/Resources';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Default to dark mode for a professional AI/ML look
    const stored = localStorage.getItem('theme_mode');
    if (stored === 'light') return false;
    return true; // default dark
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Search filter references to auto-focus specific projects/blogs
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<string | null>(null);
  const [selectedBlogFilter, setSelectedBlogFilter] = useState<string | null>(null);

  // Boot telemetry messages for the loading screen
  const [bootStep, setBootStep] = useState(0);
  const bootMessages = [
    'Initializing neural standardizers...',
    'Loading deep classification weights...',
    'Compiling gradient boosted trees...',
    'Optimizing sub-millisecond API runtimes...',
    'Inference engine online.'
  ];

  // Simulated Boot Sequence
  useEffect(() => {
    let timer: any = null;
    if (bootStep < bootMessages.length - 1) {
      timer = setTimeout(() => {
        setBootStep(prev => prev + 1);
      }, 250);
    } else {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
    return () => clearTimeout(timer);
  }, [bootStep]);

  // Handle HTML document theme classes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme_mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme_mode', 'light');
    }
  }, [darkMode]);

  // Scroll visibility for scroll-to-top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on active page/tab transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 antialiased overflow-x-hidden selection:bg-blue-600/30">
      
      {/* 1. INITIAL RUNTIME LOADING SEQUENCE */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#07090e] z-50 flex flex-col items-center justify-center p-6 text-white"
          >
            <div className="space-y-8 max-w-sm w-full text-center flex flex-col items-center">
              
              {/* Spinning pulsing Brain Circuit */}
              <div className="relative w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 animate-pulse">
                <BrainCircuit className="w-9 h-9 animate-[spin_6s_linear_infinite]" />
              </div>

              {/* Loader info */}
              <div className="space-y-3 w-full">
                <h2 className="text-lg font-extrabold tracking-tight font-sans">
                  ML Vision Hub Engine
                </h2>
                <div className="flex items-center justify-center gap-2 text-xs text-blue-400 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="min-h-[1.5rem] inline-block">{bootMessages[bootStep]}</span>
                </div>
                {/* Micro ProgressBar */}
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-300"
                    style={{ width: `${((bootStep + 1) / bootMessages.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 uppercase tracking-widest pt-2">
                <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-500" />
                Secure Compilation Active
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THE PORTFOLIO LAYOUT MAIN WINDOW */}
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          
          {/* Navigation bar */}
          <Navbar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            setSelectedProjectFilter={setSelectedProjectFilter}
            setSelectedBlogFilter={setSelectedBlogFilter}
          />

          {/* Core Dynamic Content Pages Container */}
          <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'home' && (
                  <Home 
                    setActiveTab={setActiveTab} 
                    setSelectedProjectFilter={setSelectedProjectFilter}
                  />
                )}
                {activeTab === 'about' && <About />}
                {activeTab === 'services' && <Services />}
                {activeTab === 'projects' && (
                  <Projects 
                    selectedProjectFilter={selectedProjectFilter}
                    setSelectedProjectFilter={setSelectedProjectFilter}
                  />
                )}
                {activeTab === 'datasets' && <Datasets />}
                {activeTab === 'blog' && (
                  <Blog 
                    selectedBlogFilter={selectedBlogFilter}
                    setSelectedBlogFilter={setSelectedBlogFilter}
                  />
                )}
                {activeTab === 'resources' && <Resources />}
                {activeTab === 'faq' && <FAQ />}
                {activeTab === 'contact' && <Contact />}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Professional standard footer */}
          <Footer setActiveTab={setActiveTab} />

          {/* 3. SCROLL-TO-TOP FLOATING ACTION TRIGGER */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={handleScrollToTop}
                className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl shadow-blue-500/20 z-40 transition-all cursor-pointer hover:scale-105 hover:-translate-y-0.5 border border-blue-500"
                aria-label="Scroll to top of viewport"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      )}

    </div>
  );
}

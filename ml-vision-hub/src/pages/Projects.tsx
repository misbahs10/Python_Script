import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  Terminal, 
  HelpCircle,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  selectedProjectFilter?: string | null;
  setSelectedProjectFilter?: (id: string | null) => void;
}

export function Projects({ selectedProjectFilter, setSelectedProjectFilter }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [simulatingProject, setSimulatingProject] = useState<Project | null>(null);

  // Simulation inputs
  const [houseArea, setHouseArea] = useState<number>(1800);
  const [houseQual, setHouseQual] = useState<number>(7);
  const [houseCars, setHouseCars] = useState<number>(2);
  const [houseEst, setHouseEst] = useState<number | null>(null);

  const [churnCost, setChurnCost] = useState<number>(75);
  const [churnTenure, setChurnTenure] = useState<number>(12);
  const [churnTickets, setChurnTickets] = useState<number>(2);
  const [churnProb, setChurnProb] = useState<number | null>(null);

  const [emailText, setEmailText] = useState<string>('');
  const [emailClass, setEmailClass] = useState<'spam' | 'ham' | null>(null);
  const [emailConfidence, setEmailConfidence] = useState<number | null>(null);

  // If a global search navigated here, auto-trigger a focus
  useEffect(() => {
    if (selectedProjectFilter) {
      const matched = PROJECTS.find(p => p.id === selectedProjectFilter);
      if (matched) {
        setActiveCategory('All');
        setSimulatingProject(matched);
      }
    }
  }, [selectedProjectFilter]);

  const categories = ['All', 'Regression', 'Classification', 'NLP', 'Computer Vision', 'Time Series'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory || (activeCategory === 'NLP' && p.category === 'NLP') || (activeCategory === 'Computer Vision' && p.category === 'Computer Vision') || (activeCategory === 'Time Series' && p.category === 'Time Series'));

  // Run simulated house price predictor
  const handlePredictHouse = (e: React.FormEvent) => {
    e.preventDefault();
    // Base intercept: $80,000 + area * $110 + qual * $18,000 + cars * $12,000
    const price = 80000 + (houseArea * 115) + (houseQual * 19500) + (houseCars * 13000);
    setHouseEst(price);
  };

  // Run simulated churn predictor
  const handlePredictChurn = (e: React.FormEvent) => {
    e.preventDefault();
    // Churn prob increases with high tickets, high cost, low tenure
    // base: 10%
    let prob = 10;
    prob += churnCost * 0.4; // up to +40%
    prob += churnTickets * 12; // up to +60%
    prob -= churnTenure * 0.8; // reduces risk up to -50%
    const finalProb = Math.min(Math.max(prob, 2), 98.5); // Bound between 2% and 98.5%
    setChurnProb(finalProb);
  };

  // Run simulated email classifier
  const handlePredictEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const txt = emailText.toLowerCase();
    
    // Spam indicators
    const spamWords = ['offer', 'credit', 'free', 'wire', 'urgent', 'winner', 'million', 'bitcoin', 'crypto', 'unsecured', 'claims', 'inherited', 'gift'];
    let spamCount = 0;
    spamWords.forEach(word => {
      if (txt.includes(word)) spamCount++;
    });

    if (spamCount > 0 || txt.includes('$$$') || txt.includes('earn money')) {
      setEmailClass('spam');
      const conf = Math.min(75 + spamCount * 8, 99.2);
      setEmailConfidence(conf);
    } else if (txt.length < 5) {
      setEmailClass(null);
      setEmailConfidence(null);
    } else {
      setEmailClass('ham');
      setEmailConfidence(94.5);
    }
  };

  const handleResetSimulator = () => {
    setHouseEst(null);
    setChurnProb(null);
    setEmailClass(null);
    setEmailConfidence(null);
    setEmailText('');
  };

  return (
    <div className="space-y-16 pb-20 pt-28">
      
      {/* HEADER STATEMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Algorithmic Portfolio
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          Explore a vetted catalog of Machine Learning systems. Click on any model's **Run Simulator** button to test predictions dynamically with raw custom vectors.
        </p>
      </section>

      {/* CATEGORY SELECTOR TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl gap-1 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                if (setSelectedProjectFilter) setSelectedProjectFilter(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                id={`project-${project.id}`}
                key={project.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 text-[9px] font-mono uppercase font-bold tracking-wider bg-blue-600/90 text-white px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metric Chips */}
                    <div className="flex gap-2 border-y border-slate-100 dark:border-slate-800/60 py-2.5">
                      {project.metrics.map((met, mIdx) => (
                        <div key={mIdx} className="flex-1 text-center">
                          <span className="block text-[9px] font-mono uppercase text-slate-400 font-bold">
                            {met.name}
                          </span>
                          <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                            {met.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Realistic Highlight Bullet Points */}
                    <div className="space-y-1.5 pt-1.5">
                      {project.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags and Action triggers */}
                  <div className="space-y-4 pt-4">
                    {/* Tags list */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-mono font-bold uppercase bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-850">
                      <button
                        onClick={() => {
                          handleResetSimulator();
                          setSimulatingProject(project);
                        }}
                        className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-blue-600/10"
                      >
                        <Play className="w-3.5 h-3.5" />
                        Run Simulator
                      </button>
                      <div className="flex gap-1.5">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-semibold py-2.5 rounded-xl transition-all"
                          title="View Source on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </a>
                        <a
                          href={project.liveUrl}
                          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-semibold py-2.5 rounded-xl transition-all"
                          title="View Live Demonstration"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* LIVE INFERENCE SIMULATOR DRAWER MODAL */}
      <AnimatePresence>
        {simulatingProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                      Runtime Simulator
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      {simulatingProject.title}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSimulatingProject(null)}
                  className="text-xs font-extrabold text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer bg-slate-100 dark:bg-slate-800 p-2 rounded-full"
                >
                  Close
                </button>
              </div>

              {/* Form Input fields depending on project ID */}
              <div className="space-y-6">
                
                {simulatingProject.id === 'house-price-prediction' && (
                  <form onSubmit={handlePredictHouse} className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      This XGBoost simulator evaluates three continuous structural parameters to forecast house prices, applying target-guided spatial weights.
                    </p>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Above-Ground Living Area (Sq Ft):
                      </label>
                      <input
                        type="number"
                        min="500"
                        max="6000"
                        required
                        value={houseArea}
                        onChange={(e) => setHouseArea(Number(e.target.value))}
                        className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Overall Material Quality Rating (1 - 10):
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={houseQual}
                        onChange={(e) => setHouseQual(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                        <span>1 (Poor)</span>
                        <span className="font-bold text-blue-500">Current: {houseQual}</span>
                        <span>10 (Excellent)</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Garage Car Capacity:
                      </label>
                      <select
                        value={houseCars}
                        onChange={(e) => setHouseCars(Number(e.target.value))}
                        className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm outline-none"
                      >
                        <option value={0}>0 Cars</option>
                        <option value={1}>1 Car</option>
                        <option value={2}>2 Cars</option>
                        <option value={3}>3 Cars</option>
                        <option value={4}>4 Cars</option>
                      </select>
                    </div>

                    <div className="pt-2 flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        Run Inference Estimation
                      </button>
                      <button
                        type="button"
                        onClick={handleResetSimulator}
                        className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 p-3 rounded-xl transition-all"
                        title="Reset Inputs"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {simulatingProject.id === 'customer-churn-prediction' && (
                  <form onSubmit={handlePredictChurn} className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Evaluate active telco subscriptions to estimate churn probabilities based on billing metrics, customer support cases, and tenure parameters.
                    </p>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Monthly Cost of Contract ($):
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="250"
                        required
                        value={churnCost}
                        onChange={(e) => setChurnCost(Number(e.target.value))}
                        className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Subscriber Tenure Duration (Months):
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="72"
                        required
                        value={churnTenure}
                        onChange={(e) => setChurnTenure(Number(e.target.value))}
                        className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Support Tickets Filed (Last 30 Days):
                      </label>
                      <select
                        value={churnTickets}
                        onChange={(e) => setChurnTickets(Number(e.target.value))}
                        className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm outline-none"
                      >
                        <option value={0}>0 Tickets (No Issues)</option>
                        <option value={1}>1 Ticket</option>
                        <option value={2}>2 Tickets</option>
                        <option value={3}>3 Tickets</option>
                        <option value={5}>5 Tickets (Critical Issues)</option>
                        <option value={8}>8 Tickets (Severe Friction)</option>
                      </select>
                    </div>

                    <div className="pt-2 flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        Run Classification Inference
                      </button>
                      <button
                        type="button"
                        onClick={handleResetSimulator}
                        className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 p-3 rounded-xl transition-all"
                        title="Reset Inputs"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {simulatingProject.id !== 'house-price-prediction' && simulatingProject.id !== 'customer-churn-prediction' && (
                  <form onSubmit={handlePredictEmail} className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Input text representing messages or headlines to run our lexical Naïve Bayes TF-IDF validator.
                    </p>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Document / Message Body Content:
                      </label>
                      <textarea
                        required
                        placeholder="Type some promotional text like 'WIN A FREE GIFT CARD TODAY URGENT OFFER' or a normal greeting..."
                        rows={4}
                        value={emailText}
                        onChange={(e) => setEmailText(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl text-sm resize-none outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="pt-2 flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        Run Text Classification
                      </button>
                      <button
                        type="button"
                        onClick={handleResetSimulator}
                        className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 p-3 rounded-xl transition-all"
                        title="Reset Inputs"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* RESULTS OUTPUT PANEL */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-6">
                  {houseEst !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 p-4 rounded-2xl text-center space-y-1.5"
                    >
                      <span className="block text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-bold">
                        REGRESSION ESTIMATION OUTPUT
                      </span>
                      <h4 className="text-2xl font-black font-mono text-slate-900 dark:text-white">
                        ${houseEst.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Calculated using standard Ames linear multipliers. Target residual margin of error: ±$12.4k.
                      </p>
                    </motion.div>
                  )}

                  {churnProb !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`border p-4 rounded-2xl text-center space-y-2 ${
                        churnProb > 50
                          ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/40'
                          : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/40'
                      }`}
                    >
                      <span className="block text-[10px] font-mono uppercase font-bold text-slate-400">
                        CLASSIFIER ESTIMATION PROBABILITY
                      </span>
                      <div className="flex items-center justify-center gap-2">
                        {churnProb > 50 ? (
                          <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        )}
                        <h4 className="text-2xl font-black font-mono text-slate-900 dark:text-white">
                          {churnProb.toFixed(1)}% Churn Risk
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {churnProb > 50
                          ? 'ALERT: High friction indices triggered. Highly suggest customer loyalty outreach.'
                          : 'Low risk subscriber. Health status indices are within normal bounds.'}
                      </p>
                    </motion.div>
                  )}

                  {emailClass !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`border p-4 rounded-2xl text-center space-y-1.5 ${
                        emailClass === 'spam'
                          ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/40'
                          : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/40'
                      }`}
                    >
                      <span className="block text-[10px] font-mono uppercase font-bold text-slate-400">
                        DOCUMENT VALIDATOR CLASSIFICATION
                      </span>
                      <h4 className={`text-2xl font-black font-mono uppercase ${
                        emailClass === 'spam' ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'
                      }`}>
                        {emailClass}
                      </h4>
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Confidence Factor: {emailConfidence?.toFixed(1)}%
                      </p>
                    </motion.div>
                  )}
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  ArrowDownToLine, 
  Search, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { DATASETS } from '../data';
import { Dataset } from '../types';

export function Datasets() {
  const [downloadTracker, setDownloadTracker] = useState<Record<string, number>>(() => {
    const tracker: Record<string, number> = {};
    DATASETS.forEach(d => {
      tracker[d.id] = d.downloads;
    });
    return tracker;
  });

  const [notifiedDatasetId, setNotifiedDatasetId] = useState<string | null>(null);

  const handleDownload = (id: string, name: string) => {
    // Increment local state download count
    setDownloadTracker(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));

    // Trigger local success popup alert
    setNotifiedDatasetId(id);
    setTimeout(() => {
      setNotifiedDatasetId(null);
    }, 2500);

    // Trigger standard browser blob simulation or direct file trigger
    const content = `Anonymized ML Dataset: ${name}\nColumns: ${DATASETS.find(d => d.id === id)?.features.join(', ')}\nSample Size: ${id === 'clinical-heart-health' ? '1025 records' : '7000+ records'}\nPreprocessed and ready.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${id}-preview.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-16 pb-20 pt-28">
      
      {/* HEADER STATEMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Clean Training Datasets
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          Free, preprocessed, and anonymized training datasets ready to run on classification and regression algorithms. Includes feature structures, target labels, and download triggers.
        </p>
      </section>

      {/* DATASETS CARD GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATASETS.map((dataset) => (
            <div 
              id={`dataset-${dataset.id}`}
              key={dataset.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all space-y-6"
            >
              
              {/* Header block */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-5.5 h-5.5 text-blue-600 dark:text-blue-400" />
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-extrabold">
                      Ready Dataset Vector
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 px-2.5 py-1 rounded-full">
                    {dataset.size} • {dataset.format}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {dataset.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {dataset.description}
                </p>
              </div>

              {/* Columns/Features Showcase */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  Primary Vector Columns:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {dataset.features.map((feat, fIdx) => (
                    <span 
                      key={fIdx} 
                      className="text-[10px] font-mono font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-lg border border-blue-100/50 dark:border-blue-900/10"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download actions row */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between gap-4">
                <div className="text-left font-mono">
                  <span className="block text-[9px] uppercase font-bold text-slate-400">Downloads</span>
                  <span className="block text-sm font-extrabold text-slate-700 dark:text-slate-300">
                    {downloadTracker[dataset.id]} files
                  </span>
                </div>

                <div className="relative">
                  <button
                    onClick={() => handleDownload(dataset.id, dataset.name)}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-semibold px-5 py-3 rounded-2xl shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <ArrowDownToLine className="w-4 h-4" />
                    Download Free Dataset
                  </button>

                  <AnimatePresence>
                    {notifiedDatasetId === dataset.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-slate-900 text-white text-[10px] font-mono px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-xl border border-slate-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        Downloaded preview dataset successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* METRIC COMPLIANCE ADVISORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Looking for custom API integrations?</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              These files are set up as standardized training arrays. If your organization requires secure RESTful data connectors to stream production datasets, explore our cloud consultancy scope.
            </p>
          </div>
          <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm">
            Read Data Terms
          </button>
        </div>
      </section>

    </div>
  );
}

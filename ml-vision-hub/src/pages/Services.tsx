import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  BarChart3, 
  PieChart, 
  Cpu, 
  BrainCircuit, 
  MessageSquareText, 
  Eye, 
  TrendingUp, 
  CloudUpload, 
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

export function Services() {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  // Map icon strings to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-6 h-6 text-blue-500" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-purple-500" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-cyan-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-500" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-rose-500" />;
      case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-emerald-500" />;
      case 'Eye': return <Eye className="w-6 h-6 text-indigo-500" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-teal-500" />;
      case 'CloudUpload': return <CloudUpload className="w-6 h-6 text-orange-500" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-yellow-500" />;
      default: return <Cpu className="w-6 h-6 text-blue-500" />;
    }
  };

  const getServicePipelines = (id: string) => {
    switch (id) {
      case 'data-cleaning':
        return [
          'Duplicate detection and syntactic structural standardization',
          'Missingness audit with K-Nearest Neighbors and MICE regressor imputation',
          'Outlier isolation using Isolation Forests and robust Z-score bounds',
          'One-hot and target-guided encoding for categorical coordinates'
        ];
      case 'data-analysis':
        return [
          'Univariate distribution fit audits (Kolmogorov-Smirnov testing)',
          'Multivariate correlation mapping and Variance Inflation Factor diagnostics',
          'Hypothesis testing (ANOVA, Chi-Square cross-tabs)',
          'Feature interaction checks and dimensional variance scanning'
        ];
      case 'data-visualization':
        return [
          'D3.js interactive density charts and temporal coordinate plots',
          'Dimensionality reduction displays using t-SNE and UMAP',
          'Interactive classification decision boundaries',
          'Real-time streaming telemetry dashboard integrations'
        ];
      case 'ml-development':
        return [
          'Automated hyperparameter search (Optuna Bayesian grids)',
          'Stratified K-fold training validation protocols',
          'Ensemble voting and meta-classifier stacking',
          'Feature importance mapping and partial dependency plots'
        ];
      case 'deep-learning':
        return [
          'Custom Multi-layer Perceptron optimization models in PyTorch',
          'Backpropagation diagnostics and learning rate schedule designs',
          'Weight initialization and dropout regularization tuning',
          'TensorBoard telemetry and weight gradient tracking'
        ];
      case 'nlp':
        return [
          'Hugging Face transformer fine-tuning protocols (BERT, RoBERTa)',
          'Sentence-level semantic similarity vector indexing',
          'Unstructured document categorization pipelines',
          'Named Entity Recognition (NER) token extractors'
        ];
      case 'computer-vision':
        return [
          'Transfer learning and fine-tuning on deep ResNet / EfficientNet models',
          'Real-time target localization using YOLOv8 bounding containers',
          'Custom dataset augmentation using Albumentations models',
          'Grad-CAM activation highlights mapping visual classifier focus'
        ];
      case 'predictive-analytics':
        return [
          'Multivariate time-series forecasting (Prophet and Auto-ARIMA)',
          'Temporal lag coordinate and rolling window feature extraction',
          'LSTMs and sequence-to-sequence neural model structures',
          'Causal inference modeling and event impact assessments'
        ];
      case 'model-deployment':
        return [
          'Inference compilation to high-speed ONNX models',
          'Multi-worker FastAPI microservices with unified request logging',
          'Isolated Docker containment for standard multi-cloud deployments',
          'Continuous drift monitoring and telemetry dashboards'
        ];
      case 'ai-consultation':
        return [
          'Comprehensive algorithmic technical feasibility studies',
          'MLOps pipeline architectures and infrastructure design',
          'Cloud computation optimization and inference budget reduction',
          'Strategic AI workshops on demystifying deep learning models'
        ];
      default:
        return [
          'Custom algorithmic evaluation and architecture review',
          'Training pipeline reproducibility assessments',
          'Data standardizing and performance metric alignments'
        ];
    }
  };

  return (
    <div className="space-y-16 pb-20 pt-28">
      
      {/* HEADER STATEMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Services & Core Competencies
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          I provide end-to-end Machine Learning services. Explore our bento modules below to see how I handle pipelines from raw files to live production microservices.
        </p>
      </section>

      {/* CORE SERVICES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            const pipelines = getServicePipelines(service.id);

            return (
              <div 
                id={`service-${service.id}`}
                key={service.id} 
                className={`bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm transition-all duration-300 flex flex-col justify-between hover:shadow-md h-fit ${
                  isExpanded
                    ? 'border-blue-500 dark:border-blue-400 ring-1 ring-blue-500/20 md:col-span-2 lg:col-span-3'
                    : 'border-slate-200/60 dark:border-slate-800/60 hover:-translate-y-0.5'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-2xl shrink-0">
                      {getIconComponent(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                        ML Core Module
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Expanded pipeline list */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 overflow-hidden"
                      >
                        <div className="space-y-2">
                          <h4 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                            Technical Scope & Methodology:
                          </h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            {service.details}
                          </p>
                        </div>

                        <div className="space-y-2.5">
                          <h4 className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                            Pipeline Operations:
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                            {pipelines.map((step, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200/20 dark:border-slate-800/20">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tool Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tools.map((tool, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-mono font-bold uppercase bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Expand Trigger Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-850 flex justify-end">
                  <button
                    onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                    className={`flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                      isExpanded
                        ? 'text-rose-500 hover:text-rose-600'
                        : 'text-blue-600 dark:text-blue-400 hover:text-blue-700'
                    }`}
                  >
                    {isExpanded ? (
                      <>
                        Collapse details
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Explore pipeline steps
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER SLA ASSURANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 text-center space-y-4 max-w-4xl mx-auto">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Need a custom algorithmic setup?
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I customize loss parameters, optimizer structures, and evaluation metrics to fit unique enterprise records, ensuring training convergence benchmarks match exact functional requirements.
          </p>
        </div>
      </section>

    </div>
  );
}

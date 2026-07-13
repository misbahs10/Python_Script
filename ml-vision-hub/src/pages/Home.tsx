import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Cpu, 
  LineChart, 
  Zap, 
  Sparkles, 
  Lock, 
  Infinity, 
  CheckCircle2, 
  Quote 
} from 'lucide-react';
import { SERVICES, PROJECTS } from '../data';
import { InteractiveCharts } from '../components/InteractiveCharts';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  setSelectedProjectFilter?: (id: string | null) => void;
}

// Micro-component for counting up statistics
function AnimatedCounter({ value, duration = 1.5, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span className="font-mono font-extrabold">{count}{suffix}</span>;
}

export function Home({ setActiveTab, setSelectedProjectFilter }: HomeProps) {
  // Custom interactive state for Hero visual neural net
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const stats = [
    { value: 45, label: 'Production Models Deployed', suffix: '+' },
    { value: 96, label: 'Highest Benchmark Accuracy', suffix: '.5%' },
    { value: 120, label: 'Million Datapoints Ingested', suffix: 'M' },
    { value: 12, label: 'Open-source ML Packages', suffix: '' }
  ];

  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'State-of-the-Art Estimators',
      description: 'Implementing custom gradient boosting trees, support vector ensembles, and multi-layer feedforward networks engineered for high precision.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: 'Explainable AI & Diagnostics',
      description: 'Demystifying neural network black boxes with SHAP values, feature importance coefficients, and localized heatmaps for full accountability.'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      title: 'Sub-Millisecond API Runtimes',
      description: 'Compiling models to ONNX runtimes and wrapping predictive logic in lightning-fast, production-grade FastAPI microservice modules.'
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      title: 'Fairness-Aligned Pipelines',
      description: 'Actively checking training data matrices to discover, monitor, and adjust demographic discrepancies or structural prediction biases.'
    }
  ];

  const technologies = [
    { name: 'PyTorch', cat: 'Deep Learning', icon: '🔥' },
    { name: 'TensorFlow', cat: 'Neural Engines', icon: '🧠' },
    { name: 'Scikit-learn', cat: 'Core Machine Learning', icon: '⚙️' },
    { name: 'Pandas', cat: 'Data Manipulation', icon: '🐼' },
    { name: 'FastAPI', cat: 'API Deployment', icon: '⚡' },
    { name: 'Docker', cat: 'Containerization', icon: '🐳' },
    { name: 'XGBoost', cat: 'Gradient Boosting', icon: '📈' },
    { name: 'Optuna', cat: 'Hyperparameter Tuning', icon: '🎯' }
  ];

  const testimonials = [
    {
      quote: "The predictive underwriting classifier developed by ML Vision Hub reduced our loan default rates by 14.5% while maintaining strict demographic fairness constraints. Pure engineering excellence.",
      author: "Dr. Evelyn Vance",
      role: "VP of Risk Metrics, Apex Capital",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
    },
    {
      quote: "Our churn forecasting was inaccurate until we deployed the SHAP-driven ensemble model. Now, our customer success managers receive real-time warnings with exact localized churn triggers.",
      author: "Marcus Brody",
      role: "Director of Retention, TelcoCorp Global",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 lg:pt-40">
        {/* Background gradient flares */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/10 dark:bg-purple-500/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/30 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Next-Gen Deep Learning Engineering
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Machine Learning <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  Solutions for the Future
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Hi, I'm a Machine Learning engineer specializing in training robust predictive classifiers, fine-tuning deep convolutional models, and packaging custom AI pipelines into containerized microservices.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setActiveTab('projects')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all cursor-pointer"
                >
                  Explore Models
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 font-semibold px-6 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
                >
                  Browse Services
                </button>
              </div>
            </div>

            {/* Interactive Neural Net SVG */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[400px] aspect-square bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 p-6 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                
                {/* SVG Neural Grid */}
                <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                  {/* Outer connections */}
                  {(() => {
                    const nodes = [
                      { id: 1, x: 50, y: 150, layer: 'input' },
                      { id: 2, x: 50, y: 80, layer: 'input' },
                      { id: 3, x: 50, y: 220, layer: 'input' },
                      
                      { id: 4, x: 150, y: 70, layer: 'hidden' },
                      { id: 5, x: 150, y: 120, layer: 'hidden' },
                      { id: 6, x: 150, y: 180, layer: 'hidden' },
                      { id: 7, x: 150, y: 230, layer: 'hidden' },
                      
                      { id: 8, x: 250, y: 110, layer: 'output' },
                      { id: 9, x: 250, y: 190, layer: 'output' },
                    ];

                    const links: { from: number; to: number }[] = [];
                    // Input to hidden
                    [1, 2, 3].forEach(i => {
                      [4, 5, 6, 7].forEach(h => {
                        links.push({ from: i, to: h });
                      });
                    });
                    // Hidden to output
                    [4, 5, 6, 7].forEach(h => {
                      [8, 9].forEach(o => {
                        links.push({ from: h, to: o });
                      });
                    });

                    return (
                      <g>
                        {/* Connection Lines */}
                        {links.map((link, idx) => {
                          const start = nodes.find(n => n.id === link.from)!;
                          const end = nodes.find(n => n.id === link.to)!;
                          const isHighlighted = hoveredNode === link.from || hoveredNode === link.to;

                          return (
                            <line
                              key={idx}
                              x1={start.x}
                              y1={start.y}
                              x2={end.x}
                              y2={end.y}
                              className={`transition-all duration-300 ${
                                isHighlighted
                                  ? 'stroke-blue-500/80 stroke-[2px]'
                                  : 'stroke-slate-200 dark:stroke-slate-800/80 stroke-[1px]'
                              }`}
                              strokeDasharray={idx % 4 === 0 && isHighlighted ? '5,5' : '0'}
                            />
                          );
                        })}

                        {/* Nodes */}
                        {nodes.map((node) => {
                          const isHovered = hoveredNode === node.id;
                          return (
                            <g
                              key={node.id}
                              onMouseEnter={() => setHoveredNode(node.id)}
                              onMouseLeave={() => setHoveredNode(null)}
                              className="cursor-pointer"
                            >
                              <circle
                                cx={node.x}
                                cy={node.y}
                                r={isHovered ? '10' : '7'}
                                fill={
                                  node.layer === 'input'
                                    ? '#2563eb'
                                    : node.layer === 'hidden'
                                    ? '#a855f7'
                                    : '#06b6d4'
                                }
                                className="transition-all duration-300 shadow-md"
                              />
                              <circle
                                cx={node.x}
                                cy={node.y}
                                r={isHovered ? '16' : '12'}
                                fill="transparent"
                                className="stroke-slate-300/30 dark:stroke-slate-700/50 transition-all duration-300"
                                strokeWidth="2"
                              />
                            </g>
                          );
                        })}
                      </g>
                    );
                  })()}
                </svg>

                {/* Ambient Labels */}
                <span className="absolute bottom-4 left-6 text-[9px] font-mono uppercase text-slate-400 font-bold">Input Matrix</span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase text-slate-400 font-bold">Latent Layers</span>
                <span className="absolute bottom-4 right-6 text-[9px] font-mono uppercase text-slate-400 font-bold">Activation Map</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-slate-50 dark:bg-slate-900/20 py-12 border-y border-slate-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((st, idx) => (
              <div key={idx} className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  <AnimatedCounter value={st.value} suffix={st.suffix} />
                </div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES / FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-blue-400">
            Design Philosophy
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Robust AI Ecosystems
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Structuring Machine Learning systems that perform robustly under fluctuating market variables. Every pipeline follows reproducible protocols and clinical-grade verification criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="flex gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:-translate-y-0.5"
            >
              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl group-hover:scale-105 transition-all shrink-0">
                {feat.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECHART / CHART VISUALIZER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-purple-600 dark:text-purple-400">
            Interactive Benchmarks
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Statistical Rigor, Demonstrated
          </p>
        </div>
        
        {/* Render interactive telemetry hub */}
        <InteractiveCharts />
      </section>

      {/* CORE TECHNOLOGIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Technical Stack
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Trained in the standard enterprise toolset. I bypass proprietary lock-ins, building on open-source scientific foundations like PyTorch, Scikit-learn, and FastAPI.
              </p>
              <button
                onClick={() => setActiveTab('resources')}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                View training resources
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Micro-tech cards */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technologies.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/40 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:shadow-md transition-all hover:scale-102"
                >
                  <span className="text-2xl mb-1.5">{tech.icon}</span>
                  <h4 className="text-sm font-extrabold text-slate-800 dark:text-white font-mono">{tech.name}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{tech.cat}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-blue-400">
            Case Studies
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Trusted by Enterprise Teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-2xl relative shadow-sm"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 dark:text-slate-800/60" />
              <div className="space-y-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed font-medium">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={test.image}
                    alt={test.author}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{test.author}</h4>
                    <span className="text-xs text-slate-400 font-mono">{test.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl shadow-blue-500/10">
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)]" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to deploy your next high-performance predictor?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
              Let's construct tailored data preprocessing vectors and neural estimators designed explicitly for your business records.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 shadow-md transition-all cursor-pointer text-sm"
              >
                Schedule AI Consultation
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className="bg-blue-700/40 hover:bg-blue-700/60 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-all cursor-pointer text-sm"
              >
                Learn Engineering Path
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  Award, 
  Layers, 
  Lightbulb, 
  Users2, 
  GraduationCap, 
  Briefcase, 
  Globe 
} from 'lucide-react';

export function About() {
  const skills = [
    { name: 'Core Machine Learning (Scikit-Learn, XGBoost, LightGBM)', percent: 95, cat: 'Frameworks' },
    { name: 'Deep Learning Systems (PyTorch, TensorFlow, Keras)', percent: 90, cat: 'Frameworks' },
    { name: 'Data Manipulation & Analysis (Pandas, NumPy, Scipy)', percent: 98, cat: 'Data Science' },
    { name: 'Natural Language Processing (Transformers, Spacy, NLTK)', percent: 88, cat: 'AI Domains' },
    { name: 'Computer Vision Architectures (OpenCV, YOLOv8, CNNs)', percent: 85, cat: 'AI Domains' },
    { name: 'Deployment & APIs (FastAPI, Docker, ONNX Runtime)', percent: 87, cat: 'MLOps' }
  ];

  const timeline = [
    {
      year: '2024 - Present',
      title: 'Principal Machine Learning Engineer',
      organization: 'ML Vision Hub',
      icon: <Briefcase className="w-4 h-4 text-white" />,
      description: 'Designing end-to-end predictive pipelines, optimizing sub-millisecond inference speeds, and building demystified explainable neural models for global corporations.'
    },
    {
      year: '2022 - 2024',
      title: 'Senior Deep Learning Specialist',
      organization: 'Neural Systems Ltd',
      icon: <Layers className="w-4 h-4 text-white" />,
      description: 'Fine-tuned convolutional visual models and text classification transformer neural networks. Built automated high-dimensional clean modules.'
    },
    {
      year: '2020 - 2022',
      title: 'Master of Science in Machine Learning',
      organization: 'Stanford Advanced Computing Institute',
      icon: <GraduationCap className="w-4 h-4 text-white" />,
      description: 'Focused studies on mathematical statistics, convergence behavior of neural optimizers, and automated demographic fair auditing methodologies.'
    },
    {
      year: '2017 - 2020',
      title: 'Data Science Fellowship Researcher',
      organization: 'Center for Open Scientific Computing',
      icon: <Globe className="w-4 h-4 text-white" />,
      description: 'Analyzed high-volume environmental telemetry arrays and engineered location-based interaction estimators using spatial correlation kernels.'
    }
  ];

  const valueProps = [
    {
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Clinical Mathematical Rigor',
      description: 'I avoid speculative model tuning. Every model is supported by strict cross-validation benchmarks, distribution variance audits, and rigorous statistical tests.'
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: 'Explainable AI Architecture',
      description: 'No black-box guesses. We accompany our deep predictors with explicit SHAP/LIME explanation runtimes and Grad-CAM layers detailing exact feature drivers.'
    },
    {
      icon: <Users2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: 'Demographic Fairness Alignment',
      description: 'We actively monitor demographic parity indices and equal opportunity scores across validation populations to avoid systemic lending, hiring, or profiling bias.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 pt-28">
      
      {/* HEADER STATEMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          About ML Vision Hub
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          Unifying mathematical rigor, statistical honesty, and production infrastructure to deliver high-performance, ethically aligned AI estimators.
        </p>
      </section>

      {/* CORE STATEMENTS (ABOUT ML & DEVELOPER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              The Discipline
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Why Machine Learning Matters
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Machine Learning is more than just stacking neural layers; it represents the mathematical formalization of learning from structured records. By transitioning from explicit, hard-coded procedures to dynamic optimization equations, we allow computer systems to capture non-linear interactions that human operators would never see.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            When structured properly, these models don't just guess—they generalize, forecasting customer retention trends, predicting spatial valuations, and recognizing vocal commands with clinical precision.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 p-6 md:p-8 rounded-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
              The Specialist
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              The Engineering Mindset
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            I approach Machine Learning from a software craftsmanship perspective. An algorithm is only as good as its production telemetry, and data standardizing is as critical as neural depth. 
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Over the past seven years, I have engineered data analysis libraries, fine-tuned deep classification layers, and packaged real-time estimators into Docker containers, ensuring predictions remain steady even in highly dynamic market environments.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <div className="flex gap-4 p-8 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-2xl text-blue-600 dark:text-blue-400 shrink-0 h-fit">
            <Target className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To strip away the unneeded hype surrounding artificial intelligence and deliver clean, mathematically honest, and robustly structured Machine Learning estimators that drive measurable strategic results.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex gap-4 p-8 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-2xl text-purple-600 dark:text-purple-400 shrink-0 h-fit">
            <Eye className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To pioneer reproducible, transparent machine learning deployments where every predictive inference can be mathematically justified, demographic bias is actively checked, and model weights are continuously audited.
            </p>
          </div>
        </div>

      </section>

      {/* SKILLS PANEL WITH INTERACTIVE PROGRESS BARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 md:p-12 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <h3 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-blue-400">
              Technical Competence
            </h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Validated Algorithmic Strengths
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The percentage indicators reflect my relative engineering experience and execution depth with each framework stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-semibold tracking-wide">
                  <span className="text-slate-700 dark:text-slate-300 font-bold">{skill.name}</span>
                  <span className="font-mono text-blue-600 dark:text-blue-400">{skill.percent}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full"
                  />
                </div>
                <span className="inline-block text-[9px] font-mono uppercase bg-slate-100 dark:bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md">
                  {skill.cat}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHRONOLOGICAL TIMELINE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-16">
          <h3 className="text-xs uppercase tracking-widest font-extrabold text-purple-600 dark:text-purple-400">
            Chronology
          </h3>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Professional & Academic Timeline
          </p>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 bg-gradient-to-tr from-blue-600 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                {item.icon}
              </div>

              <div className="space-y-1">
                <span className="inline-block text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                  {item.year}
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {item.organization}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-2 max-w-2xl">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-blue-400">
            Differentiators
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Why Choose ML Vision Hub
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            I bridge the massive gap between academic data science sandboxes and real-world industrial deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 space-y-4"
            >
              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl w-fit">
                {prop.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{prop.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, TrendingDown, Target, BarChart2, PieChart } from 'lucide-react';

// ==========================================
// 1. DNN Training telemetry data
// ==========================================
interface EpochData {
  epoch: number;
  trainLoss: number;
  valLoss: number;
  valAccuracy: number;
}

const DNN_TELEMETRY: EpochData[] = [
  { epoch: 1, trainLoss: 0.85, valLoss: 0.82, valAccuracy: 64.2 },
  { epoch: 5, trainLoss: 0.58, valLoss: 0.59, valAccuracy: 74.8 },
  { epoch: 10, trainLoss: 0.41, valLoss: 0.45, valAccuracy: 81.2 },
  { epoch: 15, trainLoss: 0.32, valLoss: 0.38, valAccuracy: 85.5 },
  { epoch: 20, trainLoss: 0.25, valLoss: 0.32, valAccuracy: 89.1 },
  { epoch: 25, trainLoss: 0.19, valLoss: 0.29, valAccuracy: 91.4 },
  { epoch: 30, trainLoss: 0.14, valLoss: 0.28, valAccuracy: 92.8 },
  { epoch: 35, trainLoss: 0.11, valLoss: 0.27, valAccuracy: 93.9 },
  { epoch: 40, trainLoss: 0.08, valLoss: 0.26, valAccuracy: 94.7 },
  { epoch: 45, trainLoss: 0.06, valLoss: 0.25, valAccuracy: 95.3 },
  { epoch: 50, trainLoss: 0.05, valLoss: 0.25, valAccuracy: 95.8 },
];

// ==========================================
// 2. Model Benchmarks
// ==========================================
interface BenchmarkModel {
  name: string;
  accuracy: number;
  f1Score: number;
  inferenceMs: number;
  parameters: string;
}

const BENCHMARK_MODELS: BenchmarkModel[] = [
  { name: 'Logistic Regression', accuracy: 78.4, f1Score: 76.2, inferenceMs: 1.2, parameters: '14' },
  { name: 'Decision Tree', accuracy: 81.2, f1Score: 80.5, inferenceMs: 0.8, parameters: '120' },
  { name: 'Support Vector Machine', accuracy: 86.5, f1Score: 85.1, inferenceMs: 14.5, parameters: '2.4K' },
  { name: 'Random Forest', accuracy: 89.2, f1Score: 88.9, inferenceMs: 4.8, parameters: '450K' },
  { name: 'XGBoost Regressor', accuracy: 92.4, f1Score: 92.1, inferenceMs: 2.1, parameters: '1.2M' },
  { name: 'LightGBM Classifier', accuracy: 93.1, f1Score: 92.9, inferenceMs: 1.5, parameters: '850K' },
  { name: 'PyTorch Deep MLP', accuracy: 95.8, f1Score: 95.6, inferenceMs: 8.4, parameters: '4.8M' },
];

// ==========================================
// 3. Class Balance Donut Data
// ==========================================
interface ClassItem {
  label: string;
  count: number;
  color: string;
  percentage: number;
}

const CLASS_BALANCE: ClassItem[] = [
  { label: 'Standard Signals', count: 4250, color: 'bg-blue-500', percentage: 42.5 },
  { label: 'Minor Fluctuations', count: 2800, color: 'bg-purple-500', percentage: 28.0 },
  { label: 'Macro Trends', count: 1850, color: 'bg-cyan-500', percentage: 18.5 },
  { label: 'Outliers / Anomalies', count: 1100, color: 'bg-rose-500', percentage: 11.0 },
];

export function InteractiveCharts() {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'benchmark' | 'distribution'>('telemetry');

  // DNN Telemetry animation state
  const [currentEpochIndex, setCurrentEpochIndex] = useState<number>(DNN_TELEMETRY.length);
  const [isTelemPlaying, setIsTelemPlaying] = useState<boolean>(false);

  // Benchmarks sorting/metric state
  const [benchmarkMetric, setBenchmarkMetric] = useState<'accuracy' | 'f1Score' | 'inferenceMs'>('accuracy');
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  // Distribution interactive state
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

  // Handle DNN Telemetry Play/Pause
  useEffect(() => {
    let interval: any = null;
    if (isTelemPlaying) {
      interval = setInterval(() => {
        setCurrentEpochIndex((prev) => {
          if (prev >= DNN_TELEMETRY.length) {
            return 1; // Restart loop
          }
          return prev + 1;
        });
      }, 400);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTelemPlaying]);

  // Reset DNN Telemetry
  const resetTelemetry = () => {
    setIsTelemPlaying(false);
    setCurrentEpochIndex(DNN_TELEMETRY.length);
  };

  const visibleTelemetry = DNN_TELEMETRY.slice(0, currentEpochIndex);

  // SVG dimensions
  const width = 500;
  const height = 260;
  const padding = 40;

  // Render Telemetry Chart Paths
  const getTelemetryCoordinates = (dataList: EpochData[], key: 'trainLoss' | 'valLoss' | 'valAccuracy') => {
    if (dataList.length === 0) return '';
    return dataList
      .map((d, i) => {
        const x = padding + (i / (DNN_TELEMETRY.length - 1)) * (width - padding * 2);
        let y = 0;
        if (key === 'trainLoss' || key === 'valLoss') {
          // Losses range from 0 to 1
          const ratio = d[key] as number;
          y = height - padding - ratio * (height - padding * 2);
        } else {
          // Accuracy ranges from 50 to 100
          const accuracy = d[key] as number;
          const ratio = (accuracy - 50) / 50; // map 50-100 to 0-1
          y = height - padding - ratio * (height - padding * 2);
        }
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  return (
    <div id="interactive-charts-section" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Live Model Analytics Hub
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Interactive, server-simulated runtime charts mapping deep telemetry and classifier efficiency.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl gap-1 self-stretch md:self-auto overflow-x-auto">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'telemetry'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <TrendingDown className="w-4 h-4" />
            Neural Training Telemetry
          </button>
          <button
            onClick={() => setActiveTab('benchmark')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'benchmark'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            Model Benchmarks
          </button>
          <button
            onClick={() => setActiveTab('distribution')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'distribution'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <PieChart className="w-4 h-4" />
            Class Distribution
          </button>
        </div>
      </div>

      {/* Render Chart Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT CHART PANEL */}
        <div className="lg:col-span-8 flex justify-center bg-slate-50 dark:bg-slate-950 p-4 md:p-6 rounded-2xl border border-slate-100 dark:border-slate-800/60 relative overflow-hidden">
          <div className="w-full max-w-[500px]">
            {activeTab === 'telemetry' && (
              <div className="relative">
                {/* Custom Line Chart */}
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
                  {/* Grid Lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                    const y = padding + ratio * (height - padding * 2);
                    return (
                      <g key={idx}>
                        <line
                          x1={padding}
                          y1={y}
                          x2={width - padding}
                          y2={y}
                          className="stroke-slate-200 dark:stroke-slate-800"
                          strokeDasharray="4,4"
                        />
                        <text
                          x={padding - 8}
                          y={y + 4}
                          textAnchor="end"
                          className="fill-slate-400 dark:fill-slate-600 text-[10px] font-mono"
                        >
                          {(1 - ratio).toFixed(2)}
                        </text>
                      </g>
                    );
                  })}

                  {/* X Axis Epoch Markers */}
                  {DNN_TELEMETRY.map((item, idx) => {
                    const x = padding + (idx / (DNN_TELEMETRY.length - 1)) * (width - padding * 2);
                    return (
                      <text
                        key={idx}
                        x={x}
                        y={height - padding + 16}
                        textAnchor="middle"
                        className="fill-slate-400 dark:fill-slate-600 text-[10px] font-mono"
                      >
                        {item.epoch}
                      </text>
                    );
                  })}

                  {/* Axes Lines */}
                  <line
                    x1={padding}
                    y1={height - padding}
                    x2={width - padding}
                    y2={height - padding}
                    className="stroke-slate-300 dark:stroke-slate-700"
                    strokeWidth="1.5"
                  />
                  <line
                    x1={padding}
                    y1={padding}
                    x2={padding}
                    y2={height - padding}
                    className="stroke-slate-300 dark:stroke-slate-700"
                    strokeWidth="1.5"
                  />

                  {/* Training Loss Path (Red Gradient) */}
                  {visibleTelemetry.length > 0 && (
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                      d={getTelemetryCoordinates(visibleTelemetry, 'trainLoss')}
                      fill="none"
                      className="stroke-rose-500"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  )}

                  {/* Validation Loss Path (Blue Gradient) */}
                  {visibleTelemetry.length > 0 && (
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                      d={getTelemetryCoordinates(visibleTelemetry, 'valLoss')}
                      fill="none"
                      className="stroke-blue-500"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  )}

                  {/* Current Active Step Marker */}
                  {visibleTelemetry.length > 0 && (
                    <g>
                      {(() => {
                        const idx = visibleTelemetry.length - 1;
                        const item = visibleTelemetry[idx];
                        const x = padding + (idx / (DNN_TELEMETRY.length - 1)) * (width - padding * 2);
                        const yTrain = height - padding - item.trainLoss * (height - padding * 2);
                        const yVal = height - padding - item.valLoss * (height - padding * 2);
                        return (
                          <>
                            <circle cx={x} cy={yTrain} r="5" className="fill-rose-500 stroke-white dark:stroke-slate-900" strokeWidth="2" />
                            <circle cx={x} cy={yVal} r="5" className="fill-blue-500 stroke-white dark:stroke-slate-900" strokeWidth="2" />
                          </>
                        );
                      })()}
                    </g>
                  )}
                </svg>
              </div>
            )}

            {activeTab === 'benchmark' && (
              <div className="relative">
                {/* Custom Bar Chart */}
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
                  {/* Grid Lines */}
                  {[0, 25, 50, 75, 100].map((val, idx) => {
                    const ratio = val / 100;
                    const x = padding + ratio * (width - padding * 2);
                    return (
                      <g key={idx}>
                        <line
                          x1={x}
                          y1={padding}
                          x2={x}
                          y2={height - padding}
                          className="stroke-slate-200 dark:stroke-slate-800"
                          strokeDasharray="4,4"
                        />
                        <text
                          x={x}
                          y={height - padding + 16}
                          textAnchor="middle"
                          className="fill-slate-400 dark:fill-slate-600 text-[10px] font-mono"
                        >
                          {benchmarkMetric === 'inferenceMs'
                            ? `${(ratio * 15).toFixed(1)}ms`
                            : `${val}%`}
                        </text>
                      </g>
                    );
                  })}

                  {/* Bars */}
                  {BENCHMARK_MODELS.map((model, idx) => {
                    const barHeight = (height - padding * 2) / BENCHMARK_MODELS.length - 6;
                    const y = padding + idx * ((height - padding * 2) / BENCHMARK_MODELS.length) + 3;

                    // Get value based on selection
                    let rawVal = 0;
                    let maxLimit = 100;
                    if (benchmarkMetric === 'accuracy') rawVal = model.accuracy;
                    if (benchmarkMetric === 'f1Score') rawVal = model.f1Score;
                    if (benchmarkMetric === 'inferenceMs') {
                      rawVal = model.inferenceMs;
                      maxLimit = 15; // Max 15ms
                    }

                    const widthRatio = Math.min(rawVal / maxLimit, 1);
                    const barWidth = widthRatio * (width - padding * 2);

                    const isHovered = hoveredBarIndex === idx;

                    return (
                      <g
                        key={idx}
                        onMouseEnter={() => setHoveredBarIndex(idx)}
                        onMouseLeave={() => setHoveredBarIndex(null)}
                        className="cursor-pointer"
                      >
                        {/* Background Bar */}
                        <rect
                          x={padding}
                          y={y}
                          width={width - padding * 2}
                          height={barHeight}
                          className="fill-slate-100 dark:fill-slate-900/40 rounded"
                          rx="4"
                        />
                        {/* Interactive Colored Bar */}
                        <motion.rect
                          initial={{ width: 0 }}
                          animate={{ width: barWidth }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                          x={padding}
                          y={y}
                          height={barHeight}
                          fill={isHovered ? 'url(#barGradActive)' : 'url(#barGradNormal)'}
                          rx="4"
                        />
                        {/* Model Label Inside Bar / Left side */}
                        <text
                          x={padding + 8}
                          y={y + barHeight / 2 + 4}
                          className={`font-sans text-[10px] font-semibold tracking-wide ${
                            isHovered
                              ? 'fill-white'
                              : 'fill-slate-700 dark:fill-slate-300'
                          }`}
                        >
                          {model.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* Defs for gradients */}
                  <defs>
                    <linearGradient id="barGradNormal" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="barGradActive" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}

            {activeTab === 'distribution' && (
              <div className="relative flex justify-center items-center">
                {/* Donut Chart */}
                <svg viewBox="0 0 200 200" className="w-[200px] h-[200px]">
                  <g transform="translate(100, 100)">
                    {(() => {
                      let accumulatedAngle = 0;
                      return CLASS_BALANCE.map((item, idx) => {
                        const angle = (item.percentage / 100) * 360;
                        const radStart = (accumulatedAngle - 90) * (Math.PI / 180);
                        const radEnd = (accumulatedAngle + angle - 90) * (Math.PI / 180);
                        accumulatedAngle += angle;

                        const rOuter = hoveredSlice === idx ? 82 : 75;
                        const rInner = 50;

                        const x1 = rOuter * Math.cos(radStart);
                        const y1 = rOuter * Math.sin(radStart);
                        const x2 = rOuter * Math.cos(radEnd);
                        const y2 = rOuter * Math.sin(radEnd);

                        const x1Inner = rInner * Math.cos(radStart);
                        const y1Inner = rInner * Math.sin(radStart);
                        const x2Inner = rInner * Math.cos(radEnd);
                        const y2Inner = rInner * Math.sin(radEnd);

                        const largeArcFlag = angle > 180 ? 1 : 0;

                        // Create custom svg path
                        const pathData = `
                          M ${x1} ${y1}
                          A ${rOuter} ${rOuter} 0 ${largeArcFlag} 1 ${x2} ${y2}
                          L ${x2Inner} ${y2Inner}
                          A ${rInner} ${rInner} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}
                          Z
                        `;

                        // Fill color mappings
                        const hexColors = [
                          '#3b82f6', // blue-500
                          '#a855f7', // purple-500
                          '#06b6d4', // cyan-500
                          '#f43f5e', // rose-500
                        ];

                        return (
                          <path
                            key={idx}
                            d={pathData}
                            fill={hexColors[idx % hexColors.length]}
                            className="transition-all duration-300 stroke-white dark:stroke-slate-950 stroke-[2px] cursor-pointer"
                            onMouseEnter={() => setHoveredSlice(idx)}
                            onMouseLeave={() => setHoveredSlice(null)}
                          />
                        );
                      });
                    })()}

                    {/* Center text of the donut */}
                    <circle cx="0" cy="0" r="45" className="fill-white dark:fill-slate-900" />
                    <text
                      x="0"
                      y="-5"
                      textAnchor="middle"
                      className="fill-slate-400 dark:fill-slate-500 text-[10px] uppercase tracking-widest font-semibold"
                    >
                      Total Data
                    </text>
                    <text
                      x="0"
                      y="15"
                      textAnchor="middle"
                      className="fill-slate-900 dark:text-white text-sm font-extrabold font-mono"
                    >
                      10,000 pts
                    </text>
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT ANALYTICS CONTROL PANEL */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-6">
          <AnimatePresence mode="wait">
            {activeTab === 'telemetry' && (
              <motion.div
                key="telemetry-info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="bg-slate-100 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                    Epoch Controller
                  </h4>
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => setIsTelemPlaying(!isTelemPlaying)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-xl text-xs font-semibold shadow-md transition-all"
                    >
                      <Play className={`w-3.5 h-3.5 ${isTelemPlaying ? 'animate-pulse' : ''}`} />
                      {isTelemPlaying ? 'Pause Telemetry' : 'Animate Epochs'}
                    </button>
                    <button
                      onClick={resetTelemetry}
                      className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 p-2 rounded-xl transition-all"
                      title="Reset Telemetry"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Current Epoch:</span>
                      <span className="text-slate-900 dark:text-white font-bold">
                        {visibleTelemetry[visibleTelemetry.length - 1]?.epoch || 1} / 50
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${(currentEpochIndex / DNN_TELEMETRY.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Training Metric Displays */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-100 dark:border-rose-900/30">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Train Cross-Entropy:</span>
                    </div>
                    <span className="text-sm font-bold font-mono text-rose-600 dark:text-rose-400">
                      {visibleTelemetry[visibleTelemetry.length - 1]?.trainLoss.toFixed(3) || '0.850'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Val Cross-Entropy:</span>
                    </div>
                    <span className="text-sm font-bold font-mono text-blue-600 dark:text-blue-400">
                      {visibleTelemetry[visibleTelemetry.length - 1]?.valLoss.toFixed(3) || '0.820'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Val Generalization:</span>
                    </div>
                    <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      {visibleTelemetry[visibleTelemetry.length - 1]?.valAccuracy.toFixed(1) || '64.2'}%
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'benchmark' && (
              <motion.div
                key="benchmark-info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {/* Metric Sorter */}
                <div className="bg-slate-100 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                    Metric Selector
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { key: 'accuracy', label: 'R² / Accuracy' },
                      { key: 'f1Score', label: 'Balanced F1-Score' },
                      { key: 'inferenceMs', label: 'Inference latency (ms)' },
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setBenchmarkMetric(item.key as any)}
                        className={`text-left text-xs font-medium px-3 py-2 rounded-lg transition-all ${
                          benchmarkMetric === item.key
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details of hovered model */}
                <div className="bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-2xl border border-blue-100/60 dark:border-blue-900/40">
                  {hoveredBarIndex !== null ? (
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                        MODEL SUMMARY
                      </h4>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        {BENCHMARK_MODELS[hoveredBarIndex].name}
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                        <div>
                          <span className="text-slate-400">Accuracy: </span>
                          <span className="text-slate-800 dark:text-white font-semibold">
                            {BENCHMARK_MODELS[hoveredBarIndex].accuracy}%
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400">F1 Score: </span>
                          <span className="text-slate-800 dark:text-white font-semibold">
                            {BENCHMARK_MODELS[hoveredBarIndex].f1Score}%
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400">Latency: </span>
                          <span className="text-slate-800 dark:text-white font-semibold">
                            {BENCHMARK_MODELS[hoveredBarIndex].inferenceMs}ms
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400">Params: </span>
                          <span className="text-slate-800 dark:text-white font-semibold">
                            {BENCHMARK_MODELS[hoveredBarIndex].parameters}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4 text-xs text-slate-400">
                      Hover over any bar to view hyperparameter details and architectural coefficients.
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === 'distribution' && (
              <motion.div
                key="distribution-info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {/* Sector Legends */}
                <div className="space-y-2">
                  {CLASS_BALANCE.map((item, idx) => {
                    const isHovered = hoveredSlice === idx;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredSlice(idx)}
                        onMouseLeave={() => setHoveredSlice(null)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                          isHovered
                            ? 'bg-slate-100 dark:bg-slate-800 border-blue-500 scale-[1.02]'
                            : 'bg-transparent border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-3.5 h-3.5 rounded-full ${item.color} shadow-sm`} />
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                            {item.label}
                          </span>
                        </div>
                        <div className="text-right text-xs font-mono">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {item.count} pts
                          </span>
                          <span className="text-slate-400 ml-1.5">({item.percentage}%)</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-[10px] text-slate-400 italic text-center">
                  Highly balanced, certified distribution prevents algorithmic prediction drift.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

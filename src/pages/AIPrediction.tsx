import React from 'react';
import type { AIPredictionResult } from '../types';
import { AIWorkflowDiagram } from '../components/ai/AIWorkflowDiagram';
import { PredictionCard } from '../components/ai/PredictionCard';
import { Cpu, Sparkles, Layers } from 'lucide-react';

interface AIPredictionProps {
  predictions: AIPredictionResult[];
}

export const AIPrediction: React.FC<AIPredictionProps> = ({ predictions }) => {
  return (
    <div className="p-6 space-y-6 pb-12">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Cpu className="w-6 h-6" />
            </span>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-white font-display">
              AI Risk Prediction Engine 🤖
            </h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Deep learning multi-hazard classification engine combining ResNet-LSTM & XGBoost models
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Model Inference Latency: 24ms
          </span>
        </div>
      </div>

      {/* Animated Visual Workflow Diagram */}
      <AIWorkflowDiagram />

      {/* Prediction Cards Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-400" />
          Active Predictive Hazard Inferences
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {predictions.map((pred) => (
            <PredictionCard key={pred.id} prediction={pred} />
          ))}
        </div>
      </div>
    </div>
  );
};

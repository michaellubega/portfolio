import React, { useState } from 'react';
import { ARCHITECTURE_PATTERNS } from '../data/portfolioData';
import { Smartphone, Network, Server, Database, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [selectedPatternId, setSelectedPatternId] = useState<string>('offline_first_mobile');

  const currentPattern =
    ARCHITECTURE_PATTERNS.find((p) => p.id === selectedPatternId) || ARCHITECTURE_PATTERNS[0];

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'client':
        return <Smartphone className="w-4 h-4 text-stone-700" />;
      case 'network':
        return <Network className="w-4 h-4 text-stone-700" />;
      case 'service':
        return <Server className="w-4 h-4 text-stone-700" />;
      case 'database':
        return <Database className="w-4 h-4 text-stone-700" />;
      default:
        return <CheckCircle className="w-4 h-4 text-stone-700" />;
    }
  };

  return (
    <section id="architecture" className="py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="pb-8 border-b border-stone-200">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
            System Design & Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight mt-1">
            Production Architecture Blueprints
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
            How I structure data pipelines, state synchronization, and multi-gateway fallbacks for zero perceived lag and fault tolerance.
          </p>

          {/* Pattern Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-6">
            {ARCHITECTURE_PATTERNS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPatternId(p.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors text-left ${
                  selectedPatternId === p.id
                    ? 'bg-stone-900 text-stone-50 shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Container */}
        <div className="mt-10 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono font-medium text-stone-500">
              {currentPattern.subtitle}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
              {currentPattern.title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
              {currentPattern.description}
            </p>
          </div>

          {/* Interactive Topology Nodes Strip */}
          <div className="mt-8 pt-8 border-t border-stone-100">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-4">
              Component Topology
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {currentPattern.nodes.map((node, index) => (
                <div
                  key={index}
                  className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/90 flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase text-stone-500">
                      Step 0{index + 1}
                    </span>
                    <div className="p-1 rounded bg-white border border-stone-200">
                      {getNodeIcon(node.type)}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 leading-snug">
                      {node.label}
                    </p>
                    <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                      {node.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Execution Pipeline Walkthrough */}
          <div className="mt-8 pt-8 border-t border-stone-100">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-4">
              Execution Sequence & Fault Recovery
            </p>

            <div className="space-y-2.5">
              {currentPattern.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-stone-50/60 rounded-lg border border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

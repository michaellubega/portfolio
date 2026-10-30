import React from 'react';
import { WORK_TIMELINE } from '../data/portfolioData';
import { Calendar, Briefcase } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="pb-8 border-b border-stone-200">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
            Career & Project Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight mt-1">
            Experience & Development Journey
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
            A chronological timeline of core applications engineered, backend systems deployed, and architectural milestones achieved.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-10 space-y-6">
          {WORK_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-stone-950">
                    {item.role}
                  </h3>
                  <span className="text-sm font-semibold text-stone-500">
                    / {item.project}
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-stone-500">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
                {item.description}
              </p>

              {/* Technologies used in this era */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

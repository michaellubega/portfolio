import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Smartphone, Database, Cloud, Wifi, Wrench, Binary, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'mobile', label: 'Mobile & Flutter' },
    { id: 'backend', label: 'Backend & Databases' },
    { id: 'cloud', label: 'Cloud & Payments' },
    { id: 'networking', label: 'Networking & Systems' },
    { id: 'tools', label: 'Tooling & DevOps' },
    { id: 'foundations', label: 'Algorithms & Physics' },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (selectedCategory === 'all') return true;
    return skill.category === selectedCategory;
  });

  const practicalSkills = filteredSkills.filter((s) => s.level === 'production');
  const developingSkills = filteredSkills.filter((s) => s.level === 'developing');
  const foundationalSkills = filteredSkills.filter((s) => s.level === 'foundational');

  return (
    <section id="skills" className="py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight mt-1">
              Skills & Engineering Profile
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              An honest, production-calibrated assessment separating hands-on practical software delivery from active developing knowledge and academic exploration.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Competencies Breakdown */}
        <div className="space-y-12 pt-10">
          {/* GROUP 1: Practical Production Experience */}
          {practicalSkills.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-stone-900 text-stone-50">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    Practical Production Experience
                  </h3>
                  <p className="text-xs text-stone-500">
                    Demonstrated in end-to-end applications, Google Play releases, real-time Firestore sync, and client-server workflows.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {practicalSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs hover:border-stone-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-bold text-stone-900">
                        {skill.name}
                      </p>
                      <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        Production
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GROUP 2: Developing Knowledge & Systems Engineering */}
          {developingSkills.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-stone-200 text-stone-800">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    Developing Knowledge & Active Engineering
                  </h3>
                  <p className="text-xs text-stone-500">
                    Applied in system administration (u_panel), backend migrations, payment gateway testing, and database architecture.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {developingSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs hover:border-stone-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-bold text-stone-900">
                        {skill.name}
                      </p>
                      <span className="text-[10px] font-mono font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                        Developing
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GROUP 3: Foundational & Academic Knowledge */}
          {foundationalSkills.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-stone-100 text-stone-700">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    Foundational Knowledge & Technical Exploration
                  </h3>
                  <p className="text-xs text-stone-500">
                    Core CS principles, networking equipment (MikroTik), automation workflows (n8n), and physical semiconductor sciences.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {foundationalSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-stone-50/70 rounded-xl border border-stone-200/80"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-bold text-stone-800">
                        {skill.name}
                      </p>
                      <span className="text-[10px] font-mono font-medium text-stone-600 bg-stone-200/70 px-2 py-0.5 rounded">
                        Foundational
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowUpRight, Github, Layers, MapPin, Terminal, Wallet, CreditCard, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'mobile') return proj.category === 'mobile' || proj.category === 'fintech';
    if (filter === 'backend') return proj.category === 'systems' || proj.category === 'backend';
    if (filter === 'fintech') return proj.category === 'fintech';
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'chazaapp':
        return <MapPin className="w-5 h-5 text-stone-900" />;
      case 'u_panel':
        return <Terminal className="w-5 h-5 text-stone-900" />;
      case 'moneta':
        return <Wallet className="w-5 h-5 text-stone-900" />;
      case 'kabox':
        return <CreditCard className="w-5 h-5 text-stone-900" />;
      default:
        return <Layers className="w-5 h-5 text-stone-900" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight mt-1">
              Featured Flagship Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              Production mobile applications, system telemetry panels, and payment engineering built with clean code and verifiable performance.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Projects (4)
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'mobile'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Mobile & Flutter
            </button>
            <button
              onClick={() => setFilter('fintech')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'fintech'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Fintech & Payments
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'backend'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Backend & Systems
            </button>
          </div>
        </div>

        {/* Projects Grid: Clean, Text-First Architectural Bento Cards (NO IMAGES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-stone-200/90 p-7 shadow-xs hover:border-stone-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Row: Category, Icon & Status */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200/80 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900">{project.categoryLabel}</span>
                      <p className="text-[11px] text-stone-500 font-mono">{project.timeline}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-medium text-stone-500 bg-stone-50 px-2 py-0.5 rounded border border-stone-200/60">
                    Production Grade
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-2xl font-extrabold text-stone-950 tracking-tight cursor-pointer hover:text-stone-700 transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-stone-600 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Architecture Highlights Bullets */}
                <div className="pt-2 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                    Key Architectural Capabilities
                  </p>
                  <div className="space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-900 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-stone-700 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Inspect Case Study & Demo</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

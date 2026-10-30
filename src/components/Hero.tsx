import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Mail, ShieldCheck, Smartphone, Database, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenResume }) => {
  return (
    <section className="pt-12 pb-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split Screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 tracking-wide uppercase">
              <span>Software Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Mobile & Backend Architecture</span>
            </div>

            {/* Headline with text-wrap balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 leading-[1.1] [text-wrap:balance]">
              Building resilient mobile apps & high-throughput systems.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
              I am <strong className="font-semibold text-stone-900">Michael Lubega</strong>, a software engineer with practical focus on cross-platform <span className="text-stone-900 font-medium">Flutter</span> mobile architecture, responsive client-server interfaces, and robust backend services in <span className="text-stone-900 font-medium">Python & Django</span>. Creator of ChazaApp, u_panel, Moneta, and Kabox.
            </p>

            {/* Clean Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-500 pt-1">
              <span>{PERSONAL_INFO.location}</span>
              <span aria-hidden="true">·</span>
              <span>Practical Flutter & Dart</span>
              <span aria-hidden="true">·</span>
              <span>Offline-First (Hive & Firestore)</span>
              <span aria-hidden="true">·</span>
              <span>Payment & REST Integrations</span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-50 bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-stone-800 bg-white border border-stone-300 hover:border-stone-400 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Curriculum Vitae</span>
              </button>

              <a
                href={PERSONAL_INFO.githubPages}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Live on GitHub Pages</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap"
              >
                <Github className="w-4 h-4" />
                <span>github.com/michaellubega</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Core Disciplines */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm bg-white rounded-2xl border border-stone-200/90 p-4 shadow-sm hover:shadow-md transition-shadow">
              {/* Developer Image container with zero broken image fallback */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Michael Lubega — Software Engineer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_35%]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      const fallback = e.currentTarget.parentElement.querySelector('.fallback-container');
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="fallback-container hidden absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center text-xl font-bold mb-2">
                    ML
                  </div>
                  <p className="font-semibold text-stone-800">Michael Lubega</p>
                  <p className="text-xs text-stone-500">Software Engineer</p>
                </div>
              </div>

              {/* Developer Caption & Discipline Indicators */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-semibold text-stone-900">Michael Lubega</span>
                  <span>Kampala / Remote</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 pt-2 border-t border-stone-100">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                    <span className="truncate">Flutter & Android</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                    <span className="truncate">Django & SQL</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                    <span className="truncate">Fintech & Auth</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                    <span className="truncate">MikroTik & Networks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip Below the Hero Split */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-mono tracking-tight tabular-nums">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-stone-800">
                  {stat.label}
                </p>
                <p className="text-xs text-stone-500 leading-snug">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

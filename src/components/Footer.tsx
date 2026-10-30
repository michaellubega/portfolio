import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white text-stone-600 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-100">
          <div>
            <span className="text-base font-bold text-stone-950">
              Michael Lubega
            </span>
            <p className="text-xs text-stone-500 mt-0.5">
              Software Engineer · Mobile Development & Backend Systems
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-stone-600">
            <button onClick={() => onNavigate('projects')} className="hover:text-stone-900 transition-colors">
              Projects
            </button>
            <button onClick={() => onNavigate('skills')} className="hover:text-stone-900 transition-colors">
              Skills
            </button>
            <button onClick={() => onNavigate('architecture')} className="hover:text-stone-900 transition-colors">
              Architecture
            </button>
            <button onClick={() => onNavigate('timeline')} className="hover:text-stone-900 transition-colors">
              Timeline
            </button>
            <button onClick={onOpenResume} className="hover:text-stone-900 transition-colors">
              CV Summary
            </button>
            <a
              href={PERSONAL_INFO.githubPages}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              GitHub Pages
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              GitHub
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Michael Lubega. Built with precision and care.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-stone-600 transition-colors">
              {PERSONAL_INFO.email}
            </a>
            <span aria-hidden="true">·</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 transition-colors">
              github.com/michaellubega
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

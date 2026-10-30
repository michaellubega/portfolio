import React, { useState } from 'react';
import { Github, ExternalLink, GitBranch, Terminal, Copy, Check, Star, ArrowUpRight, Globe } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [copiedCommand, setCopiedCommand] = useState(false);
  const [showPagesGuide, setShowPagesGuide] = useState(false);

  const gitCommands = `# 1. Initialize local git repository
git init
git add .
git commit -m "feat: initial commit for Michael Lubega developer portfolio"

# 2. Add remote GitHub repository
git remote add origin https://github.com/michaellubega/portfolio.git
git branch -M main

# 3. Push to GitHub
git push -u origin main

# 4. For GitHub Pages hosting:
# Go to repository Settings -> Pages -> Source: GitHub Actions (or gh-pages branch)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2500);
  };

  return (
    <section id="github" className="py-20 border-b border-stone-200 bg-stone-50/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
              Source Code & Open Source
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight mt-1">
              GitHub Repositories & Deployment
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              Inspect the source code of my four flagship projects directly on GitHub, and easily host this portfolio on GitHub Pages.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.githubPages}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span>michaellubega.github.io</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setShowPagesGuide(!showPagesGuide)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 hover:border-stone-400 rounded-lg transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-stone-600" />
              <span>{showPagesGuide ? 'Hide Deploy Script' : 'Deploy Script & Workflow'}</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-50 bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/michaellubega</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* GitHub Pages Deploy Guide (Collapsible) */}
        {showPagesGuide && (
          <div className="mt-8 p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-stone-800" />
                <h4 className="text-sm font-bold text-stone-900">
                  How to Push to your GitHub & Enable GitHub Pages
                </h4>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-stone-100 hover:bg-stone-200 rounded-md transition-colors text-stone-800"
              >
                {copiedCommand ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCommand ? 'Copied to Clipboard' : 'Copy Commands'}</span>
              </button>
            </div>

            <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
              {gitCommands}
            </pre>

            <p className="text-xs text-stone-500">
              Tip: In your repository settings under <strong>Settings &gt; Pages</strong>, select <strong>Deploy from a branch</strong> or choose <strong>GitHub Actions</strong> to have your portfolio live at <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-900 font-mono">https://michaellubega.github.io/portfolio</code>.
            </p>
          </div>
        )}

        {/* GitHub Pages Status Banner */}
        <div className="mt-8 p-5 bg-emerald-50/70 border border-emerald-200/90 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-950">GitHub Pages Target</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-200/70 text-emerald-900 font-semibold">Active Ready</span>
              </div>
              <p className="text-xs text-emerald-800 mt-0.5">
                Configured with relative asset paths (<code className="font-mono text-emerald-950 font-bold">base: './'</code>) and automatic GitHub Actions CI/CD.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PERSONAL_INFO.githubPages}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>michaellubega.github.io</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.githubPagesProject}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-100 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>/portfolio URL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Flagship Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-stone-500">
                    <Github className="w-4 h-4 text-stone-900" />
                    <span>michaellubega /</span>
                    <strong className="text-stone-900 font-bold">{proj.id}</strong>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">Public</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {proj.tagline}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 flex items-center gap-1">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>main</span>
                </span>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-stone-700 hover:underline"
                >
                  <span>Open Repo</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { TimelineSection } from './components/TimelineSection';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50/60 text-stone-900 selection:bg-stone-900 selection:text-white flex flex-col font-sans">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Split Hero Section with Portrait and Key Stats */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 4 Flagship Projects (ChazaApp, u_panel, Moneta, Kabox) */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Technical Competencies Matrix (Production vs Developing) */}
        <SkillsSection />

        {/* System Architecture Deep-Dive */}
        <ArchitectureSection />

        {/* Development Timeline & Project Eras */}
        <TimelineSection />

        {/* GitHub Repositories & GitHub Pages Guide */}
        <GitHubSection />

        {/* Contact Form & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Clean Anti-slop Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Project Case Study & Sandbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable / Downloadable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

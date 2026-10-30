import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Github, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `
MICHAEL LUBEGA
Software Engineer — Mobile & Backend Systems
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
Location: ${PERSONAL_INFO.location}

PROFESSIONAL SUMMARY
Software engineer specializing in cross-platform mobile application development with Flutter & Dart, backed by clean API design, persistent offline storage (Hive/Firestore), and Python Django backend services. Creator of ChazaApp, u_panel, Moneta, and Kabox.

PRACTICAL PRODUCTION COMPETENCIES
• Mobile Engineering: Flutter, Dart, Provider State Management, Hive Local DB, Android SDK, Gradle, Responsive UI, Play Store Publishing.
• Cloud & APIs: Firebase Firestore, Authentication, App Check, Crashlytics, Cloud Messaging, Google Maps SDK, Dio HTTP Networking, RESTful APIs.
• Version Control & Tools: Git, GitHub, VS Code, Linux/macOS CLI, SSH.

DEVELOPING & APPLIED KNOWLEDGE
• Backend & Databases: Python Django, PostgreSQL, Redis Caching, Token Blacklisting, Database Migrations (Firebase to Django).
• Payments & Security: Marzpay, Unipesa, SMS OTP Verification, JWT Security.
• Systems & Hardware: Computer Networking, MikroTik Equipment, Client-Server Architecture, Algorithms (Round Robin).

FEATURED SOFTWARE PROJECTS
1. ChazaApp (Flutter, Dart, Google Maps, Firebase/Django)
• Local business discovery & customer connection platform with interactive maps, chat, and offline catalog browsing.

2. u_panel (Python, Django, Redis, PostgreSQL, MikroTik API)
• Server administration, telemetry monitoring, and automated queue orchestration panel.

3. Moneta (Flutter, Dart, Hive DB, Provider)
• Intelligent personal finance and budgeting mobile application with sub-millisecond local data persistence.

4. Kabox (Flutter, Dart, Marzpay, Unipesa, SMS OTP)
• Digital wallet and multi-gateway checkout application with strict idempotency and carrier SMS verification.
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden my-6 print:m-0 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-stone-200 bg-stone-50 print:hidden">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-stone-900">
              Curriculum Vitae Preview
            </h3>
            <span className="text-xs text-stone-500">· Ready to Print / Export</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:border-stone-400 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-8 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible text-stone-900 font-sans space-y-6">
          {/* CV Header */}
          <div className="border-b border-stone-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-stone-700 mt-1">
              Software Engineer — Mobile Development & Backend Systems
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600 mt-2.5">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-stone-500" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/michaellubega
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
              Technical Competencies
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <p>
                <strong className="text-stone-900 font-semibold">Practical Mobile Engineering: </strong>
                <span className="text-stone-700">Flutter, Dart, Provider State Management, Hive NoSQL DB, Android SDK, Gradle, Responsive Layouts, Navigation & Form Validation, Google Play Store Publishing.</span>
              </p>
              <p>
                <strong className="text-stone-900 font-semibold">Cloud & Web Services: </strong>
                <span className="text-stone-700">Firebase Firestore, Authentication, Cloud Messaging (FCM), App Check, Crashlytics, Google Maps SDK, Dio HTTP Client, OneSignal.</span>
              </p>
              <p>
                <strong className="text-stone-900 font-semibold">Developing Backend & Databases: </strong>
                <span className="text-stone-700">Python Django, REST APIs, PostgreSQL, Redis Caching, SMS OTP Verification, JWT Token Revocation, Firebase-to-Django Data Migration.</span>
              </p>
              <p>
                <strong className="text-stone-900 font-semibold">Systems & Foundations: </strong>
                <span className="text-stone-700">Computer Networking, MikroTik Equipment, Client-Server Architectures, Round Robin Scheduling, OOP Design Patterns, Semiconductor Electronics.</span>
              </p>
            </div>
          </div>

          {/* Leading Projects */}
          <div>
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
              Featured Software Projects
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex items-baseline justify-between font-semibold">
                    <span className="text-stone-900 font-bold">{proj.title} — {proj.role}</span>
                    <span className="text-stone-500 font-mono text-xs">{proj.timeline}</span>
                  </div>
                  <p className="text-stone-700 mt-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1 font-mono">
                    Stack: {proj.technologies.slice(0, 6).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Foundations */}
          <div className="border-t border-stone-200 pt-4">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
              Engineering & Computer Science Foundations
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Rigorous coursework in Data Structures, Object-Oriented Programming (Polymorphism, Abstraction, Encapsulation), CPU Scheduling Algorithms, and Solid-State Electronics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Mail, Github, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate swift client processing and provide mailto link fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleOpenMailClient = () => {
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Engineering Inquiry for Michael Lubega'
    )}&body=${encodeURIComponent(`Hi Michael,\n\nName: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Direct Channels
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight mt-1">
                Get in Touch
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                Interested in collaborating on mobile applications, backend infrastructure, or payment integrations? Reach out directly.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors group"
              >
                <div className="p-2 bg-stone-100 rounded-lg text-stone-800 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-stone-500">Email Address</p>
                  <p className="text-sm font-bold text-stone-900">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors group"
              >
                <div className="p-2 bg-stone-100 rounded-lg text-stone-800 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-medium text-stone-500">GitHub Profile</p>
                  <p className="text-sm font-bold text-stone-900 flex items-center gap-1">
                    <span>github.com/michaellubega</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200/80">
                <div className="p-2 bg-white rounded-lg text-stone-700 border border-stone-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-stone-500">Location & Timezone</p>
                  <p className="text-sm font-semibold text-stone-900">{PERSONAL_INFO.location} (EAT · UTC+3)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  Message Prepared!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <strong className="text-stone-800">{name}</strong>. You can open your default email client to send this message directly to Michael with one click:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleOpenMailClient}
                    className="px-5 py-2.5 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
                  >
                    Send via Email Client
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                      setSubject('');
                    }}
                    className="px-4 py-2.5 text-xs font-medium text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors"
                  >
                    Write Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-stone-700" />
                  <h3 className="text-base font-bold text-stone-950">
                    Send a Direct Note
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Subject / Project Inquiry
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Flutter mobile app architecture discussion"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 text-xs sm:text-sm font-semibold text-stone-50 bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Transmit Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

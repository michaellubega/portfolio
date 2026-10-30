import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database, Activity, MapPin, Send, CreditCard, RefreshCw } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'engineering' | 'architecture' | 'simulator'>('overview');

  // Simulator States
  // 1. ChazaApp Simulator state
  const [selectedStore, setSelectedStore] = useState<'cafe' | 'pharmacy' | 'electronics'>('cafe');
  const [simulatedChat, setSimulatedChat] = useState<string[]>([
    'Customer: Hello, is the Colombian Dark Roast in stock today?',
    'Merchant: Yes! Freshly roasted batch arrived this morning.',
  ]);
  const [chatInput, setChatInput] = useState('');

  // 2. u_panel Simulator state
  const [endpointPing, setEndpointPing] = useState(24);
  const [cpuUsage, setCpuUsage] = useState(38);
  const [activeNode, setActiveNode] = useState('Gateway-MikroTik-01');
  const [isRefreshingTelemetry, setIsRefreshingTelemetry] = useState(false);

  // 3. Moneta Simulator state
  const [budgetLimit, setBudgetLimit] = useState(1200);
  const [expenses, setExpenses] = useState([
    { id: '1', title: 'AWS Cloud Hosting', amount: 85, category: 'Infrastructure' },
    { id: '2', title: 'Broadband Fiber', amount: 60, category: 'Utilities' },
    { id: '3', title: 'Developer Tools', amount: 45, category: 'Software' },
  ]);
  const [newExpenseTitle, setNewExpenseTitle] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');

  // 4. Kabox Simulator state
  const [selectedGateway, setSelectedGateway] = useState<'marzpay' | 'unipesa'>('marzpay');
  const [paymentAmount, setPaymentAmount] = useState('45.00');
  const [otpCode, setOtpCode] = useState('');
  const [paymentStep, setPaymentStep] = useState<'input' | 'otp' | 'success'>('input');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  if (!project) return null;

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const handleSimulateChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setSimulatedChat((prev) => [
      ...prev,
      `Customer: ${chatInput}`,
      `Merchant: Received your inquiry! (State managed via Provider + Firestore listener)`,
    ]);
    setChatInput('');
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(newExpenseAmount);
    if (!newExpenseTitle || isNaN(amt) || amt <= 0) return;
    setExpenses((prev) => [
      ...prev,
      { id: Date.now().toString(), title: newExpenseTitle, amount: amt, category: 'General' },
    ]);
    setNewExpenseTitle('');
    setNewExpenseAmount('');
  };

  const handleTriggerTelemetryRefresh = () => {
    setIsRefreshingTelemetry(true);
    setTimeout(() => {
      setEndpointPing(Math.floor(18 + Math.random() * 20));
      setCpuUsage(Math.floor(25 + Math.random() * 40));
      setIsRefreshingTelemetry(false);
    }, 400);
  };

  const handleInitiatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentStep('otp');
    }, 600);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode || otpCode.length < 4) return;
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentStep('success');
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/70">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-stone-950 tracking-tight">
              {project.title}
            </h2>
            <span className="text-xs text-stone-500 font-medium">
              / {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:border-stone-400 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Code</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs (Zero-pill segmented buttons) */}
        <div className="flex items-center gap-1 px-6 pt-3 pb-2 border-b border-stone-200 bg-white text-xs font-medium text-stone-600">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-stone-900 text-stone-50'
                : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Overview & Features
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'engineering'
                ? 'bg-stone-900 text-stone-50'
                : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Engineering Highlights
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'architecture'
                ? 'bg-stone-900 text-stone-50'
                : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Architecture & Data Flow
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'simulator'
                ? 'bg-stone-900 text-stone-50'
                : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Interactive Sandbox
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Architecture Blueprint Strip (NO IMAGE) */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/90 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Architecture Specification</span>
                  <span className="text-stone-900 font-semibold">{project.categoryLabel}</span>
                </div>
                <p className="text-sm font-semibold text-stone-900">
                  {project.tagline}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed font-mono pt-1">
                  System Flow: {project.architectureSummary}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Project Narrative
                </p>
                <p className="mt-1 text-sm sm:text-base text-stone-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
                  Technical Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-stone-700 bg-stone-100 rounded-md border border-stone-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">
                  Core Capabilities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ENGINEERING HIGHLIGHTS */}
          {activeTab === 'engineering' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Engineering Challenges & Solutions
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Real architectural decisions made during development to ensure low latency and high reliability.
                </p>
              </div>

              <div className="space-y-4">
                {project.engineeringHighlights.map((hl, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <p className="text-sm font-bold text-stone-900">
                      {hl.title}
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/60 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <span className="font-semibold">Developer Note: </span>
                Every technical decision prioritized deterministic execution and resilience on bandwidth-constrained devices, keeping client frames steady at 60 FPS.
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE & DATA FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  System Topology & Pipeline
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {project.architectureSummary}
                </p>
              </div>

              {/* Data Flow Steps */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Step-by-Step Data Flow
                </p>
                <div className="space-y-2">
                  {project.dataFlow.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200/80">
                      <span className="w-5 h-5 rounded-full bg-stone-900 text-stone-50 text-xs flex items-center justify-center shrink-0 font-mono">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-stone-700 leading-snug">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repository Architecture Link */}
              <div className="pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-stone-900 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect complete source tree on GitHub: {project.githubUrl}</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 4: INTERACTIVE SIMULATOR */}
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Live Interactive Sandbox
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Test the simulated client state and logic flows engineered for {project.title}.
                </p>
              </div>

              {/* 1. CHAZAAPP SIMULATOR */}
              {project.id === 'chazaapp' && (
                <div className="space-y-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <span className="text-xs font-bold text-stone-800">
                      Store Locator & In-App Customer Chat
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setSelectedStore('cafe')}
                        className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                          selectedStore === 'cafe'
                            ? 'bg-stone-900 text-white'
                            : 'bg-white text-stone-700 border border-stone-200'
                        }`}
                      >
                        Acacia Coffee Roasters
                      </button>
                      <button
                        onClick={() => setSelectedStore('pharmacy')}
                        className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                          selectedStore === 'pharmacy'
                            ? 'bg-stone-900 text-white'
                            : 'bg-white text-stone-700 border border-stone-200'
                        }`}
                      >
                        Kampala Health Pharmacy
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      <span>{selectedStore === 'cafe' ? 'Acacia Coffee Roasters (250m away)' : 'Kampala Health Pharmacy (800m away)'}</span>
                    </div>
                    <p className="text-stone-500">
                      Catalog Status: Cached in Hive Local DB · Real-time inventory sync ready
                    </p>
                  </div>

                  {/* Chat Box */}
                  <div className="bg-white rounded-lg border border-stone-200 p-3 space-y-2">
                    <div className="h-32 overflow-y-auto space-y-2 text-xs">
                      {simulatedChat.map((msg, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded-lg max-w-[85%] ${
                            msg.startsWith('Customer:')
                              ? 'bg-stone-100 text-stone-800 ml-auto'
                              : 'bg-stone-900 text-stone-100'
                          }`}
                        >
                          {msg}
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSimulateChat} className="flex gap-2 pt-2 border-t border-stone-100">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Type message to merchant..."
                        className="flex-1 px-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-stone-900"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 text-xs font-semibold bg-stone-900 text-white rounded-md hover:bg-stone-800 inline-flex items-center gap-1"
                      >
                        <Send className="w-3 h-3" />
                        <span>Send</span>
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* 2. U_PANEL SIMULATOR */}
              {project.id === 'u_panel' && (
                <div className="space-y-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-stone-800">
                        Node Telemetry Stream & Probe Monitor
                      </span>
                    </div>
                    <button
                      onClick={handleTriggerTelemetryRefresh}
                      disabled={isRefreshingTelemetry}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-white border border-stone-200 rounded-md hover:bg-stone-100 transition-colors"
                    >
                      <RefreshCw className={`w-3 h-3 ${isRefreshingTelemetry ? 'animate-spin' : ''}`} />
                      <span>Ping Endpoint</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-white rounded-lg border border-stone-200">
                      <p className="text-[11px] text-stone-500 font-medium">Active Node</p>
                      <p className="text-xs font-bold text-stone-900 mt-1 truncate">{activeNode}</p>
                      <p className="text-[10px] text-emerald-600 font-medium mt-0.5">Online · TCP 8728</p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-stone-200">
                      <p className="text-[11px] text-stone-500 font-medium">Round-Trip Latency</p>
                      <p className="text-base font-extrabold text-stone-900 mt-1 font-mono">{endpointPing} ms</p>
                      <p className="text-[10px] text-stone-500 mt-0.5">Within SLA boundary</p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-stone-200">
                      <p className="text-[11px] text-stone-500 font-medium">Worker CPU Load</p>
                      <p className="text-base font-extrabold text-stone-900 mt-1 font-mono">{cpuUsage}%</p>
                      <p className="text-[10px] text-stone-500 mt-0.5">Redis Queue: 0 backlog</p>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-900 text-stone-100 rounded-lg font-mono text-[11px] space-y-1">
                    <p className="text-stone-400">// Diagnostic Log Stream</p>
                    <p>&gt; GET /api/v1/nodes/mikrotik-01/telemetry HTTP/1.1 200 OK</p>
                    <p>&gt; Ingestion buffer committed to Redis in 1.4ms (worker pid: 2198)</p>
                    <p className="text-emerald-400">&gt; Authenticated session: JWT verified via RSA-256</p>
                  </div>
                </div>
              )}

              {/* 3. MONETA SIMULATOR */}
              {project.id === 'moneta' && (
                <div className="space-y-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <span className="text-xs font-bold text-stone-800">
                      Deterministic Budget Calculator & Hive Ledger
                    </span>
                    <span className="text-xs text-stone-500">
                      Total Spent: <strong className="text-stone-900 font-mono">${totalSpent}</strong> / ${budgetLimit}
                    </span>
                  </div>

                  {/* Budget Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-stone-600">
                      <span>Monthly Allowance Burn</span>
                      <span>{Math.round((totalSpent / budgetLimit) * 100)}% Used</span>
                    </div>
                    <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          (totalSpent / budgetLimit) > 0.85 ? 'bg-rose-500' : 'bg-emerald-600'
                        }`}
                        style={{ width: `${Math.min(100, (totalSpent / budgetLimit) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Quick Add Expense Form */}
                  <form onSubmit={handleAddExpense} className="flex gap-2">
                    <input
                      type="text"
                      value={newExpenseTitle}
                      onChange={(e) => setNewExpenseTitle(e.target.value)}
                      placeholder="Expense item (e.g. Domain renew)"
                      className="flex-1 px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-md focus:outline-none focus:border-stone-900"
                    />
                    <input
                      type="number"
                      value={newExpenseAmount}
                      onChange={(e) => setNewExpenseAmount(e.target.value)}
                      placeholder="$ USD"
                      className="w-24 px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-md focus:outline-none focus:border-stone-900"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-semibold bg-stone-900 text-white rounded-md hover:bg-stone-800"
                    >
                      Log Entry
                    </button>
                  </form>

                  {/* Transaction List */}
                  <div className="bg-white rounded-lg border border-stone-200 divide-y divide-stone-100 max-h-36 overflow-y-auto">
                    {expenses.map((item) => (
                      <div key={item.id} className="p-2.5 flex items-center justify-between text-xs">
                        <div>
                          <p className="font-semibold text-stone-800">{item.title}</p>
                          <p className="text-[11px] text-stone-500">{item.category}</p>
                        </div>
                        <span className="font-mono font-bold text-stone-900">-${item.amount.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. KABOX SIMULATOR */}
              {project.id === 'kabox' && (
                <div className="space-y-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <span className="text-xs font-bold text-stone-800">
                      Payment Gateway Dispatcher (Marzpay & Unipesa)
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setSelectedGateway('marzpay')}
                        className={`px-2 py-1 text-xs rounded-md font-medium transition-colors ${
                          selectedGateway === 'marzpay'
                            ? 'bg-stone-900 text-white'
                            : 'bg-white text-stone-700 border border-stone-200'
                        }`}
                      >
                        Marzpay API
                      </button>
                      <button
                        onClick={() => setSelectedGateway('unipesa')}
                        className={`px-2 py-1 text-xs rounded-md font-medium transition-colors ${
                          selectedGateway === 'unipesa'
                            ? 'bg-stone-900 text-white'
                            : 'bg-white text-stone-700 border border-stone-200'
                        }`}
                      >
                        Unipesa Relay
                      </button>
                    </div>
                  </div>

                  {paymentStep === 'input' && (
                    <form onSubmit={handleInitiatePayment} className="space-y-3 bg-white p-3 rounded-lg border border-stone-200">
                      <div>
                        <label className="block text-[11px] font-medium text-stone-500 mb-1">
                          Checkout Amount ($ USD)
                        </label>
                        <input
                          type="text"
                          value={paymentAmount}
                          onChange={(e) => setPaymentAmount(e.target.value)}
                          className="w-full px-3 py-1.5 text-xs border border-stone-200 rounded-md font-mono"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isProcessingPayment}
                        className="w-full py-2 text-xs font-semibold bg-stone-900 text-white rounded-md hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>{isProcessingPayment ? 'Dispatching Payload...' : `Authorize via ${selectedGateway === 'marzpay' ? 'Marzpay' : 'Unipesa'}`}</span>
                      </button>
                    </form>
                  )}

                  {paymentStep === 'otp' && (
                    <form onSubmit={handleVerifyOtp} className="space-y-3 bg-white p-3 rounded-lg border border-stone-200">
                      <p className="text-xs text-stone-700">
                        Carrier SMS OTP sent to handset (Simulated: enter <strong className="font-mono">8421</strong>):
                      </p>
                      <input
                        type="text"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="Enter 4-digit OTP"
                        maxLength={4}
                        className="w-full text-center tracking-widest text-base font-mono py-1.5 border border-stone-300 rounded-md"
                      />
                      <button
                        type="submit"
                        disabled={isProcessingPayment}
                        className="w-full py-2 text-xs font-semibold bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors"
                      >
                        {isProcessingPayment ? 'Verifying with Gateway...' : 'Confirm Payment'}
                      </button>
                    </form>
                  )}

                  {paymentStep === 'success' && (
                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                      <p className="text-xs font-bold text-emerald-950">
                        Transaction Completed & Ledger Committed
                      </p>
                      <p className="text-[11px] text-emerald-700 font-mono">
                        Idempotency UUID: f9e8b2a1-042c-49aa-924c-87d
                      </p>
                      <button
                        onClick={() => {
                          setPaymentStep('input');
                          setOtpCode('');
                        }}
                        className="text-xs text-stone-700 underline pt-1 font-medium"
                      >
                        Test Another Transaction
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>Project Role: <strong className="text-stone-800">{project.role}</strong></span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-stone-900 hover:underline inline-flex items-center gap-1"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

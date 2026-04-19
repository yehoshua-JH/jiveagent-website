/*
 * JiveAgents Marketing Website — Home Page
 * Design: Midnight Gradient Glassmorphism
 * Dark navy background, frosted glass cards, violet/blue accents
 * Fonts: Sora (headings) + Plus Jakarta Sans (body)
 */

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Phone, Bot, Calendar, MessageSquare, ArrowRight, Check,
  Globe, Zap, Shield, Users, BarChart3, Headphones, Building2,
  Star, ChevronDown, Menu, X, Mic, Brain, PhoneCall,
  TrendingUp, Clock, Languages, Webhook, Database, Play,
  ChevronRight, Sparkles, Building, UserCheck, LayoutDashboard,
  Pause, Volume2, VolumeX, Send, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Asset URLs ────────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/VVZfdDULfY7wjeBqPf87vW/hero-bg-iKahnuio5iwQQM4PL2pqsu.webp";
const DASHBOARD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/VVZfdDULfY7wjeBqPf87vW/dashboard-preview-Dqzy8zxQYdKda6Ah56acNn.webp";
const RESELLER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/VVZfdDULfY7wjeBqPf87vW/reseller-illustration-ByXYaRZjpJpVuoiZ8h2sVG.webp";
const WAVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/VVZfdDULfY7wjeBqPf87vW/voice-wave-9VWRenTghv9tv6epZ9Jddg.webp";

// ─── Animation helpers ─────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Live Demo", href: "#demo" },
    { label: "For Agencies", href: "#agencies" },
    { label: "Pricing", href: "#pricing" },
    { label: "Book Demo", href: "#book-demo" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050818]/90 backdrop-blur-xl border-b border-white/8" : ""}`}>
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
            Jive<span className="text-violet-400">Agents</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.jiveagents.com" className="text-sm text-white/60 hover:text-white transition-colors">
            Log In
          </a>
          <a href="https://app.jiveagents.com" className="btn-glow inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold">
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0f2a]/95 backdrop-blur-xl border-b border-white/8 px-6 py-4 flex flex-col gap-4"
        >
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm text-white/70 hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://app.jiveagents.com" className="btn-glow inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold">
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      )}
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050818]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050818]/40 via-transparent to-[#050818]" />
      <div className="absolute inset-0 radial-glow" />

      <div className="container relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-violet-300 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Voice Agents — Available 24/7
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Your Business,{" "}
            <span className="gradient-text">Always Answering</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Deploy AI voice agents that answer calls, book appointments, qualify leads, and handle customer service — in any language, around the clock. No staff required.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="https://app.jiveagents.com" className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-base">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#how-it-works" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-card text-white/80 hover:text-white font-medium text-base transition-colors">
              <Play className="w-4 h-4 fill-current" /> See How It Works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: "24/7", label: "Always On" },
              { value: "40+", label: "Languages" },
              { value: "<1s", label: "Response Time" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Sora, sans-serif' }}>{s.value}</div>
                <div className="text-xs text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard preview */}
        <FadeUp delay={0.5} className="mt-20 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-blue-600/30 rounded-2xl blur-xl" />
            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/15">
              <img src={DASHBOARD_IMG} alt="JiveAgents Dashboard" className="w-full h-auto" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Logos / Social Proof ──────────────────────────────────────────────────────
function SocialProof() {
  const integrations = ["Twilio", "OpenAI", "Deepgram", "ElevenLabs", "Google Calendar", "Stripe"];
  return (
    <section className="py-12 border-y border-white/8 bg-[#080d1f]">
      <div className="container">
        <p className="text-center text-sm text-white/30 mb-8 uppercase tracking-widest">Powered by world-class infrastructure</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {integrations.map(name => (
            <span key={name} className="text-white/25 font-semibold text-sm hover:text-white/50 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Multiple LLM Providers",
    desc: "Choose from GPT-4o, GPT-4o-mini, Claude, and more. Switch models per agent to balance cost and capability.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <Mic className="w-5 h-5" />,
    title: "Natural Voice Conversations",
    desc: "Powered by Deepgram STT and ElevenLabs TTS. Agents sound human, respond in under a second, and handle interruptions naturally.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Appointment Booking",
    desc: "Agents check availability and book slots live during the call via Google Calendar integration. No back-and-forth needed.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "SMS & Follow-up Actions",
    desc: "Automatically send SMS confirmations, transfer calls to human agents, or trigger webhooks after every call.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Knowledge Base",
    desc: "Upload documents, FAQs, and product catalogs. Agents answer questions accurately from your own content.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Webhook className="w-5 h-5" />,
    title: "CRM & Webhook Integration",
    desc: "Push call data, extracted fields, and order details to any CRM or backend via configurable webhooks.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    title: "40+ Languages",
    desc: "Serve customers in their native language. Language detection is automatic, or you can lock it per agent.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Analytics & Call Logs",
    desc: "Full transcripts, call duration, sentiment, and extracted data for every call. Search and filter across all clients.",
    color: "from-violet-500 to-blue-500",
  },
  {
    icon: <PhoneCall className="w-5 h-5" />,
    title: "Auto Webhook Assignment",
    desc: "Assign a Twilio number to an agent and the webhook is configured automatically. No manual copy-paste.",
    color: "from-teal-500 to-emerald-500",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-[#050818] relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="container relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 mb-4">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Everything your agents need
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A complete AI voice platform — from the first ring to the final follow-up.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.05}>
              <div className="glass-card rounded-xl p-6 h-full hover:border-white/20 transition-all duration-300 group">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    icon: <Bot className="w-6 h-6" />,
    title: "Create Your Agent",
    desc: "Define your agent's name, voice, language, and personality. Upload your knowledge base and set the system prompt — or use a template.",
  },
  {
    num: "02",
    icon: <Phone className="w-6 h-6" />,
    title: "Assign a Phone Number",
    desc: "Connect a Twilio number and the webhook is configured automatically. Your agent is live and ready to take calls.",
  },
  {
    num: "03",
    icon: <Headphones className="w-6 h-6" />,
    title: "Agents Handle Every Call",
    desc: "Callers are greeted by your AI agent. It answers questions, books appointments, collects data, and takes action — all in real time.",
  },
  {
    num: "04",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Review & Optimize",
    desc: "Every call is logged with a full transcript and extracted data. Use analytics to improve your agent's performance over time.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#080d1f] relative overflow-hidden">
      <div className="container relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Live in minutes, not months
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No engineering team required. Set up your first AI agent in under 10 minutes.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <FadeUp key={s.num} delay={i * 0.1}>
              <div className="relative glass-card rounded-xl p-6 h-full">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <ChevronRight className="w-5 h-5 text-white/20" />
                  </div>
                )}
                <div className="text-5xl font-bold text-white/5 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>{s.num}</div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white mb-4">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Wave image accent */}
        <FadeUp delay={0.3} className="mt-20">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card rounded-2xl overflow-hidden">
              <img src={WAVE_IMG} alt="Voice waveform" className="w-full h-48 object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Real-time voice processing</div>
                  <div className="text-white/50 text-sm">Sub-second response latency</div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Use Cases ─────────────────────────────────────────────────────────────────
const USE_CASES = [
  { icon: <Building2 className="w-5 h-5" />, title: "Dental & Medical Clinics", desc: "Book appointments, send reminders, handle insurance questions." },
  { icon: <Building className="w-5 h-5" />, title: "Real Estate Agencies", desc: "Qualify leads, schedule viewings, answer property questions 24/7." },
  { icon: <Headphones className="w-5 h-5" />, title: "Customer Support", desc: "Handle FAQs, route complex issues to humans, reduce ticket volume." },
  { icon: <Phone className="w-5 h-5" />, title: "Restaurants & Food", desc: "Take orders, manage reservations, answer menu questions." },
  { icon: <UserCheck className="w-5 h-5" />, title: "Sales Teams", desc: "Qualify inbound leads, book demos, follow up with prospects." },
  { icon: <Globe className="w-5 h-5" />, title: "Any Business", desc: "If you receive phone calls, JiveAgents can handle them." },
];

function UseCases() {
  return (
    <section className="py-24 bg-[#050818]">
      <div className="container">
        <FadeUp className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 mb-4">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Built for every industry
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            From solo practitioners to enterprise call centers — JiveAgents adapts to your workflow.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map((u, i) => (
            <FadeUp key={u.title} delay={i * 0.07}>
              <div className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-white/20 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-violet-400 flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  {u.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{u.title}</h3>
                  <p className="text-sm text-white/50">{u.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Agency / Reseller Section ─────────────────────────────────────────────────
function AgencySection() {
  const perks = [
    "White-label ready — your brand, your domain",
    "Multi-tenant dashboard — manage all clients from one place",
    "Per-client agent isolation and billing",
    "Reseller pricing with volume discounts",
    "Dedicated onboarding and support",
    "API access for custom integrations",
  ];

  return (
    <section id="agencies" className="py-24 bg-[#080d1f] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20"
        style={{ backgroundImage: `url(${RESELLER_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#080d1f] to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <FadeUp>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 mb-6">
              For Agencies & Resellers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
              Build your own AI voice agency
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              JiveAgents is built from the ground up for resellers. Onboard clients, deploy agents under your brand, and manage everything from a single dashboard. Add a new revenue stream to your existing agency without building anything from scratch.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-3 mb-10">
              {perks.map(p => (
                <div key={p} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-violet-400" />
                  </div>
                  <span className="text-white/70 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <a href="https://app.jiveagents.com" className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold">
              Become a Reseller <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Live Demo ────────────────────────────────────────────────────────────────
const DEMO_CALLS = [
  {
    id: "dental",
    label: "Dental Clinic",
    description: "Patient calls to book a cleaning appointment",
    duration: "1:24",
    color: "from-blue-500 to-cyan-500",
    waveColor: "#60a5fa",
    transcript: [
      { speaker: "Agent", text: "Thank you for calling Bright Smile Dental. This is Aria, how can I help you today?" },
      { speaker: "Caller", text: "Hi, I'd like to book a cleaning appointment for next week if possible." },
      { speaker: "Agent", text: "Of course! I can help with that. Could I get your name and date of birth to pull up your file?" },
      { speaker: "Caller", text: "Sure, it's Michael Torres, born March 15th, 1988." },
      { speaker: "Agent", text: "Perfect, Michael. I have Tuesday at 10am or Thursday at 2pm available next week. Which works better for you?" },
      { speaker: "Caller", text: "Thursday at 2pm sounds great." },
      { speaker: "Agent", text: "Wonderful! I've booked you in for Thursday at 2pm. You'll receive a confirmation text shortly. Is there anything else I can help you with?" },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate",
    description: "Lead calls about a property listing after hours",
    duration: "1:52",
    color: "from-violet-500 to-purple-600",
    waveColor: "#a78bfa",
    transcript: [
      { speaker: "Agent", text: "Hello, thanks for calling Premier Realty. I'm Alex, your AI assistant. How can I help you tonight?" },
      { speaker: "Caller", text: "Yeah hi, I saw a listing on Zillow for 42 Maple Drive. Is it still available?" },
      { speaker: "Agent", text: "Great choice! 42 Maple Drive is a 4-bed, 2-bath home listed at $485,000 and it is still available. Are you pre-approved for financing?" },
      { speaker: "Caller", text: "Yes, we're pre-approved up to $500k. Can we schedule a viewing?" },
      { speaker: "Agent", text: "Absolutely. I can schedule a showing for this Saturday at 11am or Sunday at 3pm. Which works for you?" },
      { speaker: "Caller", text: "Saturday at 11 works perfectly." },
      { speaker: "Agent", text: "Done! I've booked Saturday at 11am. Your agent Sarah will meet you there. I'll send a confirmation to your number now." },
    ],
  },
  {
    id: "restaurant",
    label: "Restaurant",
    description: "Customer calls to place a takeout order",
    duration: "2:05",
    color: "from-orange-500 to-red-500",
    waveColor: "#fb923c",
    transcript: [
      { speaker: "Agent", text: "Welcome to Bella Cucina! I'm Mia. Are you calling to place an order or make a reservation?" },
      { speaker: "Caller", text: "I'd like to order takeout please." },
      { speaker: "Agent", text: "Perfect! What can I get started for you today?" },
      { speaker: "Caller", text: "I'll take two margherita pizzas and a Caesar salad. What's the wait time?" },
      { speaker: "Agent", text: "Great choices! Two margherita pizzas and a Caesar salad comes to $42.50. Current wait is about 25 minutes. Can I get your name and phone number?" },
      { speaker: "Caller", text: "It's Lisa Chen, 555-0192." },
      { speaker: "Agent", text: "Got it, Lisa. Your order is confirmed and will be ready in 25 minutes. We'll text you when it's ready for pickup!" },
    ],
  },
];

function LiveDemo() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const demo = DEMO_CALLS[activeDemo];

  const stopPlayback = () => {
    setPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startPlayback = () => {
    setPlaying(true);
    setProgress(0);
    setVisibleLines(0);
    const totalLines = demo.transcript.length;
    let line = 0;
    let prog = 0;
    intervalRef.current = setInterval(() => {
      prog += 1;
      setProgress(prog);
      if (prog % Math.floor(100 / totalLines) === 0 && line < totalLines) {
        line++;
        setVisibleLines(line);
      }
      if (prog >= 100) {
        clearInterval(intervalRef.current!);
        setPlaying(false);
        setVisibleLines(totalLines);
      }
    }, 80);
  };

  const togglePlay = () => {
    if (playing) stopPlayback();
    else startPlayback();
  };

  useEffect(() => {
    stopPlayback();
    setProgress(0);
    setVisibleLines(0);
  }, [activeDemo]);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  return (
    <section id="demo" className="py-24 bg-[#080d1f] relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="container relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 mb-4">
            Live Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Hear it in action
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real conversations handled by JiveAgents across different industries.
          </p>
        </FadeUp>

        <div className="max-w-4xl mx-auto">
          {/* Demo selector tabs */}
          <FadeUp className="flex flex-wrap gap-3 justify-center mb-8">
            {DEMO_CALLS.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setActiveDemo(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeDemo === i
                    ? `bg-gradient-to-r ${d.color} text-white shadow-lg`
                    : "glass-card text-white/60 hover:text-white"
                }`}
              >
                {d.label}
              </button>
            ))}
          </FadeUp>

          <FadeUp>
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Player header */}
              <div className={`bg-gradient-to-r ${demo.color} p-6 flex items-center justify-between`}>
                <div>
                  <div className="text-white font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>{demo.label} Agent</div>
                  <div className="text-white/70 text-sm mt-0.5">{demo.description}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/70 text-sm">{demo.duration}</span>
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all backdrop-blur-sm"
                  >
                    {playing
                      ? <Pause className="w-5 h-5 text-white" />
                      : <Play className="w-5 h-5 text-white fill-current" />}
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-white/10">
                <motion.div
                  className={`h-full bg-gradient-to-r ${demo.color}`}
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Transcript */}
              <div className="p-6 space-y-4 min-h-[280px]">
                {demo.transcript.slice(0, playing || visibleLines > 0 ? visibleLines : demo.transcript.length).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: line.speaker === "Agent" ? -16 : 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`flex gap-3 ${ line.speaker === "Caller" ? "flex-row-reverse" : "" }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                      line.speaker === "Agent"
                        ? `bg-gradient-to-br ${demo.color} text-white`
                        : "bg-white/10 text-white/60"
                    }`}>
                      {line.speaker === "Agent" ? "AI" : "C"}
                    </div>
                    <div className={`max-w-[75%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                      line.speaker === "Agent"
                        ? "bg-white/8 text-white/80"
                        : "bg-white/5 text-white/60"
                    }`}>
                      {line.text}
                    </div>
                  </motion.div>
                ))}
                {!playing && visibleLines === 0 && (
                  <div className="flex items-center justify-center h-40 text-white/30 text-sm">
                    Press play to see the conversation unfold
                  </div>
                )}
              </div>

              {/* Footer note */}
              <div className="px-6 pb-5 text-xs text-white/30 text-center">
                * Simulated transcript — actual voice quality depends on your chosen TTS provider
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Book a Demo Form ──────────────────────────────────────────────────────────
function BookDemo() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.business) {
      toast.error("Please fill in your name, email, and business name.");
      return;
    }
    setSubmitting(true);
    // Simulate form submission (replace with actual endpoint)
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Demo request sent! We'll be in touch within 24 hours.");
  };

  return (
    <section id="book-demo" className="py-24 bg-[#050818] relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-40" />
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <FadeUp>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 mb-6">
              Book a Demo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
              See JiveAgents<br />built for your business
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Get a personalized walkthrough with our team. We'll show you how to deploy your first agent, configure it for your industry, and go live in under 10 minutes.
            </p>
            <ul className="space-y-3">
              {[
                "Live demo tailored to your industry",
                "Reseller & white-label pricing discussed",
                "No commitment — just a conversation",
                "Response within 24 hours",
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-violet-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.15}>
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>Request received!</h3>
                  <p className="text-white/55 leading-relaxed">
                    Thanks, {form.name.split(" ")[0]}! Our team will reach out to {form.email} within 24 hours to schedule your demo.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5">Full Name *</label>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5">Work Email *</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5">Business Name *</label>
                      <input
                        name="business" value={form.business} onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5">Phone</label>
                      <input
                        name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5">I am a…</label>
                    <select
                      name="type" value={form.type} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#0a0f2a]">Select one</option>
                      <option value="business" className="bg-[#0a0f2a]">Business owner / end user</option>
                      <option value="agency" className="bg-[#0a0f2a]">Agency / reseller</option>
                      <option value="enterprise" className="bg-[#0a0f2a]">Enterprise</option>
                      <option value="other" className="bg-[#0a0f2a]">Just exploring</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5">Tell us about your use case</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="e.g. We run a dental clinic and want to automate appointment booking..."
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-glow inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm disabled:opacity-60 transition-all"
                  >
                    {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <><Send className="w-4 h-4" /> Book My Demo</>}
                  </button>
                  <p className="text-center text-xs text-white/25">No spam. Unsubscribe anytime.</p>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Starter",
    badge: null,
    price: "$49",
    period: "/mo",
    desc: "Perfect for small businesses getting started with AI voice.",
    features: [
      "1 AI voice agent",
      "500 minutes included",
      "1 phone number",
      "Call logs & transcripts",
      "Knowledge base (5 docs)",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    badge: "Most Popular",
    price: "$149",
    period: "/mo",
    desc: "For growing businesses that need more agents and minutes.",
    features: [
      "5 AI voice agents",
      "2,000 minutes included",
      "5 phone numbers",
      "Appointment booking",
      "CRM webhooks",
      "Knowledge base (unlimited)",
      "SMS actions",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Agency",
    badge: "Resellers",
    price: "Custom",
    period: "",
    desc: "White-label platform for agencies managing multiple clients.",
    features: [
      "Unlimited clients",
      "Unlimited agents",
      "Custom minutes pool",
      "White-label branding",
      "Multi-tenant dashboard",
      "Volume pricing",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#050818] relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-40" />
      <div className="container relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Simple, transparent pricing
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No hidden fees. No per-seat charges. Pay for what you use.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.1}>
              <div className={`relative glass-card rounded-2xl p-8 h-full flex flex-col ${p.highlight ? "border-violet-500/40 bg-violet-500/5" : ""}`}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-blue-600 text-white">
                      {p.badge}
                    </span>
                  </div>
                )}
                {p.badge && !p.highlight && (
                  <span className="inline-block mb-3 px-3 py-0.5 rounded-full text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20">
                    {p.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{p.name}</h3>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-4xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>{p.price}</span>
                    {p.period && <span className="text-white/40 mb-1">{p.period}</span>}
                  </div>
                  <p className="text-sm text-white/50">{p.desc}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.jiveagents.com"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    p.highlight
                      ? "btn-glow bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                      : "glass-card text-white/80 hover:text-white hover:border-white/20"
                  }`}
                >
                  {p.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "We deployed JiveAgents for our dental clinic and it books 30% more appointments than before. Patients love that someone always answers.",
    author: "Dr. Sarah M.",
    role: "Dental Clinic Owner",
  },
  {
    quote: "As an agency, we resell JiveAgents to our clients. The multi-tenant dashboard is exactly what we needed. Setup takes minutes per client.",
    author: "Marcus T.",
    role: "Agency Director",
  },
  {
    quote: "Our real estate team was missing calls after hours. Now every lead gets a response immediately, even at 2am. ROI was immediate.",
    author: "Jennifer K.",
    role: "Real Estate Broker",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-[#080d1f]">
      <div className="container">
        <FadeUp className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Trusted by businesses worldwide
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.author} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-white text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>{t.author}</div>
                  <div className="text-white/40 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-24 bg-[#050818] relative overflow-hidden">
      <div className="absolute inset-0 radial-glow" />
      <div className="container relative z-10">
        <FadeUp>
          <div className="relative glass-card rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to deploy your first agent?
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                Join businesses that never miss a call. Set up your AI voice agent in under 10 minutes — no code required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://app.jiveagents.com" className="btn-glow inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-base">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </a>
                <a href="mailto:hello@jiveagents.com" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl glass-card text-white/70 hover:text-white font-medium text-base transition-colors">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#030710] border-t border-white/8 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <Mic className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                Jive<span className="text-violet-400">Agents</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              AI voice agents that answer calls, book appointments, and handle customer service — 24/7.
            </p>
          </div>

          {/* Links */}
          {[
            { title: "Product", links: ["Features", "How It Works", "Pricing", "Changelog"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "GDPR"] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 JiveAgents. All rights reserved.</p>
          <p className="text-xs text-white/30">
            <a href="https://app.jiveagents.com" className="hover:text-white/60 transition-colors">app.jiveagents.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#050818]">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <UseCases />
      <AgencySection />
      <Pricing />
      <LiveDemo />
      <Testimonials />
      <BookDemo />
      <CTABanner />
      <Footer />
    </div>
  );
}

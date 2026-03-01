"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Database,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BarChart2,
  GitMerge,
  Bell,
  Lock,
} from "lucide-react";

// ─── Carousel ────────────────────────────────────────────────────────────────

function TechCarousel({ techs, color }: { techs: string[]; color: string }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const visibleCount = 4;
  const total = techs.length;

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 2200);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const prev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((c) => (c - 1 + total) % total);
    startAuto();
  };

  const next = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((c) => (c + 1) % total);
    startAuto();
  };

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(techs[(current + i) % total]);
    }
    return items;
  };

  return (
    <div className="relative flex items-center gap-3">
      <button
        onClick={prev}
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110"
        style={{
          background: `${color}20`,
          border: `1px solid ${color}30`,
          color,
        }}
      >
        <ChevronLeft size={14} />
      </button>
      <div className="flex gap-2 overflow-hidden flex-1">
        {getVisible().map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap flex-1 text-center transition-all duration-500"
            style={{
              background: i === 0 ? `${color}20` : "var(--bg3)",
              border: `1px solid ${i === 0 ? color + "40" : "var(--border)"}`,
              color: i === 0 ? color : "var(--text2)",
              transform: "translateX(0)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      <button
        onClick={next}
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110"
        style={{
          background: `${color}20`,
          border: `1px solid ${color}30`,
          color,
        }}
      >
        <ChevronRight size={14} />
      </button>
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-1">
        {techs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === i ? 16 : 6,
              height: 6,
              background: current === i ? color : `${color}40`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FAQ({
  faqs,
  color,
}: {
  faqs: { q: string; a: string }[];
  color: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            border: `1px solid ${open === i ? color + "40" : "var(--border)"}`,
            background: "var(--card-bg)",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span
              className="font-semibold text-sm"
              style={{ color: "var(--text)" }}
            >
              {faq.q}
            </span>
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-4 transition-transform duration-300"
              style={{
                background: `${color}15`,
                color,
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p
              className="px-5 pb-5 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const color = "#06d6a0";
const gradient = "linear-gradient(135deg, #06d6a0 0%, #0ea5e9 100%)";
const techs = [
  "Node.js",
  "React",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "WebSockets",
];
const features = [
  "Lead Management",
  "Sales Pipeline",
  "Custom Dashboards",
  "Email / SMS Integration",
  "Reporting & Analytics",
  "Role-Based Access",
];
const stats = [
  { label: "CRM Projects Delivered", value: "45+" },
  { label: "Happy Businesses", value: "40+" },
  { label: "Avg Efficiency Gain", value: "60%" },
  { label: "Years Experience", value: "8+" },
];
const whyUs = [
  {
    icon: GitMerge,
    title: "Fully Custom",
    desc: "Built around your exact workflows — no compromise, no bloat.",
  },
  {
    icon: BarChart2,
    title: "Actionable Insights",
    desc: "Real-time dashboards that give you a 360° view of your pipeline.",
  },
  {
    icon: Bell,
    title: "Smart Automation",
    desc: "Auto-assign leads, trigger follow-ups, and never miss an opportunity.",
  },
  {
    icon: Lock,
    title: "Role-Based Security",
    desc: "Granular permissions ensure every team member sees exactly what they should.",
  },
];
const processSteps = [
  {
    step: "01",
    title: "Requirements",
    desc: "We map your sales cycle, team structure, and data requirements in detail.",
  },
  {
    step: "02",
    title: "Architecture",
    desc: "Database schema and system design optimised for your scale.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    desc: "Custom modules, third-party integrations, and automated workflows.",
  },
  {
    step: "04",
    title: "Training & Go-Live",
    desc: "Team onboarding, data migration, and a smooth production launch.",
  },
];
const faqs = [
  {
    q: "Why build a custom CRM instead of using Salesforce or HubSpot?",
    a: "Off-the-shelf CRMs charge per seat, often include features you'll never use, and rarely fit niche workflows. A custom CRM is a one-time investment that scales exactly as you do.",
  },
  {
    q: "Can you migrate our data from an existing CRM?",
    a: "Yes — we handle full data migration from any existing system, including cleaning and de-duplicating records before import.",
  },
  {
    q: "How long does a custom CRM take to build?",
    a: "A core CRM with lead management, pipeline, and reporting typically takes 8–12 weeks. Additional modules can be added in future sprints.",
  },
  {
    q: "Will we be able to update it ourselves after launch?",
    a: "Absolutely. We build an admin panel so your team can manage stages, fields, users, and automations without touching code.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CRMDevelopmentPage() {
  return (
    <div>
      {/* ── Hero Banner ── */}
      <section
        className="relative pt-36 pb-24 overflow-hidden grid-bg"
        style={{ background: "var(--bg)" }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-30"
          style={{ background: color }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-20"
          style={{ background: color }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left — Text */}
            <div className="flex-1">
              <span
                className="tag mb-4 inline-flex items-center gap-2"
                style={{
                  borderColor: `${color}40`,
                  color,
                  background: `${color}10`,
                }}
              >
                <Database size={14} />
                Custom CRM Built for Your Business
              </span>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
              >
                Build a CRM That Actually Fits Your{" "}
                <span className="gradient-text">Business</span>
              </h1>

              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--muted)" }}
              >
                Off-the-shelf CRM doesn't fit? We build custom CRM systems
                tailored to your exact needs — automating processes, tracking
                leads, and giving you complete control over your sales pipeline.
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--muted)" }}
              >
                As a trusted CRM development company in Noida, we analyse your
                current workflows, identify bottlenecks, and deliver a system
                your team will actually love using — from day one.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="btn-primary !flex items-center gap-2 text-sm"
                  style={{ background: gradient, border: "none" }}
                >
                  Get Free Consultation <ArrowRight size={15} />
                </Link>
                <Link
                  href="/portfolio"
                  className="!flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl font-medium transition-all"
                  style={{
                    border: `1px solid ${color}40`,
                    color,
                    background: `${color}08`,
                  }}
                >
                  View Our Work <ArrowRight size={15} />
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-4 rounded-2xl text-center"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ fontFamily: "Syne, sans-serif", color }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Visual card */}
            <div className="flex-1 w-full max-w-md">
              <div
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{
                  background: "var(--card-bg)",
                  border: `1px solid ${color}30`,
                  boxShadow: `0 0 60px ${color}15`,
                }}
              >
                {/* Gradient top strip — same as your code */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: gradient }}
                />
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}25`,
                  }}
                >
                  <Database size={30} style={{ color }} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--text)",
                  }}
                >
                  CRM Development
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                  Technologies we specialise in:
                </p>
                <div className="mb-10">
                  <TechCarousel techs={techs} color={color} />
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3 mt-2"
                  style={{ color }}
                >
                  Our Services Include
                </p>
                <div className="space-y-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2
                        size={14}
                        style={{ color, flexShrink: 0 }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "var(--text2)" }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Why Us ── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="tag mb-4 inline-block">About This Service</span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
            >
              Why Choose Sauranium for{" "}
              <span className="gradient-text">CRM Development?</span>
            </h2>
            <p
              className="mb-4 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              We don't just build software — we build systems that become the
              operational backbone of your business. Our CRM solutions are
              designed with your team in mind: intuitive enough for everyday
              use, powerful enough to scale.
            </p>
            <p
              className="mb-4 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              From solo sales reps to enterprise teams of hundreds, we architect
              CRMs that grow with you. Every module — from lead capture to
              post-sale support — is built to match your actual processes, not
              force you to change them.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              We specialise in deep integrations: connect your CRM to email,
              WhatsApp, payment gateways, ERP systems, and more — creating a
              single source of truth for your entire business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 rounded-2xl card-hover"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h4
                  className="font-semibold mb-1 text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Modules ── */}
      <section
        className="py-16"
        style={{
          background: "var(--card-bg)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Core Modules</span>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
            >
              Everything Your Sales Team{" "}
              <span className="gradient-text">Needs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lead Management",
                desc: "Capture leads from any source — web forms, ads, email, or API. Auto-assign, score, and route them to the right rep instantly.",
              },
              {
                title: "Visual Sales Pipeline",
                desc: "Drag-and-drop Kanban boards give your team a crystal-clear view of every deal's stage, value, and next action.",
              },
              {
                title: "Custom Dashboards",
                desc: "Role-specific dashboards with live KPIs, conversion rates, revenue forecasts, and team performance metrics.",
              },
              {
                title: "Email & SMS Integration",
                desc: "Send automated follow-up sequences, bulk campaigns, and individual messages — all logged against the contact record.",
              },
              {
                title: "Reporting & Analytics",
                desc: "Drill-down reports on source performance, rep productivity, deal velocity, and pipeline health. Export to PDF or Excel instantly.",
              },
              {
                title: "Role-Based Access Control",
                desc: "Fine-grained permissions per module, record, and field. Keep sensitive data secure while giving each role exactly what they need.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl card-hover"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-2 h-8 rounded-full mb-4"
                  style={{ background: gradient }}
                />
                <h4
                  className="font-bold mb-2 text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">How We Work</span>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
          >
            Our Proven <span className="gradient-text">Process</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div
            className="absolute hidden lg:block top-8 left-[12.5%] right-[12.5%] h-px"
            style={{
              background: `linear-gradient(to right, transparent, ${color}40, transparent)`,
            }}
          />
          {processSteps.map(({ step, title, desc }) => (
            <div key={step} className="relative text-center">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl font-bold relative z-10"
                style={{
                  background: "var(--bg)",
                  border: `2px solid ${color}40`,
                  color,
                  fontFamily: "Syne, sans-serif",
                }}
              >
                {step}
              </div>
              <h4
                className="font-bold mb-2 text-sm"
                style={{ color: "var(--text)" }}
              >
                {title}
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="tag mb-4 inline-block">FAQ</span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Have a question not listed here? Reach out and we'll get back to
              you within one business day.
            </p>
          </div>
          <FAQ faqs={faqs} color={color} />
        </div>
      </section>

      {/* ── CTA — same pattern as your code ── */}
      <section
        className="py-16 mb-16 rounded-3xl overflow-hidden relative text-center mx-6 max-w-7xl lg:mx-auto"
        style={{ background: gradient }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Ready to Build Your Custom CRM?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let's discuss your requirements and build a CRM your team will
            actually love.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-3 rounded-xl text-sm transition-all hover:scale-105 hover:shadow-xl"
            style={{ color }}
          >
            Start Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

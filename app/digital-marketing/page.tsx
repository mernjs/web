"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Megaphone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Search,
  MousePointerClick,
  Share2,
  Mail,
  LineChart,
  Target,
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

const color = "#f97316";
const gradient = "linear-gradient(135deg, #f97316 0%, #ec4899 100%)";
const techs = [
  "Google Ads",
  "Meta Ads",
  "SEMrush",
  "GA4",
  "Hotjar",
  "Mailchimp",
];
const features = [
  "SEO Optimization",
  "PPC Advertising",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Analytics & Reporting",
];
const stats = [
  { label: "Campaigns Managed", value: "200+" },
  { label: "Avg ROI Increase", value: "3.5×" },
  { label: "Leads Generated", value: "50K+" },
  { label: "Years Experience", value: "8+" },
];
const whyUs = [
  {
    icon: Target,
    title: "ROI-First Strategy",
    desc: "Every rupee spent is tracked, measured, and optimised for maximum return.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    desc: "We use GA4, heatmaps, and A/B tests to eliminate guesswork entirely.",
  },
  {
    icon: Search,
    title: "Full-Funnel SEO",
    desc: "From keyword research to technical audits — we own your organic rankings.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-Focused",
    desc: "Traffic means nothing without conversions. We optimise for both.",
  },
];
const processSteps = [
  {
    step: "01",
    title: "Audit & Research",
    desc: "Deep-dive into your current performance, competitors, and target audience.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "A custom multi-channel plan built around your specific growth goals and budget.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Launch campaigns, publish content, and activate ads with precision targeting.",
  },
  {
    step: "04",
    title: "Optimise & Report",
    desc: "Weekly performance reviews, A/B testing, and ongoing bid optimisation.",
  },
];
const faqs = [
  {
    q: "How soon will I see results from digital marketing?",
    a: "PPC campaigns can show results within days. SEO typically takes 3–6 months to compound. We set realistic timelines and milestones from day one.",
  },
  {
    q: "Do you manage the ad budget on our behalf?",
    a: "Yes — we manage your Google and Meta ad accounts, optimise bids daily, and provide transparent monthly reports on every rupee spent.",
  },
  {
    q: "What's the minimum budget recommended for paid ads?",
    a: "We typically recommend a minimum monthly ad spend of ₹30,000 for meaningful data collection and optimisation cycles.",
  },
  {
    q: "Do you offer content writing as part of the service?",
    a: "Yes. Our content team creates SEO-optimised blog posts, social copy, ad creatives, and landing page content as part of our marketing packages.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DigitalMarketingPage() {
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
                <Megaphone size={14} />
                Data-Driven Growth Strategies
              </span>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
              >
                Grow Faster With Our{" "}
                <span className="gradient-text">Digital Marketing</span> Experts
              </h1>

              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--muted)" }}
              >
                Our digital marketing experts craft strategies that increase
                visibility, drive qualified traffic, and convert leads into
                loyal customers. We use analytics to continuously optimise every
                campaign for maximum ROI.
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--muted)" }}
              >
                As a leading digital marketing agency in Noida, we combine
                creative storytelling with hard data — so your brand doesn't
                just get seen, it gets remembered and chosen.
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
                  <Megaphone size={30} style={{ color }} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--text)",
                  }}
                >
                  Digital Marketing
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                  Platforms & tools we work with:
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
              <span className="gradient-text">Digital Marketing?</span>
            </h2>
            <p
              className="mb-4 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              We don't spray and pray. Every campaign we run is grounded in
              research, audience segmentation, and clear conversion goals.
              Whether you need local SEO dominance or a national PPC rollout, we
              build the strategy around your numbers — not industry averages.
            </p>
            <p
              className="mb-4 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Our team of SEO analysts, paid media specialists, and content
              strategists work as one unit. You get a cohesive multi-channel
              presence that compounds over time — not siloed campaigns fighting
              each other.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Transparency is non-negotiable. Every client gets a live reporting
              dashboard, monthly deep-dive reviews, and direct access to the
              people managing their campaigns.
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

      {/* ── Services Detail ── */}
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
            <span className="tag mb-4 inline-block">What We Do</span>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
            >
              Full-Spectrum{" "}
              <span className="gradient-text">Digital Marketing</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "Search Engine Optimisation (SEO)",
                desc: "Technical SEO, on-page optimisation, link building, and local SEO strategies that rank you on page one — and keep you there.",
              },
              {
                icon: MousePointerClick,
                title: "Pay-Per-Click Advertising (PPC)",
                desc: "Google Search, Display, Shopping, and YouTube ads managed with precision bidding to maximise conversions at the lowest possible CPA.",
              },
              {
                icon: Share2,
                title: "Social Media Marketing",
                desc: "Organic and paid strategies across Instagram, Facebook, LinkedIn, and YouTube — building community and driving qualified traffic.",
              },
              {
                icon: LineChart,
                title: "Content Marketing",
                desc: "SEO-driven blog posts, case studies, infographics, and video scripts that position your brand as the authority in your niche.",
              },
              {
                icon: Mail,
                title: "Email Marketing",
                desc: "Automated drip sequences, newsletters, and promotional campaigns with A/B tested subject lines and personalised segmentation.",
              },
              {
                icon: Target,
                title: "Analytics & Conversion Optimisation",
                desc: "GA4 setup, heatmap analysis, funnel tracking, and CRO experiments that turn more of your existing traffic into paying customers.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl card-hover"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
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
            Ready to Scale Your Digital Presence?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let's build a marketing strategy that drives real, measurable growth
            for your business.
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

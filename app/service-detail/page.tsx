"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Smartphone,
  BarChart3,
  Database,
  ShoppingCart,
  Megaphone,
  Code2,
  Settings,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Star,
  Zap,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceDetail {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  slug: string;
  heroTitle: string;
  heroDesc: string;
  color: string;
  gradient: string;
  bannerPoints: string[];
  description: string[];
  features: string[];
  techs: string[];
  stats: { label: string; value: string }[];
  whyUs: { icon: React.ElementType; title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const serviceDetails: ServiceDetail[] = [
  {
    icon: Globe,
    slug: "web-design-development",
    title: "Web Design & Development",
    subtitle: "Beautiful, High-Performance Websites",
    heroTitle:
      "Get Beautiful, High-Performing Websites With Our Website Development Company in Noida",
    heroDesc:
      "Being the best web development company in Noida, Sauranium Technologies can design and develop the most suitable websites for you. Every website we launch is top-notch, not just in terms of visuals but also performance.",
    color: "#4f6ef7",
    gradient: "linear-gradient(135deg, #4f6ef7 0%, #7c3aed 100%)",
    bannerPoints: [
      "React.js",
      "Next.js",
      "Laravel",
      "WordPress",
      "TypeScript",
      "Tailwind CSS",
    ],
    description: [
      "We promise to craft solutions for you that are built using modern frameworks, optimized for quick loading, and designed with the best CRO practices. So, a large number of users will turn into customers or take the desired action.",
      "As your reliable website development company in Noida, we analyze your business, your competitors, and your objectives. Then, we develop the website in such a way that it meets your standards.",
    ],
    features: [
      "Custom Design & Branding",
      "React & Next.js Apps",
      "WordPress Development",
      "Landing Pages",
      "Progressive Web Apps",
      "Performance Optimization",
    ],
    techs: [
      "React.js",
      "Next.js",
      "Laravel",
      "WordPress",
      "TypeScript",
      "Tailwind CSS",
    ],
    stats: [
      { label: "Projects Delivered", value: "120+" },
      { label: "Happy Clients", value: "95+" },
      { label: "Avg Load Time", value: "<1.5s" },
      { label: "Years Experience", value: "8+" },
    ],
    whyUs: [
      {
        icon: Zap,
        title: "Lightning Fast",
        desc: "Pages optimized for Core Web Vitals & sub-second load times.",
      },
      {
        icon: Shield,
        title: "Secure & Reliable",
        desc: "Enterprise-grade security baked into every layer of your site.",
      },
      {
        icon: TrendingUp,
        title: "Built to Convert",
        desc: "CRO-first design that turns visitors into paying customers.",
      },
      {
        icon: Users,
        title: "Dedicated Team",
        desc: "A focused team that stays with you from concept to launch.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Discovery",
        desc: "We dig into your business goals, audience, and competitors.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Wireframes and high-fidelity mockups you'll love before a single line of code.",
      },
      {
        step: "03",
        title: "Development",
        desc: "Clean, modern code using the best-fit framework for your needs.",
      },
      {
        step: "04",
        title: "Launch & Optimize",
        desc: "Go live, monitor performance, and continuously improve.",
      },
    ],
    faqs: [
      {
        q: "How long does a website project take?",
        a: "Most projects are delivered in 4–8 weeks depending on scope. We'll give you a clear timeline during discovery.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Yes — we offer monthly maintenance plans that include updates, backups, and performance checks.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Absolutely. We handle full redesigns while preserving your SEO authority and migrating all your content.",
      },
    ],
  },
  {
    icon: Smartphone,
    slug: "app-development",
    title: "App Development",
    subtitle: "Mobile Apps That Users Love",
    heroTitle:
      "Build Powerful Mobile Apps With Our Expert App Development Team in Noida",
    heroDesc:
      "From concept to App Store, we build native and cross-platform mobile applications that deliver exceptional user experiences. Fast, reliable, and built to scale.",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
    bannerPoints: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Dart",
      "Firebase",
    ],
    description: [
      "Our mobile development team crafts apps that feel native on every platform. We combine beautiful UI with robust backend architecture to deliver apps users return to again and again.",
      "Whether you need a consumer app or an enterprise mobile solution, we handle the full lifecycle from ideation to App Store submission and ongoing maintenance.",
    ],
    features: [
      "iOS & Android Dev",
      "Cross-Platform Flutter",
      "UI/UX Design",
      "API Integration",
      "Push Notifications",
      "App Store Optimization",
    ],
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Dart", "Firebase"],
    stats: [
      { label: "Apps Launched", value: "60+" },
      { label: "Downloads", value: "500K+" },
      { label: "Avg Rating", value: "4.8★" },
      { label: "Platforms", value: "iOS + Android" },
    ],
    whyUs: [
      {
        icon: Zap,
        title: "Cross-Platform",
        desc: "One codebase, two platforms — Flutter keeps costs low without compromise.",
      },
      {
        icon: Shield,
        title: "Secure by Design",
        desc: "Encrypted storage, secure auth flows, and OWASP-compliant code.",
      },
      {
        icon: TrendingUp,
        title: "ASO Optimized",
        desc: "We optimize metadata and screenshots to maximize store visibility.",
      },
      {
        icon: Users,
        title: "User-Centric UX",
        desc: "Intuitive interfaces informed by real user research and testing.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Ideation",
        desc: "Define user personas, core features, and success metrics.",
      },
      {
        step: "02",
        title: "Prototyping",
        desc: "Interactive prototypes so you can validate the UX before development.",
      },
      {
        step: "03",
        title: "Development",
        desc: "Agile sprints with weekly demos and your continuous feedback.",
      },
      {
        step: "04",
        title: "Release",
        desc: "App Store / Play Store submission, monitoring, and iteration.",
      },
    ],
    faqs: [
      {
        q: "Flutter vs React Native — which do you recommend?",
        a: "Flutter is our go-to for performance-critical apps. React Native suits teams with existing JavaScript expertise.",
      },
      {
        q: "Do you submit the app to stores on our behalf?",
        a: "Yes, we handle the full submission process including store listings, screenshots, and compliance checks.",
      },
      {
        q: "What about ongoing updates?",
        a: "We offer flexible retainer plans for feature additions, OS compatibility updates, and bug fixes.",
      },
    ],
  },
];

// ─── Carousel Component ───────────────────────────────────────────────────────

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

      {/* Dots */}
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

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

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

// ─── Service Detail Content ───────────────────────────────────────────────────

function ServiceContent({
  service,
  allServices,
  activeSlug,
  onSelect,
}: {
  service: ServiceDetail;
  allServices: ServiceDetail[];
  activeSlug: string;
  onSelect: (slug: string) => void;
}) {
  const Icon = service.icon;

  return (
    <div>
      {/* ── Hero Banner ── */}
      <section
        className="relative pt-36 pb-24 overflow-hidden grid-bg"
        style={{ background: "var(--bg)" }}
      >
        {/* Glow blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-30"
          style={{ background: service.color }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-20"
          style={{ background: service.color }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* ── Service Switcher Tabs — inside banner ── */}
          <div className="mb-10 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 w-max">
              {allServices.map((s) => {
                const SIcon = s.icon;
                const isActive = s.slug === activeSlug;
                return (
                  <button
                    key={s.slug}
                    onClick={() => onSelect(s.slug)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0"
                    style={{
                      background: isActive ? `${s.color}18` : "var(--card-bg)",
                      color: isActive ? s.color : "var(--muted)",
                      border: isActive
                        ? `1px solid ${s.color}50`
                        : "1px solid var(--border)",
                      boxShadow: isActive ? `0 0 12px ${s.color}20` : "none",
                    }}
                  >
                    <SIcon size={13} />
                    {s.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left — Text */}
            <div className="flex-1">
              <span
                className="tag mb-4 inline-flex items-center gap-2"
                style={{
                  borderColor: `${service.color}40`,
                  color: service.color,
                  background: `${service.color}10`,
                }}
              >
                <Icon size={14} />
                {service.subtitle}
              </span>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
              >
                {service.heroTitle}
              </h1>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--muted)" }}
              >
                {service.heroDesc}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="btn-primary !flex items-center gap-2 text-sm"
                  style={{ background: service.gradient, border: "none" }}
                >
                  Get Free Consultation <ArrowRight size={15} />
                </Link>
                <Link
                  href="/portfolio"
                  className="!flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl font-medium transition-all"
                  style={{
                    border: `1px solid ${service.color}40`,
                    color: service.color,
                    background: `${service.color}08`,
                  }}
                >
                  View Our Work <ArrowRight size={15} />
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {service.stats.map((s) => (
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
                      style={{
                        fontFamily: "Syne, sans-serif",
                        color: service.color,
                      }}
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

            {/* Right — Visual card with Tech Carousel */}
            <div className="flex-1 w-full max-w-md">
              <div
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{
                  background: "var(--card-bg)",
                  border: `1px solid ${service.color}30`,
                  boxShadow: `0 0 60px ${service.color}15`,
                }}
              >
                {/* Gradient top strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: service.gradient }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}25`,
                  }}
                >
                  <Icon size={30} style={{ color: service.color }} />
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--text)",
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                  Technologies we specialise in:
                </p>

                {/* ── CAROUSEL ── */}
                <div className="mb-10">
                  <TechCarousel techs={service.techs} color={service.color} />
                </div>

                {/* Services list */}
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3 mt-2"
                  style={{ color: service.color }}
                >
                  Our Services Include
                </p>
                <div className="space-y-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2
                        size={14}
                        style={{ color: service.color, flexShrink: 0 }}
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

      {/* ── Description Section ── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="tag mb-4 inline-block">About This Service</span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
            >
              Why Choose Sauranium for{" "}
              <span className="gradient-text">{service.title}?</span>
            </h2>
            {service.description.map((para, i) => (
              <p
                key={i}
                className="mb-4 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Why Us Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whyUs.map(({ icon: WHYIcon, title, desc }) => (
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
                  style={{ background: `${service.color}15` }}
                >
                  <WHYIcon size={18} style={{ color: service.color }} />
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

      {/* ── Process Section ── */}
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
            <span className="tag mb-4 inline-block">How We Work</span>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
            >
              Our Proven <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop only) */}
            <div
              className="absolute hidden lg:block top-8 left-[12.5%] right-[12.5%] h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${service.color}40, transparent)`,
              }}
            />

            {service.processSteps.map(({ step, title, desc }, i) => (
              <div key={step} className="relative text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl font-bold relative z-10"
                  style={{
                    background: "var(--bg)",
                    border: `2px solid ${service.color}40`,
                    color: service.color,
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
        </div>
      </section>

      {/* ── FAQ Section ── */}
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
          <FAQ faqs={service.faqs} color={service.color} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 mb-16 rounded-3xl overflow-hidden relative text-center mx-6 max-w-7xl lg:mx-auto"
        style={{ background: service.gradient }}
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
            Ready to Start Your {service.title} Project?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let's discuss your requirements and build something amazing
            together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-3 rounded-xl text-sm transition-all hover:scale-105 hover:shadow-xl"
            style={{ color: service.color }}
          >
            Start Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ServiceDetailPage() {
  const [activeSlug, setActiveSlug] = useState(serviceDetails[0].slug);
  const activeService = serviceDetails.find((s) => s.slug === activeSlug)!;

  return (
    <ServiceContent
      key={activeSlug}
      service={activeService}
      allServices={serviceDetails}
      activeSlug={activeSlug}
      onSelect={setActiveSlug}
    />
  );
}

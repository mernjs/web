"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CreditCard,
  Package,
  Truck,
  Globe,
  BarChart2,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

function TechCarousel({ techs, color }: { techs: string[]; color: string }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const visibleCount = 4;
  const total = techs.length;
  const startAuto = () => {
    intervalRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % total),
      2200,
    );
  };
  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
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
  const getVisible = () =>
    Array.from(
      { length: visibleCount },
      (_, i) => techs[(current + i) % total],
    );
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
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-4 text-sm font-bold transition-transform duration-300"
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

const color = "#ec4899";
const gradient = "linear-gradient(135deg, #ec4899 0%, #f97316 100%)";
const techs = ["WooCommerce", "Shopify", "Stripe", "Razorpay", "PHP", "React"];
const features = [
  "Custom E-Commerce Store",
  "WooCommerce / Shopify",
  "Payment Gateway Integration",
  "Inventory Management",
  "Order Tracking",
  "Multi-currency Support",
];
const stats = [
  { label: "Stores Launched", value: "80+" },
  { label: "Avg Revenue Increase", value: "2.8×" },
  { label: "Orders Processed", value: "1M+" },
  { label: "Years Experience", value: "8+" },
];
const whyUs = [
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    desc: "PCI-compliant payment flows with fraud detection and SSL encryption built in.",
  },
  {
    icon: BarChart2,
    title: "Sales Analytics",
    desc: "Live dashboards tracking revenue, bestsellers, cart abandonment, and LTV.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Integrations",
    desc: "Connect to logistics, accounting, CRM, and marketing tools effortlessly.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Ready",
    desc: "Sell on your website, Amazon, Instagram, and WhatsApp from one backend.",
  },
];
const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Define your catalogue, customer journey, payment needs, and logistics setup.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Conversion-optimised UI with brand-aligned visuals and mobile-first layouts.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    desc: "Payment gateways, shipping APIs, inventory systems, and CRM connections.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "Go live with performance monitoring, SEO optimisation, and growth support.",
  },
];
const faqs = [
  {
    q: "Should I use Shopify, WooCommerce, or a custom solution?",
    a: "Shopify suits businesses that want fast launch with minimal maintenance. WooCommerce is ideal for WordPress-based stores needing flexibility. Custom builds are best for complex catalogues, unique workflows, or when you need deep integrations. We'll recommend the right fit after understanding your requirements.",
  },
  {
    q: "Which payment gateways do you integrate?",
    a: "We integrate Razorpay, PayU, CCAvenue, Stripe, PayPal, and UPI gateways. We can also implement COD, EMI options, and buy-now-pay-later flows.",
  },
  {
    q: "Can you migrate my existing store to a new platform?",
    a: "Yes — we handle complete store migrations including products, categories, customer data, order history, and SEO URL structures.",
  },
  {
    q: "Do you offer support after the store goes live?",
    a: "Absolutely. We offer monthly support plans covering plugin updates, performance monitoring, security patches, and feature additions.",
  },
];
const ecomFeatures = [
  {
    icon: Package,
    title: "Product & Inventory Management",
    desc: "Unlimited SKUs, variants, bundles, and digital products. Real-time stock tracking with low-stock alerts and automated reorder triggers.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    desc: "Razorpay, Stripe, PayU, COD, UPI, and EMI — all in a single frictionless checkout that boosts conversion rates.",
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    desc: "Shiprocket, Delhivery, and custom courier integrations with automated label generation and live order tracking for customers.",
  },
  {
    icon: Globe,
    title: "Multi-Currency & International",
    desc: "Geo-based currency switching, international payment methods, and country-specific tax rules for global expansion.",
  },
  {
    icon: RefreshCw,
    title: "Cart Abandonment Recovery",
    desc: "Automated email and WhatsApp sequences that recover abandoned carts and boost revenue without any manual effort.",
  },
  {
    icon: BarChart2,
    title: "Sales Reports & Analytics",
    desc: "Revenue trends, product performance, customer LTV, and cohort analysis — all in one customisable dashboard.",
  },
];
const platformComparison = [
  {
    platform: "Custom Build",
    best: "Complex catalogues, unique features",
    scalability: "Unlimited",
    cost: "One-time investment",
    highlight: true,
  },
  {
    platform: "WooCommerce",
    best: "WordPress sites, content-heavy stores",
    scalability: "High",
    cost: "Low monthly overhead",
    highlight: false,
  },
  {
    platform: "Shopify",
    best: "Quick launch, simple catalogues",
    scalability: "Medium–High",
    cost: "Monthly subscription",
    highlight: false,
  },
];

export default function ECommercePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative pt-36 pb-24 overflow-hidden grid-bg"
        style={{ background: "var(--bg)" }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: color }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-15"
          style={{ background: "#f97316" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span
                className="tag mb-4 inline-flex items-center gap-2"
                style={{
                  borderColor: `${color}40`,
                  color,
                  background: `${color}10`,
                }}
              >
                <ShoppingCart size={14} /> Online Stores Built to Sell
              </span>
              <h1 className="section-title mb-6">
                Launch Your Online Store With Our{" "}
                <span className="gradient-text">E-Commerce Experts</span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--muted)" }}
              >
                Launch and scale your online business with powerful e-commerce
                solutions. From small boutiques to enterprise-level stores, we
                build shopping experiences that convert browsers into loyal
                buyers.
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--muted)" }}
              >
                As a leading e-commerce development company in Noida, we don't
                just build stores — we build revenue engines. Every design
                decision, page structure, and checkout flow is engineered to
                maximise your sales.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="btn-primary !flex items-center gap-2 text-sm"
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
            <div className="flex-1 w-full max-w-md">
              <div
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{
                  background: "var(--card-bg)",
                  border: `1px solid ${color}30`,
                  boxShadow: `0 0 60px ${color}15`,
                }}
              >
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
                  <ShoppingCart size={30} style={{ color }} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--text)",
                  }}
                >
                  E-Commerce Solutions
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                  Platforms & technologies we use:
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

      {/* About / Why Us */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="tag mb-4 inline-block">About This Service</span>
            <h2 className="section-title mb-6">
              Why Choose Sauranium for{" "}
              <span className="gradient-text">E-Commerce?</span>
            </h2>
            <p
              className="mb-4 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              We've helped businesses across fashion, electronics, food, and B2B
              products build stores that sell. Our e-commerce expertise spans
              the full stack — from pixel-perfect product pages to bulletproof
              checkout flows and post-purchase automation.
            </p>
            <p
              className="mb-4 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              We obsess over the details that drive revenue: page load speed,
              mobile UX, cart abandonment recovery, upsell flows, and trust
              signals. These aren't afterthoughts — they're built in from day
              one.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Whether you're migrating from an outdated platform, launching a
              new brand, or scaling an existing store internationally — we have
              the experience and the team to make it happen.
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

      {/* Platform Comparison */}
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
            <span className="tag mb-4 inline-block">Platform Guide</span>
            <h2 className="section-title">
              Which Platform Is{" "}
              <span className="gradient-text">Right for You?</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  {["Platform", "Best For", "Scalability", "Cost Model"].map(
                    (h) => (
                      <th
                        key={h}
                        className="text-left p-4 text-sm font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {platformComparison.map((row) => (
                  <tr
                    key={row.platform}
                    style={{
                      background: row.highlight ? `${color}08` : "transparent",
                    }}
                  >
                    <td className="p-4 rounded-l-xl">
                      <span
                        className="font-bold text-sm"
                        style={{ color: row.highlight ? color : "var(--text)" }}
                      >
                        {row.platform}
                        {row.highlight && (
                          <span
                            className="ml-2 text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ background: `${color}20`, color }}
                          >
                            Recommended
                          </span>
                        )}
                      </span>
                    </td>
                    <td
                      className="p-4 text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {row.best}
                    </td>
                    <td
                      className="p-4 text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {row.scalability}
                    </td>
                    <td
                      className="p-4 rounded-r-xl text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">What We Build</span>
          <h2 className="section-title">
            End-to-End{" "}
            <span className="gradient-text">E-Commerce Features</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecomFeatures.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl card-hover"
              style={{
                background: "var(--card-bg)",
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
      </section>

      {/* Process */}
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
            <h2 className="section-title">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="tag mb-4 inline-block">FAQ</span>
            <h2 className="section-title mb-4">
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

      {/* CTA */}
      <section
        className="py-16 mx-6 mb-16 rounded-3xl overflow-hidden relative text-center"
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
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let's build an e-commerce store that doesn't just look great — it
            sells.
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

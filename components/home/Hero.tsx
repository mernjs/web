'use client';
import Link from 'next/link';
import { ArrowRight, Code2, Globe, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(79,110,247,0.08)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(124,58,237,0.08)' }} />
      <div className="absolute top-1/2 right-1/3 w-60 h-60 rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(6,214,160,0.05)' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(79,110,247,0.08)', border: '1px solid rgba(79,110,247,0.2)' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--highlight)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>Greater Noida's Premier Tech Company</span>
        </div>

        <h1 className="section-title mb-6 max-w-5xl mx-auto">
          We Build{' '}
          <span className="gradient-text">Digital Products</span>
          {' '}That<br className="hidden md:block" />
          Drive Real Business Growth
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--muted)' }}>
          From stunning websites to powerful apps and CRM systems — Sauranium Technologies delivers end-to-end digital solutions crafted for scale and performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 text-base">
            Start Your Project <ArrowRight size={18} />
          </Link>
          <Link href="/services" className="btn-outline flex items-center justify-center gap-2 text-base">
            Explore Services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Globe, label: 'Web Development', desc: 'React · Next.js · Laravel', color: '#4f6ef7' },
            { icon: Smartphone, label: 'App Development', desc: 'iOS · Android · Flutter', color: '#7c3aed' },
            { icon: Code2, label: 'CRM & Enterprise', desc: 'Custom · Scalable · Robust', color: '#06d6a0' },
          ].map(({ icon: Icon, label, desc, color }, i) => (
            <div
              key={label}
              className="animate-float rounded-2xl p-5 text-left card-hover backdrop-blur"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <p className="font-semibold text-sm mb-1" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{label}</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

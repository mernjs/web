import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technologies | Sauranium Technologies',
  description: 'Cutting-edge technologies used by Sauranium Technologies to build world-class digital products.',
};

const techStacks = [
  { category: 'Frontend Development', color: '#4f6ef7', items: [
    { name: 'React.js', desc: 'Component-based UI library for building fast, interactive interfaces.' },
    { name: 'Next.js', desc: 'The React framework for production — SSR, SSG, and edge computing.' },
    { name: 'Vue.js', desc: 'Progressive JavaScript framework with an approachable, versatile design.' },
    { name: 'TypeScript', desc: 'Strongly-typed JavaScript that scales and prevents runtime errors.' },
    { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid, beautiful UI development.' },
    { name: 'Redux', desc: 'Predictable state management for complex JavaScript applications.' },
  ]},
  { category: 'Backend Development', color: '#7c3aed', items: [
    { name: 'Node.js', desc: 'High-performance, non-blocking JavaScript runtime for scalable APIs.' },
    { name: 'Laravel', desc: 'Elegant PHP framework with expressive syntax and robust ecosystem.' },
    { name: 'Ruby on Rails', desc: 'Convention-over-configuration framework for rapid web development.' },
    { name: 'Python', desc: 'Versatile language for backend services, automation, and data processing.' },
    { name: 'Express.js', desc: 'Minimal, flexible Node.js framework for building robust APIs.' },
    { name: 'GraphQL', desc: 'Efficient query language for APIs — fetch exactly what you need.' },
  ]},
  { category: 'Mobile Development', color: '#06d6a0', items: [
    { name: 'Flutter', desc: "Google's UI toolkit for building natively compiled multi-platform apps." },
    { name: 'React Native', desc: 'Build mobile apps using React — one codebase, two platforms.' },
    { name: 'Swift', desc: "Apple's powerful language for building native iOS applications." },
    { name: 'Kotlin', desc: 'Modern, concise language for native Android development.' },
    { name: 'Dart', desc: "Client-optimized language powering Flutter's performance." },
  ]},
  { category: 'CMS & E-Commerce', color: '#f97316', items: [
    { name: 'WordPress', desc: "World's most popular CMS — flexible, extensible, and powerful." },
    { name: 'WooCommerce', desc: 'Leading e-commerce plugin for WordPress-powered online stores.' },
    { name: 'Shopify', desc: 'All-in-one commerce platform for businesses of all sizes.' },
    { name: 'Strapi', desc: 'Open-source headless CMS for flexible content management.' },
    { name: 'Contentful', desc: 'API-first content platform for modern digital experiences.' },
  ]},
  { category: 'Database & Storage', color: '#ec4899', items: [
    { name: 'MySQL', desc: "World's most popular open-source relational database." },
    { name: 'PostgreSQL', desc: 'Advanced open-source relational database with powerful features.' },
    { name: 'MongoDB', desc: 'Flexible, scalable NoSQL database for modern applications.' },
    { name: 'Redis', desc: 'In-memory data structure store for caching and real-time features.' },
    { name: 'Firebase', desc: "Google's platform for real-time databases and authentication." },
    { name: 'Supabase', desc: 'Open-source Firebase alternative with PostgreSQL at its core.' },
  ]},
  { category: 'Cloud & DevOps', color: '#0ea5e9', items: [
    { name: 'AWS', desc: 'Comprehensive cloud platform with 200+ services for any scale.' },
    { name: 'Google Cloud', desc: "Google's cloud for data analytics, AI, and scalable applications." },
    { name: 'Docker', desc: 'Container platform for consistent development and deployment.' },
    { name: 'Kubernetes', desc: 'Container orchestration for automated deployment and scaling.' },
    { name: 'CI/CD Pipelines', desc: 'Automated testing and deployment for faster, safer releases.' },
    { name: 'Vercel / Netlify', desc: 'Edge deployment platforms optimized for frontend frameworks.' },
  ]},
];

export default function TechnologiesPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden grid-bg" style={{ background: 'var(--bg)' }}>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(124,58,237,0.08)' }} />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="tag mb-6 inline-block">Our Tech Stack</span>
          <h1 className="section-title mb-6">Powered by the World's<br /><span className="gradient-text">Best Technologies</span></h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            We stay at the forefront of technology to deliver solutions that are fast, scalable, and future-proof.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6" style={{ background: 'var(--bg)' }}>
        <div className="space-y-16">
          {techStacks.map(({ category, color, items }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
                <h2 className="text-lg font-bold px-4" style={{ fontFamily: 'Syne, sans-serif', color }}>{category}</h2>
                <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(({ name, desc }) => (
                  <div key={name} className="rounded-2xl p-5 card-hover" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}15`, border: `1px solid ${color}20` }}>
                        <span className="text-xs font-bold" style={{ color }}>{name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-sm" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{name}</h3>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <div className="rounded-3xl p-12" style={{ background: 'var(--card-bg)', border: '1px solid rgba(79,110,247,0.2)' }}>
          <h2 className="section-title mb-4">Not sure which technology fits your project?</h2>
          <p className="mb-8" style={{ color: 'var(--muted)' }}>Our architects will help you choose the perfect tech stack for your goals and budget.</p>
          <Link href="/contact" className="btn-primary !flex w-max mx-auto items-center gap-2 text-base">Talk to Our Experts <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}

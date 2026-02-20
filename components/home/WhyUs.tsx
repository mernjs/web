import { ShieldCheck, Zap, Users, Clock, Award, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck,     title: 'Quality Guaranteed',    desc: "Every project undergoes multi-level quality checks. We don't ship until it's perfect.",                        color: '#4f6ef7' },
  { icon: Zap,             title: 'Fast Delivery',         desc: 'Agile methodology ensures rapid iterations and on-time delivery without compromising quality.',                color: '#7c3aed' },
  { icon: Users,           title: 'Expert Team',           desc: 'A dedicated team of senior developers, designers, and strategists — all under one roof.',                     color: '#06d6a0' },
  { icon: Clock,           title: '24/7 Support',          desc: 'Round-the-clock support ensures your digital products always run at peak performance.',                       color: '#f97316' },
  { icon: Award,           title: 'Proven Track Record',   desc: '150+ successful projects across industries speak to our commitment to excellence.',                           color: '#ec4899' },
  { icon: HeartHandshake,  title: 'Long-Term Partnership', desc: "We invest in your success. Long after launch, we're here to support your growth.",                           color: '#0ea5e9' },
];

export default function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden grid-bg" style={{ background: 'var(--bg3)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(79,110,247,0.04)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="tag mb-6 inline-block">Why Sauranium</span>
            <h2 className="section-title mb-6">
              The Team That<br /><span className="gradient-text">Delivers Results,</span><br />Not Just Code
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              At Sauranium Technologies, we believe in building products that make a real impact. Our approach combines technical excellence with deep business understanding.
            </p>
            <div className="space-y-3">
              {[
                'Transparent communication throughout the project',
                'Fixed-price contracts with no hidden costs',
                "Source code ownership — it's yours, always",
                'Post-launch maintenance and support included',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(6,214,160,0.15)', border: '1px solid rgba(6,214,160,0.3)' }}>
                    <span style={{ color: 'var(--highlight)', fontSize: 11 }}>✓</span>
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text2)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="rounded-2xl p-5 card-hover" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: `${color}15` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <h4 className="font-semibold text-sm mb-2" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

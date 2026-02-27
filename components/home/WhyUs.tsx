import { ShieldCheck, Zap, Users, Clock, Award, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck,     title: 'Quality You Can Trust',    desc: "Top-notch quality control measures and rigorous multi-level quality checks before delivery.",                        color: '#4f6ef7' },
  { icon: Zap,             title: 'Speed Without Compromise',         desc: 'An agile process for rapid iterations and timely results. ',                color: '#7c3aed' },
  { icon: Users,           title: 'A Seasoned Team',           desc: 'At Sauranium Technologies, our team of experienced developers, strategists, and designers works in perfect harmony on your project.',                     color: '#06d6a0' },
  { icon: Clock,           title: '24/7 Support',          desc: 'No long wait times; unwavering support available whenever you need.',                       color: '#f97316' },
  { icon: Award,           title: 'Proven Track Record',   desc: 'We have achieved the highest quality across all of the 150+ projects we have completed.',                           color: '#ec4899' },
  { icon: HeartHandshake,  title: 'Long-Term Partnership', desc: "Get reliable support and quick troubleshooting long after your project is launched.",                           color: '#0ea5e9' },
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
              Strategic Thinkers. <br /><span className="gradient-text"> Skilled Engineers.</span><br />Measurable Results.
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              <b>Sauranium Technologies Pvt Ltd</b> is a <b>website development company in Noida</b> that was established in 2016 with the aim of creating digital products that can create a lasting impact. Our ability to deliver scalable solutions for your business can be attributed to our in-depth understanding of how different industries operate. 
            </p>
            <div className="space-y-3">
              {[
                'Timely and accurate project updates',
                'Exclusive ownership of the source code',
                "Clear and transparent pricing, no hidden charges",
                'Lifetime support and maintenance post-launch',
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

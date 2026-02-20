const steps = [
  { number: '01', title: 'Discovery & Planning',   desc: 'We deep-dive into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.' },
  { number: '02', title: 'Design & Prototyping',   desc: 'Our designers craft pixel-perfect UI/UX designs and interactive prototypes, ensuring your vision comes to life before development begins.' },
  { number: '03', title: 'Development & Build',    desc: 'Our engineers write clean, scalable code following best practices and modern architecture patterns for maximum performance.' },
  { number: '04', title: 'Testing & QA',           desc: 'Rigorous quality assurance testing across devices, browsers, and scenarios ensures a flawless, bug-free product delivery.' },
  { number: '05', title: 'Launch & Deploy',        desc: 'Smooth deployment with zero-downtime strategies, performance optimization, and SEO setup for a powerful go-live experience.' },
  { number: '06', title: 'Support & Scale',        desc: 'Post-launch support, performance monitoring, and continuous improvements to help your product grow with your business.' },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(6,214,160,0.04)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">How We Work</span>
          <h2 className="section-title mb-4">
            Our <span className="gradient-text">Proven Process</span><br />for Delivery
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            A transparent, structured approach that ensures your project is delivered on time, within budget, and beyond expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ number, title, desc }) => (
            <div key={number} className="relative rounded-2xl p-7 card-hover group" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="text-5xl font-black mb-4 transition-opacity group-hover:opacity-20 opacity-10" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent)' }}>
                {number}
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

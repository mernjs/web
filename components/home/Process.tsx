const steps = [
  { number: '01', title: 'Discovery & Planning',   desc: 'Any initiative can only be successful when the goals and requirements are clear. That is why our team sits with you to understand your business objectives and technical benchmarks. This allows us to create an effective roadmap for success.' },
  { number: '02', title: 'Design & Prototyping',   desc: 'Next, our designers work on creating outstanding designs and interactive prototypes. Our goal is to bring the concept from your vision to reality so that we are on the same page before the development even begins.' },
  { number: '03', title: 'Development & Build',    desc: 'The seasoned engineers at our web development company Noida write clean and scalable code to create modern architectural patterns. Thanks to our ability to follow best practices, we build the foundation of maximized performance.' },
  { number: '04', title: 'Testing & QA',           desc: 'We have a dedicated testing and QA team that conducts rigorous quality assurance testing on various devices, scenarios, and browsers. This is crucial for flawless, high-performance, and bug-free products.' },
  { number: '05', title: 'Launch & Deploy',        desc: 'Our unique strategy as a custom software development India ensures smooth deployment with zero downtime while also focusing on performance optimization and SEO setup. So, when you go live, it will happen in a hassle-free manner.' },
  { number: '06', title: 'Support & Scale',        desc: 'We don’t stop serving you after the launch and deployment; we offer continuous post-launch support. This is available in the form of performance monitoring and continuous improvements, so your product’s growth shadows your business growth.' },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(6,214,160,0.04)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">How We Deliver Excellence</span>
          <h2 className="section-title mb-4">
           From Strategy to 
  			<span className="gradient-text"> Scalable Delivery,</span><br /> How We Make It Happen
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            We don't just plan; we execute. Our approach is designed to cut costs and accelerate timelines, so you experience tangible results without workflow headaches.
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

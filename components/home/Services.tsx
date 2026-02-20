import Link from 'next/link';
import { Globe, Smartphone, BarChart3, Database, ShoppingCart, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  { icon: Globe,       title: 'Web Design & Development', desc: 'We craft visually stunning, high-performance websites that convert visitors into customers. From landing pages to complex web applications.', tags: ['React', 'Next.js', 'Laravel', 'WordPress'], color: '#4f6ef7' },
  { icon: Smartphone,  title: 'App Development',           desc: 'Native and cross-platform mobile applications with seamless UX, built for iOS and Android with modern frameworks.',                           tags: ['Flutter', 'React Native', 'iOS', 'Android'], color: '#7c3aed' },
  { icon: Database,    title: 'CRM Development',           desc: 'Custom CRM systems tailored to your business workflow — automate processes, track leads, and manage customer relationships effortlessly.',    tags: ['Custom CRM', 'Automation', 'Analytics'],    color: '#06d6a0' },
  { icon: Megaphone,   title: 'Digital Marketing',         desc: 'Data-driven digital marketing strategies — SEO, PPC, social media, and content marketing that deliver measurable ROI.',                       tags: ['SEO', 'PPC', 'Social Media', 'Content'],    color: '#f97316' },
  { icon: ShoppingCart,title: 'E-Commerce Solutions',      desc: 'Powerful online stores with seamless shopping experiences, secure payments, and inventory management built to scale.',                         tags: ['WooCommerce', 'Shopify', 'Custom'],         color: '#ec4899' },
  { icon: BarChart3,   title: 'Enterprise Solutions',      desc: 'Large-scale enterprise applications with robust architecture, API integrations, and high availability for mission-critical operations.',        tags: ['ERP', 'API', 'Cloud', 'Microservices'],     color: '#0ea5e9' },
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(124,58,237,0.05)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">What We Do</span>
          <h2 className="section-title mb-4">
            Services That <span className="gradient-text">Accelerate</span><br />Your Business
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            End-to-end digital solutions designed to transform your ideas into powerful, scalable products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tags, color }) => (
            <div
              key={title}
              className="card-hover rounded-2xl p-7 group cursor-pointer"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>{desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--bg3)', color: 'var(--text2)', border: '1px solid var(--border)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-[#4f6ef7]" style={{ color: 'var(--muted)' }}>
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-outline inline-flex items-center gap-2">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

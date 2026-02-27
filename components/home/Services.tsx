import Link from 'next/link';
import { Globe, Smartphone, BarChart3, Database, ShoppingCart, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  { icon: Globe,       title: 'Web Design & Development', desc: 'From landing pages to web applications, we build solutions that help move your business ahead. Increase engagement and conversions through the high-performance, visually stunning websites we create for you. ', tags: ['React', 'Next.js', 'Laravel', 'WordPress'], color: '#4f6ef7' },
  { icon: Smartphone,  title: 'App Development',           desc: 'We develop mobile applications (native and cross-platform) with a focus on a seamless and user-friendly experience. As your reliable mobile app development company in Noida, we develop applications using the latest frameworks for both iOS and Android. ', tags: ['Flutter', 'React Native', 'iOS', 'Android'], color: '#7c3aed' },
  { icon: Database,    title: 'CRM Development',           desc: 'With scalable, custom-built CRM systems designed around your workflow, we optimize your processes, improve visibility, and strengthen customer relationships. Our dedicated approach makes us the best CRM development company Noida.',    tags: ['Custom CRM', 'Automation', 'Analytics'],    color: '#06d6a0' },
  { icon: Megaphone,   title: 'Digital Marketing',         desc: 'Our digital marketing expertise includes SEO services in Noida, as well as PPC, social media, and content marketing. By relying on strategies that are performance-oriented, we seek to increase visibility and leads, thereby maximizing your ROI.',tags: ['SEO', 'PPC', 'Social Media', 'Content'],    color: '#f97316' },
  { icon: ShoppingCart,title: 'E-Commerce Solutions',      desc: 'We also serve companies looking for eCommerce website development Noida by developing secure, scalable e-commerce platforms that deliver seamless shopping experiences. We help you scale your online business with confidence.',                         tags: ['WooCommerce', 'Shopify', 'Custom'],         color: '#ec4899' },
  { icon: BarChart3,   title: 'API Development',      desc: 'Sauranium Technologies enables enhanced connectivity/integration, as well as faster innovation & development. We emphasize the design, development, testing, and maintenance of APIs.',        tags: ['ERP', 'API', 'Cloud', 'Microservices'],     color: '#0ea5e9' },
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(124,58,237,0.05)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Our Core Expertise</span>
          <h2 className="section-title mb-4">
            Growth-Oriented <span className="gradient-text">Services </span><br />for Today’s Businesses
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            <b>Full-service digital solutions</b> designed to help bring your vision to life as <b>scalable and future-proof products</b>.
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

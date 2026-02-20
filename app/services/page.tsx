import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Smartphone, BarChart3, Database, ShoppingCart, Megaphone, Code2, Settings, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Sauranium Technologies',
  description: 'Comprehensive web development, app development, CRM, and digital marketing services by Sauranium Technologies.',
};

const services = [
  { icon: Globe,        title: 'Web Design & Development', subtitle: 'Beautiful, High-Performance Websites',   desc: "We design and develop websites that don't just look great — they perform. Our web solutions are built with modern frameworks, optimized for speed, and designed to convert.", features: ['Custom Design & Branding','React & Next.js Apps','WordPress Development','Landing Pages','Progressive Web Apps','Performance Optimization'], techs: ['React.js','Next.js','Laravel','WordPress','TypeScript','Tailwind CSS'], color: '#4f6ef7' },
  { icon: Smartphone,   title: 'App Development',           subtitle: 'Mobile Apps That Users Love',           desc: 'From concept to App Store, we build native and cross-platform mobile applications that deliver exceptional user experiences. Fast, reliable, and built to scale.',           features: ['iOS & Android Dev','Cross-Platform Flutter','UI/UX Design','API Integration','Push Notifications','App Store Optimization'],                                              techs: ['Flutter','React Native','Swift','Kotlin','Dart','Firebase'],           color: '#7c3aed' },
  { icon: Database,     title: 'CRM Development',           subtitle: 'Custom CRM Built for Your Business',    desc: "Off-the-shelf CRM doesn't fit? We build custom CRM systems tailored to your exact needs — automating processes, tracking leads, and giving you complete control.",           features: ['Lead Management','Sales Pipeline','Custom Dashboards','Email/SMS Integration','Reporting & Analytics','Role-Based Access'],                                              techs: ['Node.js','React','PostgreSQL','Redis','REST APIs','WebSockets'],        color: '#06d6a0' },
  { icon: Megaphone,    title: 'Digital Marketing',         subtitle: 'Data-Driven Growth Strategies',         desc: 'Our digital marketing experts craft strategies that increase visibility, drive qualified traffic, and convert leads. We use analytics to continuously optimize for ROI.',  features: ['SEO','PPC Advertising','Social Media','Content Marketing','Email Marketing','Analytics & Reporting'],                                                                  techs: ['Google Ads','Meta Ads','SEMrush','GA4','Hotjar','Mailchimp'],           color: '#f97316' },
  { icon: ShoppingCart, title: 'E-Commerce Solutions',      subtitle: 'Online Stores Built to Sell',          desc: 'Launch and scale your online business with powerful e-commerce platforms. From small boutiques to enterprise-level stores, we build shopping experiences that drive sales.', features: ['Custom E-Commerce','WooCommerce/Shopify','Payment Gateways','Inventory Management','Order Tracking','Multi-currency'],                                                  techs: ['WooCommerce','Shopify','Stripe','Razorpay','PHP','React'],              color: '#ec4899' },
  { icon: BarChart3,    title: 'Enterprise Solutions',      subtitle: 'Scalable Enterprise Applications',     desc: 'Mission-critical enterprise applications with robust architecture, high availability, and enterprise-grade security. Complex integrations and large-scale deployments.',   features: ['ERP Integration','API Development','Microservices','Cloud Infrastructure','Legacy Migration','Business Intelligence'],                                                  techs: ['Node.js','Python','AWS','Docker','Kubernetes','PostgreSQL'],            color: '#0ea5e9' },
  { icon: Code2,        title: 'Ruby on Rails',             subtitle: 'Rapid, Elegant Backend Solutions',     desc: 'Leverage Ruby on Rails for rapid development of robust web applications. Perfect for startups and businesses that need to move fast without sacrificing quality.',         features: ['Rails API Dev','Full-Stack Rails','Database Design','Third-party Integrations','Performance Tuning','TDD'],                                                            techs: ['Ruby on Rails','Ruby','PostgreSQL','Redis','RSpec','AWS'],              color: '#ef4444' },
  { icon: Settings,     title: 'API Development',           subtitle: 'Connect Everything, Seamlessly',       desc: 'RESTful and GraphQL APIs that power your applications and connect your systems. Secure, scalable, and well-documented APIs that are easy to use.',                       features: ['RESTful API Design','GraphQL APIs','Third-Party Integrations','Webhook Implementation','API Documentation','Auth & Security'],                                         techs: ['Node.js','Express','GraphQL','JWT','OAuth','Swagger'],                  color: '#8b5cf6' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden grid-bg" style={{ background: 'var(--bg)' }}>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(79,110,247,0.08)' }} />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="tag mb-6 inline-block">Our Services</span>
          <h1 className="section-title mb-6">Everything You Need to<br /><span className="gradient-text">Build & Grow</span> Online</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            From your first website to enterprise-scale applications — comprehensive digital solutions that drive real growth.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6" style={{ background: 'var(--bg)' }}>
        <div className="space-y-8">
          {services.map(({ icon: Icon, title, subtitle, desc, features, techs, color }, idx) => (
            <div key={title} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center rounded-3xl p-8 lg:p-12 card-hover`}
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                  <Icon size={26} style={{ color }} />
                </div>
                <p className="text-sm font-medium mb-2" style={{ color }}>{subtitle}</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{title}</h2>
                <p className="leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>{desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {techs.map(t => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full" style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text2)' }}>{t}</span>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-sm">Get Started <ArrowRight size={15} /></Link>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map(f => (
                  <div key={f} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${color}20` }}>
                      <span className="text-xs" style={{ color }}>✓</span>
                    </div>
                    <span className="text-sm" style={{ color: 'var(--text2)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="section-title mb-4">Have a Project in Mind?</h2>
        <p className="mb-8 text-lg" style={{ color: 'var(--muted)' }}>Let's discuss your requirements and build something amazing together.</p>
        <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base">Start Free Consultation <ArrowRight size={18} /></Link>
      </section>
    </>
  );
}

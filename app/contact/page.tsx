import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Sauranium Technologies',
  description: 'Get in touch with Sauranium Technologies.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden grid-bg" style={{ background: 'var(--bg)' }}>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(79,110,247,0.08)' }} />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="tag mb-6 inline-block">Contact Us</span>
          <h1 className="section-title mb-6">Start Your Next Digital <br /><span className="gradient-text">Breakthrough Today</span></h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Planning your next digital move? Sauranium Technologies is here to help you! 
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6" style={{ background: 'var(--bg)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>Let’s Discuss Your Vision</h2>
              <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                Call us, visit us, or write an email to us; here are all the details you need: 
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Office Address', value: 'ASR Residency 1, Greater Noida\nGautam Budh Nagar, Uttar Pradesh', color: '#4f6ef7' },
                { icon: Phone,  label: 'Phone',          value: '+91 7428703447',  href: 'tel:7428703447',           color: '#7c3aed' },
                { icon: Mail,   label: 'Email',          value: 'info@sauranium.com', href: 'mailto:info@sauranium.com', color: '#06d6a0' },
                { icon: Clock,  label: 'Working Hours',  value: 'Monday – Saturday\n9:00 AM – 7:00 PM IST',         color: '#f97316' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex gap-4 rounded-xl p-4" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'var(--muted)' }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-sm whitespace-pre-line transition-colors" style={{ color: 'var(--text)' }}>{value}</a>
                    ) : (
                      <p className="text-sm whitespace-pre-line" style={{ color: 'var(--text)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

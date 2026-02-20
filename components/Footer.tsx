import Link from 'next/link';
import { MapPin, Phone, Mail, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-16 pb-8" style={{ background: 'var(--bg3)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>S</div>
              </div>
              <div>
                <span className="font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>Sauranium</span>
                <span className="block text-[10px] tracking-widest uppercase -mt-1" style={{ color: 'var(--accent)' }}>Technologies</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
              Building world-class digital products for forward-thinking businesses. From concept to deployment — we deliver excellence.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                  style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                  <Icon size={15} style={{ color: 'var(--muted)' }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>Services</h4>
            <ul className="space-y-2">
              {['Web Design & Development','App Development','CRM Development','Digital Marketing','E-Commerce Solutions','API Development'].map(s => (
                <li key={s}><Link href="/services" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--muted)' }}>{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>Company</h4>
            <ul className="space-y-2">
              {[['About Us','/about'],['Technologies','/technologies'],['Services','/services'],['Contact','/contact']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--muted)' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                <span className="text-sm" style={{ color: 'var(--muted)' }}>ASR Residency 1, Greater Noida, Gautam Budh Nagar, UP</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="shrink-0" style={{ color: 'var(--accent)' }} />
                <a href="tel:9910963978" className="text-sm hover:opacity-80" style={{ color: 'var(--muted)' }}>+91 9910963978</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="shrink-0" style={{ color: 'var(--accent)' }} />
                <a href="mailto:info@sauranium.com" className="text-sm hover:opacity-80" style={{ color: 'var(--muted)' }}>info@sauranium.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>© 2025 Sauranium Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>Crafted with precision in Greater Noida, India</p>
        </div>
      </div>
    </footer>
  );
}

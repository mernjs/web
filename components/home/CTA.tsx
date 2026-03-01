import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className="relative rounded-3xl p-12 md:p-16 overflow-hidden grid-bg"
          style={{ background: 'var(--bg2)', border: '1px solid rgba(79,110,247,0.2)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(79,110,247,0.12)' }} />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] flex items-center justify-center mx-auto mb-6">
              <Rocket size={28} className="text-white" />
            </div>

            <h2 className="section-title mb-4">
              Ready to Strengthen  <br /><span className="gradient-text">Your Digital Ecosystem?</span>
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              Partner with our web development company Noida and get high-performance digital solutions that take you to newer heights of success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary !flex items-center justify-center gap-2 text-base">
                Get Quote
 <ArrowRight size={18} />
              </Link>
              <a href="tel:7428703447" className="btn-outline flex items-center justify-center gap-2 text-base">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

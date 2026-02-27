import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Sauranium Technologies',
  description: 'Learn about Sauranium Technologies — our story, mission, values and the expert team.',
};

const team = [
  { name: 'Rohit Singh',   role: 'Founder & CEO',      expertise: 'Product Strategy & Business Development' },
  { name: 'Satya Vrat',  role: 'COO',    expertise: 'React & Next.js Specialist' },
  { name: 'Brijesh Sonkar',  role: 'CTO',                 expertise: 'Full-Stack Architecture & Engineering' },
  { name: 'Sonu Tiwari',   role: 'Lead Designer',       expertise: 'UI/UX Design & Brand Identity' },
  { name: 'Atul Singh',    role: 'Head of Marketing',   expertise: 'Digital Marketing & Growth Strategy' },
  { name: 'Raj Gaurav',  role: 'Mobile Lead',         expertise: 'Flutter & React Native Developer' },
];

const values = [
  { icon: Target, title: 'Our Vision',        desc: 'As a website development company in Noida, we want to set the global standard for technical integrity in the digital landscape. We envision a future where digital infrastructures become an asset for businesses, unlocking their growth. We use advanced engineering and intuitive designs to make this possible.' },
  { icon: Eye,    title: 'Our Mission',    desc: 'Our aim is to provide the digital backbone for the leaders of tomorrow. Using the best technical frameworks, we build world-class solutions that propel your business ahead. With a decade of experience and in-depth technical expertise, we provide scalable web and mobile solutions that are fast and secure.' },
  { icon: Heart,  title: 'Our Principles That Guide Execution',          desc: "Execution is grounded in accountability, precision, and consistency. Every project is handled through an internal production environment to maintain quality control and timely delivery. As a reliable company offering custom software development India, our focus remains on delivering solutions that strengthen identity, improve communication, and support market positioning." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden grid-bg" style={{ background: 'var(--bg)' }}>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(79,110,247,0.08)' }} />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="tag mb-6 inline-block">Sauranium Technologies: Engineering Scalable Solutions for the Modern Digital Landscape</span>
          <h1 className="section-title mb-6">Digital Platforms Designed for Scale, 
<br /><span className="gradient-text">Speed, and Market Leadership</span></h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
           In a world where your digital footprint determines your positioning in the market, Sauranium Technologies brings your dreams to life by creating platforms that reflect your innovative approach to the world. 
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="tag mb-4 inline-block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
              About Sauranium Technologies: <span className="gradient-text">Building Precise Digital Frameworks for Modern Enterprises</span>
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: 'var(--muted)' }}>
              <p><b>Sauranium Technologies</b> is a <b>full stack development company India</b> that was founded with the goal of offering web design, development, app development, CRM development, digital marketing, and other digital systems engineered for business performance, brand integrity, and technical reliability. By integrating strong development methodologies with simple interfaces, we create digital assets that will provide real, measurable results for your business.</p>
              {/* <p>Starting with just 3 developers and a bold vision in 2019, we've grown into a team of 15+ experts spanning development, design, marketing, and strategy. Our headquarters in Greater Noida serves clients across India and beyond.</p>
              <p>Today, we've delivered 150+ successful projects — from local business websites to enterprise-scale platforms. But our biggest pride isn't the numbers — it's the lasting partnerships we've built with our clients.</p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['10+','Years Experience'],['150+','Projects Delivered'],['15+','Expert Developers'],['80+','Happy Clients']].map(([value, label]) => (
              <div key={label} className="rounded-2xl p-6 text-center card-hover" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <div className="gradient-text text-4xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</div>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--bg3)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">What <span className="gradient-text">Drives</span> Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-8 text-center card-hover" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(79,110,247,0.1)', border: '1px solid rgba(79,110,247,0.2)' }}>
                  <Icon size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">Our Team</span>
          <h2 className="section-title mb-4">Meet the <span className="gradient-text">Brilliant Minds</span><br />Behind the Work</h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>Talented professionals united by a passion for building exceptional digital products.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(({ name, role, expertise }) => (
            <div key={name} className="rounded-2xl p-6 card-hover" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] flex items-center justify-center text-white text-xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                {name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{name}</h3>
              <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>{role}</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{expertise}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="section-title mb-4">Let's Build Together</h2>
        <p className="mb-8 text-lg" style={{ color: 'var(--muted)' }}>Whether you're a startup or an enterprise, we'd love to help you build something extraordinary.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Get in Touch <ArrowRight size={16} /></Link>
          <Link href="/services" className="btn-outline inline-flex items-center gap-2">View Services</Link>
        </div>
      </section>
    </>
  );
}

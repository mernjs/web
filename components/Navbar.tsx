'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: scrolled ? '12px 0' : '24px 0',
        background: scrolled ? 'var(--bg2)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
              S
            </div>
          </div>
          <div>
            <span className="font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
              Sauranium
            </span>
            <span className="block text-[10px] tracking-widest uppercase -mt-1" style={{ color: 'var(--accent)' }}>Technologies</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm transition-colors rounded-md"
              style={{ color: 'var(--text2)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary text-sm px-6 py-3">
            Get a Quote
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} style={{ color: 'var(--text)' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden px-6 py-4"
          style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm transition-colors"
              style={{ color: 'var(--text2)', borderBottom: '1px solid var(--border)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary block text-center mt-4">
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

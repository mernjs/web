'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl border border-[var(--border2)] bg-transparent flex items-center justify-center opacity-0" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-105 group"
      style={{
        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
        borderColor: 'var(--border2)',
      }}
    >
      <span
        className="absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: isDark
            ? 'rgba(79,110,247,0)'
            : 'rgba(79,110,247,0)',
        }}
      />
      {isDark ? (
        <Sun
          size={17}
          className="transition-all duration-300 group-hover:rotate-45"
          style={{ color: '#f59e0b' }}
        />
      ) : (
        <Moon
          size={17}
          className="transition-all duration-300 group-hover:-rotate-12"
          style={{ color: 'var(--accent)' }}
        />
      )}
    </button>
  );
}

export default function Stats() {
  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '80+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '15+', label: 'Expert Developers' },
  ];

  return (
    <section className="py-16" style={{ background: 'var(--bg3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="gradient-text text-4xl md:text-5xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                {value}
              </div>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

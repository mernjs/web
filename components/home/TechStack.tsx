const techCategories = [
  { category: 'Frontend',          techs: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
  { category: 'Backend',           techs: ['Node.js', 'Laravel', 'Ruby on Rails', 'Python', 'Express.js', 'GraphQL'] },
  { category: 'Mobile',            techs: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Dart'] },
  { category: 'CMS & E-Commerce',  techs: ['WordPress', 'WooCommerce', 'Shopify', 'Strapi', 'Contentful'] },
  { category: 'Database',          techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'] },
  { category: 'DevOps & Cloud',    techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'] },
];

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden grid-bg" style={{ background: 'var(--bg3)' }}>
      <div className="absolute left-0 top-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(79,110,247,0.06)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Our Stack</span>
          <h2 className="section-title mb-4">
            Built with <span className="gradient-text">Cutting-Edge</span><br />Technologies
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            We leverage the latest, most powerful technologies to build robust, scalable, and future-proof digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map(({ category, techs }) => (
            <div key={category} className="rounded-2xl p-6 card-hover" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }}>/ </span>{category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg transition-all cursor-default"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text2)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

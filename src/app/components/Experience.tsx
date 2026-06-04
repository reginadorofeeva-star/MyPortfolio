export default function Experience() {
  const timeline = [
    {
      date: 'Июнь 2024 — н.в.',
      company: 'МТС',
      role: 'Senior Product Designer'
    },
    {
      date: 'Июнь 2023 — Авг 2024',
      company: 'Neoflex',
      role: 'Product Designer'
    },
    {
      date: 'Мрт 2020 — Июнь 2023',
      company: 'Индустрия делового программного ПО',
      role: 'Product Designer'
    },
    {
      date: 'Весна 2018 — Весна 2020',
      company: 'Freelance',
      role: 'Designer'
    }
  ];

  return (
    <section
      id="experience"
      className="py-16 border-b"
      style={{
        borderColor: 'var(--border-color)',
        animation: 'fadeUp 0.6s ease both',
        animationDelay: '0.2s'
      }}
    >
      <div className="flex items-baseline gap-3 mb-10">
        <span
          className="text-[11px] uppercase tracking-wider"
          style={{
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)'
          }}
        >
          Опыт
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
      </div>

      <div className="grid grid-cols-[1fr_1fr] gap-12 items-start max-[768px]:grid-cols-1">
        <div className="text-sm leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
          <p>
            Мой путь в дизайне начался с графического дизайна и художественного образования,
            которые сформировали сильную визуальную базу и внимание к деталям.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[160px_1fr] gap-6 py-5 border-b transition-all duration-150 last:border-b-0 max-[600px]:grid-cols-1 max-[600px]:gap-2"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <span
                className="text-xs pt-[2px]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-muted)'
                }}
              >
                {item.date}
              </span>
              <div>
                <div
                  className="text-[15px] font-medium mb-[3px] tracking-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {item.company}
                </div>
                <div
                  className="text-[13px] tracking-tight"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '-0.02em',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

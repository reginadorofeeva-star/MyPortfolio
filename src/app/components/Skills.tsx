export default function Skills() {
  const skills = [
    'Выступала на профессиональных дизайн-мероприятиях с собственными докладами',
    'Работала в кросс-функциональных командах вместе с Product Owners, системными аналитиками, разработчиками и QA-инженерами',
    'Проводила пользовательские исследования, интервью и customer development',
    'Работала с дизайн-системами и участвовала в их развитии',
    'Создавала внутренние UI Kit и библиотеки компонентов',
    'Участвовала в выстраивании процессов взаимодействия между дизайном и разработкой'
  ];

  const tools = ['Figma', 'CSS / HTML', 'Claude', 'Cursor', 'Figma Make', 'English B2+'];

  return (
    <section
      id="skills"
      className="py-16 border-b"
      style={{
        borderColor: 'var(--border-color)',
        animation: 'fadeUp 0.6s ease both',
        animationDelay: '0.3s'
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
          Навыки
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
      </div>

      <p
        className="text-sm leading-[1.75] mb-6"
        style={{ color: 'var(--text-secondary)' }}
      >
        За годы работы мне довелось участвовать не только в проектировании продуктов,
        но и в развитии дизайн-практик внутри команд.
      </p>

      <div className="flex flex-col gap-0">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 py-[13px] border-b last:border-b-0 transition-all duration-150"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <span
              className="text-xs mt-[2px] flex-shrink-0"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-color)'
              }}
            >
              →
            </span>
            <span
              className="text-[15px] leading-[1.7]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-[11px] px-3 py-[6px] rounded border"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)',
              borderColor: 'var(--border-color)',
              background: 'var(--bg-2)'
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

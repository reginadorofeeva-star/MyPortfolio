export default function Skills() {
  const skillGroups = [
    {
      title: 'Исследования',
      items: [
        'Проводила пользовательские исследования, интервью и customer development',
        'Выступала на профессиональных дизайн-мероприятиях с собственными докладами'
      ]
    },
    {
      title: 'Команда и процессы',
      items: [
        'Работала в кросс-функциональных командах вместе с Product Owners, системными аналитиками, разработчиками и QA‑инженерами',
        'Участвовала в выстраивании процессов взаимодействия между дизайном и разработкой'
      ]
    },
    {
      title: 'Дизайн-системы',
      items: [
        'Работала с дизайн-системами и участвовала в их развитии',
        'Создавала внутренние UI Kit и библиотеки компонентов'
      ]
    }
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
        className="text-sm leading-[1.75] mb-12"
        style={{ color: 'var(--text-secondary)' }}
      >
        За годы работы мне довелось участвовать не только в проектировании продуктов,
        но и в развитии дизайн-практик внутри команд.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div
              className="text-[11px] uppercase pb-[10px] mb-6 border-b"
              style={{
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
                color: 'var(--success-color)',
                borderColor: 'var(--border-color)'
              }}
            >
              {group.title}
            </div>
            <div className="flex flex-col gap-7">
              {group.items.map((item, idx) => (
                <div key={idx} className="flex gap-[10px]">
                  <span
                    className="text-[13px] flex-shrink-0 mt-[1px]"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-color)' }}
                  >
                    →
                  </span>
                  <span
                    className="text-[14px] leading-[1.55]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-[11px] px-3 py-[6px] rounded border whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-color)',
              borderColor: 'rgba(124,106,247,0.34)',
              background: 'rgba(124,106,247,0.07)'
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

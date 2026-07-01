import { SOCIAL_LINKS } from '../constants/links';
import { screenshots } from '../../assets/screenshots';
import Avatar from './Avatar';

export default function Hero() {
  const tags = ['8+ years in Design', 'B2B', 'SaaS', 'Data', 'ML', 'AI', 'B2E', 'Vibecoding'];

  const contacts = [
    { label: 'Telegram', href: SOCIAL_LINKS.telegram },
    { label: 'Email', href: SOCIAL_LINKS.email },
    { label: 'Behance', href: SOCIAL_LINKS.behance },
    { label: 'Dribbble', href: SOCIAL_LINKS.dribbble }
  ];

  return (
    <section
      id="hero"
      className="py-24 pb-20 border-b"
      style={{
        borderColor: 'var(--border-color)',
        animation: 'fadeUp 0.6s ease both'
      }}
    >
      <div className="grid grid-cols-[1fr_auto] gap-12 items-start max-[500px]:gap-5">
        <div>
          <div
            className="inline-flex items-center gap-2 mb-7"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full"
              style={{
                background: 'var(--success-color)',
                boxShadow: '0 0 8px var(--success-color)',
                animation: 'pulse 2s ease infinite'
              }}
            />
            <span
              className="text-[11px] uppercase tracking-wider"
              style={{ color: 'var(--success-color)', letterSpacing: '0.08em' }}
            >
              Available for new opportunities
            </span>
          </div>

          <h1
            className="text-[clamp(44px,7vw,64px)] leading-[1.05] tracking-tight mb-2 italic"
            style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-0.02em' }}
          >
            Привет, я Регина.
          </h1>

          <p
            className="text-[clamp(14px,2vw,16px)] font-normal tracking-tight mb-7"
            style={{ color: 'var(--text-secondary)', letterSpacing: '-0.01em' }}
          >
            Senior Product Designer
          </p>

          <div
            className="text-base max-w-[500px] leading-[1.7] mb-9"
            style={{ color: 'var(--text-secondary)' }}
          >
            <p className="mb-4">
              Продуктовый дизайнер с 6-летним опытом в IT и 8-летним опытом в дизайне.
              Особенно сильной стороной считаю работу с Data и ML‑продуктами.
            </p>
            <p>
              Мне нравится разбираться в сложных системах и превращать их в понятные
              и эффективные инструменты для пользователей.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map((tag, idx) => {
              const isFirst = idx === 0;
              return (
                <span
                  key={tag}
                  className="text-[11px] px-[10px] py-1 rounded border transition-all duration-200"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.04em',
                    color: isFirst ? 'var(--success-color)' : 'var(--accent-color)',
                    borderColor: isFirst ? 'rgba(61,214,140,0.34)' : 'rgba(124,106,247,0.3)',
                    background: isFirst ? 'rgba(61,214,140,0.07)' : 'rgba(124,106,247,0.05)',
                    textTransform: 'uppercase'
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <div className="flex gap-4 flex-wrap">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[7px] py-2 border-b border-transparent transition-all duration-150 hover:border-[var(--border-hover)]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em'
                }}
              >
                <span
                  className="w-[5px] h-[5px] rounded-full flex-none"
                  style={{ background: '#6a6a72' }}
                />
                {contact.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-10 max-[500px]:pt-0">
          <Avatar src={screenshots.portrait} alt="Regina" initials="R" size="lg" />
        </div>
      </div>
    </section>
  );
}

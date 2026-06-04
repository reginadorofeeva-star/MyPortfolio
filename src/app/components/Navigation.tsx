import { NAVIGATION_LINKS } from '../constants/links';

export default function Navigation() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="sticky top-0 z-[100] border-b"
      style={{
        background: 'rgba(10,10,10,0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-[760px] mx-auto px-6 h-[52px] flex items-center justify-between">
        <a
          href="#"
          style={{ fontFamily: 'var(--font-serif)' }}
          className="text-[17px] italic tracking-tight"
        >
          Regina
        </a>

        <ul className="flex gap-1 list-none">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}
                className="text-[13px] px-[10px] py-[5px] rounded-[var(--radius-sm)] transition-all duration-150 tracking-tight hover:bg-white/5 hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

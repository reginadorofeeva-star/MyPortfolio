import { useEffect, useRef, useState } from 'react';
import type { ProjectModal as ProjectModalData } from '../data/projects';
import ExternalLink from './icons/ExternalLink';
import ProjectImage from './ProjectImage';

interface ProjectModalProps {
  project: ProjectModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState('overview');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  // Reset scroll & active section when a new project opens
  useEffect(() => {
    if (isOpen) {
      setActive('overview');
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }
  }, [isOpen, project?.id]);

  if (!project) return null;

  const sections: { id: string; label: string }[] = [
    { id: 'overview', label: 'Обзор' },
    { id: 'result', label: 'Результат' },
    ...(project.screenshots && project.screenshots.length > 0
      ? [{ id: 'screenshots', label: 'Screenshots' }]
      : []),
    ...(project.roleDetails ? [{ id: 'role', label: 'Роль' }] : []),
    { id: 'task', label: 'Задача' },
    { id: 'solution', label: 'Решение' }
  ];

  const handleScroll = () => {
    const c = scrollRef.current;
    if (!c) return;
    let current = sections[0].id;
    for (const s of sections) {
      const el = c.querySelector<HTMLElement>(`[data-sec="${s.id}"]`);
      if (el && el.offsetTop - 120 <= c.scrollTop) {
        current = s.id;
      }
    }
    setActive((prev) => (prev !== current ? current : prev));
  };

  const scrollTo = (id: string) => {
    const c = scrollRef.current;
    if (!c) return;
    const el = c.querySelector<HTMLElement>(`[data-sec="${id}"]`);
    if (el) {
      c.scrollTo({ top: el.offsetTop - 24, behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-start justify-center p-6 md:p-10 transition-all duration-[250ms] ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
      onClick={onClose}
    >
      <div
        className={`w-full max-w-[1040px] rounded-[14px] relative my-auto flex flex-col max-h-[90vh] overflow-hidden transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-5'
        }`}
        style={{
          background: 'var(--bg-2)',
          border: '1px solid var(--border-color)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div
          className="flex items-center justify-between px-7 md:px-10 py-4 border-b flex-shrink-0"
          style={{
            background: 'var(--bg-2)',
            borderColor: 'var(--border-color)'
          }}
        >
          <span
            className="text-[11px] uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
              color: 'var(--accent-color)'
            }}
          >
            {project.highlightTag}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-md border transition-all duration-150 leading-none hover:bg-white/10"
            style={{
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)'
            }}
          >
            ×
          </button>
        </div>

        {/* Body: side nav + scrollable content */}
        <div className="flex flex-1 min-h-0">
          {/* Side mini-nav */}
          <nav className="hidden md:block flex-shrink-0 w-[170px] border-r py-8 px-5" style={{ borderColor: 'var(--border-color)' }}>
            <div className="sticky top-0 flex flex-col gap-[2px]">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-left py-[7px] pl-[14px] transition-all duration-150"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    letterSpacing: '0.02em',
                    borderLeft: `2px solid ${active === s.id ? 'var(--success-color)' : 'transparent'}`,
                    color: active === s.id ? 'var(--text-primary)' : 'var(--text-muted)'
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Content */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex-1 min-w-0 overflow-y-auto px-7 md:px-10 py-8"
          >
            {/* OVERVIEW */}
            <section data-sec="overview">
              <div className="flex gap-2 flex-wrap mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase px-[9px] py-[3px] rounded border"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.05em',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2
                className="text-[clamp(30px,5vw,42px)] italic tracking-tight mb-[6px] leading-[1.1]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '-0.02em'
                }}
              >
                {project.title}
              </h2>

              <p
                className="text-xs mb-7"
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.02em',
                  color: 'var(--text-muted)'
                }}
              >
                {project.role}
              </p>

              {/* Key metrics surfaced at top */}
              {project.keyMetrics && project.keyMetrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {project.keyMetrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-[var(--radius)] p-4 px-[18px]"
                      style={{
                        background: 'rgba(61,214,140,0.05)',
                        border: '1px solid rgba(61,214,140,0.15)'
                      }}
                    >
                      <div
                        className="text-[24px] font-medium leading-none tracking-tight"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '-0.03em',
                          color: 'var(--success-color)'
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        className="text-[11px] leading-[1.4] mt-[10px]"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {project.behanceLink && (
                <a
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] text-[11px] px-3 py-[5px] rounded border mb-7 transition-all duration-150 hover:bg-[rgba(124,106,247,0.12)] hover:border-[rgba(124,106,247,0.5)]"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.04em',
                    color: 'var(--accent-color)',
                    borderColor: 'rgba(124,106,247,0.3)',
                    background: 'rgba(124,106,247,0.05)',
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={12} />
                  Посмотреть на Behance
                </a>
              )}

              {project.overview.map((text, idx) => (
                <p
                  key={idx}
                  className="text-[15px] leading-[1.75] mb-5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {text}
                </p>
              ))}
            </section>

            {/* RESULT — moved high */}
            <section data-sec="result" className="mt-10">
              <h3
                className="text-xs uppercase mb-2 pb-[10px] border-b"
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                  color: 'var(--success-color)',
                  borderColor: 'var(--border-color)'
                }}
              >
                Результат
              </h3>
              <div
                className="rounded-[var(--radius)] p-5 px-6 mt-3"
                style={{
                  background: 'rgba(61,214,140,0.05)',
                  border: '1px solid rgba(61,214,140,0.15)'
                }}
              >
                {project.impact.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-[10px] py-[6px]">
                    <span
                      className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                      style={{ background: 'var(--success-color)' }}
                    />
                    <span
                      className="text-[13px] tracking-tight"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '-0.01em',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* SCREENSHOTS — annotated */}
            {project.screenshots && project.screenshots.length > 0 && (
              <section data-sec="screenshots" className="mt-10">
                <h3
                  className="text-xs uppercase mb-4 pb-[10px] border-b"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  Screenshots
                </h3>
                <div className="flex flex-col gap-7">
                  {project.screenshots.map((screenshot, idx) => (
                    <div key={idx}>
                      <div
                        className="rounded-[var(--radius)] border overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]"
                        style={{ borderColor: 'var(--border-color)' }}
                      >
                        <ProjectImage
                          src={screenshot}
                          alt={`${project.title} Screenshot ${idx + 1}`}
                        />
                      </div>
                      {project.screenshotCaptions && project.screenshotCaptions[idx] && (
                        <div className="flex gap-[10px] mt-3">
                          <span
                            className="text-[11px] flex-shrink-0 mt-[2px]"
                            style={{ fontFamily: 'var(--font-mono)', color: 'var(--success-color)' }}
                          >
                            →
                          </span>
                          <span
                            className="text-[13.5px] leading-[1.55]"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {project.screenshotCaptions[idx]}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ROLE */}
            {project.roleDetails && (
              <section data-sec="role" className="mt-10">
                <h3
                  className="text-xs uppercase mb-3 pb-[10px] border-b"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  Роль
                </h3>
                <p
                  className="text-[15px] leading-[1.75] mb-5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.roleDetails}
                </p>
              </section>
            )}

            {/* TASK */}
            <section data-sec="task" className="mt-10">
              <h3
                className="text-xs uppercase mb-3 pb-[10px] border-b"
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  borderColor: 'var(--border-color)'
                }}
              >
                Задача
              </h3>
              {project.problem.map((text, idx) => (
                <p
                  key={idx}
                  className="text-[15px] leading-[1.75] mb-5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {text}
                </p>
              ))}
            </section>

            {/* SOLUTION */}
            <section data-sec="solution" className="mt-10">
              <h3
                className="text-xs uppercase mb-3 pb-[10px] border-b"
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  borderColor: 'var(--border-color)'
                }}
              >
                Решение
              </h3>
              <ul className="list-none p-0 mb-5">
                {project.solutions.map((solution, idx) => (
                  <li
                    key={idx}
                    className="text-[15px] leading-[1.7] py-2 pl-5 relative border-b last:border-b-0"
                    style={{
                      color: 'var(--text-secondary)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <span
                      className="absolute left-0 top-[10px] text-xs"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-color)'
                      }}
                    >
                      →
                    </span>
                    {solution}
                  </li>
                ))}
              </ul>

              <p
                className="text-[11px] mt-6 pt-5 border-t italic"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  borderColor: 'var(--border-color)'
                }}
              >
                {project.ndaNote}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

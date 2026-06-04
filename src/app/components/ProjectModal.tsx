import { useEffect } from 'react';
import type { ProjectModal as ProjectModalData } from '../data/projects';
import ExternalLink from './icons/ExternalLink';
import ProjectImage from './ProjectImage';

interface ProjectModalProps {
  project: ProjectModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
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

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-start justify-center p-10 px-6 overflow-y-auto transition-all duration-[250ms] ${
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
        className={`w-full max-w-[680px] rounded-[14px] p-12 px-[52px] relative my-auto transition-transform duration-300 max-[600px]:p-8 max-[600px]:px-6 ${
          isOpen ? 'translate-y-0' : 'translate-y-5'
        }`}
        style={{
          background: 'var(--bg-2)',
          border: '1px solid var(--border-color)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-md border transition-all duration-150 leading-none hover:bg-white/10"
          style={{
            background: 'rgba(255,255,255,0.06)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)'
          }}
        >
          ×
        </button>

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
          <span
            className="text-[10px] uppercase px-[9px] py-[3px] rounded border"
            style={{
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.05em',
              borderColor: 'rgba(124,106,247,0.4)',
              color: 'var(--accent-color)',
              background: 'rgba(124,106,247,0.07)'
            }}
          >
            {project.highlightTag}
          </span>
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
          className="text-xs mb-8"
          style={{
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.02em',
            color: 'var(--text-muted)'
          }}
        >
          {project.role}
        </p>

        <div>
          {/* Ссылка на Behance */}
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
              Посмотреть на Behance
            </a>
          )}

          {/* 1. Описание (Overview) */}
          {project.overview.map((text, idx) => (
            <p
              key={idx}
              className="text-[15px] leading-[1.75] mb-5"
              style={{ color: 'var(--text-secondary)' }}
            >
              {text}
            </p>
          ))}

          {/* 2. Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <>
              <h3
                className="text-xs uppercase mt-8 mb-4 pb-[10px] border-b"
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  borderColor: 'var(--border-color)'
                }}
              >
                Screenshots
              </h3>
              <div className="grid gap-3 mb-8">
                {project.screenshots.map((screenshot, idx) => (
                  <div
                    key={idx}
                    className="rounded-[var(--radius)] border overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <ProjectImage
                      src={screenshot}
                      alt={`${project.title} Screenshot ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* 3. Результат (Impact) */}
          <h3
            className="text-xs uppercase mt-8 mb-2 pb-[10px] border-b"
            style={{
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
              color: 'var(--text-muted)',
              borderColor: 'var(--border-color)'
            }}
          >
            Результат
          </h3>
          <div
            className="rounded-[var(--radius)] p-5 px-6 mt-2 mb-8"
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

          {/* 4. Роль (Role Details) */}
          {project.roleDetails && (
            <>
              <h3
                className="text-xs uppercase mt-8 mb-3 pb-[10px] border-b"
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
            </>
          )}

          {/* 5. Задача (Problem) */}
          <h3
            className="text-xs uppercase mt-8 mb-3 pb-[10px] border-b"
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

          {/* 6. Решение (Solutions) */}
          <h3
            className="text-xs uppercase mt-8 mb-3 pb-[10px] border-b"
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

          {/* NDA Note */}
          <p
            className="text-[11px] mt-8 pt-5 border-t italic"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              borderColor: 'var(--border-color)'
            }}
          >
            {project.ndaNote}
          </p>
        </div>
      </div>
    </div>
  );
}

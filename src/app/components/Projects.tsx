import { projectsCards, type ProjectId } from '../data/projects';

interface ProjectsProps {
  onProjectClick: (id: ProjectId) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-16 border-b"
      style={{
        borderColor: 'var(--border-color)',
        animation: 'fadeUp 0.6s ease both',
        animationDelay: '0.1s'
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
          Проекты
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
      </div>

      <div className="grid gap-3">
        {projectsCards.map((project) => (
          <button
            key={project.id}
            onClick={() => onProjectClick(project.id)}
            className="w-full text-left relative overflow-hidden rounded-[var(--radius)] p-7 px-8 cursor-pointer transition-all duration-200 hover:translate-y-[-2px] hover:bg-[var(--bg-3)] group"
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
              style={{
                background: 'linear-gradient(135deg, var(--accent-glow), transparent 60%)'
              }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-[11px] uppercase tracking-wide"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.04em',
                    color: 'var(--text-muted)'
                  }}
                >
                  {project.role}
                </span>
                <span
                  className="transition-all duration-200 mt-[2px] group-hover:text-[var(--text-secondary)] group-hover:translate-x-[3px] group-hover:translate-y-[-3px]"
                  style={{ fontSize: '16px', color: 'var(--text-muted)' }}
                >
                  ↗
                </span>
              </div>

              <h3
                className="text-[26px] italic tracking-tight mb-2 leading-[1.2]"
                style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-0.02em' }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm leading-[1.6] mb-5 max-w-[520px]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.description}
              </p>

              <div className="flex gap-5 flex-wrap">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-[6px]">
                    <span
                      className="text-xs font-medium tracking-tight"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '-0.02em',
                        color: 'var(--success-color)'
                      }}
                    >
                      {metric.value}
                    </span>
                    <span
                      className="text-[11px] tracking-tight"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '-0.01em',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {metric.label}
                    </span>
                  </div>
                ))}
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] uppercase px-2 py-[3px] rounded border"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.04em',
                      color: 'var(--accent-color)',
                      borderColor: 'rgba(124,106,247,0.3)',
                      background: 'rgba(124,106,247,0.05)'
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

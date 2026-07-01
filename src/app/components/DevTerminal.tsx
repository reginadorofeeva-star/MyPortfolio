import { useEffect, useRef } from 'react';

interface Scene {
  path: string;
  cmd: string;
  out: string;
}

const SCENES: Record<string, Scene> = {
  hero: { path: '~', cmd: 'whoami', out: 'regina · senior product designer' },
  projects: { path: '~/projects', cmd: 'ls -la', out: 'mlops-platform  data-catalog  ai-agents' },
  experience: { path: '~/career', cmd: 'git log --oneline', out: 'mts · neoflex · idbs · freelance' },
  skills: { path: '~/skills', cmd: 'cat skills.json', out: 'research · systems · ai · process' },
  beyond: { path: '~/life', cmd: 'echo $HOBBIES', out: 'yoga · painting · film · cycling' }
};

const NAMES = ['hero', 'projects', 'experience', 'skills', 'beyond'];

export default function DevTerminal() {
  const pathRef = useRef<HTMLSpanElement>(null);
  const cmdRef = useRef<HTMLSpanElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    const state = { token: 0, current: null as string | null };
    let raf = 0;
    const timers: number[] = [];

    const wait = (ms: number, tok: number) =>
      new Promise<boolean>((res) => {
        const id = window.setTimeout(() => res(tok === state.token), ms);
        timers.push(id);
      });

    const typeInto = (el: HTMLElement | null, text: string, speed: number, tok: number) =>
      new Promise<boolean>((res) => {
        if (!el) return res(false);
        el.textContent = '';
        let i = 0;
        const step = () => {
          if (tok !== state.token) return res(false);
          if (i >= text.length) return res(true);
          el.textContent += text[i++];
          timers.push(window.setTimeout(step, speed + Math.random() * 26));
        };
        step();
      });

    const eraseEl = (el: HTMLElement | null, tok: number) =>
      new Promise<boolean>((res) => {
        if (!el) return res(false);
        const step = () => {
          if (tok !== state.token) return res(false);
          const cur = el.textContent || '';
          if (!cur) return res(true);
          el.textContent = cur.slice(0, -1);
          timers.push(window.setTimeout(step, 11));
        };
        step();
      });

    const playScene = async (name: string) => {
      const s = SCENES[name];
      if (!s || !cmdRef.current) return;
      if (state.current === name && state.token > 0) return;
      state.current = name;
      const tok = ++state.token;

      if (reduced) {
        if (pathRef.current) pathRef.current.textContent = s.path;
        if (cmdRef.current) cmdRef.current.textContent = s.cmd;
        if (outRef.current) outRef.current.textContent = s.out;
        return;
      }

      if (!(await eraseEl(outRef.current, tok))) return;
      if (!(await eraseEl(cmdRef.current, tok))) return;
      if (tok !== state.token) return;
      if (pathRef.current) pathRef.current.textContent = s.path;
      if (!(await wait(90, tok))) return;
      if (!(await typeInto(cmdRef.current, s.cmd, 32, tok))) return;
      if (!(await wait(280, tok))) return;
      await typeInto(outRef.current, s.out, 15, tok);
    };

    const pickScene = () => {
      const mid = window.innerHeight / 2;
      let best: string | null = null;
      let bd = Infinity;
      for (const n of NAMES) {
        const el = document.getElementById(n);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom <= 0 || r.top >= window.innerHeight) continue;
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bd) {
          bd = d;
          best = n;
        }
      }
      if (best) playScene(best);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        pickScene();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    const initId = window.setTimeout(pickScene, 90);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(initId);
      if (raf) cancelAnimationFrame(raf);
      state.token++;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div
      id="dev-term"
      className="fixed right-6 bottom-6 z-40 w-[344px] overflow-hidden rounded-xl max-[760px]:hidden"
      style={{
        fontFamily: 'var(--font-mono)',
        background: 'rgba(13,13,16,0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 24px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(124,106,247,0.05)',
        animation: 'termIn 0.7s cubic-bezier(0.2,0.7,0.2,1) both'
      }}
    >
      <style>{`
        @keyframes blink { 0%,48% { opacity: 1 } 49%,100% { opacity: 0 } }
        @keyframes termIn { from { opacity: 0; transform: translateY(16px) scale(0.98) } to { opacity: 1; transform: none } }
        @media (prefers-reduced-motion: reduce) { #dev-term { animation: none !important } }
      `}</style>

      <div
        className="flex items-center gap-[10px] px-[14px] py-[10px] border-b"
        style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
      >
        <span className="flex gap-[6px]">
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#ff5f57' }} />
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#febc2e' }} />
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#28c840' }} />
        </span>
        <span className="text-[11px]" style={{ letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
          regina@portfolio — zsh
        </span>
      </div>

      <div className="px-4 pt-[15px] pb-[17px] text-[12.5px] leading-[1.7] min-h-[74px]">
        <div className="flex items-baseline flex-wrap gap-x-[7px]">
          <span ref={pathRef} style={{ color: '#5b8af0' }}>
            ~
          </span>
          <span style={{ color: 'var(--success-color)' }}>$</span>
          <span ref={cmdRef} className="break-words" style={{ color: 'var(--text-primary)' }} />
          <span
            className="inline-block w-[8px] h-[15px] translate-y-[2px]"
            style={{
              background: 'var(--success-color)',
              boxShadow: '0 0 8px rgba(61,214,140,0.7)',
              animation: 'blink 1.05s step-end infinite'
            }}
          />
        </div>
        <div ref={outRef} className="mt-[6px] break-words" style={{ color: 'var(--text-secondary)' }} />
      </div>
    </div>
  );
}

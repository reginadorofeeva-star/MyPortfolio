export default function Footer() {
  return (
    <div className="py-10 pb-[60px] flex items-center justify-between flex-wrap gap-4">
      <span
        className="text-[15px] italic"
        style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--text-muted)'
        }}
      >
        Regina — Senior Product Designer
      </span>
      <span
        className="text-[11px] tracking-tight"
        style={{
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.01em',
          color: 'var(--text-muted)'
        }}
      >
        © 2025
      </span>
    </div>
  );
}

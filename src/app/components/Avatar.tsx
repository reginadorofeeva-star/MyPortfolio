interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ src, alt = 'Avatar', initials = 'R', size = 'lg' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-[72px] h-[72px] text-2xl',
    md: 'w-[96px] h-[96px] text-3xl',
    lg: 'w-[120px] h-[120px] max-[500px]:w-[72px] max-[500px]:h-[72px] text-4xl max-[500px]:text-2xl'
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${sizeClasses[size]} rounded-xl border object-cover object-top flex-shrink-0 block`}
        style={{
          borderColor: 'var(--border-color)',
          filter: 'grayscale(15%)'
        }}
      />
    );
  }

  // Заглушка с инициалами
  return (
    <div
      className={`${sizeClasses[size]} rounded-xl border flex items-center justify-center flex-shrink-0`}
      style={{
        borderColor: 'var(--border-color)',
        background: 'linear-gradient(135deg, var(--accent-color), var(--accent-2))',
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        color: 'white',
        fontWeight: 500
      }}
    >
      {initials}
    </div>
  );
}

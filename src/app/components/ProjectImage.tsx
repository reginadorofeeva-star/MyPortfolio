import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className = '' }: ProjectImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div
        className={`w-full aspect-video flex items-center justify-center rounded-[var(--radius)] border ${className}`}
        style={{
          borderColor: 'var(--border-color)',
          background: 'var(--bg-3)',
          color: 'var(--text-muted)'
        }}
      >
        <div className="text-center p-8">
          <p className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
            Изображение недоступно
          </p>
          <p className="text-xs mt-2 opacity-50">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {!loaded && (
        <div
          className="absolute inset-0 rounded-[var(--radius)] border animate-pulse"
          style={{
            borderColor: 'var(--border-color)',
            background: 'var(--bg-3)'
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto block transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
}

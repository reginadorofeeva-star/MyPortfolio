import { screenshots } from '../../assets/screenshots';
import photoLake from '../../assets/screenshots/photo-lake.jpg';
import photoField from '../../assets/screenshots/photo-field.jpg';
import photoWall from '../../assets/screenshots/photo-wall.jpg';

export default function Beyond() {
  const photos = [
    { src: screenshots.photos[0], alt: 'Йога' },
    { src: photoLake, alt: 'У озера' },
    { src: screenshots.photos[1], alt: 'Япония' },
    { src: photoWall, alt: 'Лето' },
    { src: photoField, alt: 'Гречишное поле на закате' }
  ];

  return (
    <section
      id="beyond"
      className="py-16"
      style={{
        animation: 'fadeUp 0.6s ease both',
        animationDelay: '0.4s'
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
          Обо мне
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
      </div>

      <div className="text-[15px] leading-[1.8] max-w-[560px]" style={{ color: 'var(--text-secondary)' }}>
        <p className="mb-4">
          Вне работы стараюсь находить время для других увлечений. Уже более{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>10 лет занимаюсь йогой</strong>,
          пишу картины маслом, вяжу, путешествую, фотографирую на плёнку, а летом обожаю кататься на велосипеде.
        </p>
        <p>
          Мне нравится создавать вещи как в цифровой среде, так и за её пределами — поэтому{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
            творчество и ручная работа
          </strong>{' '}
          остаются важной частью моей жизни.
        </p>
      </div>

      <div className="mt-9 gap-3 [column-count:3] [column-gap:12px] max-[500px]:[column-count:2]">
        {photos.map((photo, idx) => (
          <img
            key={idx}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="w-full mb-3 [break-inside:avoid] object-cover rounded-[var(--radius)] border transition-all duration-300 hover:scale-[1.01] hover:grayscale-0"
            style={{
              borderColor: 'var(--border-color)',
              filter: 'grayscale(10%)'
            }}
          />
        ))}
      </div>
    </section>
  );
}

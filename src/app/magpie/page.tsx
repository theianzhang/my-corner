import styles from '@/styles/pages/movie.module.css';
import Image from 'next/image'

const stills = Array.from({ length: 9 }, (_, i) => `/img/movies/mapgie/film-stills_1.1.${i + 1}.webp`);

export default function MagpiePage() {
  return (
    <main className={styles.main}>
      {/* 9-still grid */}
      <div className={styles.stillGrid}>
        {stills.map((src, i) => (
          <div className={styles.stillCell} key={i}>
            <Image
              src={src}
              alt={`Magpie still ${i + 1}`}
              className={styles.stillImg}
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Title */}
      <h1 className={styles.title}>MAG // PIE</h1>

      {/* Summary */}
      <p className={styles.summary}>
       In modern-day Paris, two lovers struggle to stay connected as life pulls them in different directions. 
       Inspired by the legend behind Chinese Valentine's Day, this contemporary adaptation takes an old story 
       into a new city where even soulmates slip past one other.
      </p>

      {/* Custom visual */}
      <div className={styles.customVisual}>
        {/* Custom visual removed as per previous request */}
      </div>

      {/* YouTube embed */}
      <div className={styles.youtubeEmbed}>
        <div className={styles.youtubeContainer}>
          <iframe
            src="https://www.youtube.com/embed/[YOUR_PRIVATE_VIDEO_ID]"
            title="Magpie Private Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </main>
  );
} 
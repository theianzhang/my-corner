import styles from '@/styles/pages/movie.module.css';

// Array of Otioppip still paths
const stills = [
  '/img/movies/otioppip/Still 2025-04-30 092824_1.1.1.png',
  '/img/movies/otioppip/Still 2025-04-30 092824_1.3.2.png',
  '/img/movies/otioppip/Still 2025-04-30 092824_1.3.4.png',
  '/img/movies/otioppip/Still 2025-04-30 092824_1.3.5.png',
  '/img/movies/otioppip/Still 2025-04-30 092824_1.3.7.png',
  '/img/movies/otioppip/Still 2025-04-30 092824_1.3.10.png',
  '/img/movies/otioppip/Still 2025-04-30 092824_1.3.11.png',
  '/img/movies/otioppip/Still 2025-04-30 092824_1.3.12.png',
  '/img/movies/otioppip/Still 2025-04-30 092824_1.3.13.png',
];

export default function OtioppipPage() {
  return (
    <main className={styles.main}>
      {/* 9-still grid */}
      <div className={styles.stillGrid}>
        {stills.map((src, i) => (
          <div className={styles.stillCell} key={i}>
            <img
              src={src}
              alt={`Otioppip still ${i + 1}`}
              className={styles.stillImg}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Title */}
      <h1 className={styles.title}>OTIOPPIP</h1>

      {/* Summary */}
      <p className={styles.summary}>
        Two cannibals order a very specific meal.
      </p>

      {/* YouTube embed */}
      <div className={styles.youtubeEmbed}>
        <div className={styles.youtubeContainer}>
          <iframe
            src="https://www.youtube.com/embed/[YOUR_PRIVATE_VIDEO_ID]"
            title="Otioppip Private Video"
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
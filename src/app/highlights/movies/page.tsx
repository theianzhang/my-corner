import Image from 'next/image'
import styles from '@/styles/shared/interior.module.css'

export default function MoviesHighlightPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <Image
          src="/img/art/movie_placeholder.webp"
          alt="Movie Project Placeholder"
          width={1200}
          height={600}
          className={styles.heroImage}
          priority
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Short Films</h1>
          <h2>2025</h2>
          <h5>Directing, Writing, Producing</h5>
        </div>
        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>
        <p>
          [Write about your experience making movies here. What inspired you? What did you learn? Any fun stories or challenges?]
        </p>
      </div>
    </div>
  )
}

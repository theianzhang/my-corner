import Link from 'next/link'
import styles from '@/styles/pages/blog-post.module.css'

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.posts}>
        <article className={styles.post}>
            <Link href="/blog/moving-to-europe">
              <h2>Moving to Europe</h2>
              <p>Is Paris always a good idea?</p>
              <span className={styles.date}>2025</span>
            </Link>
          </article>
          <article className={styles.post}>
            <Link href="/blog/metaverse">
              <h2>The Metaverse in Retrospect</h2>
              <p>Post-Google thoughts</p>
              <span className={styles.date}>2024</span>
            </Link>
          </article>
          <article className={styles.post}>
            <Link href="/blog/long-tail-drift">
              <h2>Long Tail Drift</h2>
              <p>When to know you've gone too far</p>
              <span className={styles.date}>2023</span>
            </Link>
          </article>
          <article className={styles.post}>
            <Link href="/blog/fontainebleau">
              <h2>Fontainebleau</h2>
              <p>No car trip to Bleau from Paris</p>
              <span className={styles.date}>2022</span>
            </Link>
          </article>
        </div>
      </div>
    </main>
  )
} 
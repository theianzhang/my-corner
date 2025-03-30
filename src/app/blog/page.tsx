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
              <p>Reflections on the future of immersive technology after leaving Google's AR team</p>
              <span className={styles.date}>2024</span>
            </Link>
          </article>

        </div>
      </div>
    </main>
  )
} 
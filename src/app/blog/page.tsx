import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Blog</h1>
          <h5>Thoughts on tech, travel, and everything in between</h5>
        </div>

        <div className={styles.posts}>
          <article className={styles.post}>
            <Link href="/blog/metaverse" className={styles.postLink}>
              <div className={styles.postImage}>
                <Image
                  src="/img/home/ray-bans.png"
                  alt="Metaverse Blog Post"
                  width={800}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.postContent}>
                <h2>The Metaverse in Retrospect</h2>
                <h5>2024</h5>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </main>
  )
} 
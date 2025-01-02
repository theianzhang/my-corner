import Image from 'next/image'
import styles from './HighlightLayout.module.css'

interface HighlightLayoutProps {
  title: string
  year: string
  category: string
  children: React.ReactNode
  heroImage?: {
    src: string
    alt: string
  }
}

export default function HighlightLayout({
  title,
  year,
  category,
  children,
  heroImage
}: HighlightLayoutProps) {
  return (
    <div className={styles.container}>
      {heroImage && (
        <div className={styles.heroContainer}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={1200}
            height={600}
            className={styles.heroImage}
            priority
            quality={90}
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <h2>{year}</h2>
          <h5>{category}</h5>
        </div>

        {children}
      </div>
    </div>
  )
} 
import Image from 'next/image'
import HighlightLayout from '@/components/HighlightLayout'
import styles from './page.module.css'

export default function Food() {
  return (
    <HighlightLayout
      title="Food Photography"
      year="2018-Present"
      category="Photography, Composition"
      heroImage={{
        src: "/img/food/august-2018.png",
        alt: "Food Photography"
      }}
    >
      <div className={styles.gallery}>
        <div className={styles.galleryItem}>
          <Image 
            src="/img/food/august-2018.png"
            alt="August 2018 Food"
            width={600}
            height={400}
            quality={90}
          />
          <p className={styles.caption}>Homemade Ramen, Seattle</p>
        </div>
        {/* Add more gallery items as needed */}
      </div>

      <p className={styles.bodyText}>
        I've always been fascinated by food photography and how it can tell stories about culture, 
        tradition, and personal experiences. This collection represents some of my favorite culinary 
        moments and experiments with food photography.
      </p>
    </HighlightLayout>
  )
} 
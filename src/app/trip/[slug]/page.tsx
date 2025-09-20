import { tripStories } from '@/data/highlightsStructure'
import { notFound } from 'next/navigation'
import styles from './trip.module.css'

export function generateStaticParams() {
  return Object.keys(tripStories).map((slug) => ({
    slug,
  }))
}

export default async function TripPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const trip = tripStories[slug as keyof typeof tripStories]

  if (!trip) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>{trip.title}</h1>
        <div className={styles.tripMeta}>
          <span className={styles.duration}>{trip.duration}{typeof trip.duration === 'number' ? ' days' : ''}</span>
          <span className={styles.style}>{trip.travelStyle}</span>
        </div>
      </div>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stories & Experiences</h2>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ian's Reccs</h2>
        </section>
      </main>
    </div>
  )
} 
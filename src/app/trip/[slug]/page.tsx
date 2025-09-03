import { tripStories } from '@/data/highlightsStructure'
import { notFound } from 'next/navigation'
import Image from 'next/image'
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
      {/* Hero Section */}
      <div className={styles.hero}>
        {trip.heroImage && (
          <Image
            src={trip.heroImage}
            alt={trip.title}
            fill
            className={styles.heroImage}
            priority
          />
        )}
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{trip.title}</h1>
            <p className={styles.summary}>{trip.summary}</p>
            <div className={styles.tripMeta}>
              <span className={styles.year}>{trip.year}</span>
              <span className={styles.duration}>{trip.duration} days</span>
              <span className={styles.style}>{trip.travelStyle}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {/* Stories / Blog Content */}
        <section className={styles.stories}>
          <h2>Stories & Experiences</h2>
          {Object.entries(trip.stories).map(([key, story]) => (
            <article key={key} className={styles.story}>
              <h3>{story.title}</h3>
              {story.image && (
                <Image
                  src={story.image}
                  alt={story.title}
                  width={800}
                  height={400}
                  className={`body-image ${styles.storyImage}`}
                />
              )}
              <div className={`body-text ${styles.storyContent}`}>
                {story.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </article>
          ))}
        </section>
        {/* Recommendations */}
        {trip.recommendations && (
          <section className={styles.recommendations}>
            <h2>Travel Recommendations</h2>
            <div className={styles.recGrid}>
              <div className={styles.recCard}>
                <h4>Best Time to Visit</h4>
                <p>{trip.recommendations.bestTime}</p>
              </div>
              <div className={styles.recCard}>
                <h4>Budget</h4>
                <p>{trip.recommendations.budget}</p>
              </div>
              {trip.recommendations.mustDo && (
                <div className={styles.recCard}>
                  <h4>Must Do</h4>
                  <ul>
                    {trip.recommendations.mustDo.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  )
} 
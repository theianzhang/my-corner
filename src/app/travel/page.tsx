'use client'

import Globe from '@/components/Globe/Globe'
import ContinentStats from '@/components/Stats/ContinentStats'
import styles from '@/styles/pages/travel.module.css'

export default function Travel() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Filling in my view of the world, one country at a time.
      </h1>

      <section className={styles.globeSection}>
        <Globe />
      </section>
      
      <ContinentStats />
    </main>
  )
} 
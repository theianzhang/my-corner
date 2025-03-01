'use client'

import Globe from '@/components/Globe/Globe'
import ContinentStats from '@/components/Stats/ContinentStats'
import CountryThumbnails from '@/components/Country/CountryThumbnails'
import styles from '@/styles/pages/travel.module.css'

export const dynamic = 'force-static'

export default function Travel() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Filling in my view of the world, one country at a time.
      </h1>

      <section className={styles.globeSection}>
        <Globe />
      </section>
      
      <section className={styles.countriesSection}>
        <CountryThumbnails />
      </section>
      
      <ContinentStats />
    </main>
  )
} 
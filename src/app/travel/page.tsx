'use client'

import { useRef } from 'react'
import Globe from '@/components/Globe/Globe'
import CountryThumbnails from '@/components/Country/CountryThumbnails'
import DepartureBoard from '@/components/TripHighlights/DepartureBoard'
import ParticleBackground from '@/components/ParticleBackground/ParticleBackground'
import styles from '@/styles/pages/travel.module.css'

export const dynamic = 'force-static'

export default function Travel() {
  const globeSectionRef = useRef<HTMLElement>(null)

  return (
    <main className={styles.container}>
      <ParticleBackground />
      
      <section ref={globeSectionRef} className={styles.globeSection}>
        <Globe />
      </section>

      <DepartureBoard />

      <section className={styles.countriesSection}>
        <CountryThumbnails />
      </section>
    </main>
  )
} 
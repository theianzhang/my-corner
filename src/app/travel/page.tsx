'use client'

import { useRef, useState, useEffect } from 'react'
import Globe from '@/components/Globe/Globe'
import CountryThumbnails from '@/components/Country/CountryThumbnails'
import DepartureBoard from '@/components/TripHighlights/DepartureBoard'
import ParticleBackground from '@/components/ParticleBackground/ParticleBackground'
import styles from '@/styles/pages/travel.module.css'

export default function Travel() {
  const globeSectionRef = useRef<HTMLElement>(null)
  const [showCarousel, setShowCarousel] = useState(false)

  return (
    <main className={styles.container}>
      <ParticleBackground />

      <section ref={globeSectionRef} className={styles.globeSection}>
        <Globe onReady={() => setShowCarousel(true)} />
      </section>

      <DepartureBoard />

      <section className={styles.countriesSection}>
        {showCarousel && <CountryThumbnails />}
      </section>
    </main>
  )
} 
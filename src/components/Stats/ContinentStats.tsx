'use client'

import styles from '@/styles/components/ContinentStats.module.css'
import CounterAnimation from './CounterAnimation'
import { travelLocations } from '@/data/travelLocations'

export default function ContinentStats() {
  return (
    <section className={styles.statsSection}>
      <h2 className={styles.statsTitle}>
        <CounterAnimation end={travelLocations.length} duration={2500} /> Countries Explored
      </h2>
    </section>
  )
} 
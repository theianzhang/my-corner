'use client'

import styles from '@/styles/components/ContinentStats.module.css'

export default function ContinentStats() {
  return (
    <section className={styles.statsSection}>
      <h2 className={styles.statsTitle}>
        <span className={styles.countNumber}>42</span> Countries Explored
      </h2>
    </section>
  )
} 
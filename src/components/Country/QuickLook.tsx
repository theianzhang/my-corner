'use client'

import styles from '@/styles/shared/country-page.module.css'

interface CountryFact {
  label: string;
  value: string | number;
}

interface QuickLookProps {
  facts: CountryFact[];
}

export default function QuickLook({ facts }: QuickLookProps) {
  return (
    <div className={styles.quickLook}>
      <h3 className={styles.quickLookTitle}>Quick Look</h3>
      <div className={styles.factGrid}>
        {facts.map((fact, index) => (
          <div key={index} className={styles.factItem}>
            <span className={styles.factLabel}>{fact.label}</span>
            <span className={styles.factValue}>{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 
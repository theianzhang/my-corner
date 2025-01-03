import GlobeWrapper from '@/components/Globe/GlobeWrapper'
import { travelLocations } from '@/data/travelLocations'
import styles from '@/styles/pages/travel.module.css'

export default function Travel() {
  const totalCountries = travelLocations.length
  const continentCounts = {
    Europe: ['france', 'germany', 'italy', 'spain', 'united-kingdom', 'ireland', 'portugal', 'netherlands', 
             'belgium', 'luxembourg', 'switzerland', 'austria', 'czech', 'hungary', 'denmark', 'norway', 
             'sweden', 'iceland', 'malta', 'vatican', 'belarus', 'russia'].length,
    Asia: ['japan', 'korea', 'china', 'vietnam', 'cambodia', 'thailand', 'india'].length,
    Americas: ['united-states', 'canada', 'mexico', 'guatemala', 'belize', 'colombia', 'peru', 
               'chile', 'argentina', 'jamaica'].length,
    Oceania: ['australia'].length,
    Africa: ['egypt', 'tanzania'].length
  }

  return (
    <main className={styles.container}>
      <section className={styles.globeSection}>
        <GlobeWrapper />
      </section>
      
      <section className={styles.statsSection}>
        <h2 className={styles.statsTitle}>
          {totalCountries} Countries Explored
        </h2>
        <div className={styles.continentGrid}>
          {Object.entries(continentCounts).map(([continent, count]) => (
            <div key={continent} className={styles.continentStat}>
              <span className={styles.continentName}>{continent}</span>
              <span className={styles.countryCount}>{count}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 
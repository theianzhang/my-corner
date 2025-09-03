import dynamic from 'next/dynamic'
import styles from './Globe.module.css'

const GlobeLoading = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.globeLoader}>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
    </div>
  </div>
)

const Globe3D = dynamic(() => import('./Globe.client'), {
  ssr: false,
  loading: GlobeLoading
})

export default function GlobeWrapper() {
  return (
    <div className={styles.globeContainer}>
      <Globe3D />
    </div>
  )
} 
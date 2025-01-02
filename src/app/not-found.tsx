import Link from 'next/link'
import styles from '@/styles/pages/not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.message}>
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <p>The specified page was not found on this website. Please check the URL for mistakes and try again.</p>
      <Link href="/" className={styles.homeLink}>
        Return Home
      </Link>
    </div>
  )
} 
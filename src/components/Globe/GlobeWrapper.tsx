'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import styles from '@/styles/components/Globe.module.css'

const Globe = dynamic(() => import('./Globe'), {
  ssr: false,
  loading: () => (
    <div className={styles.loading}>
      Loading Globe...
    </div>
  )
})

export default function GlobeWrapper() {
  return (
    <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
      <Globe />
    </Suspense>
  )
} 
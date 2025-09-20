'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/country-thumbnails.module.css'
import { travelLocations } from '@/data/travelLocations'
import { useMemo } from 'react'

const CountryThumbnails = () => {
  const sortedLocations = useMemo(() => {
    const getSlug = (url: string) => {
      const parts = url.split('/')
      return (parts[parts.length - 1] || '').toLowerCase()
    }
    return [...travelLocations].sort((a, b) => getSlug(a.url).localeCompare(getSlug(b.url)))
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollContent}>
          {/* First set of thumbnails */}
          {sortedLocations.map((country) => (
            <Link 
              href={country.url}
              key={country.id}
              className={styles.countryCard}
            >
              <div className={styles.thumbnail}>
                <Image
                  src={country.thumbnailUrl}
                  alt={`${country.name} thumbnail`}
                  width={200}
                  height={200}
                  className={styles.image}
                />
              </div>
            </Link>
          ))}
          
          
        </div>
      </div>
    </div>
  )
}

export default CountryThumbnails 
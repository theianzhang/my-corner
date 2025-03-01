'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/country-thumbnails.module.css'
import { travelLocations } from '@/data/travelLocations'

const CountryThumbnails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollContent}>
          {/* First set of thumbnails */}
          {travelLocations.map((country) => (
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
          
          {/* Duplicate set for seamless looping */}
          {travelLocations.map((country) => (
            <Link 
              href={country.url}
              key={`${country.id}-duplicate`}
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
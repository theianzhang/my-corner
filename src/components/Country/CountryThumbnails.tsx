'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/country-thumbnails.module.css'
import { travelLocations } from '@/data/travelLocations'
import { useMemo, useRef, useState, useEffect } from 'react'

const CountryThumbnails = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const sortedLocations = useMemo(() => {
    const getSlug = (url: string) => {
      const parts = url.split('/')
      return (parts[parts.length - 1] || '').toLowerCase()
    }
    return [...travelLocations].sort((a, b) => getSlug(a.url).localeCompare(getSlug(b.url)))
  }, [])

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        // If we've scrolled past the first set of items (approximate check)
        // We need to be careful about the exact width. 
        // A safer way for infinite scroll is: if (scrollLeft >= scrollWidth / 2) scrollLeft = 0

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 0.5 // Adjust speed as needed
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused])

  return (
    <div className={styles.container}>
      <div
        className={styles.scrollWrapper}
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
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

          {/* Duplicate set for infinite scroll effect */}
          {sortedLocations.map((country) => (
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
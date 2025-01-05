'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { travelLocations } from '@/data/travelLocations'
import styles from '@/styles/components/ContinentStats.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'

const CONTINENTS = [
  {
    name: 'Europe',
    count: 22,
    imagePath: '/img/travel/continents/europe-outline.png',
    countries: ['france', 'germany', 'italy', 'spain', 'united-kingdom', 'ireland', 'portugal', 'netherlands', 
               'belgium', 'luxembourg', 'switzerland', 'austria', 'czech', 'hungary', 'denmark', 'norway', 
               'sweden', 'iceland', 'malta', 'vatican', 'belarus', 'russia']
  },
  {
    name: 'Asia',
    count: 7,
    imagePath: '/img/travel/continents/asia-outline.png',
    countries: ['japan', 'korea', 'china', 'vietnam', 'cambodia', 'thailand', 'india']
  },
  {
    name: 'Americas',
    count: 10,
    imagePath: '/img/travel/continents/americas-outline.png',
    countries: ['united-states', 'canada', 'mexico', 'guatemala', 'belize', 'colombia', 'peru', 
                'chile', 'argentina', 'jamaica']
  },
  {
    name: 'Oceania',
    count: 1,
    imagePath: '/img/travel/continents/oceania-outline.png',
    countries: ['australia']
  },
  {
    name: 'Africa',
    count: 2,
    imagePath: '/img/travel/continents/africa-outline.png',
    countries: ['egypt', 'tanzania']
  }
]

export default function ContinentStats() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % CONTINENTS.length),
    onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + CONTINENTS.length) % CONTINENTS.length),
  })

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + CONTINENTS.length) % CONTINENTS.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CONTINENTS.length)
  }

  return (
    <section className={styles.statsSection} {...handlers}>
      <h2 className={styles.statsTitle}>
        {travelLocations.length} Countries Explored
      </h2>
      
      <div className={styles.carouselContainer}>
        {!isMobile && (
          <button 
            className={styles.carouselButton} 
            onClick={handlePrevious}
            aria-label="Previous continent"
          >
            ←
          </button>
        )}

        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeIndex}
            className={styles.continentImage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={CONTINENTS[activeIndex].imagePath}
              alt={CONTINENTS[activeIndex].name}
              width={200}
              height={200}
              className={styles.outlineImage}
            />
          </motion.div>
        </AnimatePresence>

        {!isMobile && (
          <button 
            className={styles.carouselButton} 
            onClick={handleNext}
            aria-label="Next continent"
          >
            →
          </button>
        )}
      </div>

      <div className={styles.carousel}>
        {CONTINENTS.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselDot} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
} 
'use client'

import { useEffect, useState, useRef } from 'react'
import styles from '@/styles/components/CounterAnimation.module.css'

interface CounterAnimationProps {
  end: number;
  duration?: number;
}

export default function CounterAnimation({ end, duration = 2000 }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [end, duration, isVisible])

  return (
    <span ref={elementRef} className={styles.counter}>
      {count}
    </span>
  )
} 
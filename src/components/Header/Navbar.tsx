'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/components/header.module.css'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.containerFluid}>
        <Link href="/" className={styles.navbarBrand}>
          <Image 
            src="/img/home/logo-black.png" 
            width={30} 
            height={30} 
            alt="Logo"
            priority
            quality={90}
          />
        </Link>
        <button 
          className={styles.navbarToggler} 
          type="button" 
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={styles.navbarTogglerIcon}></span>
        </button>
        <div className={`${styles.navbarCollapse} ${isMenuOpen ? styles.show : ''}`}>
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/travel" className={styles.navLink}>Travel</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog" className={styles.navLink}>Blog</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
} 
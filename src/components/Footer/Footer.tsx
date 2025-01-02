import Link from 'next/link'
import styles from './footer.module.css'
import Script from 'next/script'

export default function Footer() {
  return (
    <>
      <Script 
        src="https://kit.fontawesome.com/f56bb0150b.js" 
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <footer className={styles.footer}>
        <span> &copy; 2024 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Ian Zhang</span> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link href="https://www.instagram.com/theianzhang/" target="_blank">
          <i className="fa fa-instagram"></i>
        </Link> &nbsp;
        <Link href="https://www.linkedin.com/in/ianchenzhang/" target="_blank">
          <i className="fa fa-linkedin"></i>
        </Link> &nbsp;
        <Link href="https://www.medium.com/@theianzhang" target="_blank">
          <i className="fa fa-medium"></i>
        </Link>
      </footer>
    </>
  )
} 
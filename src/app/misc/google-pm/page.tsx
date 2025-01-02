import styles from './page.module.css'

export default function GooglePM() {
  return (
    <div className={styles.container}>
      <h1>Google Product Manager</h1>
      <div className={styles.content}>
        <p>
          I was a Product Manager at Google from 2018 to 2022, working on various projects including:
        </p>
        <ul>
          <li>Chrome OS</li>
          <li>Android Enterprise</li>
          <li>Google Cloud</li>
        </ul>
      </div>
    </div>
  )
} 
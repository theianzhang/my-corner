import styles from '@/styles/pages/about.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h1>Ian Zhang</h1>
        <h2>Writer, Traveler, Former PM</h2>
      </div>
      
      <div className={styles.content}>
        <p>
          Hey, thanks for visiting! 
          I'm a former <a href="/misc/google-pm" target="_blank">techie</a> currently pursuing all sorts of creative projects, traveling, and climbing mountains. I'm based out of Paris, FR but tend to travel quite a bit. I post some of my passion projects here when I have the time, as well as some of my favorite travel moments. I hope they speak to you!
        </p>
      </div>
    </div>
  )
} 
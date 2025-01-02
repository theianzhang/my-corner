import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image
          src="/img/about/profile.jpg"
          alt="Ian Zhang"
          width={200}
          height={200}
          className={styles.profileImage}
          quality={90}
        />
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
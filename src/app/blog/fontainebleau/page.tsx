import Link from 'next/link'
import styles from '@/styles/pages/blog-post.module.css'

export default function FontainebleauBlogPost() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Link href="/blog" className={styles.backLink}>← Back</Link>
        <article className={styles.article}>
          <div className={styles.header}>
            <h1>Fontainebleau</h1>
            <h5>2022</h5>
          </div>

          <div className={styles.body}>
            <p>
              Fellow grimpeurs! Howdy. I wrote this for friends looking to get sendy
              in Fontainebleau. Things change quickly out there -- old routes wear down, new beta opens up. 
              Please do your research ahead of time! At least at the time of this writing, there is a great  
              <Link href="https://www.facebook.com/groups/FontainebleauClimbingPage/"> facebook group</Link> to check
              out before you go. You can find others to climb with there or just ask questions.
            </p>
            <p>
              First things first: know that there is almost zero cell service (as of 2022) once you get into the 
              forest, so <strong>prep is key</strong>. In no particular order, here are things that might be helpful:
            </p>
            <ul>
              <li>Mentally prepare to climb 2 grades below what you would comfortably send at the gym. This 
                bruises the ego, but saves the body.
              </li>
              <li>It's literally a forest with a bunch of boulders in it. While there are "circuits," most
                people just pull up to spots they like and climb. Wander a lot. People are friendly.
              </li>
              <li>You can, and should, research routes before you go. 
                <Link href="https://bleau.info"> Bleau.info</Link> is great, and I've heard 
                <Link href="https://www.boolder.com"> Boolder </Link>
                is the new hotness. Note: I haven't personally used Boolder.
              </li>
              <li>Crash pads are <strong>sometimes</strong> available via rental companies
              near the metro station in Font. I recommend getting them before hand in Paris. I go to 
                <Link href="https://maps.app.goo.gl/erFVxNNdvP3XZEaa9"> La Haute Route</Link> near Bastille.
                They are super nice dudes and rent them for 10€/day.
              </li>
              <li>You don't need a car. You can take the RER R from 
                <Link href="https://maps.app.goo.gl/oNkwKrxL1bH8nxcA9"> Gare de Lyon</Link> to 
                Fontainebleau-Avon. Train is ~45 minutes, and then it's a nice 30 min walk into the forest. 
              </li>
              <li>It's common courtesy to not put too much chalk on the holds and to brush the holds (lightly) 
                when you're done. 
              </li>
              <li>There are some convenience stores off the station in Avon where you can grab some stuff to eat/drink
                for the day. Don't skip this.
              </li>
              <li>Bring a pair or slides or at least a brush. Moving between spots 
                barefoot will result in little rocks or mud inside of your shoes, and you'll feel it while hitting
                that aggressive slab. 
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  )
} 
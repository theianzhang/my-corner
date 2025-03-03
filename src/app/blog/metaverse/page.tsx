import Link from 'next/link'
import styles from '@/styles/pages/blog-post.module.css'

export default function MetaverseBlogPost() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <article className={styles.article}>
          <div className={styles.header}>
            <h1>The Metaverse in Retrospect</h1>
            <h5>2024</h5>
          </div>

          <div className={styles.body}>
            <p>
              I left Google's Augmented Reality team ~2 years ago. After having spent some time outside the industry, I've come to increasingly believe that:
            </p>

            <ol>
              <li>Immersive wearables (including Apple's most recent <Link href="https://www.apple.com/apple-vision-pro/" target="_blank">Vision Pro</Link>), will never reach mainstream consumer adoption.</li>
              <li>Any other non-immersive wearable that requires a user to mount something to their face (glasses, contacts) only reaches mainstream consumer adoption with a complementary device (or implant).</li>
              <li>There's a significant chance the industry skips over AR/VR wearables after decades of churn and settles instead on ambient devices, external to the human body.</li>
            </ol>

            <p>
              During my time at Google we worked hard to both enable a platform for partners and individual developers (like launching a suite of <Link href="https://www.youtube.com/watch?v=QOY1S9hYGzA" target="_blank">APIs</Link> to help developers overlay content on the real world) and to build independent applications/products that utilised the underlying platform capabilities. Our thesis was aligned with an industry-wide dive into the rabbit hole of mixed reality, where digital and physical worlds combined.
            </p>

            <p>However, since that time:</p>

            <ul>
              <li>My old team got <Link href="https://www.theverge.com/2023/6/27/23776144/google-project-iris-ar-glasses-goggles-dead-alive" target="_blank">disbanded</Link>, roughly 6 months after I left.</li>
              <li>Meta announced that it retains only 1 in 3 of its overall Quest <Link href="https://www.roadtovr.com/meta-quest-2-monthly-active-users/" target="_blank">user base</Link>, and only 1 in 10 (!!) of its overall Raybans <Link href="https://www.theverge.com/2023/8/3/23818462/meta-ray-ban-stories-smart-glasses-retention-reality-labs" target="_blank">user base.</Link></li>
            </ul>

            <p>
              One of the major internal arguments against what we were building at the time was that we were a solution in search of a problem. 2 years later I'm starting to lean in the same direction.
            </p>

            <p>
              Immersive tech is way too compelling for an ocular-dominant species to disappear completely, and I think narrow and incredibly deep use cases around gaming, education, LBE, and fitness already have, and will continue to make, a lot of people wealthy. Collaboration and industrial repair/training cases are finding soft, if uneven, landing spots on the enterprise side.
            </p>

            <p>
              But as a day to day utility device, like a smartphone, I have completely lost the mainstream convictions in MR that I had previously had.
            </p>

            <p>
              COVID changed my sentiments on this in a profound way. While it's true people flocked to VR for a brief stretch of lockdown, I exited the pandemic believing that a deep, biological desire to form real life connections and communities runs counter to immersive technology.
            </p>

            <p>
              So what will the next computing platform be if not immersive? <Link href="https://www.zdnet.com/article/what-is-ambient-computing-everything-you-need-to-know-about-the-rise-of-invisible-tech/" target="_blank">Ambient</Link>. Technology that is invisible, but embedded all around us, that predicts our needs and services them without having to lift a finger, interact with a device, or risk getting pulled off track by doom scrolling.
            </p>

            <p>
              Ambient computing was already gaining traction internally by the time I left, and I believe it'll come to dominate not just the home and devices category of technology but everything -- from railway stations to factories to gyms. Devices that exist wholly separate from the human body and enhance our experience in the real world are not just better for business, but better for the business of being human.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
} 
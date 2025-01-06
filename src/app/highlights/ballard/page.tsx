import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/shared/interior.module.css'

export default function BallardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <Image
          src="/img/art/mural.jpg"
          alt="Chinese Zodiac Mural"
          width={1200}
          height={600}
          className={styles.heroImage}
          priority
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>1st Home</h1>
          <h2>2021</h2>
          <h5>Interior Design</h5>
        </div>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <p>
          I bought a <Link href="https://www.redfin.com/WA/Seattle/917-NW-51st-St-98107/unit-B/home/173440365" target="_blank">townhome</Link> in 
          Ballard! Furnishing the place on my own became an existential experience pretty quickly. At one point I legitimately asked myself: 
          "What rug best represents me as a person?" 💀
        </p>

        <p>
          The problem was infinite choice: an endless scroll of patterns, designs, and swatches. Cue the <Link href="https://www.youtube.com/watch?v=exL51n3py6g" target="_blank">IKEA scene</Link> in 
          <em> Fight Club.</em> Eventually I found some sanity by honing in on basic interior design principles:
        </p>

        <ul>
          <li>Balance: Creating a sense of stability or equilibrium in a space, often achieved with symmetry (or deliberate asymmetry). 
              For example: a coffee table with a couch on one side and 2 chairs on the opposing side.</li>
          <li>Rhythm and Harmony: Creating a sense of repetition and contrast in a unified way. For example: selecting pale blue 
              accented pillows and echoing that same color in a rug pattern and a painting in the same space.</li>
          <li>Proportion and Scale: Selecting appropriately sized pieces both in relation to one another and in relation to the overall 
              space. For example: a couch and a dining table that observe the golden ratio in size.</li>
          <li>Emphasis: An anchor point that prevents every piece in the room from getting equal visual importance. For example: a window 
              with a beautiful view or a floor to ceiling fireplace and chimney.</li>
        </ul>

        <p>
          The principle of rhythm and harmony were the most helpful in narrowing down which pieces I wanted to search for. To unify the space I needed themes, and the two I ended up adhering to were industrial PNW and Chinese American. Ballard is an industrial neighborhood with a unique place in PNW <Link href="https://www.filson.com/blog/field-notes/history-of-ballard">history</Link>. The Coastal Salish and Duwamish were native to this land, but early Scandinavian settlers brought a maritime focus to the area with shipping and lumber mills, some of which still exist today. The boutique builders of the property echoed those industrial themes with coastal Douglas Fir wooden beams and wrought iron railings.
        </p>

        <p>
          I picked, almost exclusively, industrial shelving, media consoles, bed frames, and tables to generate that sense of unity across the entire space in a way that recognized the neighborhood the home was located in. I also tried to introduce a Chinese American emphasis piece in every room to pay homage to my roots as the owner and inhabitant of the space. The living room, where I knew I'd spend the most time, has a 10 ft mural of the story of the Chinese Zodiac, painted by a local Asian American artist <Link href="https://www.marishibuya.com/">Mari Shibuya.</Link>
        </p>

        <p>
          The piece took 7 days to complete and is an immediate visual anchor as the room naturally opens up towards that wall. The Chinese 
          Zodiac is an important story for my family: my brother (Horse) and I (Monkey) were often behaviorally described as our Zodiac 
          animals growing up, with frequent art pieces around the house that represented these animals.
        </p>

        <p>
          Lastly, I worried less about proportion/scale and didn't measure out any ratios. However, I did hone in on balance 
          by segmenting each room into halves or thirds and choosing appropriately-sized pieces. The final product is below: 
          I'm proud of the design I came up with, especially for a first try!
        </p>

        <div className={styles.videoContainer}>
          <video controls className={styles.video}>
            <source src="/img/interior_design/living_room.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
} 
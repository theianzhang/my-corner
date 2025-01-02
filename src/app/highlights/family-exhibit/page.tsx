import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

interface AudioSectionProps {
  title: string
  description: string
  audioSrc: string
}

function AudioSection({ title, description, audioSrc }: AudioSectionProps) {
  return (
    <div className={styles.audioCard}>
      <h5>{title}</h5>
      <p>{description}</p>
      <audio controls>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default function FamilyExhibitPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <Image
          src="/img/art/fam-exhibit-banner.jpg"
          alt="Family Exhibit Banner"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Asian American Guilt</h1>
          <h2>2020</h2>
          <h5>Calligraphy, Framing, Deconstruction</h5>
        </div>

        <p>
          "American Guilt" is a collection of artifacts paired with oral histories and intends to provoke questions in service 
          of our community's collective mental health. The exhibit focuses on three pivotal moments: a summer off from school, 
          coming home for Lunar New Year, and dining at the Space Needle. Each moment has two audio recordings, paired with two 
          artifacts, contrasting experiences between generations.
        </p>

        <p>
          When our parents immigrated here, they dreamed of big houses in nice suburbs, of creating every opportunity for their 
          children. After decades of tireless work and patient sacrifice, many of them realized those ambitions. We, their children, 
          are now living the very lives they had hoped to provide. Yet from a young age, we internalize a pervasive sense of guilt. 
          The food we eat is borne of our parents' famine. Our mundane, daily rituals were their formerly unimaginable luxuries.
        </p>

        <p>
          The consequences are existential. Second generation Asian Americans are more likely than their white counterparts to have 
          suicidal thoughts and attempt suicide in <Link href="https://www.apa.org/pi/oema/resources/ethnicity-health/asian-american/article-mental-health" target="_blank">college</Link>. 
          We are 3x <Link href="https://www.apa.org/pi/oema/resources/ethnicity-health/asian-american/suicide#4Kisch" target="_blank">less likely</Link> to 
          report <Link href="https://www.apa.org/pi/oema/resources/ethnicity-health/asian-american/article-mental-health" target="_blank">mental health issues</Link>. 
          As researchers start to call out the link between mental health and <Link href="https://psycnet.apa.org/record/2018-00185-001" target="_blank">guilt/shame</Link> in 
          AA communities, this exhibit encourages questions about our mental health. How do we live our lives in harmony with our 
          parents' dreams? How do we preserve unique and important intergenerational history without internalizing, and passing on, the guilt?
        </p>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <section className={styles.section}>
          <h3>A Summer Off From School</h3>
          
          <p>
            My father recounts jumping at the opportunity to help his family put food on the table as a child. In my comparison 
            piece, I recall being roughly the same age and snacking on candy from the neighborhood grocery store while smoking 
            marijuana with friends.
          </p>

          <p>
            The framing artifact is a re-constructed 扁担, or wood-carrying pole, of the same kind that my father would have used 
            at the construction site he worked at to earn extra money. He used these tools, accumulating deep bruises and cuts, 
            for an entire summer to earn the equivalent of 4 USD. The framed photo is of a small bag commonly used to exchange drugs.
          </p>

          <div className={styles.audioGrid}>
            <AudioSection
              title="Father's Story"
              description="Represented by the framing artifact"
              audioSrc="/audio/Father-Story-1.mp3"
            />
            <AudioSection
              title="Artist's Story"
              description="Represented by the framed photo"
              audioSrc="/audio/Artist-Story-1.mp3"
            />
          </div>

          <div className={styles.mediaContainer}>
            <Image
              src="/img/home/fam-exhibit.jpg"
              alt="Family Exhibit"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
        </section>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <section className={styles.section}>
          <h3>Going Home For Lunar New Year</h3>

          <p>
            My mother recounts the 25 years spent in America without celebrating LNY with her family. In my comparison piece, 
            I recall missing my parents one year and booking a trip home to see them without a second thought.
          </p>

          <p>
            The framing artifact is a 春联, or spring festival couplet, commonly hung on doorways around the time of the new year. 
            The framed photo is of a boarding pass from 2017 from Austin, TX to Seattle, WA for LNY.
          </p>

          <div className={styles.audioGrid}>
            <AudioSection
              title="Mother's Story"
              description="Represented by the framing artifact"
              audioSrc="/audio/Mother-Story-2.mp3"
            />
            <AudioSection
              title="Artist's Story"
              description="Represented by the framed photo"
              audioSrc="/audio/Artist-Story-2.mp3"
            />
          </div>

          <div className={styles.mediaContainer}>
            <Image
              src="/img/art/lunar-new-year.jpg"
              alt="Lunar New Year"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
        </section>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <section className={styles.section}>
          <h3>Dining At The Space Needle</h3>

          <p>
            My mother recounts the anxiety-inducing event of dining at the Space Needle due to financial and emotional stress. 
            In my comparison piece, I describe a casual Friday date night at the Space Needle.
          </p>

          <p>
            The framing artifact is a deconstructed Space Needle, using the three Chinese characters for "household": 一家人. 
            The framed photo is of a digital receipt confirming the "360 Sunset At the Top" booking.
          </p>

          <div className={styles.audioGrid}>
            <AudioSection
              title="Mother's Story"
              description="Represented by the framing artifact"
              audioSrc="/audio/Mother-Story-3.mp3"
            />
            <AudioSection
              title="Artist's Story"
              description="Represented by the framed photo"
              audioSrc="/audio/Artist-Story-3.mp3"
            />
          </div>

          <div className={styles.mediaContainer}>
            <Image
              src="/img/art/space-needle-dinner.jpg"
              alt="Space Needle Dinner"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
        </section>
      </div>
    </div>
  )
} 
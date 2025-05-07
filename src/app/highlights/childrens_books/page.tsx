import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/shared/interior.module.css'

export default function ChildrensBooksPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <Image
          src="/img/books/tb-look-tin-eli.webp"
          alt="Children's Book Preview"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>A Writer's Journey</h1>
          <h2>2023</h2>
          <h5>Research, Figma, Photoshop</h5>
        </div>

        <p>
          1 year ago I made the move from the States to France -- the stated goals being to live abroad, learn French, and 
          engage in this pandemic-awakening where I decided to devote myself to all the creative "what-ifs" I had up to this point in my life. These
          were all the projects that I'd started on nights and weekends, and inevitably hadn't shipped because my day job was too demanding or other
          priorities got in the way.
        </p>

        <p>
          12 months later I'm truly happy to say that my entire day is now structured around creative learning. I practice French in the mornings, 
          I workout and play guitar in the afternoons, and in the evenings I'm (usually) typing diligently away at the laptop. So far I've published 
          <Link href="https://www.thetrilinguez.com" target="_blank">3 children's books</Link>, I've drafted a 150 page magical realism, historical
          fiction novel set in China's 20th century, and I'm about to start pitching the pilot episode of a mountaineering screenplay.
        </p>

        <p>
          This is the first time in my life I've done something full time, just for me. I've been passionate about every job I've had, I've loved my teammates and my work. In my non-profit times I felt like I was doing good for the world. But there's always been a revenue target or impact metric or some broader social / corporate goal. The only standard for success I have now is when I check in with my inner child, the one who loved reading and writing and imagining and learning. Is he smiling? Is he happy? And as long as the answer is yes, I continue to do what I do. And if he's not, I stop.
        </p>

        <p>
          I'll come back to this post periodically and update it as I progress along this journey. For now, it's enough for me to say that at age 30 I decided to move to France and become a writer. And at age 31 I'm in France and I'm a writer.
        </p>
      </div>
    </div>
  )
} 
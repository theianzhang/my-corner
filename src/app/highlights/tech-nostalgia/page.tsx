import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function TechNostalgiaPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <Image
          src="/img/art/nostalgia-banner.jpg"
          alt="Tech Nostalgia Banner"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>90s / 00s Study Room</h1>
          <h2>2020</h2>
          <h5>Indoor Photography</h5>
        </div>

        <p>
          I read <Link href="https://www.nationalgeographic.com/science/2020/07/surprising-role-of-nostalgia-during-coronavirus-pandemic/#close" target="_blank">an article</Link> recently that described how nostalgia plays a key role in dealing with stress and anxiety. Essentially, when we're confronted with bad times, we tend to think of the good times. In that spirit, I took a hack at cleaning up an old room in my parents' house -- most of the items left in there have been untouched for the better part of a decade. Crazy to think how I used to use these everyday, now they're in the <Link href="https://computerhistory.org/" target="_blank">Computer Museum catalog.</Link>
        </p>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <div className={styles.carousel}>
          <div className={styles.carouselItem}>
            <Image src="/img/art/calligraphy.jpg" alt="Calligraphy" width={1200} height={800} className={styles.image} />
          </div>
          <div className={styles.carouselItem}>
            <Image src="/img/art/floppy.jpg" alt="Floppy Disk" width={1200} height={800} className={styles.image} />
          </div>
          <div className={styles.carouselItem}>
            <Image src="/img/art/pencils.jpg" alt="Pencils" width={1200} height={800} className={styles.image} />
          </div>
          <div className={styles.carouselItem}>
            <Image src="/img/art/vhs.jpg" alt="VHS" width={1200} height={800} className={styles.image} />
          </div>
          <div className={styles.carouselItem}>
            <Image src="/img/art/meade.jpg" alt="Meade" width={1200} height={800} className={styles.image} />
          </div>
        </div>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <p>
          Loved going through this old treasure chest and looking up the history of these items online. Some of the highlights I found:
        </p>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Object</th>
                <th>Highlight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1998 Gameboy Color</td>
                <td>Going for <Link href="https://www.google.com/search?q=gameboy+color+neon+green&sxsrf=ALeKk02v_fUllCY84W2JH3S4KuxarQTK6g:1597641589838&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjX9MLbvqHrAhXBl54KHaoTAhcQ_AUoAXoECA4QAw&biw=1440&bih=798" target="_blank">$100+</Link> on Google Shopping</td>
              </tr>
              <tr>
                <td>1987 1.4 MB floppy disks</td>
                <td>Released along with the PS/2 in 1987, when IBM was the dominant force in the PC market.</td>
              </tr>
              <tr>
                <td>1980 version of "On the First Day of Christmas" CBS cassette</td>
                <td>I grew up religious, and so much of the music and media I consumed as a kid had religious tones.</td>
              </tr>
              <tr>
                <td>1993 Play-doh</td>
                <td>Apparently play-doh was originally invented as a <Link href="https://en.wikipedia.org/wiki/Play-Doh" target="_blank">wallpaper cleaner</Link> in the 1930s.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 
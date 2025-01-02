import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface TravelCardProps {
  href: string;
  imgSrc: string;
  title: string;
  emoji: string;
  description: string;
}

function TravelCard({ href, imgSrc, title, emoji, description }: TravelCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <Image 
        src={imgSrc}
        alt={title}
        width={600}
        height={400}
        className={styles.cardImage}
        quality={90}
      />
      <div className={styles.cardContent}>
        <span className={styles.emoji}>{emoji}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function Travel() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Travel</h1>
        <p>A collection of stories and photos from around the world</p>
      </div>
      <div className={styles.grid}>
        <TravelCard 
          href="/travel/france"
          imgSrc="/img/travel/france.jpg"
          title="France"
          emoji="🇫🇷"
          description="Living in Paris, 2022-Present"
        />
        <TravelCard 
          href="/travel/japan"
          imgSrc="/img/travel/japan.jpg"
          title="Japan"
          emoji="🇯🇵"
          description="Tokyo, Kyoto, Osaka"
        />
        {/* Add more travel cards based on your content */}
      </div>
    </div>
  );
} 
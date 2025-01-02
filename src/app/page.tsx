import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface ProjectCardProps {
  href: string;
  imgSrc: string;
  alt: string;
}

function ProjectCard({ href, imgSrc, alt }: ProjectCardProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.container}>
        <Link href={href} className={styles.imageContainer}>
          <Image
            src={imgSrc}
            alt={alt}
            width={600}
            height={400}
            className={styles.image}
            quality={90}
          />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <ProjectCard
          href="/highlights/c1"
          imgSrc="/img/c1/cefr.jpeg"
          alt="French C1 Level"
        />
        <ProjectCard
          href="/highlights/childrens_books"
          imgSrc="/img/home/ml-autumn.png"
          alt="Children's Books"
        />
        <ProjectCard
          href="/highlights/ballard"
          imgSrc="/img/home/house-stairs.png"
          alt="Ballard Home"
        />
        <ProjectCard
          href="/highlights/tech-nostalgia"
          imgSrc="/img/home/calligraphy.jpg"
          alt="Tech Nostalgia"
        />
        <ProjectCard
          href="/highlights/travel-architect"
          imgSrc="/img/home/app-logo.png"
          alt="Travel Architect"
        />
        <ProjectCard
          href="/highlights/family-exhibit"
          imgSrc="/img/home/fam-exhibit.jpg"
          alt="Family Exhibit"
        />
      </div>
    </main>
  );
}

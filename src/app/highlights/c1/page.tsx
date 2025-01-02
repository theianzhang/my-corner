import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/shared/interior.module.css'

export default function C1Page() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <Image
          src="/img/c1/cefr.jpg"
          alt="CEFR Levels"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Compétence en Français</h1>
          <h2>2024</h2>
          <h5>Tests standardisés, mémorisation</h5>
        </div>

        <p>
          L'une des raisons pour lesquelles j'ai choisi de m'installer à Paris était que je voulais relever un défi: 
          à l'époque, je me suis dit que l'apprentissage du Français serait un défi assez difficile. Et pourtant, 
          d'une manière ou d'une autre, l'apprentissage de la langue s'est avéré encore plus difficile que je ne 
          l'imaginais. Avec le recul, le choix du Français était une idée absolumment effroyable 💀. Y'a des exceptions 
          partout, de miniscules regles que même les Français natifs connaissent pas. Premier exemple: "avant que" et 
          "après que" sont suivis du subjonctif ou de l'indicatif? Un vrai cauchemar frérot...
        </p>

        <p>
          Mais tout bien consideré, js si heureux d'avoir investi près de 2 ans. L'apprentissage d'une nouvelle langue 
          apporte tant des avantages. Il vous aide à assimiler, ptetre plus en France que dans n'importe quel autre pays 
          du monde. Il pourrait <Link href="https://www.nytimes.com/2024/01/16/well/mind/dementia-bilingual-language.html" target="_blank">ralentir</Link> la 
          progression des maladies cognitives. Il réduit les préjugés et il toujours me donne l'impression d'être un 
          citoyen plus mondiale et plus connecté. Et du moins pour moi, ça aide contre toutes les petites micro-agressions 
          que vous rencontrerez dans une grande ville comme Paris, tel les gens qui sautent la file d'attente, ou les 
          barmans qui ne vous servent pas.
        </p>

        <p>
          Quelques choses que je connaissais à un moment donné, mais que j'ai oubliées, ptetre, au fils du temps:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Y'a une méthodologie pour chaque épreuve, quelque soit le type de production: oral, écrit, compréhension, etc. 
            Sauf si vous avez maitrisé la langue au dernier degré, il est toujours difficile d'obtenir un bon résultat si 
            vous comprenez pas la méthodologie.
          </li>
          <li className={styles.listItem}>
            Personellement, j'ai besoin d'une "forcing function." Ce n'est qu'en m'inscrivant à l'examen que j'ai eu cette 
            motivation extérieure. Grâce à l'écoute de la radio française tous les matins, à la rédaction d'essais et de 
            lettres en français toutes les semaines, j'ai vraiment franchi un cap au début de cette année.
          </li>
        </ul>

        <p>
          Et maintenant que j'ai réussi "on paper," qu'est-ce que je dois faire? Apprendre la langue dans la rue...un autre 
          aventure complète. Ça y est!
        </p>

        <div className={styles.mediaContainer}>
          <Image
            src="/img/c1/c1-reussite.jpg"
            alt="C1 Success Certificate"
            width={1200}
            height={800}
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  )
} 
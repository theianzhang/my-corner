import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/shared/interior.module.css'

export default function TravelArchitectPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <Image
          src="/img/travel-architect/cherry-blossoms.png"
          alt="Cherry Blossoms"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Travel Architect</h1>
          <h2>2018</h2>
          <h5>Adobe XD, Swift, ARKit, XCode, Blender, SketchFab</h5>
        </div>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <p className={styles.update}>
          2019 Update: I did not receive approval from my employer to continue developiong this app. <br />
          2021 update: I deprecated this app in favor of working on other projects!
        </p>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <p>
          One of my favorite activities while traveling is going on a local walking tour, mostly because I get the chance 
          to check out the architecture through the eyes of a local. One of the pain points I always had, however, was that 
          I would spot an interesting construction that wasn't a part of the tour, and I would never get the opportunity to 
          learn more about it. Great design, lost to the ether! After commiserating with fellow travelers who had passing 
          interests in architecture, I thought I'd try and alleviate the problem.
        </p>

        <div className={styles.mediaContainer}>
          <Image
            src="/img/travel-architect/hand-model-1.png"
            alt="Hand Model"
            width={1200}
            height={800}
            className={styles.image}
          />
        </div>

        <div className={styles.separator}>
          <hr className={styles.styleLine} />
        </div>

        <section className={styles.section}>
          <h3>Product Framework</h3>

          <p>
            The infinity loop (borrowed from my days @ IBM) envisions product development as a continuous improvement model. 
            The end user is placed in the middle of a research and dev loop where each loop is validated with a series of 
            playbacks, or user interviews. As the sole developer, I knew it was crucial that I avoid costly dev missteps 
            likely to sink motivation.
          </p>

          <div className={styles.mediaContainer}>
            <Image
              src="/img/travel-architect/product-framework.png"
              alt="Product Framework"
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
          <div className={styles.researchHeader}>
            <Image
              src="/img/travel-architect/research-logo.png"
              alt="Research Logo"
              width={100}
              height={100}
              className={styles.researchLogo}
            />
            <h3>Personas</h3>
          </div>
        </section>

        <p>
          <strong>Conclusion:</strong> okay-ish first attempt with levers yet to pull on conversion. The key will be 
          delivering v2 with an updated CV model that can detect individual features.
        </p>
      </div>
    </div>
  )
} 
import Image from 'next/image'
import styles from '@/styles/shared/interior.module.css'

export default function TravelArchitectPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <Image
          src="/img/travel-architect/cherry-blossoms.webp"
          alt="Cherry Blossoms"
          width={1200}
          height={600}
          sizes="(max-width: 768px) 100vw, 800px"
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
            src="/img/travel-architect/hand-model-1.webp"
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
              src="/img/travel-architect/product-framework.webp"
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
              src="/img/travel-architect/research-logo.webp"
              alt="Research Logo"
              width={100}
              height={100}
              className={styles.researchLogo}
            />
            <h3>Personas</h3>
          </div>

          <p>
            I formalized my conversations with other travelers into high level personas. These could have used a much more rigorous interview process, as well as other methodologies, but observational would have been pretty creepy and literature/ESM is non-existent. I'll note up front these were mostly sourced from my personal contacts, so obvious demographic biases are present.
          </p>

          {/* Abroad Annie */}
          <div className={styles.personaSection}>
            <div className={styles.mediaContainer}>
              <Image
                src="/img/travel-architect/abroad-annie.webp"
                alt="Abroad Annie"
                width={800}
                height={400}
                className={styles.image}
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>Living her best millenial life</li>
              <li className={styles.listItem}>Saves up to travel as much as possible</li>
              <li className={styles.listItem}>Wants to learn as much as possible about the places she travels to</li>
              <li className={styles.listItem}><strong>Key Pain Point:</strong> Guided tours are expensive.</li>
            </ul>
          </div>

          {/* Business Bobby */}
          <div className={styles.personaSection}>
            <div className={styles.mediaContainer}>
              <Image
                src="/img/travel-architect/business-bobby.webp"
                alt="Business Bobby"
                width={800}
                height={400}
                className={styles.image}
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>Travels frequently for work</li>
              <li className={styles.listItem}>Enjoys taking in the local sights after meetings</li>
              <li className={styles.listItem}>Took an architecture 101 class in college</li>
              <li className={styles.listItem}><strong>Key Pain Point:</strong> Not enough time.</li>
            </ul>
          </div>

          {/* Cultured Cranston */}
          <div className={styles.personaSection}>
            <div className={styles.mediaContainer}>
              <Image
                src="/img/travel-architect/cultured-cranston.webp"
                alt="Cultured Cranston"
                width={800}
                height={400}
                className={styles.image}
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>Retired 1% er</li>
              <li className={styles.listItem}>Speaks fondly of the "South of France"</li>
              <li className={styles.listItem}>Hired an architect to customize their summer home</li>
              <li className={styles.listItem}><strong>Key Pain Point:</strong> None.</li>
            </ul>
          </div>
        </section>

        {/* Market and Competition Section */}
        <section className={styles.section}>
          <div className={styles.researchHeader}>
            <Image
              src="/img/travel-architect/research-logo.webp"
              alt="Research Logo"
              width={100}
              height={100}
              className={styles.researchLogo}
            />
            <h3>Market and Competition</h3>
          </div>

          <p>
            Validating the market for each of these personas and pain points was a fun exercise, especially since this was a passion project with no plans for monetization. The standard market analysis (TAM {'->'} SAM {'->'} Competitive Landscape {'->'} Segmentation {'->'} Strategic Differentiation {'->'} GTM) seemed slightly overkill, but I did end up putting some boundaries around each of those areas. Ultimately the insight around unit spend and mobile user behavior helped crystallize a GTM direction, so I dive deep on these below.
          </p>

          <div className={styles.mediaContainer}>
            <Image
              src="/img/travel-architect/mobile-behavior-segment-2.webp"
              alt="Mobile Behavior Segment"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <ul className={styles.list}>
            <li className={styles.listItem}>Travel applications are increasingly mobile-first</li>
            <li className={styles.listItem}>Of all mobile apps, travel-related ones have the best 3-month retention</li>
            <li className={styles.listItem}>Mobile penetration is extremely high among travelers</li>
            <li className={styles.listItem}>Most users spend 85% of their time in 5 existing mobile apps</li>
          </ul>

          <div className={styles.mediaContainer}>
            <Image
              src="/img/travel-architect/unit-spend.webp"
              alt="Unit Spend"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <ul className={styles.list}>
            <li className={styles.listItem}>DiY apps are increasingly popular and require large-scale up front curation</li>
            <li className={styles.listItem}>The average architecture guided tour lasts approximately 3 hours</li>
            <li className={styles.listItem}>Revenue/install averages less than a dollar while acquisition cost across mobile platforms is roughly 3$/customer</li>
          </ul>
        </section>

        {/* Features Table */}
        <section className={styles.section}>
          <p className={styles.textCenter}>Combining persona, market, and competitive insight led to the following high level features:</p>
          
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Feature</th>
                  <th>Priority</th>
                  <th>Insight or Pain Point</th>
                </tr>
              </thead>
              <tbody>
                {/* Add table rows here */}
              </tbody>
            </table>
          </div>
        </section>

        {/* Development Sections */}
        <section className={styles.section}>
          <div className={styles.researchHeader}>
            <Image
              src="/img/travel-architect/develop-logo.webp"
              alt="Development Logo"
              width={100}
              height={100}
              className={styles.researchLogo}
            />
            <h3>The "Architect" Problem</h3>
          </div>

          <p>
            Placing the 3D model of a representative building and learning more about its distinguishing features was a key facet to learning more about architectural styles. Knowing users were having problems reaching insight meant I needed to introduce info quicker.
          </p>

          <div className={styles.sketchfabContainer}>
            <iframe
              src="https://sketchfab.com/models/48b346ea6c3b47958faf1dd61e4007b1/embed?preload=1"
              title="Text examples"
              allow="autoplay; fullscreen; vr"
              className={styles.sketchfabEmbed}
            />
          </div>
        </section>

        {/* Analytics Section */}
        <section className={styles.section}>
          <h3 className={styles.textCenter}>GTM and Analytics</h3>
          
          <p>
            Apple really has new app release down to a science. Turnaround time was under 48 hours from cutting the release branch to going live on the store, and they provide a really robust set of analytics from day one.
          </p>

          <div className={styles.mediaContainer}>
            <Image
              src="/img/travel-architect/app-analytics-overview.webp"
              alt="App Analytics Overview"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <div className={styles.mediaContainer}>
            <Image
              src="/img/travel-architect/DAU.webp"
              alt="Daily Active Users"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
        </section>

        <p className={styles.conclusion}>
          <strong>Conclusion:</strong> okay-ish first attempt with levers yet to pull on conversion. The key will be delivering v2 with an updated CV model that can detect individual features.
        </p>
      </div>
    </div>
  )
} 
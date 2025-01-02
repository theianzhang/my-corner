import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function CC() {
  return (
    <div className={styles.container}>
      <div className={styles.licenseImage}>
        <Link 
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/cc/cc-by-nc-sa.png"
            alt="Creative Commons License"
            width={88}
            height={31}
            quality={90}
          />
        </Link>
      </div>

      <div className={styles.content}>
        <h1>Creative Commons License</h1>
        <p>
          This work is licensed under a <Link 
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
          </Link>.
        </p>

        <section className={styles.section}>
          <h2>You are free to:</h2>
          <ul>
            <li><strong>Share</strong> — copy and redistribute the material in any medium or format</li>
            <li><strong>Adapt</strong> — remix, transform, and build upon the material</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Under the following terms:</h2>
          <ul>
            <li>
              <strong>Attribution</strong> — You must give appropriate credit, provide a link to the 
              license, and indicate if changes were made. You may do so in any reasonable manner, but 
              not in any way that suggests the licensor endorses you or your use.
            </li>
            <li>
              <strong>NonCommercial</strong> — You may not use the material for commercial purposes.
            </li>
            <li>
              <strong>ShareAlike</strong> — If you remix, transform, or build upon the material, you 
              must distribute your contributions under the same license as the original.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Additional Notes:</h2>
          <ul>
            <li>
              You do not have to comply with the license for elements of the material in the public 
              domain or where your use is permitted by an applicable exception or limitation.
            </li>
            <li>
              No warranties are given. The license may not give you all of the permissions necessary 
              for your intended use. For example, other rights such as publicity, privacy, or moral 
              rights may limit how you use the material.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
} 
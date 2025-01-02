import Image from 'next/image'
import HighlightLayout from '@/components/HighlightLayout'
import styles from './page.module.css'

export default function VrEmojiProposal() {
  return (
    <HighlightLayout
      title="VR Emoji Proposal"
      year="2019"
      category="Research, Documentation"
    >
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Submission Process</h2>
          <ol className={styles.steps}>
            <li>Download the <a href="https://unicode.org/emoji/proposals.html" target="_blank" rel="noopener noreferrer">proposal template</a></li>
            <li>Fill out the template with your emoji proposal details</li>
            <li>Create sample images showing how the emoji would look</li>
            <li>Unzip the file and edit the PDF to replace the names. Rezip the file</li>
            <li>Attach the zip to an email and send it to "docsubmit@unicode.org" with the message body: "Please consider the attached documents for submission to the UTC."</li>
          </ol>
        </div>

        <div className={styles.section}>
          <h2>Research & Rationale</h2>
          <p className={styles.bodyText}>
            With the rising popularity of virtual reality and augmented reality technologies,
            there's a growing need for emojis that represent these new forms of digital interaction.
            The proposal aims to introduce VR/AR-specific emojis to better express experiences in these mediums.
          </p>
        </div>
      </div>
    </HighlightLayout>
  )
} 
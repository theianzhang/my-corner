'use client'

import styles from '@/styles/components/journal-sections.module.css'
import Image from 'next/image'

interface JournalEntryProps {
    journal?: {
        foodHighlight?: string;
        adventureHighlight?: string;
        stayHighlight?: string;
        theMoment?: string;
        culturalInsight?: string;
        localGem?: string;
        soundtrack?: string;
        travelTip?: string;
        languageCorner?: string;
    };
    countryName: string;
}

export default function JournalEntry({ journal, countryName }: JournalEntryProps) {
    if (!journal) {
        return (
            <div className={styles.placeholder}>
                <p>Journal entry coming soon for {countryName}...</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {/* The Moment Section */}
            {journal.theMoment && (
                <section className={styles.theMomentSection}>
                    <div className={styles.momentHeader}>
                        <h3 className={styles.momentTitle}>The Moment</h3>
                        <div className={styles.tooltipContainer}>
                            ?
                            <span className={styles.tooltipText}>
                                A specific moment where I'm reminded of why I love to travel and make time for it.
                            </span>
                        </div>
                    </div>
                    <p className={styles.momentContent}>"{journal.theMoment}"</p>
                </section>
            )}

            {/* Highlights Grid */}
            <div className={styles.highlightsGrid}>
                {journal.foodHighlight && (
                    <div className={styles.highlightCard}>
                        <h4 className={styles.highlightTitle}>
                            <span>🍽️</span> Food Highlight
                        </h4>
                        <p className={styles.highlightText}>{journal.foodHighlight}</p>
                    </div>
                )}

                {journal.adventureHighlight && (
                    <div className={styles.highlightCard}>
                        <h4 className={styles.highlightTitle}>
                            <span>🏔️</span> Adventure Highlight
                        </h4>
                        <p className={styles.highlightText}>{journal.adventureHighlight}</p>
                    </div>
                )}

                {journal.stayHighlight && (
                    <div className={styles.highlightCard}>
                        <h4 className={styles.highlightTitle}>
                            <span>🛏️</span> Stay Highlight
                        </h4>
                        <p className={styles.highlightText}>{journal.stayHighlight}</p>
                    </div>
                )}
            </div>

            {/* The Vibe Grid */}
            <div className={styles.vibeGrid}>
                {journal.culturalInsight && (
                    <div className={`${styles.vibeItem} ${styles.culturalInsight}`}>
                        <span className={styles.culturalLabel}>Cultural Insight: "Oh, that's new"</span>
                        <p className={styles.vibeContent}>{journal.culturalInsight}</p>
                    </div>
                )}

                {journal.localGem && (
                    <div className={styles.vibeItem}>
                        <span className={styles.vibeLabel}>Local Gem</span>
                        <p className={styles.vibeContent}>{journal.localGem}</p>
                    </div>
                )}

                {journal.soundtrack && (
                    <div className={styles.vibeItem}>
                        <span className={styles.vibeLabel}>Soundtrack</span>
                        <p className={styles.vibeContent}>{journal.soundtrack}</p>
                    </div>
                )}

                {journal.travelTip && (
                    <div className={styles.vibeItem}>
                        <span className={styles.vibeLabel}>Travel Tip</span>
                        <p className={styles.vibeContent}>{journal.travelTip}</p>
                    </div>
                )}

                {journal.languageCorner && (
                    <div className={styles.vibeItem}>
                        <span className={styles.vibeLabel}>Language Corner</span>
                        <p className={styles.vibeContent}>{journal.languageCorner}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

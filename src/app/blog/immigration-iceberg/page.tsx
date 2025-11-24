import Link from 'next/link'
import styles from '@/styles/pages/blog-post.module.css'

export default function ImmigrationIceberg() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <Link href="/blog" className={styles.backLink}>← Back</Link>
                <article className={styles.article}>
                    <div className={styles.header}>
                        <h1>The Decade Ahead: Immigration Outlook</h1>
                        <h5>2025</h5>
                    </div>

                    <div className={styles.body}>
                        <p>
                            Humans have been on the move for 70 thousand years. Migration is in our DNA.
                        </p>
                        <p>
                            From the cradle of civilization we've explored every corner of our planet,
                            forming diverse cultures and civilizations. For most of human history,
                            people passed freely from one place to another, driven by the promise of a
                            better life or adventure. Mass migrations occurred when war, famine, pestilence,
                            and other calamities forced people to leave their homes.
                        </p>
                        <p>
                            Over millennia, people clustered in like-minded communities, drawing borders
                            across maps and mountains, delineating an "us" and a "them." In the early
                            20th century, when world war consumed us, borders hardened and immigration
                            control tightened. Passports were introduced, as well as the Universal
                            Declaration of Human Rights, establishing the right to seek asylum.
                        </p>
                        <p>
                            Since the 1970s, when reliable migration statistics became available, the
                            world has seen a steady increase in the number of people who permanently
                            re-settle in a country outside of their own. Today, 3-4% of the world's
                            population moves each year, just north of 300MM people.
                        </p>
                        <p>
                            We don't all move for the same reasons. Digital nomads, citizens by investment,
                            and retirees leverage their high earnings to explore different cultures and
                            countries. Students and workers move for career mobility and the promise of
                            a better future. Refugees and asylum seekers move to escape persecution, war,
                            famine, and increasingly climate disaster.
                        </p>
                        <p>
                            At the same time, many governments are grappling with a variety of secular
                            trends. Aging populations, declining birthrates, and labor shortages are
                            leading to fears of demographic collapse or severely reduced standards of
                            living in developed countries. Political instability, war, and climate disaster
                            are displacing hundreds of millions of people globally.
                        </p>
                        <p>
                            Over the next decade, these forces will drive the emergence of what I'm calling
                            the immigration iceberg. At the visible tip are what society deems "desireable
                            immigration." These are skilled workers, students, retirees, digital nomads,
                            etc. that are perceived as bringing economic value to destination countries,
                            often plugging critical labor shortage gaps.
                        </p>
                        <p>
                            Below the visible head is a vastly larger section of immigrants, what society
                            deems "undesirable immigration." These are refugees, asylum seekers, and others
                            who often require government aid, social services, and take time to get on their
                            feet and become net tax contributors.
                        </p>
                        <p>
                            Managing this iceberg as it draws closer to shore will be the defining issue
                            facing a variety of countries over the next decade, driving politics and policy
                            in generational ways. Pretty much every government will attempt to attract the
                            tip of the iceberg. Digital nomad visas, citizenship by investment programs,
                            and skilled worker schemes will continue to proliferate with increasingly large
                            budgets / incentives dedicated to recruitment.
                        </p>
                        <p>
                            For the underside of the iceberg, a careful dance is playing out, with
                            disastrous consequences for missteps. Allowing parts of the underside to grow
                            too quickly upends the whole system, leading to social unrest and political
                            regime change. Blocking off all asylum and refugee routes leads to humanitarian
                            crises, civil unrest, and a self-reckoning of western, liberal values.
                        </p>
                        <p>
                            My predictions for 2035:
                        </p>
                        <ul>
                            <li>
                                <strong>The Fortress West:</strong> Western nations will abandon the pretense
                                of being morally superior / progressive havens. The tired, hungry, and poor
                                are no longer welcome. Faced with housing shortages, strained social services,
                                and rising ethno-nationalism, they will prioritize domestic stability over
                                international humanitarian obligations, enacting mass deportation schemes and
                                closing borders, effectively condemning refugees to their fate.
                            </li>
                            <li>
                                <strong>Global Mobility Caste System:</strong> Border security technology will
                                be deployed en masse both via pre-departure checks and on arrival. Algorithms
                                will assign you a risk score, add you to a biometric database, and machines
                                will make visa decisions before you ever step foot in another country.
                                This gives rise to a technocratic global mobility caste system.
                            </li>
                            <li>
                                <strong>Climate Visas:</strong> As climate calamities become undeniable,
                                specific visa pathways will be created for citizens of nations facing
                                existential threats (e.g., sinking island states). These will be necessary
                                legal instruments to manage displacement from uninhabitable zones. Nations
                                will give up critical resources and geo-strategic concessions in exchange for
                                climate visas for their citizens.
                            </li>
                            <li>
                                <strong>AI Over Immigration:</strong> With the "immigration lever" politically
                                broken, politicians will be forced to accelerate the adoption of AI and robotics
                                to plug labor gaps. Governments will lean into automation to solve demographic
                                decline, as importing labor becomes politically untenable.
                            </li>
                            <li>
                                <strong>The Consolidation of the Hinterland:</strong> Rural revitalization will
                                be abandoned for "managed shrinkage." Regional leaders will quietly consolidate
                                populations into larger hubs, demolishing dying towns and returning them to nature or
                                converting them into tourist attractions, realizing that federal support for sustaining
                                unviable communities is gone.
                            </li>
                            <li>
                                <strong>The "Pay-and-Go" Model:</strong> Governments will try to have it both
                                ways by introducing strict, temporary high-skilled visas (e.g., 2-year caps)
                                while dismantling pathways to permanent citizenship. The goal will be to
                                extract economic value without offering long-term settlement.
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </main>
    )
}

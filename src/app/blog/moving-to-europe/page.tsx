import Link from 'next/link'
import styles from '@/styles/pages/blog-post.module.css'

export default function MovingToEuropeBlogPost() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Link href="/blog" className={styles.backLink}>← Back</Link>
        <article className={styles.article}>
          <div className={styles.header}>
            <h1>Is Paris Always a Good Idea?</h1>
            <h5>2025</h5>
          </div>

          <div className={styles.body}>
            <p>
              My 3 year journey in Paris is coming to an end as of this writing. With the current climate of 
              the US, I've been asked more than ever whether I would recommend moving to Europe.
              I never have a good answer to this question.

              <br /><br />
              If you're <Link href="/about">like me</Link>, you might find the move worth it, but I'd 
              be remiss to not mention that my time here was an enormous privilege. 

              I quit my cushy tech job in the US during the pandemic. My savings from that job allowed me to live 
              in Paris <strong>without working</strong> for my entire stay. I got to 
              <Link href="/highlights/c1"> learn French</Link>, party, go on alpine adventures,
              and explore a good chunk of <Link href="/travel">the world</Link> without any financial pressure. 

              <br /><br />

              No wife+kids, no 9-5, plus an intense desire to create...meets the 
              city of love, a low cost of living, and one of the densest concentrations of creatives
              anywhere in the world. This was a magical combination.

              My entire day was devoted to writing <Link href="https://thetrilinguez.com">children's books</Link>,
              screenplays, and poetry. I picked up the guitar again. I filmed some 
              <Link href="/highlights/movies"> movies</Link>.
              I found in Paris an extraordinary community of artists, musicians, writers, and hustlers. 

              <br /><br />

              But I want to be real: for every expat I've seen find their groove, 2 or 3 more pack up and 
              leave with nothing but a handful of depression. 
              Europe isn't an anxiety antidote for whatever's going on in the States. 
              The <Link href="https://www.economist.com/graphic-detail/2025/02/28/hard-right-parties-are-now-europes-most-popular">far right </Link> 
              is on the rise here too, immigration is trending towards more restriction, 
              and the "fresh start" fantasy can get chewed up fast by bureaucracy, language barriers,
              and the simple fact that you're starting from scratch.

              <br /><br />

              Obviously, if you're facing genuine harm at the hands of the new government, come on over! In fact, 
              message me, and I'll do my best to introduce you to people I know and trust that could help. 
              However, if, you're feeling restless/anxious in the U.S., you should ask yourself if your day-to-day life has 
              meaningfully changed. Or maybe you're morally opposed to this government -- to the extent you're 
              considering voting with your feet.

              <br /><br />

              Can you take a massive pay cut, miss weddings and birthdays, learn a new language, 
              and completely uproot your family's life? All in the context of a political climate that is becoming 
              just as hostile to your values as it is in the U.S.?
              My hunch for most of you is that when the rubber meets the road, the answer is no.
              
              <br /><br />
       
              If you decide that is you, know the grass isn't greener in Europe. It's just a different shade. 
              The folks I've seen acually make it here didn't wait for Paris to hand them a new life —
              they built it, friend by friend, hustle by hustle. It's a years-long effort.
              Before you book that one-way ticket, know that finding your footing here will take until at 
              least the end of this administration. 
              
            </p>
            
          </div>
        </article>
      </div>
    </main>
  )
} 
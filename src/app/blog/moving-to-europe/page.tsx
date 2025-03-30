import Link from 'next/link'
import styles from '@/styles/pages/blog-post.module.css'

export default function MovingToEuropeBlogPost() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <article className={styles.article}>
          <div className={styles.header}>
            <h1>The Paris Trade-off</h1>
            <h5>2025</h5>
          </div>

          <div className={styles.body}>
            <p>
              My 3 year journey in Paris is coming to an end as of this writing. With the current climate of 
              the US, I've been asked more than ever whether I would recommend moving to Europe.
              I never have a good answer to this question.

              Because a life change like this is a series of trade-offs. 
              You leave behind X, and you adjust to Y. Neither X nor Y is correct-- 
              it's simply what fits your current situation best.

              <br /><br />
              If you're <Link href="/about">like me</Link>, you might find the journey rewarding, but I'd 
              be remiss to not mention that my 3 years here was a privileged experience. 

              I quit my cushy tech job in the US during the pandemic. My savings from that job allowed me to live 
              in Paris <strong>without working</strong> for my entire stay here. I got to 
              <Link href="/highlights/c1"> learn French</Link>, party, go on alpine adventures,
              and explore a good chunk of the world without any financial pressure. 

              <br /><br /> 
 
              Are you in the same boat? Is punting some of your career and financial goals down the road 
              worth it? Are you ok with taking a 20-50% pay cut in exchange for slower days, more vacation 
              time, and 2 hour lunch breaks? 

              When I moved here, I was in my late 20s, single-ish with no kids, 
              and was prepared to make zero dollars for an extended period of time in order to take a 
              shot at all the creative projects sitting in my mental drawer since I was a kid.

              <br /><br /> 

              No wife+kids, no 9-5, plus an intense desire to create...meets the 
              city of love, a low cost of living, and one of the densest concentrations of creatives
              anywhere in the world. I mean I basically took a creative sabbatical.

              My entire day was devoted to writing <Link href="https://thetrilinguez.com">children's books</Link>,
              screenplays, and poetry. I picked up the guitar again. 
              I found in Paris an extraordinary community of creatives, but it took me
              years of living here to find them.

              <br /><br />

              That isn't to say there aren't other magical combos out there. 
              I know plenty of well-adjusted expats from America, esp those who work in marketing or fashion
              , who love their life in Paris. I also have heard of horror stories from people who left 
              Paris with nothing but deep depression.
              
              <br /><br /> 
              
              So, yes, Paris was the right move at the right time for me. 
              Should you do the same?

              The only advice I feel qualified to give is actually in the form of a question: 
              what would "8-year-old-you" and "80-year-old-you" think if you took the plunge? 
              
            </p>
            
          </div>
        </article>
      </div>
    </main>
  )
} 
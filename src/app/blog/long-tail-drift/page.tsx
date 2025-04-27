import Link from 'next/link'
import styles from '@/styles/pages/blog-post.module.css'

export default function LongTailDriftBlogPost() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Link href="/blog" className={styles.backLink}>← Back</Link>
        <article className={styles.article}>
          <div className={styles.header}>
            <h1>Long Tail Drift</h1>
            <h5>2023</h5>
          </div>

          <div className={styles.body}>
            <p> 
                One of the biggest challenges of this phase of my life is having a good grasp of the meta of how I think.
                In a sense, is my mental framework for thinking about X issue in my life the correct one? 
                Top of mind recently is a trap I've fallen into several times, something I call the "long tail drift." 
                I'm sure there's a more academic way to describe it, but it's the idea that as we invest more time and energy 
                into a project, a lifestyle, or a habit, we become disconnected from the normal way of thinking about it.

                <br /><br />

                This seems quite innocuous on its face, but it's become a ticking time bomb for me on more
                than one occasion in recent years. 

                <br /><br />    

                A great example is my approach to fitness. I started out by recognizing during COVID 
                that my mental health was steadiest when I regularly exercised. So, like plenty of people, I 
                dove in. I joined gyms, went to workout classes, followed influencers, etc. 
                After a few years, I had friends who loved fitness. I consumed a ton of fitness content. I
                had read a ton of literature on the topic. I was in the best shape of my life. This is good, right?

                <br /><br />

                The trap though, was mental.  

                <br /><br />

                At some point, I stopped asking myself the "normal distribution" questions:

                <br /><br />
                
                Am I enjoying this?
                
                <br />
                
                Is this making my life better?
                
                <br /><br />

                And I started grading myself on a whole new, invisible rubric. 

                <br /><br />
                
                Was I disciplined enough this week?

                <br />

                Did I PR this week? 

                <br /><br />
                
                If the answer to "Am I enjoying this?" or "Is this making my life better" is "no" -- then I 
                take a break or find a new hobby. This is a normal and healthy approach to life! However, if the answer to 
                "Was I disciplined enough this week?" or "Did I PR this week?" is "no" -- then I get super deep
                into research on discipline or maximizing a particular lift. Of course, anyone who has been on this 
                hyperfixation treadmill could tell you this leads to the opposite of joy. 

                <br /><br />

                The wild part is this shift was intentional. Because all my fitness friends 
                were in the long-tail now too. The content I was consuming was in the long-tail. My framework for 
                fitness had quietly, and intentionally, rewritten itself in the background to something completely
                dis-connected from how the average, healthy person approaches it.

                <br /><br />
                
                This is the long-tail drift in a nutshell: when you stop questioning or analyzing how your framework 
                is sliding and just start running harder inside it. 

                <br /><br />

                What I'm trying to do now is to capture my original framework when I pickup a new hobby, project, 
                or lifestyle. How did I originally think about this? What were the questions I was asking myself? 
                Then, I try to bring those questions back to the forefront as I go. This helps me catch when I've
                drifted too far.

            </p>
            
          </div>
        </article>
      </div>
    </main>
  )
} 
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from '@/styles/pages/about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <main>
        {/* Hero Section */}
        <section className={styles.profile}>
          <div className={styles.profileImage}>
            {/* Replace with your actual image */}
            <Image 
              src="/img/about/avatar-expressionism.jpeg" 
              alt="Profile Photo" 
              fill 
              className={styles.image}
            />
          </div>
          <h1>Ian Zhang</h1>
          <h2>Making Great Stories</h2>
          <p>
            Hey there! I'm Ian. I worked in tech for about 8 years after graduating uni, now 
            I'm in the middle of working on every creative project I've ever imagined. 
            I'm currently based out of Paris, FR but tend to travel quite a bit. 
          </p>
          
          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="https://github.com/theianzhang" target="_blank">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/theianzhang" target="_blank">
              <FaLinkedin />
            </a>
            <a href="mailto:ianzhangsp@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </section>

        <div className={styles.content}>
          {/* Experience Section */}
          <section>
            <h2>Experience</h2>
            
            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>CEO</h3>
                <span>2022 - Present</span>
              </div>
              <h4>The Trilingue Z</h4>
              <p>
                Children's Books
              </p>
              <p>
                Short Movies
              </p>
            </div>
            
            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>Product Manager</h3>
                <span>2018 - 2022</span>
              </div>
              <h4>Google</h4>
              <p>
                Augmented Reality
              </p>
              <p>
                YouTube
              </p>
            </div>

          <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>AI Engineer</h3>
                <span>2014 - 2018</span>
              </div>
              <h4>IBM Watson</h4>
              <p>
                Worked on natural language processing algorithms.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2>Education</h2>
            
            <div className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h3>B.A. (Cum Laude) in History and Computer Science</h3>
                <span>2010 - 2014</span>
              </div>
              <h4>Duke University</h4>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2>Projects</h2>
            
            <div className={styles.projectsGrid}>

            <div className={styles.projectCard}>
                <h3>Magpie</h3>
                <p>My first short film.</p>
                <div className={styles.projectLinks}>
                  <a href="#">View Project</a>
                  <a href="#">GitHub</a>
                </div>
              </div>

              <div className={styles.projectCard}>
                <h3>LottaLingo</h3>
                <p>A platform matching advanced language learners with tutors.</p>
                <div className={styles.projectLinks}>
                  <a href="#">View Project</a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 
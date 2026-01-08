import { useState } from 'react';
import { profile } from '../data/profile';
import styles from './Hero.module.css';

export function Hero() {
  const [role, setRole] = useState<'engineer' | 'pm'>('engineer');

  const engineerText =
    'Full-stack engineer building scalable, accessible web applications with React, TypeScript, and RESTful services.';
  const pmText =
    'Scrum Master and technical leader driving sprint delivery, risk management, and cross-functional collaboration.';

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <h1>{profile.name}</h1>
        <p className={styles.headline}>{profile.headline}</p>

        <div className={styles.roleToggle}>
          <button
            className={role === 'engineer' ? styles.active : ''}
            onClick={() => setRole('engineer')}
          >
            Software Engineer
          </button>
          <button
            className={role === 'pm' ? styles.active : ''}
            onClick={() => setRole('pm')}
          >
            Scrum Master / PM
          </button>
        </div>

        <p className={styles.description}>
          {role === 'engineer' ? engineerText : pmText}
        </p>

        <div className={styles.cta}>
          <a
            href={
              role === 'engineer'
                ? '/resumes/Janai K General Resume.pdf'
                : '/resumes/Janai K Scrum Master Resume.pdf'
            }
            className={styles.primaryBtn}
            download
          >
            Download Resume
          </a>
          <a href="#projects" className={styles.secondaryBtn}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get in Touch
          </a>
        </div>

        <p className={styles.location}>📍 {profile.location}</p>
      </div>
    </section>
  );
}

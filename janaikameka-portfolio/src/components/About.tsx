import { profile } from '../data/profile';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>About</h2>
        <div className={styles.content}>
          <p>
            I'm a software engineer and scrum master passionate about building
            scalable solutions and delivering projects that matter. With
            experience across startups and Fortune 500 companies, I've worn many
            hats: from fullstack development to technical leadership and agile
            delivery.
          </p>
          <p>
            I thrive in cross-functional environments where I can contribute
            both technical expertise and leadership. I'm driven by a love of
            clean code, user-centered design, and empowering teams to do their
            best work.
          </p>
          <h3>Outside of work, you'll find me:</h3>
          <ul className={styles.interests}>
            {profile.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

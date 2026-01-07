import { profile } from '../data/profile';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Get in Touch</h2>
        <p>
          I'm always interested in new opportunities and collaborations.
          Reach out!
        </p>

        <div className={styles.buttons}>
          <a href={`mailto:${profile.email}`} className={styles.emailBtn}>
            ✉️ Send Email
          </a>
        </div>

        <div className={styles.links}>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={profile.links.articles}
            target="_blank"
            rel="noopener noreferrer"
          >
            Articles
          </a>
        </div>
      </div>
    </section>
  );
}

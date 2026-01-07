import { experience } from '../data/experience';
import styles from './Experience.module.css';

export function Experience() {
  const internships = experience.filter((exp) => exp.type === 'internship');
  const leadership = experience.filter((exp) => exp.type === 'leadership');

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2>Experience</h2>

        <div className={styles.timeline}>
          <h3 className={styles.subtitle}>Internships</h3>
          {internships.map((exp) => (
            <div key={exp.id} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <h4>{exp.title}</h4>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3 className={styles.subtitle}>Leadership</h3>
          {leadership.map((exp) => (
            <div key={exp.id} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <h4>{exp.title}</h4>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from './Hobbies.module.css';

export function Hobbies() {
  const hobbies = [
    {
      name: 'Crocheting',
      description:
        'Creating intricate clothes and blankets. The meditative process mirrors problem-solving in code.',
    },
    {
      name: 'Reading',
      description:
        'Deep dives into epic fantasy worlds and diverse characters. Fuels creativity and imagination in design thinking.',
    },
    {
      name: 'Watching Anime',
      description:
        'Appreciating storytelling, animation, and cultural narratives. Always exploring fresh perspectives.',
    },
    {
      name: 'Sewing',
      description:
        'Precision craftsmanship and attention to detail. Building things that last, one stitch at a time.',
    },
  ];

  return (
    <section id="hobbies" className={styles.hobbies}>
      <div className={styles.container}>
        <h2>Hobbies & Interests</h2>
        <p className={styles.intro}>
          Outside of code, I'm passionate about creative pursuits that feed my problem-solving spirit.
        </p>
        <div className={styles.grid}>
          {hobbies.map((hobby) => (
            <div key={hobby.name} className={styles.card}>
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

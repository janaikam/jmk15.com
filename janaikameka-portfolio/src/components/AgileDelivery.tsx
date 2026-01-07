import styles from './AgileDelivery.module.css';

export function AgileDelivery() {
  const highlights = [
    {
      title: 'Sprint Tracking',
      description:
        'Improved sprint tracking efficiency by 30%, reducing manual overhead and enhancing team velocity visibility.',
    },
    {
      title: 'Intake Automation',
      description:
        'Automated intake workflows to reduce manual data entry by 25 hours per week, enabling faster feature delivery.',
    },
    {
      title: 'Stakeholder Communication',
      description:
        'Built strong stakeholder communication practices ensuring transparency, risk visibility, and aligned expectations.',
    },
    {
      title: 'Risk Management',
      description:
        'Proactive risk tracking and mitigation strategies delivering 95% on-time project completion.',
    },
    {
      title: 'Team Leadership',
      description:
        'Led cross-functional teams of 5+ engineers, mentoring junior developers and coordinating integration efforts.',
    },
    {
      title: 'Delivery Excellence',
      description:
        'Focused on continuous improvement, delivering measurable outcomes and driving team growth.',
    },
  ];

  return (
    <section id="agile" className={styles.agile}>
      <div className={styles.container}>
        <h2>Agile Delivery & Leadership</h2>
        <p className={styles.intro}>
          Proven track record of driving successful sprints, automating processes, and leading teams to
          deliver on commitments.
        </p>
        <div className={styles.grid}>
          {highlights.map((item) => (
            <div key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

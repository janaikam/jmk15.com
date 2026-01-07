import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} Janai Kameka. All rights reserved.</p>
        <p>
          Designed and built with React, TypeScript, and Vite.
        </p>
      </div>
    </footer>
  );
}

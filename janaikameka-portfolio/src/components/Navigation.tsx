// import { profile } from '../data/profile';
import styles from './Navigation.module.css';
import headerLogoLight from '../assets/logo light.png';
import headerLogoDark from '../assets/logo dark.png';

interface NavigationProps {
  isDark: boolean;
  onToggleDark: () => void;
}

export function Navigation({ isDark, onToggleDark }: NavigationProps) {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'agile', label: 'Agile Delivery' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <img
            src={headerLogoLight}
            alt="Header Logo"
            className={`${styles.logoImage} ${styles.logoLight}`}
          />
          <img
            src={headerLogoDark}
            alt="Header Logo"
            className={`${styles.logoImage} ${styles.logoDark}`}
          />
          {/* {profile.name} */}
        </a>
        <ul className={styles.links}>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
        <button className={styles.darkToggle} onClick={onToggleDark} aria-label="Toggle dark mode">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

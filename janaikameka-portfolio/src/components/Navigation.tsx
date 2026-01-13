// import { profile } from '../data/profile';
import styles from './Navigation.module.css';
import { useState, useEffect } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Prevent background scroll when menu is open (mobile UX win)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={() => setMenuOpen(false)}>
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
        <div className={styles.controls}>
          <button className={styles.darkToggle} onClick={onToggleDark} aria-label="Toggle dark mode">
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

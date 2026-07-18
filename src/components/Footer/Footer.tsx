import styles from "./Footer.module.css";
import { site } from "../../data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copy}>
          © {year} {site.name}. Built with React, TypeScript &amp; Vite.
        </span>
        <div className={styles.links}>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href={site.x} target="_blank" rel="noopener noreferrer" className={styles.link}>
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

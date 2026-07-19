import styles from "./Footer.module.css";
import { site } from "../../data/site";
import { Reveal } from "../Reveal/Reveal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Reveal>
          <h2 className={styles.statement}>
            Interested in AI, Machine Learning or Data Science opportunities.
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <div className={styles.linkRow}>
            <a href={`mailto:${site.email}`} className={styles.link}>
              {site.email}
            </a>
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
        </Reveal>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {year} {site.name}
          </span>
          <div className={styles.bottomLinks}>
            <a href={site.resume} download className={styles.bottomLink}>
              Resume
            </a>
            <span className={styles.bottomLink}>Built with React, TypeScript &amp; Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

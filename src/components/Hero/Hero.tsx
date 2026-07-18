import { Github, Linkedin, FileDown } from "lucide-react";
import styles from "./Hero.module.css";
import { site } from "../../data/site";
import { Reveal } from "../Reveal/Reveal";

export function Hero() {
  return (
    <section id="hero" className={`container ${styles.hero}`}>
      <Reveal>
        <p className={styles.eyebrow}>{site.location}</p>
      </Reveal>
      <Reveal delay={60}>
        <h1 className={styles.name}>{site.name}</h1>
      </Reveal>
      <Reveal delay={120}>
        <p className={styles.title}>{site.title}</p>
        <p className={styles.subtitle}>{site.subtitle}</p>
      </Reveal>
      <Reveal delay={180}>
        <p className={styles.summary}>{site.summary}</p>
      </Reveal>
      <Reveal delay={240}>
        <div className={styles.actions}>
          <a href={site.resume} download className={`btn btn-primary ${styles.actionBtn}`}>
            <FileDown size={16} />
            Resume
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.actionBtn}`}
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.actionBtn}`}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}

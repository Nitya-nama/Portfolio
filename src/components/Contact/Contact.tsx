import { Github, Linkedin } from "lucide-react";
import styles from "./Contact.module.css";
import { site } from "../../data/site";
import { Reveal } from "../Reveal/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className={styles.wrap}>
            <span className="eyebrow">Contact</span>
            <h2 className={styles.title}>Let's work together</h2>
            <p className={styles.sub}>
              Currently seeking Placement Year, Data Science internship and graduate
              opportunities in the UK.
            </p>
            <a href={`mailto:${site.email}`} className={styles.email}>
              {site.email}
            </a>
            <div className={styles.actions}>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn">
                <Github size={16} />
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

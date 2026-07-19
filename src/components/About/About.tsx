import styles from "./About.module.css";
import { aboutParagraph } from "../../data/site";
import { Reveal } from "../Reveal/Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.wrap}>
          <Reveal>
            <span className={`eyebrow ${styles.label}`}>About</span>
          </Reveal>
          <Reveal delay={80}>
            <p className={styles.paragraph}>{aboutParagraph}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

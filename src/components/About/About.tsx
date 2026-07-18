import styles from "./About.module.css";
import { aboutParagraph } from "../../data/site";
import { Reveal } from "../Reveal/Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">About</span>
            <h2 className="section-title">Data-driven, production-ready</h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className={styles.paragraph}>{aboutParagraph}</p>
        </Reveal>
      </div>
    </section>
  );
}

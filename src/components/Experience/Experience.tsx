import styles from "./Experience.module.css";
import { experience } from "../../data/experience";
import { Reveal } from "../Reveal/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">Where I've worked</h2>
          </div>
        </Reveal>

        <div className={styles.list}>
          {experience.map((exp, i) => (
            <Reveal key={exp.role + exp.company} delay={i * 50}>
              <div className={styles.item}>
                <div className={styles.period}>
                  <span className={styles.numeral}>{String(i + 1).padStart(2, "0")}</span>
                  {exp.period}
                </div>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <ul className={styles.bullets}>
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className={styles.tagRow}>
                    {exp.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </p>
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cert}
                  >
                    View certificate →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

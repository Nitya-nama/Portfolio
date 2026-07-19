import styles from "./Skills.module.css";
import { skills } from "../../data/skills";
import { Reveal } from "../Reveal/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2 className="section-title">Tech stack</h2>
            <p className="section-sub">Tools and technologies I work with regularly.</p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 40} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <span key={item} className={styles.item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

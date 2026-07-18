import styles from "./About.module.css";
import { aboutParagraph, certifications } from "../../data/site";
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

        <div className={styles.grid}>
          <Reveal delay={60}>
            <p className={styles.paragraph}>{aboutParagraph}</p>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className={styles.certLabel}>Professional Certifications</p>
              <div className={styles.certGrid}>
                {certifications.map((cert) => {
                  const Tag = cert.url ? "a" : "div";
                  return (
                    <Tag
                      key={cert.title}
                      className={`card ${styles.certCard}`}
                      {...(cert.url
                        ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div className={styles.certTitle}>{cert.title}</div>
                      <div className={styles.certMeta}>
                        <span>{cert.issuer}</span>
                        <span className={cert.url ? styles.certVerify : ""}>
                          {cert.url ? "Verify →" : cert.date}
                        </span>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

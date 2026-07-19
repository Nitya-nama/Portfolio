import { Github, ExternalLink, FileText } from "lucide-react";
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import { Reveal } from "../Reveal/Reveal";
import { AbstractThumb } from "../illustrations/AbstractThumb";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Projects</span>
            <h2 className="section-title">What I've built</h2>
            <p className="section-sub">Machine learning, data analytics and AI-powered products.</p>
          </div>
        </Reveal>

        {/* Featured project */}
        <div className={styles.featured}>
          <Reveal delay={40}>
            <div>
              <p className={styles.featuredLabel}>Featured project</p>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredOverview}>{featured.detail}</p>
              <p className={styles.stackRow}>
                {featured.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
              <div className={styles.highlights}>
                {featured.highlights.map((h) => (
                  <span key={h} className={styles.highlight}>
                    {h}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.linkBtn}`}
                >
                  <Github size={14} />
                  Source
                </a>
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${styles.linkBtn}`}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {featured.article && (
                  <a
                    href={featured.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${styles.linkBtn}`}
                  >
                    <FileText size={14} />
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className={styles.featuredThumb}>
            <AbstractThumb seed={0} featured />
          </Reveal>
        </div>

        {/* Remaining projects: varied layout, not identical cards */}
        <p className={styles.subLabel}>More projects</p>

        {rest[0] && (
          <Reveal delay={40} className={styles.band}>
            <div className={styles.bandThumb}>
              <AbstractThumb seed={1} />
            </div>
            <div className={styles.bandBody}>
              <h3 className={styles.title}>{rest[0].title}</h3>
              <p className={styles.overview}>{rest[0].detail}</p>
              <p className={styles.cardStack}>
                {rest[0].stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
              <div className={styles.cardLinks}>
                <a href={rest[0].github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  Source
                </a>
                {rest[0].live && (
                  <a href={rest[0].live} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    Live Demo
                  </a>
                )}
                {rest[0].article && (
                  <a href={rest[0].article} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        )}

        <div className={styles.tileGrid}>
          {rest.slice(1).map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className={styles.tile}>
              <div className={styles.tileThumb}>
                <AbstractThumb seed={i + 2} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.overview}>{p.detail}</p>
                <p className={styles.cardStack}>
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </p>
                <div className={styles.cardLinks}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                  >
                    Source
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      Live Demo
                    </a>
                  )}
                  {p.article && (
                    <a
                      href={p.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

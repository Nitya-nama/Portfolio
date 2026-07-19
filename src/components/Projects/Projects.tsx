import { Github, ExternalLink, FileText } from "lucide-react";
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import { Reveal } from "../Reveal/Reveal";
import { ProjectVisual } from "../illustrations/ProjectVisual";

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

        {/* Featured project: text above, huge screenshot below */}
        <div className={styles.featured}>
          <Reveal delay={40}>
            <div className={styles.featuredText}>
              <p className={styles.featuredLabel}>Featured project</p>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              {featured.badge && (
                <div className={styles.badge}>
                  <span className={styles.badgeLabel}>{featured.badge.label}</span>
                  <span className={styles.badgeSub}>{featured.badge.sub}</span>
                </div>
              )}
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
          <Reveal delay={140}>
            <ProjectVisual
              image={featured.image}
              visual={featured.visual}
              title={featured.title}
              className={styles.featuredVisual}
            />
          </Reveal>
        </div>

        {/* Remaining projects: alternating image/text rows, not identical cards */}
        <p className={styles.subLabel}>More projects</p>

        {rest.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className={`${styles.row} ${i % 2 === 1 ? styles.rowReverse : ""}`}>
              <div className={styles.rowVisual}>
                <ProjectVisual image={p.image} visual={p.visual} title={p.title} />
              </div>
              <div className={styles.rowBody}>
                <h3 className={styles.title}>{p.title}</h3>
                {p.badge && (
                  <div className={styles.badge}>
                    <span className={styles.badgeLabel}>{p.badge.label}</span>
                    <span className={styles.badgeSub}>{p.badge.sub}</span>
                  </div>
                )}
                <p className={styles.overview}>{p.detail}</p>
                <p className={styles.rowStack}>
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </p>
                <div className={styles.rowLinks}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.rowLink}>
                    Source
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className={styles.rowLink}>
                      Live Demo
                    </a>
                  )}
                  {p.article && (
                    <a href={p.article} target="_blank" rel="noopener noreferrer" className={styles.rowLink}>
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

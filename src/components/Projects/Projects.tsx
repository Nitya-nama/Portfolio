import { Github, ExternalLink, FileText } from "lucide-react";
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import { Reveal } from "../Reveal/Reveal";

export function Projects() {
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

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className={`card ${styles.card}`}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.overview}>{p.overview}</p>
                <p className={styles.detail}>{p.detail}</p>

                <div className={styles.stack}>
                  {p.stack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.highlights}>
                  {p.highlights.map((h) => (
                    <span key={h} className={styles.highlight}>
                      {h}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${styles.linkBtn}`}
                  >
                    <Github size={13} />
                    Source
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${styles.linkBtn} ${styles.liveBtn}`}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                  {p.article && (
                    <a
                      href={p.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${styles.linkBtn}`}
                    >
                      <FileText size={13} />
                      Case Study
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

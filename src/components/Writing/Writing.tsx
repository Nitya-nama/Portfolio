import styles from "./Writing.module.css";
import { writing } from "../../data/writing";
import { Reveal } from "../Reveal/Reveal";

export function Writing() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Writing</span>
            <h2 className="section-title">Technical articles</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {writing.map((post, i) => (
            <Reveal key={post.title} delay={i * 50}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card ${styles.card}`}
              >
                <span className={`tag ${styles.tag}`}>{post.tag}</span>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.desc}>{post.desc}</p>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                  <span className={styles.readMore}>Read →</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

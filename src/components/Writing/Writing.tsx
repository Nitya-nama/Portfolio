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

        <div className={styles.list}>
          {writing.map((post, i) => (
            <Reveal key={post.title} delay={i * 40}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.row}
              >
                <span className={styles.tag}>{post.tag}</span>
                <div className={styles.main}>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.desc}>{post.desc}</p>
                </div>
                <span className={styles.meta}>{post.date}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

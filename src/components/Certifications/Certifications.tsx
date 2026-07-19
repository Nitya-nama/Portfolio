import { useMemo, useState } from "react";
import styles from "./Certifications.module.css";
import { certifications } from "../../data/certifications";
import { Reveal } from "../Reveal/Reveal";

const ALL = "All";

function initials(issuer: string) {
  const clean = issuer.split("·")[0].trim();
  const words = clean.split(" ").filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function Certifications() {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(certifications.map((c) => c.category)))],
    []
  );

  const [category, setCategory] = useState(ALL);
  const [visible, setVisible] = useState(true);

  const filtered = useMemo(
    () => (category === ALL ? certifications : certifications.filter((c) => c.category === category)),
    [category]
  );

  const handleSelect = (next: string) => {
    if (next === category) return;
    setVisible(false);
    window.setTimeout(() => {
      setCategory(next);
      setVisible(true);
    }, 150);
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Certifications</span>
            <h2 className="section-title">Professional Certifications</h2>
            <p className="section-sub">Continuous learning through industry-recognised credentials.</p>
          </div>
        </Reveal>

        <Reveal delay={40}>
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${category === cat ? styles.filterBtnActive : ""}`}
                onClick={() => handleSelect(cat)}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className={styles.list} style={{ opacity: visible ? 1 : 0 }}>
          {filtered.length === 0 && <p className={styles.empty}>No certifications in this category yet.</p>}

          {filtered.map((cert) => (
            <div key={cert.id} className={styles.row}>
              <div className={styles.mark}>{initials(cert.issuer)}</div>
              <div>
                <h3 className={styles.title}>{cert.title}</h3>
                <p className={styles.metaLine}>
                  <span>{cert.issuer}</span>
                  <span>{cert.category}</span>
                  <span className={cert.completed ? styles.statusCompleted : ""}>
                    {cert.date ? `${cert.status} · ${cert.date}` : cert.status}
                  </span>
                </p>
              </div>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.credentialLink}
                >
                  View Credential →
                </a>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

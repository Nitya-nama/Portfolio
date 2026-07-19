import styles from "./AbstractThumb.module.css";

interface AbstractThumbProps {
  seed?: number;
  featured?: boolean;
  className?: string;
}

/**
 * A deterministic, monochrome topographic-line placeholder standing in for
 * a future project screenshot. Seeded so each project gets a distinct but
 * consistent pattern. When `featured`, it's wrapped in a minimal browser
 * chrome so it reads as a "preview" rather than a decorative panel.
 */
export function AbstractThumb({ seed = 0, featured = false, className }: AbstractThumbProps) {
  const lineCount = featured ? 8 : 6;
  const lines = Array.from({ length: lineCount }, (_, i) => {
    const offset = (seed * 13 + i * 17) % 40;
    const amp = 14 + ((seed * 7 + i * 5) % 18);
    const y = (160 / lineCount) * i + 10;
    return `M -10 ${y} Q ${80 + offset} ${y - amp}, ${160 + offset} ${y} T ${340} ${y}`;
  });

  return (
    <div className={`${styles.thumb} ${className ?? ""}`}>
      {featured && (
        <div className={styles.chrome}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      )}
      <div className={styles.svgWrap}>
        <svg className={styles.svg} viewBox="0 0 320 160" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id={`thumb-fade-${seed}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity={featured ? 0.22 : 0.16} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
            <radialGradient id={`thumb-radial-${seed}`} cx="80%" cy="20%" r="60%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity={featured ? 0.15 : 0} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="320" height="160" fill={`url(#thumb-fade-${seed})`} />
          {featured && <rect width="320" height="160" fill={`url(#thumb-radial-${seed})`} />}
          {lines.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="var(--text-tertiary)"
              strokeWidth="1"
              opacity={0.55 - i * 0.045}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

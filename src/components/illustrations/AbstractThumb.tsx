import styles from "./AbstractThumb.module.css";

interface AbstractThumbProps {
  seed?: number;
  className?: string;
}

/**
 * A deterministic, monochrome topographic-line placeholder standing in for
 * a future project screenshot. Seeded so each project gets a distinct but
 * consistent pattern rather than a repeated stock graphic.
 */
export function AbstractThumb({ seed = 0, className }: AbstractThumbProps) {
  const lines = Array.from({ length: 6 }, (_, i) => {
    const offset = (seed * 13 + i * 17) % 40;
    const amp = 14 + ((seed * 7 + i * 5) % 18);
    const y = 20 + i * 22;
    return `M -10 ${y} Q ${80 + offset} ${y - amp}, ${160 + offset} ${y} T ${340} ${y}`;
  });

  return (
    <div className={`${styles.thumb} ${className ?? ""}`}>
      <svg className={styles.svg} viewBox="0 0 320 160" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={`thumb-fade-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="320" height="160" fill={`url(#thumb-fade-${seed})`} />
        {lines.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="var(--text-tertiary)"
            strokeWidth="1"
            opacity={0.5 - i * 0.05}
          />
        ))}
      </svg>
    </div>
  );
}

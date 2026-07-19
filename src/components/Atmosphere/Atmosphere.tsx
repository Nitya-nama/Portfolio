import styles from "./Atmosphere.module.css";
import { useParallax } from "../../hooks/useParallax";

export function Atmosphere() {
  const y = useParallax();

  return (
    <div className={styles.atmosphere} aria-hidden="true">
      <div
        className={`${styles.glow} ${styles.glowOne}`}
        style={{ translate: `0 ${y * 0.06}px` }}
      />
      <div
        className={`${styles.glow} ${styles.glowTwo}`}
        style={{ translate: `0 ${y * -0.04}px` }}
      />
      <div
        className={`${styles.glow} ${styles.glowThree}`}
        style={{ translate: `0 ${y * 0.03}px` }}
      />
      <svg className={styles.grain} width="100%" height="100%">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  );
}

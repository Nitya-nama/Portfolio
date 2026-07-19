import { useEffect, useRef, useState } from "react";
import styles from "./NeuralMesh.module.css";

/**
 * The site's signature visual: an original graph-embedding / vector-field
 * composition. Hand-placed nodes and edges (not a stock illustration),
 * layered over a few sparse flowing field-lines suggesting an embedding
 * space. Reacts very subtly to the cursor for a sense of depth, and
 * otherwise idles with slow, low-amplitude pulses.
 */
const NODES = [
  { id: "a", x: 70, y: 46, r: 3, accent: false },
  { id: "b", x: 160, y: 104, r: 5, accent: true },
  { id: "c", x: 104, y: 188, r: 2.5, accent: false },
  { id: "d", x: 244, y: 58, r: 3, accent: false },
  { id: "e", x: 300, y: 162, r: 6, accent: true },
  { id: "f", x: 208, y: 232, r: 3, accent: false },
  { id: "g", x: 372, y: 104, r: 2.5, accent: false },
  { id: "h", x: 392, y: 256, r: 4, accent: false },
  { id: "i", x: 288, y: 302, r: 2.5, accent: false },
  { id: "j", x: 36, y: 268, r: 3, accent: false },
  { id: "k", x: 436, y: 46, r: 2.5, accent: false },
  { id: "l", x: 172, y: 326, r: 3.5, accent: true },
  { id: "m", x: 30, y: 120, r: 2, accent: false },
  { id: "n", x: 340, y: 20, r: 2, accent: false },
];

const EDGES: [string, string, boolean?][] = [
  ["a", "b", false],
  ["b", "c", false],
  ["b", "d", true],
  ["d", "e", false],
  ["e", "f", false],
  ["c", "f", false],
  ["e", "g", true],
  ["g", "k", false],
  ["e", "h", false],
  ["h", "i", false],
  ["f", "i", false],
  ["c", "j", false],
  ["j", "l", false],
  ["f", "l", true],
  ["i", "l", false],
  ["a", "m", false],
  ["d", "n", false],
  ["m", "j", false],
];

const FIELD_LINES = [
  "M -20 60 C 90 10, 200 130, 320 40 S 470 90, 520 30",
  "M -20 180 C 100 220, 220 120, 340 190 S 460 260, 520 200",
  "M -20 300 C 120 250, 240 340, 360 290 S 470 250, 520 300",
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

export function NeuralMesh() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion.current || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 10, y: py * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 460 360"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="node-glow-b" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className={styles.fieldSlow}>
          <path d={FIELD_LINES[0]} className={styles.field} />
        </g>
        <g className={styles.fieldSlower}>
          <path d={FIELD_LINES[1]} className={styles.field} />
        </g>
        <g className={styles.fieldSlow}>
          <path d={FIELD_LINES[2]} className={styles.field} />
        </g>

        <g
          className={styles.group}
          style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)` }}
        >
          <g>
            {EDGES.map(([from, to, accent], i) => {
              const a = byId[from];
              const b = byId[to];
              return (
                <line
                  key={`${from}-${to}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className={`${styles.edge} ${accent ? styles.edgeAccent : ""} ${
                    i % 3 === 0 ? styles.drift : ""
                  }`}
                  strokeDasharray={i % 3 === 0 ? "2 6" : undefined}
                />
              );
            })}
          </g>

          {/* soft glow behind the two largest accent nodes for depth */}
          <circle cx={160} cy={104} r={26} fill="url(#node-glow-b)" className={styles.nodeGlow} />
          <circle cx={300} cy={162} r={30} fill="url(#node-glow-b)" className={styles.nodeGlow} />

          <g>
            {NODES.map((n, i) => (
              <circle
                key={n.id}
                cx={n.x}
                cy={n.y}
                r={n.r}
                className={`${n.accent ? styles.nodeAccent : styles.node} ${
                  i % 3 === 0 ? styles.pulse : i % 3 === 1 ? styles.pulseSlow : styles.pulseSlower
                }`}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}

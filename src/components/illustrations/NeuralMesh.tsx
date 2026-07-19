import { useEffect, useRef, useState } from "react";
import styles from "./NeuralMesh.module.css";

/**
 * The site's signature visual. An original, hand-built graph-embedding /
 * vector-field composition with three depth layers:
 *   1. a blurred, slowly drifting field of distant background nodes
 *   2. a dense foreground mesh of nodes + edges with cursor parallax
 *   3. animated data-flow particles travelling along specific edges,
 *      plus radar-style pings radiating from two "hub" nodes
 * Everything is monochrome + two restrained accents (blue, violet).
 * All motion is slow and low-amplitude, and fully disabled under
 * prefers-reduced-motion.
 */

const BG_NODES = [
  { x: 30, y: 60, r: 10 },
  { x: 420, y: 40, r: 14 },
  { x: 460, y: 260, r: 9 },
  { x: 60, y: 320, r: 12 },
  { x: 250, y: 20, r: 8 },
  { x: 200, y: 380, r: 11 },
];

const NODES = [
  { id: "a", x: 60, y: 44, r: 3, kind: "n" },
  { id: "b", x: 150, y: 100, r: 5.5, kind: "hub-accent" },
  { id: "c", x: 96, y: 182, r: 2.5, kind: "n" },
  { id: "d", x: 232, y: 56, r: 3, kind: "n" },
  { id: "e", x: 292, y: 158, r: 6.5, kind: "hub-violet" },
  { id: "f", x: 200, y: 228, r: 3, kind: "n" },
  { id: "g", x: 366, y: 100, r: 2.5, kind: "n" },
  { id: "h", x: 388, y: 250, r: 4, kind: "n" },
  { id: "i", x: 280, y: 298, r: 2.5, kind: "n" },
  { id: "j", x: 32, y: 262, r: 3, kind: "n" },
  { id: "k", x: 430, y: 42, r: 2.5, kind: "n" },
  { id: "l", x: 166, y: 320, r: 3.5, kind: "accent" },
  { id: "m", x: 26, y: 116, r: 2, kind: "n" },
  { id: "n2", x: 334, y: 18, r: 2, kind: "n" },
  { id: "o", x: 410, y: 160, r: 2.5, kind: "n" },
  { id: "p", x: 130, y: 250, r: 2, kind: "n" },
  { id: "q", x: 340, y: 340, r: 3, kind: "violet" },
  { id: "r", x: 20, y: 200, r: 2, kind: "n" },
];

const EDGES: [string, string, string?][] = [
  ["a", "b"],
  ["b", "c"],
  ["b", "d", "accent"],
  ["d", "e"],
  ["e", "f"],
  ["c", "f"],
  ["e", "g", "violet"],
  ["g", "k"],
  ["e", "h"],
  ["h", "i"],
  ["f", "i"],
  ["c", "j"],
  ["j", "l"],
  ["f", "l", "accent"],
  ["i", "l"],
  ["a", "m"],
  ["d", "n2"],
  ["m", "j"],
  ["g", "o"],
  ["o", "h"],
  ["c", "p"],
  ["p", "f"],
  ["i", "q", "violet"],
  ["j", "r"],
];

const FIELD_LINES = [
  "M -20 60 C 90 10, 200 130, 320 40 S 470 90, 520 30",
  "M -20 180 C 100 220, 220 120, 340 190 S 460 260, 520 200",
  "M -20 300 C 120 250, 240 340, 360 290 S 470 250, 520 300",
];

// Paths that data-flow particles travel along (a subset of the mesh, chosen
// for a pleasing route through the hub nodes).
const FLOW_PATHS = [
  { d: "M 60 44 L 150 100 L 232 56", accent: "accent", dur: "3.2s", delay: "0s" },
  { d: "M 292 158 L 366 100 L 430 42", accent: "violet", dur: "4s", delay: "0.6s" },
  { d: "M 96 182 L 32 262 L 166 320", accent: "accent", dur: "3.6s", delay: "1.3s" },
  { d: "M 200 228 L 166 320 L 280 298", accent: "n", dur: "4.4s", delay: "2s" },
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

function nodeClass(kind: string) {
  if (kind === "hub-accent" || kind === "accent") return styles.nodeAccent;
  if (kind === "hub-violet" || kind === "violet") return styles.nodeViolet;
  return styles.node;
}

export function NeuralMesh() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 14, y: py * 10 });
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
        viewBox="0 0 460 380"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="node-glow-accent" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="node-glow-violet" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
          </radialGradient>
          <filter id="bg-blur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Layer 1: blurred background depth field */}
        <g filter="url(#bg-blur)">
          <g className={styles.bgLayer}>
            {BG_NODES.slice(0, 3).map((n, i) => (
              <circle key={i} cx={n.x} cy={n.y} r={n.r} className={styles.bgNode} />
            ))}
          </g>
          <g className={styles.bgLayerAlt}>
            {BG_NODES.slice(3).map((n, i) => (
              <circle key={i} cx={n.x} cy={n.y} r={n.r} className={styles.bgNode} />
            ))}
          </g>
        </g>

        {/* Layer 2: vector field */}
        <g className={styles.fieldSlow}>
          <path d={FIELD_LINES[0]} className={styles.field} />
        </g>
        <g className={styles.fieldSlower}>
          <path d={FIELD_LINES[1]} className={styles.field} />
        </g>
        <g className={styles.fieldSlow}>
          <path d={FIELD_LINES[2]} className={styles.field} />
        </g>

        {/* Layer 3: radar pings from hub nodes */}
        {!reducedMotion && (
          <>
            <circle cx={150} cy={100} r={6} className={styles.ping} style={{ animationDelay: "0s" }} />
            <circle cx={150} cy={100} r={6} className={styles.ping} style={{ animationDelay: "2s" }} />
            <circle
              cx={292}
              cy={158}
              r={7}
              className={`${styles.ping} ${styles.pingViolet}`}
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx={292}
              cy={158}
              r={7}
              className={`${styles.ping} ${styles.pingViolet}`}
              style={{ animationDelay: "3s" }}
            />
          </>
        )}

        {/* Layer 4: the main mesh, with cursor parallax */}
        <g
          className={styles.group}
          style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)` }}
        >
          <g>
            {EDGES.map(([from, to, accent], i) => {
              const a = byId[from];
              const b = byId[to];
              const cls =
                accent === "accent" ? styles.edgeAccent : accent === "violet" ? styles.edgeViolet : styles.edge;
              return (
                <line
                  key={`${from}-${to}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className={`${cls} ${i % 4 === 0 ? styles.drift : ""}`}
                  strokeDasharray={i % 4 === 0 ? "2 7" : undefined}
                />
              );
            })}
          </g>

          {/* soft glow behind the two hub nodes */}
          <circle cx={150} cy={100} r={30} fill="url(#node-glow-accent)" className={styles.nodeGlow} />
          <circle cx={292} cy={158} r={34} fill="url(#node-glow-violet)" className={styles.nodeGlow} />

          <g>
            {NODES.map((n, i) => (
              <circle
                key={n.id}
                cx={n.x}
                cy={n.y}
                r={n.r}
                className={`${nodeClass(n.kind)} ${
                  i % 3 === 0 ? styles.pulse : i % 3 === 1 ? styles.pulseSlow : styles.pulseSlower
                }`}
              />
            ))}
          </g>

          {/* data-flow particles travelling along the mesh */}
          {!reducedMotion &&
            FLOW_PATHS.map((f, i) => (
              <circle
                key={i}
                r={2.3}
                className={f.accent === "violet" ? styles.particleViolet : styles.particle}
              >
                <animateMotion dur={f.dur} begin={f.delay} repeatCount="indefinite" path={f.d} />
              </circle>
            ))}
        </g>
      </svg>
    </div>
  );
}

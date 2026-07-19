import styles from "./NeuralMesh.module.css";

/**
 * Original abstract illustration: a sparse graph-embedding / neural mesh.
 * Built from a fixed set of hand-placed nodes and connecting edges so it
 * reads as "data structure" rather than generic decoration. Everything is
 * monochrome + a touch of accent, and animates only in slow, low-amplitude
 * pulses so it stays in the background of attention.
 */
const NODES = [
  { id: "a", x: 60, y: 40, r: 3, accent: false },
  { id: "b", x: 140, y: 90, r: 4, accent: true },
  { id: "c", x: 90, y: 160, r: 2.5, accent: false },
  { id: "d", x: 210, y: 50, r: 3, accent: false },
  { id: "e", x: 260, y: 140, r: 4.5, accent: true },
  { id: "f", x: 180, y: 200, r: 3, accent: false },
  { id: "g", x: 320, y: 90, r: 2.5, accent: false },
  { id: "h", x: 340, y: 220, r: 3.5, accent: false },
  { id: "i", x: 250, y: 260, r: 2.5, accent: false },
  { id: "j", x: 30, y: 230, r: 3, accent: false },
  { id: "k", x: 380, y: 40, r: 2.5, accent: false },
  { id: "l", x: 150, y: 280, r: 3, accent: true },
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
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

export function NeuralMesh() {
  return (
    <div className={styles.wrap}>
      <svg
        className={styles.svg}
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
        aria-hidden="true"
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
        <g>
          {NODES.map((n, i) => (
            <circle
              key={n.id}
              cx={n.x}
              cy={n.y}
              r={n.r}
              className={`${n.accent ? styles.nodeAccent : styles.node} ${
                i % 2 === 0 ? styles.pulse : styles.pulseSlow
              }`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

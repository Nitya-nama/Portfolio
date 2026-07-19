import { useState } from "react";
import styles from "./ProjectVisual.module.css";

interface ProjectVisualProps {
  image: string;
  visual: "dashboard" | "report" | "mobile" | "erp";
  title: string;
  className?: string;
}

/**
 * Renders a real product screenshot when one is available at `image`.
 * If it fails to load (e.g. no screenshot has been added yet), falls back
 * to a literal, purpose-built UI mockup for that project's product type —
 * a dashboard, a clinical report view, a mobile app, or an ERP table —
 * rather than an abstract pattern. Drop a PNG at the given path in
 * public/screenshots/ to have the real screenshot take over automatically.
 */
export function ProjectVisual({ image, visual, title, className }: ProjectVisualProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`${styles.frame} ${className ?? ""}`}>
      <div className={styles.chrome}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <div className={styles.body}>
        {!failed ? (
          <img
            src={image}
            alt={`${title} product screenshot`}
            className={styles.screenshot}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <MockUI variant={visual} />
        )}
      </div>
    </div>
  );
}

function MockUI({ variant }: { variant: ProjectVisualProps["visual"] }) {
  switch (variant) {
    case "dashboard":
      return <DashboardMock />;
    case "report":
      return <ReportMock />;
    case "mobile":
      return <MobileMock />;
    case "erp":
      return <ErpMock />;
  }
}

function DashboardMock() {
  return (
    <svg className={styles.mockSvg} viewBox="0 0 320 200" preserveAspectRatio="none" aria-hidden="true">
      <rect className={styles.mockBg} width="320" height="200" />
      <rect className={styles.mockPanel} x="0" y="0" width="56" height="200" />
      {[24, 44, 64, 84].map((y) => (
        <rect key={y} className={styles.mockLineFaint} x="16" y={y} width="24" height="4" rx="2" />
      ))}
      {[16, 96, 176].map((x, i) => (
        <g key={x}>
          <rect className={styles.mockPanel} x={x} y="16" width="72" height="40" rx="6" />
          <rect className={styles.mockLine} x={x + 10} y="26" width="30" height="4" rx="2" />
          <rect className={styles.mockAccentSoft} x={x + 10} y="36" width={20 + i * 8} height="4" rx="2" />
        </g>
      ))}
      <rect className={styles.mockPanel} x="16" y="70" width="288" height="114" rx="6" />
      {[100, 120, 140, 160].map((y) => (
        <line key={y} x1="30" y1={y} x2="290" y2={y} className={styles.mockStrokeMuted} />
      ))}
      <polyline
        points="30,150 60,120 90,135 120,95 150,110 180,80 210,100 240,75 270,90 290,70"
        className={styles.mockStroke}
      />
      <circle cx="240" cy="75" r="3" className={styles.mockAccent} />
    </svg>
  );
}

function ReportMock() {
  return (
    <svg className={styles.mockSvg} viewBox="0 0 320 200" preserveAspectRatio="none" aria-hidden="true">
      <rect className={styles.mockBg} width="320" height="200" />
      <rect className={styles.mockPanel} x="16" y="16" width="160" height="168" rx="6" />
      {[34, 50, 66].map((y, i) => (
        <rect
          key={y}
          className={i === 0 ? styles.mockLine : styles.mockLineFaint}
          x="30"
          y={y}
          width={i === 0 ? 90 : 120}
          height="5"
          rx="2.5"
        />
      ))}
      <line x1="30" y1="86" x2="176" y2="86" className={styles.mockStrokeMuted} />
      {[100, 116, 132, 148, 164].map((y) => (
        <rect key={y} className={styles.mockLineFaint} x="30" y={y} width="120" height="4" rx="2" />
      ))}
      <rect className={styles.mockPanel} x="192" y="16" width="112" height="80" rx="6" />
      <path d="M 248 70 A 30 30 0 1 1 279 55" className={styles.mockStroke} />
      <circle cx="279" cy="55" r="3" className={styles.mockAccent} />
      <rect className={styles.mockPanel} x="192" y="104" width="112" height="80" rx="6" />
      {Array.from({ length: 16 }, (_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const seed = (i * 37) % 100;
        return (
          <rect
            key={i}
            x={204 + col * 24}
            y={116 + row * 16}
            width="18"
            height="12"
            rx="2"
            className={styles.mockAccent}
            opacity={0.15 + (seed / 100) * 0.55}
          />
        );
      })}
    </svg>
  );
}

function MobileMock() {
  return (
    <svg className={styles.mockSvg} viewBox="0 0 320 200" preserveAspectRatio="none" aria-hidden="true">
      <rect className={styles.mockBg} width="320" height="200" />
      <rect className={styles.mockPanel} x="118" y="8" width="84" height="184" rx="14" />
      <rect className={styles.mockLineFaint} x="148" y="16" width="24" height="4" rx="2" />
      {[36, 66, 96, 126].map((y, i) => (
        <g key={y}>
          <circle cx="132" cy={y + 6} r="7" className={styles.mockAccentSoft} />
          <rect className={styles.mockLine} x="146" y={y} width={i === 0 ? 40 : 34} height="4" rx="2" />
          <rect className={styles.mockLineFaint} x="146" y={y + 8} width="26" height="3" rx="1.5" />
        </g>
      ))}
      <circle cx="160" cy="168" r="12" className={styles.mockAccent} />
      <path d="M 156 163 v 10 M 152 168 a 8 8 0 0 0 16 0" className={styles.mockStroke} strokeWidth="1.4" />
    </svg>
  );
}

function ErpMock() {
  return (
    <svg className={styles.mockSvg} viewBox="0 0 320 200" preserveAspectRatio="none" aria-hidden="true">
      <rect className={styles.mockBg} width="320" height="200" />
      <rect className={styles.mockPanel} x="0" y="0" width="320" height="28" />
      {[16, 40, 64].map((x) => (
        <rect key={x} className={styles.mockLineFaint} x={x} y="11" width="18" height="6" rx="3" />
      ))}
      <rect className={styles.mockAccentSoft} x="264" y="9" width="44" height="10" rx="5" />
      <rect className={styles.mockPanel} x="0" y="28" width="52" height="172" />
      {[46, 70, 94, 118].map((y) => (
        <rect key={y} className={styles.mockLineFaint} x="14" y={y} width="24" height="5" rx="2.5" />
      ))}
      <rect className={styles.mockPanel} x="64" y="40" width="244" height="140" rx="6" />
      <line x1="64" y1="66" x2="308" y2="66" className={styles.mockStrokeMuted} />
      {["a", "b", "c"].map((_, ci) => (
        <rect key={ci} className={styles.mockLine} x={78 + ci * 76} y="50" width="50" height="5" rx="2.5" />
      ))}
      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          {[0, 1, 2].map((col) => (
            <rect
              key={col}
              className={styles.mockLineFaint}
              x={78 + col * 76}
              y={80 + row * 24}
              width={col === 2 ? 30 : 56}
              height="5"
              rx="2.5"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export interface Project {
  title: string;
  overview: string;
  detail: string;
  stack: string[];
  highlights: string[];
  github: string;
  live: string | null;
  article: string | null;
  image: string;
  visual: "dashboard" | "report" | "mobile" | "erp";
}

export const projects: Project[] = [
  {
    title: "EcoVision",
    overview: "AI-powered economic forecasting platform.",
    detail:
      "Combines ARIMA and LSTM deep learning models to forecast economic indicators, served through a Flask REST API with an interactive dashboard — replacing slow, inconsistent manual forecasting.",
    stack: ["Python", "Flask", "ARIMA", "LSTM", "Scikit-learn", "JavaScript"],
    highlights: ["88% forecast accuracy", "40% faster predictions"],
    github: "https://github.com/Nitya-nama/ECOVISION",
    live: "https://ecovision-frontend-gold.vercel.app/",
    article: null,
    image: "/screenshots/ecovision.png",
    visual: "dashboard",
  },
  {
    title: "PharmaGuard",
    overview: "ML-driven pharmacogenomic risk prediction platform.",
    detail:
      "Parses patient .VCF genomic datasets and applies CPIC-aligned guideline logic to generate explainable, clinician-readable drug safety recommendations, helping clinicians flag patient-specific drug risks quickly.",
    stack: ["Python", "Flask", "React (Vite)", "CPIC Guidelines", "VCF Genomics"],
    highlights: ["Explainable AI output", "CPIC-aligned scoring"],
    github: "https://github.com/Chandan-N-2004/RIFT2026_AI_HUNTERS",
    live: "https://rift-2026-ai-hunters.vercel.app/",
    article: null,
    image: "/screenshots/pharmaguard.png",
    visual: "report",
  },
  {
    title: "SmartBite AI",
    overview: "Voice-based food ordering platform.",
    detail:
      "Uses speech-to-text processing to interpret natural voice commands for hands-free ordering, with secure authentication and real-time cart management.",
    stack: ["Python", "Django", "AI", "MySQL", "Razorpay"],
    highlights: ["Voice-to-order pipeline", "Real-time cart sync"],
    github: "https://github.com/Nitya-nama/SMARTBITE_AI",
    live: null,
    article: null,
    image: "/screenshots/smartbite.png",
    visual: "mobile",
  },
  {
    title: "CineRent ERP",
    overview: "Full-stack ERP for a media rental business.",
    detail:
      "JWT-based multi-role authentication managing billing, inventory and rental modules through a modularised React + Redux architecture.",
    stack: ["React", "Node.js", "Redux", "MySQL", "REST APIs"],
    highlights: ["1,000+ records managed", "35% faster workflows"],
    github: "https://github.com/Nitya-nama/Cinerent_ERP",
    live: "https://cinerent-erp.vercel.app/",
    article: "https://medium.com/@nityanama101/how-i-built-a-production-ready-erp-system-with-react-flask-b4ee7bc1d407",
    image: "/screenshots/cinerent.png",
    visual: "erp",
  },
];

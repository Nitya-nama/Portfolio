import { useState, useEffect, useRef } from "react";

/* ─── DATA ────────────────────────────────────────────── */
const NAV = ["About","Projects","Skills","Experience","Articles","Contact"];
const NAV_HREF = { About:"about", Projects:"projects", Skills:"skills", Experience:"experience", Articles:"blog", Contact:"contact" };

const PROJECTS = [
  { icon:"🧬", title:"PharmaGuard", desc:"Problem: clinicians lack a fast way to flag patient-specific drug safety risks from raw genetic data. Solution: an ML-driven pharmacogenomic risk prediction platform that parses patient .VCF genomic datasets and applies CPIC-aligned guideline logic to generate explainable, clinician-readable drug safety recommendations. Key features: automated VCF parsing, rule-based + ML risk scoring, explainable-AI output. Tech stack: Python, Flask, React (Vite). Deployment: Vercel + Flask API.", tags:["Python","Machine Learning","Flask","React (Vite)","CPIC Guidelines","VCF Genomics","Explainable AI","Vercel"], github:"https://github.com/Chandan-N-2004/RIFT2026_AI_HUNTERS", live:"https://rift-2026-ai-hunters.vercel.app/" },
  { icon:"🎬", title:"CineRent ERP", desc:"Problem: a media rental business needed a single system to manage billing, inventory and rentals with role-based access. Solution: a full-stack ERP with JWT-based multi-role authentication managing 1,000+ records across billing, inventory and rental modules, cutting manual workflow time by 35% through a modularised React + Redux architecture. Tech stack: React, Node.js, Redux, MySQL, REST APIs. Deployment: Vercel.", tags:["React","Node.js","SQL","Redux","JWT Auth","REST APIs","Data Modelling"], github:"https://github.com/Nitya-nama/Cinerent_ERP", live:"https://cinerent-erp.vercel.app/" },
  { icon:"🧠", title:"Emotion Detection AI", desc:"Problem: customer support tools need to understand emotional tone in text at scale. Solution: a transformer-based NLP emotion classification model fine-tuned on Hugging Face BERT, achieving 92% classification accuracy, with an optimised inference pipeline that cut API latency to under 250ms via Flask backend caching. Dataset: labelled text-emotion corpus. Tech stack: Python, Flask, Hugging Face Transformers, BERT, NLP, REST APIs.", tags:["Python","NLP","Deep Learning","BERT","Hugging Face","Flask","REST APIs"], github:"https://github.com/Nitya-nama/Emotion-detection", live:null },
  { icon:"📈", title:"EcoVision", desc:"Problem: forecasting economic indicators manually is slow and error-prone. Solution: an AI-enhanced time-series forecasting application combining ARIMA and LSTM deep learning models to reach 88% forecast accuracy, exposed via a Flask REST API with an interactive dashboard, cutting prediction turnaround by 40% through targeted feature engineering. Tech stack: Python, Flask, ARIMA, LSTM, Scikit-learn, JavaScript. Deployment: Vercel + Flask API.", tags:["Python","Time-Series Forecasting","ARIMA","LSTM","Deep Learning","Scikit-learn","Flask","Data Visualisation"], github:"https://github.com/Nitya-nama/ECOVISION", live:"https://ecovision-frontend-gold.vercel.app/" },
  { icon:"🍽️",title:"SMARTBITE AI",desc:"Problem: ordering food hands-free needed reliable natural-language voice understanding. Solution: an AI-powered voice-based food ordering platform using speech-to-text processing to interpret natural voice commands, with secure authentication, real-time cart management and Razorpay payment integration. Tech stack: Python, Django, MySQL, AI speech-to-text, Razorpay API.",tags:["Python","Django","AI","NLP","MySQL","REST APIs","Razorpay"],github:"https://github.com/Nitya-nama/SMARTBITE_AI",live:null},
  { icon:"🏠",title:"Real Estate Pool",desc:"Problem: buyers, sellers and investors lacked one centralised place to discover and manage property listings. Solution: a collaborative real estate marketplace with property listings, advanced search and filtering, and user management, streamlining property discovery through a clean, modern interface. Tech stack: Python, Django, MySQL, HTML/CSS, JavaScript.",tags:["Python","Django","SQL","Data Analysis","HTML/CSS","JavaScript"],github:"https://github.com/HackHunters2025/Real_Estate_Pool",live:null},
];

const SKILLS = [
  { cat: "Programming", icon: "💻", items: [["Python", 92], ["SQL", 88], ["Java", 78], ["JavaScript", 82]] },
  { cat: "Machine Learning", icon: "🧠", items: [["Scikit-Learn", 90], ["TensorFlow", 84], ["PyTorch", 80], ["XGBoost", 82]] },
  { cat: "Data Analytics", icon: "📊", items: [["Power BI", 85], ["Pandas", 92], ["NumPy", 90], ["Excel", 88]] },
  { cat: "Visualization", icon: "📈", items: [["Power BI", 85], ["Matplotlib", 86], ["Plotly", 80], ["Seaborn", 82]] },
  { cat: "Backend", icon: "🌐", items: [["Flask", 85], ["FastAPI", 78], ["REST APIs", 88]] },
  { cat: "Databases", icon: "🗄️", items: [["PostgreSQL", 82], ["MySQL", 86], ["MongoDB", 76]] },
  { cat: "Tools", icon: "🛠️", items: [["Git", 90], ["GitHub", 90], ["Docker", 74], ["Linux", 78]] },
  { cat: "Cloud", icon: "☁️", items: [["Azure (Learning)", 55]] },
];

const EXP = [
  { period:"Jan — May 2026", role:"Data Science Intern", co:"QSpiders (A UNIT OF TEST YANTRA SOFTWARE SOLUTIONS LTD.), Bengaluru",
    bullets:["Performed exploratory data analysis (EDA) and data cleaning on structured datasets to surface trends and prepare data for modelling.","Built and evaluated machine learning models in Python using Scikit-learn, applying feature engineering to improve model performance.","Created data visualisations to communicate model evaluation results and analytical findings to technical and non-technical stakeholders."],
    tags:["Python","EDA","Data Cleaning","Machine Learning","Feature Engineering","Scikit-Learn","Data Visualisation","Model Evaluation"], cert:"https://github.com/Nitya-nama/Certificates/blob/main/PYSPIDERS.pdf" },
  { period:"Feb – Mar 2025", role:"AI/ML Intern", co:"Happy Inbox",
    bullets:["Engineered supervised machine learning models on 20,000+ user interaction logs using Scikit-learn, achieving a 65% improvement in recommendation accuracy.","Built automated data preprocessing and feature engineering pipelines with Pandas and NumPy, reducing model training time by 40%.","Ran reproducible experiments for model evaluation and performance optimisation, documenting results for team review."],
    tags:["Python","Machine Learning","Scikit-learn","Pandas","NumPy","Feature Engineering"], cert:"https://github.com/Nitya-nama/Certificates/blob/main/happyinbox.png" },
  { period:"Mar – Apr 2025", role:"Data Analyst Associate", co:"Excelerate",
    bullets:["Built interactive data dashboards in Power BI and Looker Studio, improving reporting visibility by 35% for business stakeholders.","Wrote and optimised complex SQL queries and normalised data models in MySQL, reducing report generation time by 40%.","Applied statistical trend analysis across departments to support data-driven stakeholder decision-making."],
    tags:["Power BI","SQL","Data Analysis","MySQL","Looker Studio","Business Intelligence"], cert:"https://github.com/Nitya-nama/Certificates/blob/main/Excelerate.png" },
];

const ROLES = ["Aspiring Data Scientist","Machine Learning Engineer","Data Analyst","Business Intelligence Analyst","AI Engineer"];

const CERTS = [
  { title:"Microsoft Power BI Professional Certificate", issuer:"Microsoft", status:"In Progress" },
  { title:"Placeholder — Future Certification", issuer:"—", status:"Planned" },
  { title:"Placeholder — Future Certification", issuer:"—", status:"Planned" },
];

const BLOG = [
  {
    tag: "Case Study",
    title: "How I Built a Production-Ready ERP System with React & Flask",
    desc: "A complete breakdown of the architecture, authentication, database design, and deployment process behind CineRent ERP.",
    date: "Jun 2026",
    read: "8 min read",
    url: "https://medium.com/@nityanama101/how-i-built-a-production-ready-erp-system-with-react-flask-b4ee7bc1d407"
  },

  {
    tag: "Data Science",
    title: "What Processing 20,000+ Records Taught Me About Machine Learning",
    desc: "Lessons learned from feature engineering, data cleaning, model evaluation, and working with real-world datasets.",
    date: "May 2026",
    read: "7 min read",
    url: "https://medium.com/@nityanama101/what-processing-20-000-records-taught-me-about-machine-learning-8c1f3c8c44de"
  },

  {
    tag: "AI Engineering",
    title: "Why Every AI Engineer Should Understand RAG",
    desc: "Understanding Retrieval-Augmented Generation, vector databases, embeddings, and modern AI system design.",
    date: "Apr 2026",
    read: "9 min read",
    url: "https://medium.com/@nityanama101/why-every-ai-engineer-should-understand-rag-52b8ff9a56fd"
  },

  {
    tag: "Data Analytics",
    title: "5 SQL Techniques That Instantly Improved My Data Analysis Skills",
    desc: "Real-world SQL concepts that helped me write faster, cleaner, and more efficient analytical queries.",
    date: "Mar 2026",
    read: "6 min read",
    url: "https://medium.com/@nityanama101/5-sql-techniques-that-instantly-improved-my-data-analysis-skills-90eb8ede6155"
  },
];

/* ─── HOOKS ───────────────────────────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}

function useTypewriter(words, typeMs = 55, pauseMs = 1400, deleteMs = 30) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    let timeout;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeMs);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteMs);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setI(n => n + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, typeMs, pauseMs, deleteMs]);
  return text;
}

function useMobile(threshold = 768) {
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const check = () => setMob(window.innerWidth < threshold);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [threshold]);
  return mob;
}

/* ─── TOKENS ──────────────────────────────────────────── */
function tok(dark) {
  if (dark) return {
    dark:true, bg:"#0a0a0f", bgCard:"#111118", bgCard2:"#16161f",
    border:"rgba(255,255,255,0.08)", borderH:"rgba(6,182,212,0.5)",
    text:"#ffffff", sub:"rgba(255,255,255,0.6)", dim:"rgba(255,255,255,0.35)", dimmer:"rgba(255,255,255,0.2)",
    acc:"#06b6d4", accD:"rgba(6,182,212,0.12)", accDH:"rgba(6,182,212,0.2)",
    barGrad:"linear-gradient(90deg,#06b6d4,#9333ea)", barBg:"rgba(255,255,255,0.06)",
    tagBg:"rgba(6,182,212,0.1)", tagBord:"rgba(6,182,212,0.25)",
  };
  return {
    dark:false, bg:"#ffffff", bgCard:"#f8f8fc", bgCard2:"#f0f0f8",
    border:"rgba(0,0,0,0.08)", borderH:"rgba(6,182,212,0.5)",
    text:"#0a0a0f", sub:"rgba(10,10,15,0.6)", dim:"rgba(10,10,15,0.38)", dimmer:"rgba(10,10,15,0.2)",
    acc:"#0891b2", accD:"rgba(8,145,178,0.08)", accDH:"rgba(8,145,178,0.14)",
    barGrad:"linear-gradient(90deg,#0891b2,#7c3aed)", barBg:"rgba(0,0,0,0.06)",
    tagBg:"rgba(8,145,178,0.08)", tagBord:"rgba(8,145,178,0.25)",
  };
}

/* ─── SMALL COMPONENTS ────────────────────────────────── */
const mono = "'JetBrains Mono','Fira Mono',monospace";
const sans = "'Geist','Inter','SF Pro Display',system-ui,sans-serif";

function Tag({ label, c }) {
  return (
    <span style={{ display:"inline-block", padding:"3px 10px", background:c.tagBg, border:`1px solid ${c.tagBord}`, borderRadius:4, fontFamily:mono, fontSize:11, color:c.acc, marginRight:5, marginBottom:5 }}>
      {label}
    </span>
  );
}

function SkillBar({ name, pct, delay, c }) {
  const [ref, v] = useInView(0.05);
  return (
    <div ref={ref} style={{ marginBottom:20 }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
        <span style={{ fontFamily:mono, fontSize:13, color:c.sub }}>{name}</span>
        <span style={{ fontFamily:mono, fontSize:12, color:c.dim }}>{pct}%</span>
      </div>
      <div style={{ height:3, background:c.barBg, borderRadius:2, overflow:"hidden" }}>
        <div style={{ height:"100%", width:v?`${pct}%`:"0%", background:c.barGrad, borderRadius:2, transition:`width 1.1s cubic-bezier(.4,0,.2,1) ${delay}ms` }} />
      </div>
    </div>
  );
}

function FadeUp({ children, delay = 0 }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{ opacity:v?1:0, transform:v?"translateY(0)":"translateY(24px)", transition:`opacity 0.65s ease ${delay}ms,transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHeader({ label, title, sub }) {
  return (
    <div style={{ textAlign:"center", marginBottom:52 }}>
      <p style={{ fontFamily:mono, fontSize:12, color:"inherit", marginBottom:12, letterSpacing:"0.06em", opacity:0.7 }}>// {label}</p>
      <h2 style={{ fontFamily:sans, fontWeight:700, fontSize:"clamp(26px,4vw,48px)", marginBottom:12, letterSpacing:"-0.025em", lineHeight:1.1 }}>
        {title}
      </h2>
      {sub && <p style={{ fontFamily:sans, fontSize:15, opacity:0.6, maxWidth:480, margin:"0 auto", lineHeight:1.7 }}>{sub}</p>}
    </div>
  );
}

/* ─── APP ─────────────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mob = useMobile();
  const navCompact = useMobile(1040);
  const typed = useTypewriter(ROLES);

  useEffect(() => { const s = localStorage.getItem("ny-theme"); if (s) setDark(s==="dark"); }, []);
  const toggle = () => setDark(d => { const n=!d; localStorage.setItem("ny-theme",n?"dark":"light"); return n; });

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const c = tok(dark);
  const goTo = id => { document.querySelector(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };

  const px = mob ? "20px" : "48px";
  const SEC = { padding: mob ? "64px 0" : "96px 0", borderTop:`1px solid ${c.border}` };
  const WRAP = { maxWidth:1100, margin:"0 auto", padding:`0 ${px}` };

  const navBg = scrolled
    ? (dark ? "rgba(10,10,15,0.95)" : "rgba(255,255,255,0.95)")
    : (menuOpen ? (dark ? "#0a0a0f" : "#ffffff") : "transparent");

  return (
    <div style={{ background:c.bg, color:c.text, minHeight:"100vh", overflowX:"hidden", transition:"background 0.25s,color 0.25s" }}>

      {/* grid bg */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`linear-gradient(${dark?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.03)"} 1px,transparent 1px),linear-gradient(90deg,${dark?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.03)"} 1px,transparent 1px)`,
        backgroundSize:"80px 80px" }} />

      {/* top glow */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:"60vh", zIndex:0, pointerEvents:"none",
        background: dark?"radial-gradient(ellipse 70% 40% at 50% 0%,rgba(6,182,212,0.12) 0%,transparent 70%)":"radial-gradient(ellipse 70% 40% at 50% 0%,rgba(6,182,212,0.06) 0%,transparent 70%)" }} />

      {/* ══ NAV ══ */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:300,
        height:60, display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:`0 ${px}`,
        background: navBg,
        backdropFilter: scrolled?"blur(20px)":"none",
        WebkitBackdropFilter: scrolled?"blur(20px)":"none",
        borderBottom: scrolled?`1px solid ${c.border}`:"none",
        transition:"background 0.3s",
      }}>
        <button onClick={() => goTo("#hero")} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:mono, fontWeight:700, fontSize:15, color:c.acc, padding:0 }}>
          nityanama
        </button>

        {/* Desktop nav */}
        {!navCompact && (
          <div style={{ display:"flex", alignItems:"center", gap:24 }}>
            {NAV.map(n => (
              <button key={n} onClick={() => goTo(`#${NAV_HREF[n]}`)}
                style={{ background:"none", border:"none", cursor:"pointer", fontFamily:sans, fontSize:14, color:c.sub, transition:"color 0.15s", padding:0 }}
                onMouseEnter={e => e.currentTarget.style.color=c.text}
                onMouseLeave={e => e.currentTarget.style.color=c.sub}>
                {n}
              </button>
            ))}
            <button onClick={toggle} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:mono, fontSize:12, color:c.dim, padding:0, transition:"color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color=c.acc}
              onMouseLeave={e => e.currentTarget.style.color=c.dim}>
              {dark ? "☀ light" : "☾ dark"}
            </button>
            <a href="nitya_resume.pdf" download style={{ fontFamily:sans, fontSize:13, fontWeight:600, color:"#fff", background:c.acc, padding:"7px 20px", borderRadius:6, textDecoration:"none", transition:"opacity 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.opacity="0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity="1"}>
              Resume ↓
            </a>
          </div>
        )}

        {/* Mobile: theme + hamburger */}
        {navCompact && (
          <div style={{ display:"flex", alignItems:"center", gap:16 }}>
            <button onClick={toggle} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:mono, fontSize:12, color:c.dim, padding:0 }}>
              {dark ? "☀" : "☾"}
            </button>
            <button onClick={() => setMenuOpen(o => !o)}
              style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex", flexDirection:"column", gap:5 }}>
              <span style={{ display:"block", width:22, height:1.5, background:c.text, borderRadius:2, transition:"transform 0.2s,opacity 0.2s", transform:menuOpen?"translateY(6.5px) rotate(45deg)":"none" }} />
              <span style={{ display:"block", width:22, height:1.5, background:c.text, borderRadius:2, opacity:menuOpen?0:1, transition:"opacity 0.2s" }} />
              <span style={{ display:"block", width:22, height:1.5, background:c.text, borderRadius:2, transition:"transform 0.2s,opacity 0.2s", transform:menuOpen?"translateY(-6.5px) rotate(-45deg)":"none" }} />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile slide-down menu */}
      {navCompact && (
        <div style={{
          position:"fixed", top:60, left:0, right:0, zIndex:299,
          background: dark?"#0a0a0f":"#ffffff",
          borderBottom:`1px solid ${c.border}`,
          padding: menuOpen?"24px 20px":"0 20px",
          maxHeight: menuOpen?"400px":"0",
          overflow:"hidden",
          transition:"max-height 0.3s ease, padding 0.3s ease",
        }}>
          {NAV.map(n => (
            <button key={n} onClick={() => goTo(`#${NAV_HREF[n]}`)}
              style={{ display:"block", width:"100%", textAlign:"left", background:"none", border:"none", cursor:"pointer", fontFamily:sans, fontSize:16, color:c.sub, padding:"12px 0", borderBottom:`1px solid ${c.border}` }}>
              {n}
            </button>
          ))}
          <a href="nitya_resume.pdf" download style={{ display:"block", marginTop:16, fontFamily:sans, fontSize:14, fontWeight:600, color:"#fff", background:c.acc, padding:"10px 20px", borderRadius:6, textDecoration:"none", textAlign:"center" }}>
            Resume ↓
          </a>
        </div>
      )}

      {/* ══ HERO ══ */}
      <section id="hero" style={{
        position:"relative", minHeight:"100vh",
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        padding: mob ? "120px 20px 80px" : "120px 48px 80px",
        textAlign:"center",
      }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:28, border:"1px solid rgba(34,197,94,0.35)", borderRadius:20, padding:"6px 16px", background:"rgba(34,197,94,0.08)" }}>
          <span style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", animation:"pulse 2s ease infinite" }} />
          <span style={{ fontFamily:mono, fontSize:11, color:"#22c55e", letterSpacing:"0.03em" }}>Open to UK Internships &amp; Placement Year 2026/27</span>
        </div>

        <h1 style={{
          fontFamily:sans, fontWeight:700,
          fontSize: mob ? "clamp(42px,12vw,64px)" : "clamp(52px,8vw,96px)",
          letterSpacing:"-0.04em", lineHeight:1.0, marginBottom:20,
          background:"linear-gradient(135deg,#00e5ff 0%, #00bfff 35%, #4f8cff 65%, #9b5cff 100%)",
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
        }}>
          Nitya Nama
        </h1>

        <p style={{ fontFamily:mono, fontSize:13, color:c.dim, marginBottom:6, letterSpacing:"0.04em" }}>@nitya_nama</p>

        <p style={{ fontFamily:sans, fontSize: mob?"14px":"clamp(14px,1.6vw,18px)", color:c.text, fontWeight:600, marginBottom:14, lineHeight:1.5, maxWidth:560 }}>
          MSc Data Science with Machine Learning Student at the University of Hertfordshire
        </p>

        <p style={{ fontFamily:mono, fontSize: mob?"14px":"clamp(14px,1.6vw,18px)", color:c.acc, marginBottom:20, letterSpacing:"0.02em", minHeight:"1.4em" }}>
          {typed}<span style={{ color:c.acc, animation:"blink 1.1s step-end infinite" }}>|</span>
        </p>

        <p style={{ fontFamily:mono, fontSize: mob?"13px":"clamp(13px,1.3vw,16px)", color:c.sub, maxWidth:560, lineHeight:1.9, marginBottom:40 }}>
          Focused on Python, Machine Learning, Deep Learning, SQL, and Power BI, with hands-on
          experience in Data Analytics, Computer Vision, Natural Language Processing and AI.
          Looking to bring data-driven problem solving to a UK Data Science, Machine Learning
          or Business Intelligence team.
        </p>

        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", marginBottom:36 }}>
          <button onClick={() => goTo("#projects")}
            style={{ fontFamily:sans, fontSize:14, fontWeight:600, color:"#fff", background:"linear-gradient(135deg,#06b6d4,#0891b2)", border:"none", padding: mob?"11px 24px":"12px 32px", borderRadius:6, cursor:"pointer", transition:"opacity 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.opacity="0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity="1"}>
            View Projects
          </button>
          <button onClick={() => goTo("#contact")}
            style={{ fontFamily:sans, fontSize:14, color:c.sub, background:"transparent", border:`1px solid ${c.border}`, padding: mob?"11px 24px":"12px 32px", borderRadius:6, cursor:"pointer", transition:"border-color 0.15s,color 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=c.borderH; e.currentTarget.style.color=c.text; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor=c.border; e.currentTarget.style.color=c.sub; }}>
            Get in Touch
          </button>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" style={SEC}>
        <div style={WRAP}>
          <FadeUp>
            <div style={{ color:c.acc }}>
              <SectionHeader label="about" title="Data-Driven, Ready to Deploy" sub="From exploratory analysis to production ML systems." />
            </div>
          </FadeUp>

          <div style={{ display:"grid", gridTemplateColumns: mob?"1fr":"minmax(240px,360px) 1fr", gap: mob?32: "clamp(24px,4vw,64px)", alignItems:"start" }}>
            {/* Photo + terminal */}
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <FadeUp delay={60}>
                <div style={{ width:"100%", aspectRatio:"1/1", overflow:"hidden", border:`1px solid ${c.border}`, borderRadius:12 }}>
                  <img src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&h=600&fit=crop&crop=center" alt="Nitya Nama"
                    style={{ width:"100%", height:"100%", objectFit:"cover", filter:dark?"brightness(0.85)":"none" }} />
                </div>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ border:`1px solid ${c.border}`, borderRadius:12, background:c.bgCard, overflow:"hidden" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:7, padding:"10px 16px", borderBottom:`1px solid ${c.border}`, background:dark?"rgba(6,182,212,0.05)":"rgba(8,145,178,0.04)" }}>
                    <span style={{ width:10, height:10, borderRadius:"50%", background:"#ef4444" }} />
                    <span style={{ width:10, height:10, borderRadius:"50%", background:"#f59e0b" }} />
                    <span style={{ width:10, height:10, borderRadius:"50%", background:"#22c55e" }} />
                    <span style={{ fontFamily:mono, fontSize:10, color:c.dim, marginLeft:8 }}>terminal</span>
                  </div>
                  <div style={{ padding:"18px 20px 22px", fontFamily:mono, fontSize:12, lineHeight:2.0 }}>
                    {[
                      {cmd:"who_am_i",out:["nitya_nama"]},
                      {cmd:"cat skills.txt",out:["python, sql, power bi,","scikit-learn, tensorflow,","pandas, ml, deep learning"]},
                      {cmd:"echo $STATUS",out:["msc data science w/ ml @ herts"]},
                      {cmd:"echo $LOCATION",out:["bengaluru, india"]},
                    ].map(({cmd,out}) => (
                      <div key={cmd} style={{ marginBottom:4 }}>
                        <div><span style={{ color:c.acc }}>$ </span><span style={{ color:c.text }}>{cmd}</span></div>
                        {out.map((o,i) => <div key={i} style={{ color:c.dim, paddingLeft:14 }}>&gt; {o}</div>)}
                      </div>
                    ))}
                    <div><span style={{ color:c.acc }}>$ </span><span style={{ color:c.dim, animation:"blink 1.1s step-end infinite" }}>_</span></div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Bio + stats + certs */}
            <div>
              <FadeUp delay={80}>
                <p style={{ fontFamily:sans, fontSize:15, color:c.sub, lineHeight:1.85, marginBottom:18 }}>
                  I'm Nitya — an MSc Data Science with Machine Learning student at the University of Hertfordshire, building scalable ML systems with Python, SQL and Power BI, trained on real-world datasets of 20,000+ records.
                </p>
                <p style={{ fontFamily:sans, fontSize:14, color:c.dim, lineHeight:1.85, marginBottom:40 }}>
                  I specialise in the full Data Science workflow: exploratory data analysis, feature engineering and machine learning model training, through to Power BI dashboards and production-ready Flask/REST APIs. I'm currently looking for UK internships, placement year opportunities and graduate roles in Data Science, Machine Learning and AI Engineering.
                </p>
              </FadeUp>

              <FadeUp delay={140}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", border:`1px solid ${c.border}`, borderRadius:12, marginBottom:36, overflow:"hidden" }}>
                  {[
                    {v:"20K+",l:"Records Processed",s:"ML pipeline · Internships"},
                    {v:"3+",l:"Live Deployments",s:"Production · Vercel"},
                  ].map((s,i) => (
                    <div key={s.l} style={{ padding: mob?"16px 14px":"22px 20px", borderRight:i%2===0?`1px solid ${c.border}`:"none", borderBottom:i<2?`1px solid ${c.border}`:"none", background:c.bgCard }}>
                      <div style={{ fontFamily:sans, fontSize: mob?22:26, fontWeight:700, color:c.acc, marginBottom:4 }}>{s.v}</div>
                      <div style={{ fontFamily:sans, fontSize:12, fontWeight:600, color:c.text, marginBottom:3 }}>{s.l}</div>
                      <div style={{ fontFamily:mono, fontSize:10, color:c.dim }}>{s.s}</div>
                    </div>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={180}>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:36 }}>
                  <span style={{ fontFamily:sans, fontSize:12, color:"#22c55e", border:"1px solid rgba(34,197,94,0.3)", padding:"5px 12px", borderRadius:20, background:"rgba(34,197,94,0.07)" }}>● Open to Opportunities</span>
                  <span style={{ fontFamily:sans, fontSize:12, color:c.sub, border:`1px solid ${c.border}`, padding:"5px 12px", borderRadius:20 }}>📍 Bengaluru, India</span>
                </div>
                <p style={{ fontFamily:mono, fontSize:10, color:c.acc, letterSpacing:"0.12em", marginBottom:14, textTransform:"uppercase" }}>Credentials</p>
                <div style={{ display:"grid", gridTemplateColumns: mob?"1fr":"1fr 1fr", gap:10 }}>
                  {[
                    {title:"AI/ML Engineering Professional",issuer:"Microsoft",date:"Dec 2025",url:"https://github.com/Nitya-nama/Certificates/blob/main/MICROSOFT_AI_ML.jpeg"},
                    {title:"Machine Learning Specialization",issuer:"Stanford · Coursera",date:"Jul 2025",url:"https://github.com/Nitya-nama/Certificates/blob/main/STANFORD_ML.jpeg"},
                    {title:"Generative AI",issuer:"Google Cloud",date:"Feb 2025",url:"https://github.com/Nitya-nama/Certificates/blob/main/GOOGLEGENAI.png"},
                    {title:"Python for Data Science",issuer:"Skill India Digital",date:"Mar 2025",url:"https://github.com/Nitya-nama/Certificates/blob/main/skill-india.pdf"},
                  ].map(cert => (
                    <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer"
                      style={{ padding:"14px 16px", background:c.bgCard, textDecoration:"none", border:`1px solid ${c.border}`, borderRadius:8, transition:"border-color 0.15s,background 0.15s", display:"block" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor=c.borderH; e.currentTarget.style.background=c.accD; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor=c.border; e.currentTarget.style.background=c.bgCard; }}>
                      <div style={{ fontFamily:sans, fontSize:12, fontWeight:600, color:c.text, marginBottom:3, lineHeight:1.4 }}>{cert.title}</div>
                      <div style={{ fontFamily:mono, fontSize:10, color:c.dim, marginBottom:8 }}>{cert.issuer}</div>
                      <div style={{ display:"flex", justifyContent:"space-between" }}>
                        <span style={{ fontFamily:mono, fontSize:10, color:c.sub }}>{cert.date}</span>
                        <span style={{ fontFamily:mono, fontSize:10, color:c.acc }}>verify →</span>
                      </div>
                    </a>
                  ))}
                </div>

                <p style={{ fontFamily:mono, fontSize:10, color:c.acc, letterSpacing:"0.12em", marginTop:28, marginBottom:14, textTransform:"uppercase" }}>Professional Certifications</p>
                <div style={{ display:"grid", gridTemplateColumns: mob?"1fr":"1fr 1fr", gap:10 }}>
                  {CERTS.map(cert => (
                    <div key={cert.title}
                      style={{ padding:"14px 16px", background:c.bgCard, border:`1px solid ${c.border}`, borderRadius:8, opacity: cert.status==="Planned" ? 0.55 : 1 }}>
                      <div style={{ fontFamily:sans, fontSize:12, fontWeight:600, color:c.text, marginBottom:3, lineHeight:1.4 }}>{cert.title}</div>
                      <div style={{ fontFamily:mono, fontSize:10, color:c.dim, marginBottom:8 }}>{cert.issuer}</div>
                      <span style={{ fontFamily:mono, fontSize:10, color:cert.status==="In Progress"?c.acc:c.dim, border:`1px solid ${cert.status==="In Progress"?c.tagBord:c.border}`, padding:"2px 8px", borderRadius:10, background: cert.status==="In Progress"?c.tagBg:"transparent" }}>{cert.status}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" style={SEC}>
        <div style={WRAP}>
          <FadeUp>
            <div style={{ color:c.acc }}>
              <SectionHeader label="projects" title="What I've Built" sub="Machine learning, data analytics and AI-powered products." />
            </div>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns: mob?"1fr": "repeat(auto-fit,minmax(300px,1fr))", gap:16 }}>
            {PROJECTS.map((p, i) => {
              const [ref, v] = useInView(0.06);
              const [h, setH] = useState(false);
              return (
                <div key={p.title+i} ref={ref}
                  onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
                  style={{ padding:"24px", background:h?c.accD:c.bgCard, border:`1px solid ${h?c.borderH:c.border}`, borderRadius:12, opacity:v?1:0, transform:v?"translateY(0)":"translateY(20px)", transition:"opacity 0.55s ease,transform 0.55s ease,background 0.15s,border-color 0.15s" }}>
                  <div style={{ fontSize:28, marginBottom:14, lineHeight:1 }}>{p.icon}</div>
                  <h3 style={{ fontFamily:sans, fontSize:16, fontWeight:600, color:c.text, marginBottom:10 }}>{p.title}</h3>
                  <p style={{ fontFamily:sans, fontSize:13, color:c.sub, lineHeight:1.75, marginBottom:18 }}>{p.desc}</p>
                  <div style={{ flexWrap:"wrap", display:"flex", marginBottom:18 }}>
                    {p.tags.map(t => <Tag key={t} label={t} c={c} />)}
                  </div>
                  <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily:mono, fontSize:11, color:c.sub, border:`1px solid ${c.border}`, padding:"6px 14px", borderRadius:4, textDecoration:"none", transition:"color 0.15s,border-color 0.15s" }}
                      onMouseEnter={e => { e.currentTarget.style.color=c.acc; e.currentTarget.style.borderColor=c.borderH; }}
                      onMouseLeave={e => { e.currentTarget.style.color=c.sub; e.currentTarget.style.borderColor=c.border; }}>
                      GitHub →
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily:mono, fontSize:11, color:c.acc, border:`1px solid ${c.borderH}`, padding:"6px 14px", borderRadius:4, textDecoration:"none", background:c.accD, transition:"background 0.15s" }}
                        onMouseEnter={e => e.currentTarget.style.background=c.accDH}
                        onMouseLeave={e => e.currentTarget.style.background=c.accD}>
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" style={SEC}>
        <div style={WRAP}>
          <FadeUp>
            <div style={{ color:c.acc }}>
              <SectionHeader label="skills" title="Tech Stack" sub="The tools and technologies I work with daily." />
            </div>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns: mob?"1fr":"repeat(auto-fit,minmax(240px,1fr))", gap:16 }}>
            {SKILLS.map((cat, ci) => (
              <FadeUp key={cat.cat} delay={ci*80}>
                <div style={{ padding:"28px", background:c.bgCard, border:`1px solid ${c.border}`, borderRadius:12 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:28 }}>
                    <span style={{ fontSize:22 }}>{cat.icon}</span>
                    <h3 style={{ fontFamily:sans, fontWeight:600, fontSize:16, color:c.text, margin:0 }}>{cat.cat}</h3>
                  </div>
                  {cat.items.map(([name,pct],i) => (
                    <SkillBar key={name} name={name} pct={pct} delay={i*90+ci*40} c={c} />
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE ══ */}
      <section id="experience" style={SEC}>
        <div style={WRAP}>
          <FadeUp>
            <div style={{ color:c.acc }}>
              <SectionHeader label="experience" title="Where I've Worked" sub="From data cleaning and EDA to ML models and BI dashboards." />
            </div>
          </FadeUp>

          {mob ? (
            /* Mobile: simple vertical stack */
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {EXP.map((exp, i) => {
                const [ref, v] = useInView(0.06);
                return (
                  <div key={exp.role+i} ref={ref} style={{ opacity:v?1:0, transform:v?"translateY(0)":"translateY(20px)", transition:`opacity 0.6s ease ${i*80}ms,transform 0.6s ease ${i*80}ms` }}>
                    <ExpCard exp={exp} c={c} sans={sans} mono={mono} />
                  </div>
                );
              })}
            </div>
          ) : (
            /* Desktop: alternating timeline */
            <div style={{ position:"relative" }}>
              <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:1, background:`linear-gradient(to bottom,transparent,${c.acc},transparent)`, transform:"translateX(-50%)" }} />
              {EXP.map((exp, i) => {
                const [ref, v] = useInView(0.06);
                const isRight = i % 2 === 1;
                return (
                  <div key={exp.role+i} ref={ref}
                    style={{ display:"grid", gridTemplateColumns:"1fr 80px 1fr", marginBottom:52, opacity:v?1:0, transform:v?"translateY(0)":"translateY(20px)", transition:`opacity 0.6s ease ${i*80}ms,transform 0.6s ease ${i*80}ms` }}>
                    <div style={{ display:"flex", justifyContent:"flex-end", paddingRight:32, paddingTop:4 }}>
                      {!isRight
                        ? <ExpCard exp={exp} c={c} sans={sans} mono={mono} />
                        : <span style={{ fontFamily:mono, fontSize:11, color:c.dim, paddingTop:10, textAlign:"right", display:"block" }}>{exp.period}</span>}
                    </div>
                    <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"center", paddingTop:16 }}>
                      <div style={{ width:14, height:14, borderRadius:"50%", background:c.acc, border:`3px solid ${c.bg}`, boxShadow:`0 0 0 1px ${c.acc},0 0 12px ${c.acc}44`, flexShrink:0 }} />
                    </div>
                    <div style={{ display:"flex", justifyContent:"flex-start", paddingLeft:32, paddingTop:4 }}>
                      {isRight
                        ? <ExpCard exp={exp} c={c} sans={sans} mono={mono} />
                        : <span style={{ fontFamily:mono, fontSize:11, color:c.dim, paddingTop:10 }}>{exp.period}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ══ BLOG ══ */}
      <section id="blog" style={SEC}>
        <div style={WRAP}>
          <FadeUp>
            <div style={{ color:c.acc }}>
              <SectionHeader label="articles" title="Technical Articles" sub="Writing on data science, machine learning, and ML systems." />
            </div>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns: mob?"1fr":"1fr 1fr", gap:16 }}>
            {BLOG.map((post, i) => {
              const [ref, v] = useInView(0.06);
              const [h, setH] = useState(false);
              return (
                <div key={post.title} ref={ref}
                  onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
                  style={{ padding:"24px", cursor:"pointer", background:h?c.accD:c.bgCard, border:`1px solid ${h?c.borderH:c.border}`, borderRadius:12, opacity:v?1:0, transform:v?"translateY(0)":"translateY(18px)", transition:"opacity 0.55s ease,transform 0.55s ease,background 0.15s,border-color 0.15s" }}>
                  <div style={{ marginBottom:14 }}>
                    <span style={{ fontFamily:mono, fontSize:10, color:c.acc, border:`1px solid ${c.tagBord}`, padding:"3px 10px", borderRadius:4, background:c.tagBg }}>{post.tag}</span>
                  </div>
                  <h3 style={{ fontFamily:sans, fontSize:15, fontWeight:600, color:c.text, marginBottom:10, lineHeight:1.4 }}>{post.title}</h3>
                  <p style={{ fontFamily:sans, fontSize:13, color:c.sub, lineHeight:1.75, marginBottom:20 }}>{post.desc}</p>
                  <div
                    style={{
                      display:"flex",
                      justifyContent:"space-between",
                      alignItems:"center"
                    }}
                  >
                    <span
                      style={{
                        fontFamily:mono,
                        fontSize:11,
                        color:c.dim
                      }}
                    >
                      {post.date}
                    </span>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily:mono,
                        fontSize:11,
                        color:c.acc,
                        textDecoration:"none"
                      }}
                    >
                      View Article →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ ...SEC, paddingBottom:100, textAlign:"center" }}>
        <div style={{ ...WRAP, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <FadeUp>
            <div style={{ color:c.acc }}>
              <SectionHeader label="contact" title="Let's Build Something" sub="Currently seeking Placement Year, Data Science Internship, Machine Learning Internship, Graduate Data Analyst and Business Intelligence Analyst roles in the UK." />
            </div>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", justifyContent:"center", marginBottom:32 }}>
              {["Placement Year","Data Science Internship","Machine Learning Internship","Graduate Data Analyst","Business Intelligence Analyst"].map(role => (
                <span key={role} style={{ fontFamily:mono, fontSize:11, color:c.acc, border:`1px solid ${c.tagBord}`, padding:"5px 12px", borderRadius:20, background:c.tagBg }}>{role}</span>
              ))}
            </div>
            <a href="mailto:nityanama101@gmail.com"
              style={{ fontFamily:mono, fontSize: mob?"15px":"clamp(14px,2vw,20px)", color:c.acc, textDecoration:"none", display:"inline-block", borderBottom:`1px solid ${c.acc}`, paddingBottom:6, marginBottom:40, transition:"opacity 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.opacity="0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity="1"}>
              nityanama101@gmail.com
            </a>
            <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
              {[{l:"GitHub",h:"https://github.com/Nitya-nama"},{l:"LinkedIn",h:"https://www.linkedin.com/in/nitya-nama/"},{l:"X",h:"https://x.com/nitya_nama"}].map(s => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily:sans, fontSize:14, color:c.sub, textDecoration:"none", border:`1px solid ${c.border}`, padding:"10px 28px", borderRadius:6, transition:"color 0.15s,border-color 0.15s,background 0.15s" }}
                  onMouseEnter={e => { e.currentTarget.style.color=c.acc; e.currentTarget.style.borderColor=c.borderH; e.currentTarget.style.background=c.accD; }}
                  onMouseLeave={e => { e.currentTarget.style.color=c.sub; e.currentTarget.style.borderColor=c.border; e.currentTarget.style.background="transparent"; }}>
                  {s.l}
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ padding: mob?"20px":"24px 48px", borderTop:`1px solid ${c.border}` }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:`0 ${px}`, display:"flex", flexDirection: mob?"column":"row", gap: mob?8:0, justifyContent:"space-between", alignItems:"center", textAlign: mob?"center":"left" }}>
          <span style={{ fontFamily:mono, fontSize:11, color:c.dim }}>© 2026 Nitya Nama. All rights reserved.</span>
          <div style={{ display:"flex", gap:20 }}>
            {[{l:"GitHub",h:"https://github.com/Nitya-nama"},{l:"LinkedIn",h:"https://www.linkedin.com/in/nitya-nama/"},{l:"X",h:"https://x.com/nitya_nama"}].map(s => (
              <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily:mono, fontSize:11, color:c.dim, textDecoration:"none", transition:"color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color=c.acc}
                onMouseLeave={e => e.currentTarget.style.color=c.dim}>
                {s.l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse  { 0%,100%{opacity:1}  50%{opacity:0.3} }
        @keyframes bobble { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
        @keyframes blink  { 0%,100%{opacity:1}  50%{opacity:0} }
        * { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { overflow-x:hidden; }
      `}</style>
    </div>
  );
}

/* ─── Experience Card ─────────────────────────────────── */
function ExpCard({ exp, c, sans, mono }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background:h?c.accD:c.bgCard, border:`1px solid ${h?c.borderH:c.border}`, borderRadius:12, padding:"22px 24px", transition:"border-color 0.15s,background 0.15s", maxWidth:440, width:"100%" }}>
      <span style={{ fontFamily:mono, fontSize:11, color:c.acc, border:`1px solid ${c.tagBord}`, padding:"2px 8px", borderRadius:3, background:c.tagBg }}>{exp.period}</span>
      <h3 style={{ fontFamily:sans, fontSize:16, fontWeight:700, color:c.text, marginBottom:2, marginTop:12 }}>{exp.co}</h3>
      <p style={{ fontFamily:sans, fontSize:13, color:c.acc, marginBottom:14 }}>{exp.role}</p>
      <ul style={{ listStyle:"none", padding:0, margin:"0 0 14px" }}>
        {exp.bullets.map((b, bi) => (
          <li key={bi} style={{ display:"flex", gap:10, fontFamily:sans, fontSize:13, color:c.dim, lineHeight:1.75, marginBottom:6 }}>
            <span style={{ color:c.acc, flexShrink:0 }}>—</span><span>{b}</span>
          </li>
        ))}
      </ul>
      <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:12 }}>
        {exp.tags.map(t => (
          <span key={t} style={{ display:"inline-block", padding:"3px 9px", background:c.tagBg, border:`1px solid ${c.tagBord}`, borderRadius:3, fontFamily:mono, fontSize:10, color:c.acc }}>{t}</span>
        ))}
      </div>
      <a href={exp.cert} target="_blank" rel="noopener noreferrer"
        style={{ fontFamily:mono, fontSize:11, color:c.dim, textDecoration:"none", transition:"color 0.15s" }}
        onMouseEnter={e => e.currentTarget.style.color=c.acc}
        onMouseLeave={e => e.currentTarget.style.color=c.dim}>
        View Certificate →
      </a>
    </div>
  );
}
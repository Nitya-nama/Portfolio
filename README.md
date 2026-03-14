<div align="center">

[![Live](https://img.shields.io/badge/🌐%20Live%20Site-6E3BFF?style=for-the-badge)](https://nitya-nama.github.io/Portfolio/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## ✨ Overview

Personal portfolio built with **React + Vite + Three.js**, featuring a dual light/dark theme system — Apple-inspired clean whites in light mode and a neon purple/magenta aesthetic in dark mode.

---

## 🖥️ Preview

| Light Mode | Dark Mode |
|:---:|:---:|
| Clean Apple-style whites | Neon violet/magenta glow |
| `#ffffff` · `#f5f5f7` · `#1d1d1f` | `#0d0b14` · `#6e3bff` · `#ff2d9b` |

---

## 🗂️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated Three.js wireframe sphere + typewriter status |
| **About** | Bio, count-up stats (CGPA, accuracy, records, deployments) |
| **Tech Stack** | 34 skills across 5 categorised rows |
| **Certifications** | 4 verified certs + achievements with live links |
| **Experience** | Timeline with internship certificate links |
| **Projects** | 4 projects with GitHub + live demo buttons |
| **Contact** | Functional EmailJS form |

---

## 🛠️ Built With

<p align="left">
<img src="https://skillicons.dev/icons?i=react" height="40"/>
<img src="https://skillicons.dev/icons?i=vite" height="40"/>
<img src="https://skillicons.dev/icons?i=ts" height="40"/>
<img src="https://skillicons.dev/icons?i=tailwind" height="40"/>
<img src="https://skillicons.dev/icons?i=threejs" height="40"/>
</p>

- **Framer Motion** — page animations and scroll reveals
- **@react-three/fiber + drei** — 3D animated sphere
- **EmailJS** — contact form without a backend
- **Lucide React** — icons

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/Nitya-nama/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

> Runs on `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── Certifications.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── assets/
│   └── PassportPhoto.jpeg
├── ThemeProvider.tsx
├── App.tsx
└── index.css
public/
└── Nitya_Nama_CV.pdf
```

---

## ⚙️ Configuration

**Contact form** — add your EmailJS keys in `Contact.tsx`:
```ts
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
```

**CV download** — place your CV at `public/Nitya_Nama_CV.pdf`

**Profile photo** — place your photo at `src/assets/PassportPhoto.jpeg`

---

## 🌐 Deploy

```bash
npm run build   # builds to /dist
```

Deployed via **GitHub Pages**. Live at [nitya-nama.github.io/Portfolio](https://nitya-nama.github.io/Portfolio/)

---

<div align="center">

*Designed & built by Nitya Nama 💜*

</div>

import { Navbar } from "./components/Navbar/Navbar";
import { Atmosphere } from "./components/Atmosphere/Atmosphere";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Certifications } from "./components/Certifications/Certifications";
import { Writing } from "./components/Writing/Writing";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Atmosphere />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

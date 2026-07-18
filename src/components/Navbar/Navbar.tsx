import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import { useScrolled } from "../../hooks/useScrolled";
import type { Theme } from "../../hooks/useTheme";
import { site } from "../../data/site";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const goTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <button className={styles.logo} onClick={() => goTo("#hero")}>
            {site.name}
          </button>

          <nav className={styles.links} aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} className={styles.link} onClick={() => goTo(item.href)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className={styles.right}>
            <button
              className={styles.themeToggle}
              onClick={onToggleTheme}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href={site.resume} download className={`btn btn-primary ${styles.resumeBtn}`}>
              Resume
            </a>
            <button
              className={styles.menuToggle}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobilePanel} ${open ? styles.open : ""}`}>
        <div className={styles.mobilePanelInner}>
          {NAV_ITEMS.map((item) => (
            <button key={item.href} className={styles.mobileLink} onClick={() => goTo(item.href)}>
              {item.label}
            </button>
          ))}
          <a
            href={site.resume}
            download
            className="btn btn-primary"
            style={{ marginTop: 16, justifyContent: "center" }}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

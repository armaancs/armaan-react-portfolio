import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle.jsx";
import { useActiveSection } from "../hooks/useActiveSection.js";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

const sectionIds = links.map((link) => link.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <div className="relative w-full max-w-3xl">
        <nav
          aria-label="Primary"
          className="nav-bar flex items-center gap-1 rounded-full border border-line bg-surface/80 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md"
        >
          <a
            href="#top"
            className="rounded-full bg-ink px-3 py-1.5 font-display text-base leading-none font-bold text-scrim"
          >
            PORTFOLIO
          </a>

          <ul className="ml-2 hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    active === link.id
                      ? "bg-surface-raised text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a href="#contact" className="btn btn-primary py-2">
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="icon-btn h-9 w-9 md:hidden"
            >
              {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <ul
            id="mobile-menu"
            className="panel sheet-in absolute inset-x-0 top-full mt-2 bg-surface p-2 md:hidden"
          >
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`block rounded-xl px-4 py-3 font-medium ${
                    active === link.id ? "bg-surface-raised text-ink" : "text-ink-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

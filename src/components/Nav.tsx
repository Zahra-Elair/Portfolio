import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const links = [
  { hash: "#projects", label: "Projects" },
  { hash: "#experience", label: "Experience" },
  { hash: "#skills", label: "Skills" },
  { hash: "#contact", label: "Contact" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        <Link
          to={{ pathname: "/", hash: "#top" }}
          className="font-display text-lg font-semibold tracking-tight"
          aria-label="Zahra Elair, back to top"
        >
          <span className="sm:hidden">ZE</span>
          <span className="hidden sm:inline">Zahra Elair</span>
          <span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="flex gap-3 text-[13px] text-muted sm:gap-6 sm:text-sm">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  to={{ pathname: "/", hash: link.hash }}
                  className="transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="rounded-md border border-line p-2 text-muted transition-colors hover:text-ink"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

import { useCallback, useState } from "react";

// The initial theme is applied to <html> by the inline script in index.html,
// before first paint, from localStorage and then prefers-color-scheme.
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage can be blocked; the theme still applies for this visit.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}

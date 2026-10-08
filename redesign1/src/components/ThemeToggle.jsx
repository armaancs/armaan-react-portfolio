import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="relative h-9 w-16 shrink-0 rounded-full border border-line bg-surface-raised transition duration-200 active:scale-[0.98]"
    >
      <span
        className={`absolute top-1 left-1 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-accent text-accent-ink transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? <FaMoon size={12} aria-hidden="true" /> : <FaSun size={13} aria-hidden="true" />}
      </span>
    </button>
  );
}

import { useEffect, useState } from "react";

// Returns the id of the section currently crossing the upper-middle of the viewport.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // When two sections share the band, the later one in page order wins.
        setActive(ids.findLast((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

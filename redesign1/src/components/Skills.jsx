import Reveal from "./Reveal.jsx";
import { skillGroups } from "../data/skills.js";

// Feeds the cursor position to the .spotlight border glow without re-rendering.
function trackPointer(event) {
  const cell = event.currentTarget;
  const box = cell.getBoundingClientRect();
  cell.style.setProperty("--mx", `${event.clientX - box.left}px`);
  cell.style.setProperty("--my", `${event.clientY - box.top}px`);
}

// Grid placement and inner columns for each group. Under the full-width title banner
// the rows are 12, 7 + 5 and 8 + 4 on a 12-column grid.
const layout = {
  "Data & ML": { cell: "md:col-span-2 lg:col-span-12", list: "sm:grid-cols-2 lg:grid-cols-4" },
  "Web": { cell: "lg:col-span-7", list: "sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2" },
  "Languages & Databases": { cell: "lg:col-span-5", list: "sm:grid-cols-2 md:grid-cols-1" },
  "Cloud & Tools": { cell: "lg:col-span-8", list: "sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3" },
  "Geospatial": { cell: "grid-texture lg:col-span-4", list: "sm:grid-cols-2 md:grid-cols-1" },
};

function Skill({ skill }) {
  return (
    <li className="flex items-center gap-3">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-raised text-accent"
        aria-hidden="true"
      >
        {skill.icon ? (
          <skill.icon size={20} />
        ) : (
          <span className="font-mono text-xs font-semibold">{skill.initials}</span>
        )}
      </span>
      <span className="min-w-0">
        <span className="block font-medium text-ink">{skill.name}</span>
        <span className="block text-sm leading-snug text-ink-muted">{skill.descriptor}</span>
      </span>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        <Reveal className="rounded-2xl bg-accent p-6 text-accent-ink md:col-span-2 lg:col-span-12">
          <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight md:text-5xl">
            Skills
          </h2>
          <p className="mt-3 font-medium text-pretty">
            Using modern technology to empower ideas and skills.
          </p>
        </Reveal>

        {skillGroups.map((group, index) => (
          <Reveal
            key={group.category}
            index={index + 1}
            onPointerMove={trackPointer}
            className={`panel spotlight p-6 ${layout[group.category].cell}`}
          >
            <h3 className="font-display text-xl text-ink">{group.category}</h3>
            <ul className={`mt-5 grid gap-x-6 gap-y-4 ${layout[group.category].list}`}>
              {group.skills.map((skill) => (
                <Skill key={skill.name} skill={skill} />
              ))}
            </ul>
            {group.concepts && (
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {group.concepts.map((concept) => (
                  <li key={concept} className="tag">
                    {concept}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

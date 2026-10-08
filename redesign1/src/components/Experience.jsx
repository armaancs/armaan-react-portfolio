import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { m, useReducedMotion, useScroll } from "motion/react";
import OrgBadge from "./OrgBadge.jsx";
import Reveal from "./Reveal.jsx";
import { experience } from "../data/experience.js";

function Role({ entry }) {
  return (
    <li className="relative grid grid-cols-[auto_1fr] gap-4 pb-10 last:pb-0 sm:gap-6">
      <div className="relative h-12">
        <OrgBadge
          logo={entry.logo}
          logoAlt={entry.logoAlt}
          initials={entry.initials}
          color={entry.badgeColor}
        />
        {/* Accent ring that lights up when the drawn line reaches this role. */}
        <m.span
          aria-hidden="true"
          className="absolute -inset-1 rounded-2xl border-2 border-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -40% 0px" }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div>
        <div className="md:flex md:items-baseline md:justify-between md:gap-6">
          <h3 className="text-lg leading-snug font-semibold text-ink">
            {entry.role} <span className="text-accent">@ {entry.org}</span>
          </h3>
          <p className="meta mt-1 shrink-0 md:mt-0">{entry.date}</p>
        </div>
        <p className="body-copy mt-3">{entry.description}</p>
      </div>
    </li>
  );
}

// The badges sit on top of the vertical line as the timeline's nodes. A second, accent
// line is drawn over the first as the list scrolls through the viewport.
function Timeline({ entries, id }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.6"] });

  return (
    <ol ref={ref} id={id} className="relative">
      <span aria-hidden="true" className="absolute top-0 bottom-0 left-6 w-px bg-line" />
      <m.span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-6 w-px origin-top bg-accent"
        style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
      />
      {entries.map((entry) => (
        <Role key={`${entry.role} ${entry.org} ${entry.date}`} entry={entry} />
      ))}
    </ol>
  );
}

export default function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);
  const recent = experience.filter((entry) => entry.featured);
  const earlier = experience.filter((entry) => !entry.featured);

  return (
    <section id="experience" className="section">
      <Reveal className="panel p-6 sm:p-10">
        <h2 className="heading">Experience</h2>
        <p className="body-copy mt-3">A timeline of key points within my career.</p>

        <div className="mt-10">
          <Timeline entries={recent} />
        </div>

        {earlier.length > 0 && (
          <div className="mt-10 border-t border-line pt-6">
            <button
              type="button"
              onClick={() => setShowEarlier((shown) => !shown)}
              aria-expanded={showEarlier}
              aria-controls="earlier-experience"
              className="btn btn-ghost"
            >
              Earlier experience ({earlier.length})
              <FaChevronDown
                size={12}
                aria-hidden="true"
                className={`transition-transform duration-200 ${showEarlier ? "rotate-180" : ""}`}
              />
            </button>

            {showEarlier && (
              <m.div
                className="mt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Timeline entries={earlier} id="earlier-experience" />
              </m.div>
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
}

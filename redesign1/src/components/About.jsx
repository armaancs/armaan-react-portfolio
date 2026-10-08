import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal className="panel grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <h2 className="heading">About</h2>
          <div className="mt-6 space-y-4">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="body-copy text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="font-display text-xl text-accent">Now building</h3>
            <p className="mt-2 leading-relaxed text-pretty text-ink-muted">{profile.nowBuilding}</p>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="card flex flex-col-reverse justify-end gap-1 p-4">
                <dt className="text-sm leading-snug text-ink-muted">{stat.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

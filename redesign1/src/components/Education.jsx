import { education } from "../data/education.js";
import OrgBadge from "./OrgBadge.jsx";

export default function Education() {
  return (
    <div id="education" className="panel scroll-mt-24 p-6 sm:p-8">
      <h2 className="heading">Education</h2>

      {education.map((entry) => (
        <div key={entry.degree} className="mt-8">
          <div className="flex items-center gap-4">
            <OrgBadge initials={entry.initials} color={entry.badgeColor} />
            <div>
              <h3 className="text-lg leading-snug font-semibold text-ink">{entry.degree}</h3>
              <p className="font-medium text-accent">{entry.school}</p>
            </div>
          </div>

          <p className="mt-4 text-ink">{entry.detail}</p>
          <p className="meta mt-1">{entry.date}</p>

          <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-ink-muted">
            {entry.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

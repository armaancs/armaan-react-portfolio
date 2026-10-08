import { FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../data/certifications.js";
import OrgBadge from "./OrgBadge.jsx";

function Certification({ cert }) {
  const issued = [`Issued ${cert.date}`, cert.platform, cert.instructor && `Instructor: ${cert.instructor}`]
    .filter(Boolean)
    .join(", ");

  return (
    <li className="pt-8 first:pt-0">
      {cert.image && (
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          loading="lazy"
          className="mb-5 h-48 w-full rounded-xl object-cover"
        />
      )}

      <div className="flex items-center gap-4">
        <OrgBadge initials={cert.initials} color={cert.badgeColor} />
        <div>
          <h3 className="text-lg leading-snug font-semibold text-ink">{cert.title}</h3>
          <p className="font-medium text-accent">{cert.issuer}</p>
        </div>
      </div>

      <p className="meta mt-4">{issued}</p>

      {cert.courses?.length > 0 && (
        <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-ink-muted marker:font-mono marker:text-accent">
          {cert.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ol>
      )}

      {cert.skills?.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <li key={skill} className="tag">
              {skill}
            </li>
          ))}
        </ul>
      )}

      {(cert.credentialId || cert.credentialUrl) && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          {cert.credentialId && <p className="font-mono text-xs text-ink-muted">ID: {cert.credentialId}</p>}
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost ml-auto py-2"
            >
              Verify credential
              <FaExternalLinkAlt size={11} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </li>
  );
}

export default function Certifications() {
  return (
    <div id="certifications" className="panel scroll-mt-24 p-6 sm:p-8">
      <h2 className="heading">Certifications</h2>
      <ul className="mt-8 space-y-8 divide-y divide-line">
        {certifications.map((cert) => (
          <Certification key={cert.title} cert={cert} />
        ))}
      </ul>
    </div>
  );
}

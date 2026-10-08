import { FaGithub, FaLock } from "react-icons/fa";

export function ProjectLink({ project }) {
  if (!project.repo) {
    return (
      <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted">
        <FaLock aria-hidden="true" />
        Private
      </span>
    );
  }

  return (
    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost py-2">
      <FaGithub aria-hidden="true" />
      GitHub
      <span className="sr-only">repository for {project.title}</span>
    </a>
  );
}

export function ProjectTags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

// `wide` lays the card out as image beside text from the md breakpoint up.
export default function ProjectCard({ project, wide = false }) {
  return (
    <article
      className={`panel group flex h-full flex-col overflow-hidden ${
        wide ? "md:grid md:grid-cols-[0.8fr_1.2fr]" : ""
      }`}
    >
      <div className={`overflow-hidden bg-scrim ${wide ? "h-64 md:h-full md:min-h-72" : "h-64 md:h-80"}`}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-105 ${
            project.imageFit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-display text-2xl leading-tight text-ink">{project.title}</h3>
          <p className="meta mt-1">Updated {project.updated}</p>
        </div>
        <p className="body-copy">{project.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-3">
          <ProjectTags tags={project.tags} />
          <ProjectLink project={project} />
        </div>
      </div>
    </article>
  );
}

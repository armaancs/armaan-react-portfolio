import Reveal from "./Reveal.jsx";
import { projects } from "../data/projects.js";
import ProjectCard, { ProjectLink, ProjectTags } from "./ProjectCard.jsx";

// Column spans for the grid under the featured project: 5 + 7, 7 + 5, then one full-width card.
const spans = ["md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5", "md:col-span-12"];

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => project !== featured);

  return (
    <section id="projects" className="section">
      <Reveal as="header" className="panel max-w-2xl p-6">
        <h2 className="heading">Developed projects</h2>
        <p className="body-copy mt-3">
          A collection of projects demonstrating my skills in programming, design, and development.
          {" "}{featured.title} is featured, and the rest run from the most recent backwards.
        </p>
      </Reveal>

      <Reveal as="article" className="panel group mt-6 grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
        <div className="h-64 overflow-hidden bg-scrim sm:h-80 lg:h-full lg:min-h-[26rem]">
          <img
            src={featured.image}
            alt={`${featured.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-4 p-6 sm:p-10">
          <p className="font-mono text-sm text-accent">Featured project</p>
          <div>
            <h3 className="font-display text-4xl leading-none text-ink">{featured.title}</h3>
            <p className="meta mt-2">Updated {featured.updated}</p>
          </div>
          <p className="body-copy text-lg">{featured.description}</p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
            <ProjectTags tags={featured.tags} />
            <ProjectLink project={featured} />
          </div>
        </div>
      </Reveal>

      <ul className="mt-6 grid gap-6 md:grid-cols-12">
        {rest.map((project, index) => (
          <Reveal as="li" key={project.title} index={index % 2} className={spans[index % spans.length]}>
            <ProjectCard project={project} wide={index === rest.length - 1 && rest.length % 2 === 1} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

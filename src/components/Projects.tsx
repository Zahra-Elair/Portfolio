import { Link } from "react-router-dom";
import Section from "./Section";
import ProjectLinks from "./ProjectLinks";
import AnimatedElement from "./animations/AnimatedElement";
import { projects } from "./personal/data";
import type { Project } from "./personal/types";

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
      {tech.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function FeaturedProject({
  project,
  flip,
}: {
  project: Project;
  flip: boolean;
}) {
  const detailsPath = project.slug ? `/projects/${project.slug}` : null;

  const image = (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      className="aspect-[16/10] w-full object-cover"
    />
  );

  return (
    <AnimatedElement
      as="article"
      className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
    >
      <div
        className={`overflow-hidden rounded-xl border border-line bg-surface ${
          flip ? "md:order-2" : ""
        }`}
      >
        {detailsPath ? (
          <Link to={detailsPath} tabIndex={-1} aria-hidden="true">
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
      <div>
        <p className="mb-3 font-mono text-xs text-accent">{project.metrics}</p>
        <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {detailsPath ? (
            <Link
              to={detailsPath}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5">
          <TechList tech={project.tech} />
        </div>
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </AnimatedElement>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-5">
      <h4 className="font-display text-lg font-semibold leading-snug tracking-tight">
        {project.title}
      </h4>
      <p className="text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-auto pt-1">
        <TechList tech={project.tech} />
      </div>
    </li>
  );
}

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" index="01" title="Projects">
      <div className="space-y-16 sm:space-y-24">
        {featured.map((project, i) => (
          <FeaturedProject
            key={project.title}
            project={project}
            flip={i % 2 === 1}
          />
        ))}
      </div>

      <h3 className="mt-20 font-mono text-sm text-muted sm:mt-28">
        Projects I designed and mentored
      </h3>
      <p className="mb-6 mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        Blockchain and security projects I proposed, designed and supervised,
        built by interns I mentored.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {others.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </ul>
    </Section>
  );
}

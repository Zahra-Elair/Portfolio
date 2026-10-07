import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import ProjectLinks from "../components/ProjectLinks";
import { projects } from "../components/personal/data";

// Drive share links end in /view; the embeddable player lives at /preview
function embedUrl(video: string) {
  return video.replace(/\/view.*$/, "/preview");
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug && p.details);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (project) document.title = `${project.title} | Zahra Elair`;
  }, [project]);

  if (!project || !project.details) return <Navigate to="/" replace />;

  const { details } = project;

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
      <Link
        to={{ pathname: "/", hash: "#projects" }}
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        All projects
      </Link>

      <header className="mt-10">
        <p className="mb-4 font-mono text-sm text-accent">{project.metrics}</p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
          {details.overview}
        </p>
        <div className="mt-8">
          <ProjectLinks project={project} onProjectPage />
        </div>
      </header>

      <div className="mt-12 overflow-hidden rounded-xl border border-line bg-surface sm:mt-16">
        {project.video ? (
          <iframe
            src={embedUrl(project.video)}
            title={`${project.title} demo video`}
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            className="aspect-video w-full"
          />
        ) : (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full"
          />
        )}
      </div>

      {details.examplePrompts && (
        <section className="mt-12 sm:mt-16">
          <h2 className="mb-4 font-mono text-sm text-muted">
            Things you can say
          </h2>
          <ul className="flex flex-wrap gap-2">
            {details.examplePrompts.map((prompt) => (
              <li
                key={prompt}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm"
              >
                {prompt}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-16 sm:mt-24">
        <h2 className="border-b border-line pb-4 font-display text-3xl font-semibold tracking-tight">
          Highlights
        </h2>
        <dl>
          {details.highlights.map((highlight, i) => (
            <div
              key={highlight.title}
              className="grid gap-2 border-b border-line py-6 last:border-b-0 md:grid-cols-[48px_240px_1fr] md:gap-6"
            >
              <span className="font-mono text-xs leading-7 text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <dt className="font-display text-lg font-semibold leading-7 tracking-tight">
                {highlight.title}
              </dt>
              <dd className="leading-relaxed text-muted">
                {highlight.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 sm:mt-24">
        <h2 className="border-b border-line pb-4 font-display text-3xl font-semibold tracking-tight">
          Tech stack
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {details.stack.map((item) => (
            <li
              key={item}
              className="rounded-md border border-line bg-surface px-3 py-1 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 sm:mt-24">
        <Link
          to={{ pathname: "/", hash: "#projects" }}
          className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>
      </div>
    </main>
  );
}

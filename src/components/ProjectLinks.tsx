import { ArrowRight, ExternalLink, Github, Play } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "./personal/types";

const primary =
  "inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85";
const secondary =
  "inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-ink";

export default function ProjectLinks({
  project,
  onProjectPage = false,
}: {
  project: Project;
  // The project page already shows the case study and embeds the video
  onProjectPage?: boolean;
}) {
  const hasPage = Boolean(project.slug && project.details);
  const caseStudy = hasPage && !onProjectPage;
  // Without a project page, the video can only open where it is hosted
  const externalVideo = hasPage ? undefined : project.video;

  if (!caseStudy && !project.demo && !externalVideo && !project.github) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {caseStudy && (
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`${project.title} case study`}
          className={primary}
        >
          {project.video ? (
            <Play className="h-4 w-4" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
          {project.video ? "Demo & case study" : "Case study"}
        </Link>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={caseStudy ? secondary : primary}
        >
          <ExternalLink className="h-4 w-4" />
          Live demo
        </a>
      )}
      {externalVideo && (
        <a
          href={externalVideo}
          target="_blank"
          rel="noopener noreferrer"
          className={project.demo ? secondary : primary}
        >
          <Play className="h-4 w-4" />
          Watch demo
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={secondary}
        >
          <Github className="h-4 w-4" />
          Code
        </a>
      )}
    </div>
  );
}

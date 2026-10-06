import { ExternalLink, Github, Play } from "lucide-react";
import type { Project } from "./personal/types";

const primary =
  "inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85";
const secondary =
  "inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-ink";

export default function ProjectLinks({ project }: { project: Project }) {
  if (!project.demo && !project.video && !project.github) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={primary}
        >
          <ExternalLink className="h-4 w-4" />
          Live demo
        </a>
      )}
      {project.video && (
        <a
          href={project.video}
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

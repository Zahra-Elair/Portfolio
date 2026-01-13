import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "./personal/data";
import type { Project } from "./personal/types";

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    key={project.title}
    className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-green-600 dark:text-green-400 font-medium mb-4">
        {project.metrics}
      </p>
      <div className="flex space-x-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ExternalLink className="w-4 h-4 mr-1" />
          Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <Github className="w-4 h-4 mr-1" />
          Code
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [selectedDomain, setSelectedDomain] = useState<string>("All");

  // Get all unique domains
  const allDomains = Array.from(
    new Set(projects.flatMap((project) => project.domains))
  ).sort();

  const filteredProjects =
    selectedDomain === "All"
      ? projects
      : projects.filter((project) => project.domains.includes(selectedDomain));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedDomain("All")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedDomain === "All"
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            All {/*  ({projects.length}) */}
          </button>
          {allDomains.map((domain) => {
            const count = projects.filter((p) =>
              p.domains.includes(domain)
            ).length;
            return (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedDomain === domain
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {domain} ({count})
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

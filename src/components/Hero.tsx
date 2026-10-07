import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { personalInfo } from "./personal/data";

const stats = [
  { value: "2+", label: "years building AI-powered applications" },
  { value: "1,000+", label: "users on Tunispeak, my AI translation platform" },
  { value: "20+", label: "interns mentored across AI and software projects" },
];

export default function Hero() {
  const { contact } = personalInfo;

  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-28"
    >
      <p className="mb-6 font-mono text-sm text-accent">
        {personalInfo.title} · {contact.location}
      </p>
      <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
        {personalInfo.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        I build end-to-end AI-powered applications, from knowledge modeling and
        LLM workflows with RAG, Graph-RAG, and agents to the APIs and
        interfaces people actually use.
      </p>
      <p className="mt-6 inline-flex items-start gap-3 rounded-md border border-line bg-surface px-4 py-2 text-sm">
        <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-accent" />
        {personalInfo.availability.short}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
        >
          View projects
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
        >
          <FileText className="h-4 w-4" />
          View resume
        </a>
        <div className="flex items-center gap-1 sm:ml-2">
          <SocialLink href={contact.github} icon={<Github />} label="GitHub" />
          <SocialLink
            href={contact.linkedin}
            icon={<Linkedin />}
            label="LinkedIn"
          />
        </div>
      </div>

      <dl className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse items-center justify-end gap-1 text-center">
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="font-display text-3xl font-semibold tracking-tight">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md p-3 text-muted transition-colors hover:text-ink [&>svg]:h-5 [&>svg]:w-5"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

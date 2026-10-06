import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "./Section";
import AnimatedElement from "./animations/AnimatedElement";
import { experiences } from "./personal/data";

const VISIBLE_BULLETS = 3;

function ExperienceItem({ exp }: { exp: (typeof experiences)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = exp.description.length - VISIBLE_BULLETS;
  const bullets = expanded
    ? exp.description
    : exp.description.slice(0, VISIBLE_BULLETS);

  return (
    <AnimatedElement
      as="li"
      className="grid gap-2 border-b border-line py-8 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-8"
    >
      <p className="font-mono text-xs leading-6 text-muted">{exp.period}</p>
      <div>
        <h3 className="font-display text-xl font-semibold tracking-tight">
          {exp.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{exp.company}</p>
        <ul className="mt-4 space-y-2">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
          >
            {expanded ? "Show less" : `Show ${hiddenCount} more`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </AnimatedElement>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ul>
        {experiences.map((exp) => (
          <ExperienceItem key={`${exp.title}-${exp.period}`} exp={exp} />
        ))}
      </ul>
    </Section>
  );
}

import Section from "./Section";
import { education, languages } from "./personal/data";

export default function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-8">
        <p className="font-mono text-xs leading-6 text-muted">
          {education.period}
        </p>
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {education.degree}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">
            {education.school}
          </p>
          <p className="mt-1 text-sm text-muted">{education.location}</p>
        </div>

        <p className="font-mono text-xs leading-7 text-muted">Languages</p>
        <ul className="flex flex-wrap gap-2">
          {languages.map((language) => (
            <li
              key={language.name}
              className="rounded-md border border-line bg-surface px-3 py-1 text-sm"
            >
              {language.name}
              <span className="ml-2 text-muted">{language.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

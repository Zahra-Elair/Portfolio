import Section from "./Section";

const skills = [
  {
    category: "AI Engineering",
    items: [
      "LLMs",
      "RAG",
      "Graph-RAG",
      "AI Agents",
      "LangChain",
      "Embeddings",
      "Vector Search",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TanStack React Router",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & Data",
    items: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Supabase",
      "Neo4j",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Vercel", "Git", "Cloud Deployment"],
  },
  {
    category: "Blockchain",
    items: ["Solidity", "Ethers.js", "Web3.js", "Hardhat"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <dl>
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 border-b border-line py-5 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-8"
          >
            <dt className="font-mono text-xs leading-7 text-muted">
              {group.category}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-surface px-3 py-1 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

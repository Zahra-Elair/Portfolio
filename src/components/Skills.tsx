import { useEffect, useState } from "react";
import AnimatedElement from "./animations/AnimatedElement";
import AnimatedHeading from "./animations/AnimatedHeading";
import {
  Code,
  Database,
  Server,
  Cpu,
  Terminal,
  Cloud,
  Zap,
  Github,
  Box,
  Layers,
  Activity,
} from "lucide-react";

const skills = [
  {
    category: "Blockchain",
    items: [
      "Solidity",
      "Web3.js",
      "Ethers.js",
      "Hardhat",
      "IPFS",
      "Solana",
      "Ethereum",
      "Bitcoin",
      "Smart Contracts",
      "Wallet Integration",
      "Metamask",
      "DeFi",
      "Hedera",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Redux",
      "TanStack",
      "Framer Motion",
      "Three.js",
      " Material UI",
      "Shadcn",
      "SEO",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "RESTful APIs",
      "JWT",
      "WebSockets",
      "Sequelize",
      "Swagger",
      "GraphQL",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    category: "Database & State Management",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    category: "Performance & Optimization",
    items: ["SSR", "Lazy Loading", "Caching", "Progressive Web Apps (PWAs)"],
  },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Postman", "Jest"] },
];

export default function Skills() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mq.matches);
    handleChange();
    if (mq.addEventListener) mq.addEventListener("change", handleChange);
    else mq.addListener(handleChange);
    return () => {
      if (mq.removeEventListener)
        mq.removeEventListener("change", handleChange);
      else mq.removeListener(handleChange);
    };
  }, []);

  const animate = !prefersReducedMotion;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(skills.map((s) => s.category))),
  ];

  const filteredGroups =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  function getSkillIcon(skill: string) {
    const k = skill.toLowerCase();
    if (k.includes("react") || k.includes("next"))
      return <Code size={14} className="text-blue-500" />;
    if (k.includes("typescript") || k.includes("javascript"))
      return <Code size={14} className="text-sky-500" />;
    if (k.includes("tailwind") || k.includes("css") || k.includes("material"))
      return <Layers size={14} className="text-indigo-500" />;
    if (k.includes("node") || k.includes("express") || k.includes("fastapi"))
      return <Server size={14} className="text-emerald-500" />;
    if (k.includes("python"))
      return <Cpu size={14} className="text-yellow-500" />;
    if (k.includes("graphql"))
      return <Database size={14} className="text-pink-500" />;
    if (
      k.includes("mongo") ||
      k.includes("mysql") ||
      k.includes("postgre") ||
      k.includes("redis") ||
      k.includes("firebase")
    )
      return <Database size={14} className="text-rose-500" />;
    if (
      k.includes("docker") ||
      k.includes("k8s") ||
      k.includes("ci") ||
      k.includes("pipeline")
    )
      return <Box size={14} className="text-sky-600" />;
    if (k.includes("git") || k.includes("github"))
      return <Github size={14} className="text-gray-700" />;
    if (k.includes("framer") || k.includes("three") || k.includes("three.js"))
      return <Activity size={14} className="text-violet-500" />;
    if (k.includes("solidity") || k.includes("smart") || k.includes("ether"))
      return <Zap size={14} className="text-yellow-400" />;
    if (k.includes("ipfs") || k.includes("wallet") || k.includes("metamask"))
      return <Terminal size={14} className="text-orange-400" />;
    if (k.includes("defi") || k.includes("bitcoin") || k.includes("solana"))
      return <Cloud size={14} className="text-cyan-500" />;
    if (k.includes("jest") || k.includes("testing"))
      return <Activity size={14} className="text-green-500" />;
    return <Code size={14} className="text-gray-500" />;
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeading level={2} className="text-center mb-12" delay={0}>
          Technical Skills
        </AnimatedHeading>

        {/* Filter tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto px-4 -mx-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="inline-flex flex-wrap justify-center gap-2 rounded-lg bg-white/50 dark:bg-gray-700/50 p-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                tabIndex={activeCategory === cat ? 0 : -1}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-offset-gray-800 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow"
                    : "text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredGroups.map((skillGroup, groupIndex) => {
            const cardDelay = animate ? groupIndex * 100 : 0; // match Experience stagger
            return animate ? (
              <AnimatedElement
                as="div"
                key={skillGroup.category}
                className=""
                animation="fade-up"
                delay={cardDelay}
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-transparent hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-150">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {skillGroup.items.length} technologies
                      </p>
                    </div>
                    <div className="text-sm text-gray-400 dark:text-gray-300 self-start">
                      {/* small subtle count */}
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <AnimatedElement
                        as="li"
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 shadow-sm"
                        animation="fade-in"
                        delay={cardDelay + i * 20} // faster cascade inside card
                        duration={180} // snappier chip fade-in
                      >
                        <span className="mr-2 flex-shrink-0 text-gray-500 dark:text-gray-300">
                          {getSkillIcon(skill)}
                        </span>
                        <span className="truncate max-w-[10rem]">{skill}</span>
                      </AnimatedElement>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>
            ) : (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-transparent"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {skillGroup.items.length} technologies
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200"
                    >
                      <span className="mr-2 flex-shrink-0 text-gray-500 dark:text-gray-300">
                        {getSkillIcon(skill)}
                      </span>
                      <span className="truncate max-w-[10rem]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

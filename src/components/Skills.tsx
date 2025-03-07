import React from "react";

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
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DeFi Lending Platform',
    description: 'A decentralized lending platform built on Ethereum with automated market making',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tech: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
    demo: 'https://example.com',
    github: 'https://github.com',
    metrics: '10M+ TVL, 50k+ Users',
  },
  {
    title: 'NFT Marketplace',
    description: 'A marketplace for trading digital collectibles with support for multiple chains',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'TypeScript', 'IPFS', 'The Graph'],
    demo: 'https://example.com',
    github: 'https://github.com',
    metrics: '100k+ NFTs Listed, 25k+ Sales',
  },
  {
    title: 'DAO Governance Platform',
    description: 'A platform for decentralized governance and proposal management',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Solidity', 'TypeScript', 'Ethers.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
    metrics: '200+ DAOs, 1M+ Votes Cast',
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
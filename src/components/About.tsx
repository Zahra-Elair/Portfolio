import React from 'react';
import { Code2, Database, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code2 className="w-8 h-8" />}
            title="Full Stack Development"
            description="Experienced in building scalable applications with React, Node.js, and modern web technologies"
          />
          <FeatureCard
            icon={<Database className="w-8 h-8" />}
            title="Blockchain Expert"
            description="Specialized in Web3 development, smart contracts, and DeFi protocols"
          />
          <FeatureCard
            icon={<Cpu className="w-8 h-8" />}
            title="System Architecture"
            description="Designing and implementing robust, scalable blockchain solutions"
          />
        </div>
        <div className="mt-12 text-lg text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            With over 5 years of experience in software development, I specialize in building
            decentralized applications and blockchain solutions. My expertise spans both traditional
            web development and cutting-edge Web3 technologies.
          </p>
          <p>
            I'm passionate about creating secure, efficient, and user-friendly applications that
            bridge the gap between conventional web services and blockchain technology.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
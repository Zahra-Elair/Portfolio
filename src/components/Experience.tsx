import React from 'react';

const experiences = [
  {
    title: 'Blockchain Consultant',
    company: 'Talan Tunisia',
    period: 'September 2024 - Present',
    description: [
      'Spearheaded development of enterprise-grade Web3 solutions, focusing on DeFi protocols and smart contract optimization',
      'Architected and implemented decentralized applications using Solidity, React, and Web3.js, improving transaction efficiency by 35%',
      'Led technical design and implementation of cross-chain integration solutions, enabling seamless asset transfers across multiple networks',
      'Mentored junior developers in blockchain best practices and secure smart contract development',
    ],
  },
  {
    title: 'Blockchain Developer Intern',
    company: 'Talan Tunisia',
    period: 'February 2024 - June 2024',
    description: [
      'Engineered a high-performance arbitrage trading bot utilizing Aave flash loans, achieving a 12% average return on investment',
      'Developed smart contracts with gas optimization techniques, reducing transaction costs by 25%',
      'Implemented real-time price monitoring system across multiple DEXs using The Graph Protocol and Web3 event listeners',
      'Created comprehensive testing suite achieving 95% code coverage for smart contracts',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company: '3S Spring Services & Solutions',
    period: 'March 2023 - September 2023',
    description: [
      'Architected and developed a scalable ERP system using MERN stack, handling 10,000+ monthly applications',
      'Implemented real-time dashboard analytics reducing data processing time by 40%',
      'Designed and deployed RESTful APIs with Node.js and Express, improving system response time by 20%',
      'Led migration to TypeScript and implemented automated testing, reducing bug reports by 30%',
    ],
  },
  {
    title: 'Opener and Web Developer',
    company: 'Open Startup Tunisia',
    period: 'September 2022 - November 2022',
    description: [
      'Developed and launched a dynamic startup platform using React and Node.js, attracting 500+ monthly active users',
      'Implemented responsive design principles resulting in 40% increase in mobile user engagement',
      'Built custom CMS solution enabling non-technical staff to manage content efficiently',
      'Integrated analytics and monitoring tools providing real-time insights into user behavior',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-500"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-[3px]" />
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
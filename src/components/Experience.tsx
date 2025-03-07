import React from "react";

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Talan Tunisia",
    period: "September 2024 - Present",
    description: [
      "Developed scalable React.js/Next.js apps, improving performance by 30% using Tailwind CSS.",
      "Built and maintained full-stack Web3-integrated applications, ensuring seamless interaction with blockchain smart contracts.",
      "Developed and optimized API integrations (RESTful and Web3) with FastAPI and Node.js.",
      "Improved frontend performance by implementing server-side rendering (SSR), lazy loading, and caching strategies.",
      "Enhanced user authentication & security by integrating MetaMask login, JWT authentication, and OAuth workflows.",
      "Collaborated with cross-functional teams to design and deliver robust Web3-powered web applications.",
      "Developed an AI-driven translation model leveraging retrieval-augmented generation (RAG) techniques to achieve high-fidelity translations between English and Tunisian, enhancing contextual relevance and linguistic nuance.",
    ],
  },
  {
    title: "Web3 Engineering Intern",
    company: "Talan Tunisia",
    period: "February 2024 - June 2024",
    description: [
      "Built a real-time trading dashboard using React.js, Next.js, and Tailwind CSS.",
      "Integrated blockchain smart contracts into the frontend using Web3.js & Ethers.js.",
      "Developed RESTful APIs to fetch price data from multiple sources.",
      "Reduced API response times by 30% using optimized caching strategies.",
      "Improved UI/UX experience, leading to a 20% faster navigation speed.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "3S Spring Services & Solutions (Remote)",
    period: "March 2023 - September 2023",
    description: [
      "Designed (Figma) and developed a full-stack ERP platform using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Designed and implemented RESTful APIs for authentication & data management.",
      "Improved system efficiency by 30% using server-side rendering (SSR) & lazy loading.",
      "Enhanced UI performance by 20% through optimized rendering & state management.",
      "Integrated external services & APIs, extending platform functionality.",
    ],
  },
  {
    title: "Opener and Web Developer",
    company: "Open Startup Tunisia",
    period: "September 2022 - November 2022",
    description: [
      "Developed a modern, responsive website using React.js & Tailwind CSS.",
      "Implemented SEO best practices, increasing web traffic & search rankings.",
      "Created an interactive MERN-based proof-of-concept web app.",
    ],
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "LEONI Tunisia",
    period: "June 2022 - August 2022",
    description: [
      "Developed an ERP system to track employee working hours and attendance.",
      "Designed and built the frontend using Angular, ensuring a responsive and user-friendly experience.",
      "Developed the backend with Java Spring Boot, implementing secure authentication and efficient data management.",
      "Created a dashboard for managers to monitor employee hours and generate reports.",
      "Enhanced system performance by optimizing database queries and backend logic for faster processing.",
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
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
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

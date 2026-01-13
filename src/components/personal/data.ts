import { PersonalInfo, Project } from './types';

export const personalInfo: PersonalInfo = {
  name: "Zahra Elair",
  title: "Web3 Developer & Software Engineer",
  contact: {
    email: "zahraelair17@gmail.com",
    phone: "+216 50389034",
    location: "Tunis, Tunisia",
    linkedin: "https://www.linkedin.com/in/Zahra-Elair/"
  },
  summary: "Junior Full Stack Developer with 1+ year professional experience building AI-powered platforms and Web3/decentralized systems. Proficient in React.js, Next.js, Node.js and modern UI/UX principles, seeking to leverage my skills in a challenging environment. Open to remote opportunities."
};

export const experiences = [
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

export const projects: Project[] = [
  {
    title: 'Arbitrage Trade Bot',
    description: 'An Ethereum-based trading bot that leverages flash loans to identify and execute arbitrage opportunities across decentralized exchanges within a single transaction.',
    image: '/src/assets/projects/arbitrage trade bot.png',
    tech: ['Solidity', 'React', 'Web3.js', 'Hardhat', 'Ethers.js'],
    demo: 'https://example.com/arbitrage-bot-demo',
    github: 'https://github.com/zahraelair/arbitrage-trade-bot',
    metrics: 'Executed 200+ profitable trades, 5% average ROI per trade',
    domains: ['Dev', 'Blockchain']
  },
  {
    title: 'DORA AI Compliance System',
    description: 'An AI-powered platform ensuring compliance with the European Union\'s Digital Operational Resilience Act (DORA), detecting non-compliance in ROI and Incident Management using a Neo4j knowledge graph and AI agents.',
    image: '/src/assets/projects/DORA AI Compliance System.png',
    tech: ['Python', 'AI Agents', 'LangChain', 'Neo4j', 'React', 'Node.js', 'Graph Databases'],
    demo: 'https://dora-compliance.example.com',
    github: 'https://github.com/zahraelair/dora-ai-compliance',
    metrics: 'In Progress',
    domains: ['AI', 'Dev']
  },
  {
    title: 'AI-Powered Predictive Trading Bot (Solana)',
    description: 'A high-frequency trading bot integrating AI-driven price prediction and liquidity pool yield analysis to optimize real-time trades.',
    image: '/src/assets/projects/AI-Powered Predictive Trading Bot.png',
    tech: ['Solana', 'Anchor', 'Rust', 'Python', 'TensorFlow', 'PyTorch', 'LSTM', 'Reinforcement Learning'],
    demo: '',
    github: '',
    metrics: 'In Progress',
    domains: ['Blockchain', 'AI', 'Dev']
  },
  {
    title: 'Quantum-Secure Decentralized Identity Platform',
    description: 'A self-sovereign identity platform on Ethereum using post-quantum cryptography and AI verification, integrated with smart contracts for secure user identity management.',
    image: '/src/assets/projects/Decentralized Identity Platform.png',
    tech: ['Ethereum', 'Solidity', 'Hardhat', 'Web3.js', 'IPFS', 'Post-Quantum Libraries (CRYSTALS-Kyber, Dilithium)', 'Python', 'TensorFlow', 'PyTorch', 'AI Classification Models'],
    demo: '',
    github: '',
    metrics: 'In Progress',
    domains: ['Blockchain', 'AI', 'Dev', 'PQC']
  },
  {
    title: 'Tunispeak',
    description: 'An open-source NLP project translating between English and Tunisian Arabic using transformers, with a web interface for corrections and dataset enrichment.',
    image: '/src/assets/projects/Tunispeak.png',
    tech: ['Python', 'Transformers', 'React', 'Next.js', 'Hugging Face'],
    demo: 'https://tunispeak.example.com',
    github: 'https://github.com/zahraelair/tunispeak',
    metrics: 'Dataset of 50k+ entries, improved translation accuracy over GPT models by 35%',
    domains: ['AI', 'Dev']
  },
  {
    title: 'Tunisian Food Supply Chain Tracker',
    description: 'A mobile-focused platform allowing users to scan products and trace their full production chain, highlighting authenticity and certifications.',
    image: '/src/assets/projects/food supply chain tracker.png',
    tech: ['React Native', 'React', 'Node.js', 'Supabase'],
    demo: 'https://foodchain.example.com',
    github: 'https://github.com/zahraelair/food-chain-tracker',
    metrics: 'Tracked 100+ products from farm to store, 80% user engagement rate',
    domains: ['Dev', 'Blockchain']
  },
  {
    title: 'SQL Agent',
    description: 'An AI-powered agent interacting with SQL databases to fetch, update, and manage data intelligently.',
    image: '/src/assets/projects/sql agent.png',
    tech: ['Python', 'Node.js', 'SQL', 'AI Agents', 'Automation'],
    demo: 'https://sql-agent.example.com',
    github: 'https://github.com/zahraelair/sql-agent',
    metrics: 'Automated 1000+ queries, reduced manual database operations by 60%',
    domains: ['AI', 'Dev']
  },
  {
    title: 'French Teaching Platform (Freelance)',
    description: 'A digital platform for online learning. Freelance contribution focused on implementing international payments with Stripe, user authentication, and database integration.',
    image: '/src/assets/projects/french teaching platform.png',
    tech: ['React', 'Next.js', 'Stripe', 'Supabase', 'Clerk', 'Node.js'],
    demo: '',
    github: '',
    metrics: 'Implemented secure international payment and authentication flow for users',
    domains: ['Dev']
  },
  {
    title: 'AI-Powered Decentralized Social Media Platform',
    description: 'A censorship-resistant decentralized social media platform on Ethereum, with AI-driven content moderation and DAO-based governance.',
    image: '/src/assets/projects/Decentralized Social Media Platform.png',
    tech: ['Ethereum', 'Solidity', 'Hardhat', 'Web3.js', 'IPFS', 'Chainlink', 'Python', 'NLP', 'Reinforcement Learning'],
    demo: '',
    github: '',
    metrics: 'In Progress',
    domains: ['Blockchain', 'AI', 'Dev']
  },
  {
    title: 'Zero-Knowledge Supply Chain Tracker',
    description: 'A privacy-preserving supply chain tracker using zk-SNARKs with optional AI for anomaly detection.',
    image: '/src/assets/projects/Zero-Knowledge Supply Chain Tracker.png',
    tech: ['Aleo', 'Leo', 'Aleo SDK', 'IPFS', 'Python'],
    demo: '',
    github: '',
    metrics: 'In Progress',
    domains: ['Blockchain', 'AI', 'Dev']
  },
  {
    title: 'Post-Quantum Secure Medical Platform',
    description: 'A secure medical platform implementing end-to-end encryption and post-quantum cryptography to protect sensitive patient data against current and future threats.',
    image: '/src/assets/projects/Post-Quantum Secure Medical Platform.png',
    tech: ['Python', 'Node.js', 'React', 'CRYSTALS-Kyber', 'CRYSTALS-Dilithium', 'End-to-End Encryption'],
    demo: '',
    github: '',
    metrics: 'Enabled secure handling of sensitive medical records with post-quantum encryption',
    domains: ['Dev', 'PQC']
  }
];


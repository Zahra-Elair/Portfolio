import { PersonalInfo, Project } from './types';

// Import project images
import arbitrageTradeBotImg from '../../assets/projects/arbitrage trade bot.png';
import doraComplianceImg from '../../assets/projects/DORA Platform.jpg';
import aiTradingBotImg from '../../assets/projects/AI-Powered Predictive Trading Bot.png';
import decentralizedIdentityImg from '../../assets/projects/Decentralized Identity Platform.png';
import tunispeakImg from '../../assets/projects/Tunispeak.png';
import foodChainTrackerImg from '../../assets/projects/food supply chain tracker.png';
import sqlAgentImg from '../../assets/projects/sql agent.png';
import frenchTeachingImg from '../../assets/projects/french teaching platform.png';
import decentralizedSocialMediaImg from '../../assets/projects/Decentralized Social Media Platform.png';
import zkSupplyChainImg from '../../assets/projects/Zero-Knowledge Supply Chain Tracker.png';
import postQuantumMedicalImg from '../../assets/projects/Post-Quantum Secure Medical Platform.png';
import cadenceImg from '../../assets/projects/Cadence.jpg';

export const personalInfo: PersonalInfo = {
  name: "Zahra Elair",
  title: "AI Software Engineer",
  availability: {
    short: "Relocating to Paris in July 2027 · Open to remote and Paris-based roles",
    long: "I'm based in Tunis and relocating to Paris in July 2027, with the right to work in France. I'm open to remote roles now and Paris-based roles from then.",
  },
  resume: "https://drive.google.com/file/d/1F5o3kotgnQt7DKsgBdRM0IfE-YfE4LOr/view",
  contact: {
    email: "zahraelair17@gmail.com",
    phone: "(+216) 50 38 90 34",
    location: "Tunis, Tunisia",
    linkedin: "https://www.linkedin.com/in/Zahra-Elair/",
    github: "https://github.com/Zahra-Elair"
  },
  summary: "AI Software Engineer with 2+ years of experience building end-to-end AI-powered applications, combining LLMs, RAG, Graph-RAG, AI agents, backend services, and modern web interfaces. Experienced in turning complex business and regulatory requirements into usable software products, from data and knowledge modeling to AI workflows, APIs, frontend experiences, and deployment. Hands-on experience across AI, full-stack engineering, and blockchain technologies."
};

export const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Talan · Tunis, Tunisia",
    period: "September 2024 - Present",
    description: [
      "Designed and developed end-to-end AI-powered applications, combining TypeScript, React, Next.js, Python, FastAPI, Node.js, databases, and AI services.",
      "Led the technical design and product development of an AI-powered DORA compliance platform, translating regulatory and business requirements into automated compliance workflows.",
      "Built AI workflows combining LLMs, RAG, Graph-RAG, embeddings, knowledge graphs, and AI agents for regulatory document analysis, intelligent search, risk analysis, and data querying.",
      "Designed knowledge structures in Neo4j to connect regulatory requirements, compliance data, risks, entities, and relationships for graph-based retrieval and reasoning.",
      "Developed user-facing AI features with React/Next.js and backend services with FastAPI, Node.js, and REST APIs, connecting AI capabilities to production-oriented application workflows.",
      "Collaborated with stakeholders and end users to transform complex requirements into intuitive product features, balancing AI capabilities, usability, and business value.",
      "Containerized and deployed applications using Docker and Vercel and contributed to internal AI and software engineering initiatives.",
      "Mentored 20+ interns across AI, software engineering, web development, and emerging technology projects.",
    ],
  },
  {
    title: "Freelance Software Engineer - Payments & SaaS",
    company: "Bridge Training (French Startup) · Remote",
    period: "June 2025 - September 2025",
    description: [
      "Built and deployed a SaaS billing system using React, Supabase, and Stripe, covering subscriptions, trials, checkout, and payment lifecycle management.",
      "Developed secure Supabase Edge Functions for Stripe Checkout session creation and webhook processing.",
      "Designed responsive billing dashboards and synchronized subscription, customer, and payment data across frontend and backend services.",
    ],
  },
  {
    title: "Web3 Full Stack Developer Intern",
    company: "Talan · Tunis, Tunisia",
    period: "February 2024 - June 2024",
    description: [
      "Built an AI-powered trading application using React.js/Next.js and AI agents for automated decision-making.",
      "Developed REST APIs aggregating market data from multiple sources and optimized response times by 30%.",
      "Integrated blockchain smart contracts through Web3.js within a full-stack application.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "3S Spring Services & Solutions · Remote, Tunisia",
    period: "March 2023 - September 2023",
    description: [
      "Designed and deployed a MERN-based ERP platform supporting data management for 500+ users.",
      "Developed REST APIs for authentication and data management, improving application efficiency by 30%.",
      "Built data-driven interfaces and application data layers using PostgreSQL, MySQL, and MongoDB.",
    ],
  },
];

export const education = {
  degree: "Software Engineering Diploma",
  school: "Higher Institute of Applied Sciences and Technology of Sousse",
  location: "Sousse, Tunisia",
  period: "September 2019 - June 2024",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Professional" },
  { name: "English", level: "Professional" },
];

export const projects: Project[] = [
  {
    title: 'Cadence - AI Calendar Assistant',
    featured: true,
    slug: 'cadence',
    details: {
      overview: 'Cadence is an AI calendar assistant that lets you talk to your Google Calendar instead of clicking through it. Ask what is on today, add or clear events in plain language, or snap a photo of a gym timetable and have it schedule the sessions. Everything happens in one workspace, with a confirmation step before anything is written.',
      examplePrompts: [
        "What's on today?",
        'Add lunch with Sam Thursday at 1pm',
        'Clear Friday afternoon',
      ],
      highlights: [
        {
          title: 'Natural-language event management',
          description: 'Create, move, and delete events by chat. Each proposed change is shown as a confirm card, so a human stays in the loop and nothing is written silently.',
        },
        {
          title: 'Multimodal input',
          description: 'Attach a photo of a schedule or plan and the assistant reads it and proposes the events to add.',
        },
        {
          title: 'Unified workspace',
          description: 'A custom week calendar with overlap-aware layout, a context-aware chat docked beside it that knows the week you are viewing, and a live "Now / Next" bar. The grid updates in real time as you chat.',
        },
        {
          title: 'Provider-agnostic AI layer',
          description: 'Runs on four free LLM providers (Groq, Google Gemini, Mistral, OpenRouter) with hybrid routing, sending text to a fast text model and images to a vision model, and automatic model fallback to dodge free-tier rate limits.',
        },
        {
          title: 'Streaming chat with tool-calling',
          description: 'Google OAuth sign-in, session-persisted conversations, markdown rendering, and full light/dark theming.',
        },
      ],
      stack: [
        'Next.js 16 (App Router, Server Actions)',
        'React 19',
        'TypeScript',
        'Tailwind CSS v4',
        'shadcn/ui',
        'NextAuth (Google OAuth)',
        'Vercel AI SDK',
        'Luxon',
        'Vitest',
        'Deployed on Vercel',
      ],
    },
    description: 'An AI calendar assistant that lets you talk to your Google Calendar: create, move, and delete events by chat or from a photo of a schedule, with a confirmation step before anything is written. Runs on a provider-agnostic multi-LLM layer with vision routing and automatic fallback.',
    image: cadenceImg,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vercel AI SDK', 'NextAuth', 'Vitest'],
    demo: 'https://cadencecalendar.vercel.app',
    video: 'https://drive.google.com/file/d/129J5ruYd5mWrMr0S8S4om5F52-OLjHnZ/view',
    github: 'https://github.com/Zahra-Elair/Cadence',
    metrics: '2026 · Streaming tool-calling chat with human-in-the-loop confirmation',
    domains: ['AI', 'Dev']
  },
  {
    title: 'AI-Powered DORA Compliance Platform',
    featured: true,
    slug: 'dora',
    details: {
      overview: 'DORA Compliance Automation is an AI-powered platform that helps financial institutions automate compliance with the Digital Operational Resilience Act (DORA), in force since January 2025. It focuses on three demanding workflows: managing ICT third-party providers, handling operational incidents, and monitoring regulatory changes.',
      highlights: [
        {
          title: 'AI-powered third-party management',
          description: 'AI agents extract and structure information from internal and external sources, then propagate it across the 15 regulatory templates required by DORA.',
        },
        {
          title: 'Knowledge graph for data consistency',
          description: 'A Neo4j knowledge graph models relationships between providers, entities, contracts, services, and regulatory data, allowing updates to propagate across connected records and keeping the regulatory register consistent.',
        },
        {
          title: 'Automated incident management',
          description: 'Detects and classifies operational incidents, guides the notification workflow within regulatory deadlines, and generates the required reports with compliance checks at each step.',
        },
        {
          title: 'Continuous regulatory watch',
          description: 'Monitors changes to the DORA regulatory framework and identifies amendments that could impact existing compliance processes.',
        },
        {
          title: 'Agentic AI workflows',
          description: 'Combines LLMs, retrieval, structured extraction, and specialized agents to automate multi-step compliance operations rather than simply generating text.',
        },
        {
          title: 'European AI stack',
          description: 'Integrates Mistral for LLM-powered processing, supporting a European approach to AI and data sovereignty.',
        },
      ],
      stack: [
        'Python',
        'FastAPI',
        'React',
        'TypeScript',
        'Mistral',
        'LangChain',
        'RAG',
        'Graph-RAG',
        'Neo4j',
        'AI Agents',
        'PostgreSQL',
        'REST APIs',
      ],
    },
    description: 'An AI-powered platform that helps financial institutions automate DORA compliance: managing ICT third-party providers, handling operational incidents, and monitoring regulatory changes, with AI agents and a Neo4j knowledge graph keeping the regulatory register consistent.',
    image: doraComplianceImg,
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Mistral', 'LangChain', 'Graph-RAG', 'Neo4j', 'AI Agents'],
    demo: '',
    video: 'https://drive.google.com/file/d/1Xok08tQK-HSmH349F-U45gY53qBoXMqs/view',
    github: '',
    metrics: '2025 · Led technical design and product development',
    domains: ['AI', 'Dev']
  },
  {
    title: 'Tunispeak - AI Translation Platform',
    featured: true,
    slug: 'tunispeak',
    details: {
      overview: 'Tunispeak is a Tunisian Arabic and English translation platform built around AraT5, a transformer model fine-tuned specifically for Tunisian Arabic. It turns informal, dialect-heavy Tunisian text into English and English into natural Tunisian Arabic, with a focus on the vocabulary, spelling variations, and code-switching that general-purpose translation systems often struggle with.',
      highlights: [
        {
          title: 'Tunisian Arabic and English translation',
          description: 'Fine-tuned AraT5 to handle Tunisian dialect rather than relying on Modern Standard Arabic translation models.',
        },
        {
          title: 'Dialect-specific data pipeline',
          description: 'Built and cleaned a Tunisian Arabic dataset with 8,000+ human corrections, covering informal expressions, spelling variations, and mixed Arabic/French usage.',
        },
        {
          title: 'Production inference',
          description: 'Exposed the model through an API and integrated it into a web application for real-time translation.',
        },
        {
          title: 'User feedback loop',
          description: 'Collected corrections from users to identify translation errors and improve the underlying dataset.',
        },
        {
          title: 'Real-world usage',
          description: 'Reached 1,000+ users, providing practical validation beyond a local ML experiment.',
        },
      ],
      stack: [
        'Python',
        'Hugging Face Transformers',
        'AraT5',
        'PyTorch',
        'NLP',
        'FastAPI',
        'React',
        'TypeScript',
        'Vercel',
      ],
    },
    description: 'A Tunisian Arabic and English translation platform built around AraT5, a transformer model fine-tuned for Tunisian dialect, with a web app for real-time translation and a feedback loop where users submit corrections.',
    image: tunispeakImg,
    tech: ['Python', 'AraT5', 'Hugging Face Transformers', 'PyTorch', 'FastAPI', 'React', 'TypeScript', 'Vercel'],
    demo: '',
    github: '',
    metrics: '2024 · 1,000+ users, 8,000+ human corrections in the dataset',
    domains: ['AI', 'Dev']
  },
  {
    title: 'AI Predictive Trading Bot',
    description: 'An AI-powered trading system combining AI agents, market data pipelines, and blockchain infrastructure for automated trading decisions.',
    image: aiTradingBotImg,
    tech: ['AI Agents', 'React', 'Next.js', 'REST APIs', 'Web3.js'],
    demo: '',
    github: '',
    metrics: '2024 · Automated trading decisions driven by AI agents',
    domains: ['Blockchain', 'AI', 'Dev']
  },
  {
    title: 'Bridge Training - SaaS Billing System (Freelance)',
    description: 'A SaaS billing system for a French training startup, covering subscriptions, trials, checkout, and payment lifecycle management, with Supabase Edge Functions handling Stripe Checkout sessions and webhooks.',
    image: frenchTeachingImg,
    tech: ['React', 'Supabase', 'Supabase Edge Functions', 'Stripe'],
    demo: '',
    github: '',
    metrics: '2025 · Subscription, customer, and payment data synced across frontend and backend',
    domains: ['Dev']
  },
  {
    title: 'Arbitrage Trade Bot',
    description: 'An Ethereum-based trading bot that leverages flash loans to identify and execute arbitrage opportunities across decentralized exchanges within a single transaction.',
    image: arbitrageTradeBotImg,
    tech: ['Solidity', 'React', 'Web3.js', 'Hardhat', 'Ethers.js'],
    demo: '',
    github: '',
    metrics: 'Executed 200+ profitable trades, 5% average ROI per trade',
    domains: ['Dev', 'Blockchain']
  },
  {
    title: 'Quantum-Secure Decentralized Identity Platform',
    description: 'A self-sovereign identity platform on Ethereum using post-quantum cryptography and AI verification, integrated with smart contracts for secure user identity management.',
    image: decentralizedIdentityImg,
    tech: ['Ethereum', 'Solidity', 'Hardhat', 'Web3.js', 'IPFS', 'Post-Quantum Libraries (CRYSTALS-Kyber, Dilithium)', 'Python', 'TensorFlow', 'PyTorch', 'AI Classification Models'],
    demo: '',
    github: '',
    metrics: 'In Progress',
    domains: ['Blockchain', 'AI', 'Dev', 'PQC']
  },
  {
    title: 'Tunisian Food Supply Chain Tracker',
    description: 'A mobile-focused platform allowing users to scan products and trace their full production chain, highlighting authenticity and certifications.',
    image: foodChainTrackerImg,
    tech: ['React Native', 'React', 'Node.js', 'Supabase'],
    demo: '',
    github: '',
    metrics: 'Tracked 100+ products from farm to store, 80% user engagement rate',
    domains: ['Dev', 'Blockchain']
  },
  {
    title: 'SQL Agent',
    description: 'An AI-powered agent interacting with SQL databases to fetch, update, and manage data intelligently.',
    image: sqlAgentImg,
    tech: ['Python', 'Node.js', 'SQL', 'AI Agents', 'Automation'],
    demo: '',
    github: '',
    metrics: 'Automated 1000+ queries, reduced manual database operations by 60%',
    domains: ['AI', 'Dev']
  },
  {
    title: 'AI-Powered Decentralized Social Media Platform',
    description: 'A censorship-resistant decentralized social media platform on Ethereum, with AI-driven content moderation and DAO-based governance.',
    image: decentralizedSocialMediaImg,
    tech: ['Ethereum', 'Solidity', 'Hardhat', 'Web3.js', 'IPFS', 'Chainlink', 'Python', 'NLP', 'Reinforcement Learning'],
    demo: '',
    github: '',
    metrics: 'In Progress',
    domains: ['Blockchain', 'AI', 'Dev']
  },
  {
    title: 'Zero-Knowledge Supply Chain Tracker',
    description: 'A privacy-preserving supply chain tracker using zk-SNARKs with optional AI for anomaly detection.',
    image: zkSupplyChainImg,
    tech: ['Aleo', 'Leo', 'Aleo SDK', 'IPFS', 'Python'],
    demo: '',
    github: '',
    metrics: 'In Progress',
    domains: ['Blockchain', 'AI', 'Dev']
  },
  {
    title: 'Post-Quantum Secure Medical Platform',
    description: 'A secure medical platform implementing end-to-end encryption and post-quantum cryptography to protect sensitive patient data against current and future threats.',
    image: postQuantumMedicalImg,
    tech: ['Python', 'Node.js', 'React', 'CRYSTALS-Kyber', 'CRYSTALS-Dilithium', 'End-to-End Encryption'],
    demo: '',
    github: '',
    metrics: 'Enabled secure handling of sensitive medical records with post-quantum encryption',
    domains: ['Dev', 'PQC']
  }
];


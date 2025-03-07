import React from "react";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Web3 Developer & Software Engineer
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Building the future of decentralized applications with modern web
          technologies
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <SocialLink
            href="https://github.com/Zahra-Elair"
            icon={<Github />}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/Zahra-Elair/"
            icon={<Linkedin />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://x.com/ZahraElair"
            icon={<Twitter />}
            label="Twitter"
          />
        </div>
        <button
          onClick={scrollToAbout}
          className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

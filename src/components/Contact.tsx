import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          I'm always open to discussing new projects and opportunities.
        </p>
        <div className="flex justify-center space-x-8 mb-12">
          <SocialLink
            href="mailto:zahraelair17@gmail.com"
            icon={<Mail />}
            label="Email"
            text="Email"
          />
          <SocialLink
            href="https://github.com/Zahra-Elair"
            icon={<Github />}
            label="GitHub"
            text="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/Zahra-Elair/"
            icon={<Linkedin />}
            label="LinkedIn"
            text="LinkedIn"
          />
          <SocialLink
            href="https://x.com/ZahraElair"
            icon={<Twitter />}
            label="Twitter"
            text="Twitter"
          />
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      aria-label={label}
    >
      <span className="mb-2">{icon}</span>
      <span className="text-sm">{text}</span>
    </a>
  );
}

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { personalInfo } from "./personal/data";

export default function Contact() {
  const { contact } = personalInfo;

  const links = [
    { href: contact.linkedin, icon: <Linkedin />, label: "LinkedIn" },
    { href: contact.github, icon: <Github />, label: "GitHub" },
  ];

  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="mb-4 font-mono text-sm text-accent">05</p>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Let's build something together.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {personalInfo.availability.long} The fastest way to reach me is
          email or WhatsApp.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
          <a
            href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${contact.phone}`}
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp {contact.phone}
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink [&>svg]:h-4 [&>svg]:w-4"
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-20 border-t border-line pt-6 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {personalInfo.name} · {contact.location}
        </p>
      </div>
    </footer>
  );
}

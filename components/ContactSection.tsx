import { Mail, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const contacts = [
  {
    icon: Mail,
    label: "Correo",
    value: "marteagaz10@outlook.com",
    href: "mailto:marteagaz10@outlook.com",
  },
  { icon: FaLinkedin, label: "LinkedIn", value: "/marco-dev-816180328", href: "https://www.linkedin.com/in/marco-dev-816180328/" },
  { icon: SiGithub, label: "GitHub", value: "github.com/marco-unemi", href: "https://github.com/marco-unemi" },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-20 py-40 px-10 border-t sm:flex items-center border-border md:grid md:grid-cols-[0.8fr_1.2fr]">
      <div className="md:col-span-1 mr-5">
        <p className="font-mono text-md tracking-wide text-accent mb-1.5">
          contacto
        </p>
        <h2 className="font-display text-2xl md:text-4xl text-text mb-2">Hablemos</h2>
        <p className="font-body text-text-muted leading-relaxed mb-6 max-w-sm">
          Si te interesa trabajar en un proyecto, tienes alguna idea o
          simplemente quieres saludar, ¡estaré encantado de conversar!
        </p>
      </div>

      <div className="md:col-span-1">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-3 mb-4">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-surface border border-border rounded-xl p-3.5 w-full flex items-center gap-3 hover:border-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-lg bg-badge-bg flex items-center justify-center text-accent shrink-0">
                <Icon size={16} />
              </span>
              <span className="min-w-0">
                <span className="block font-body text-xs font-medium text-text">
                  {label}
                </span>
                <span className="block font-mono text-xs text-text-muted truncate">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <a
          href="mailto:marteagaz10@outlook.com"
          className="inline-flex items-center gap-2 font-body font-medium text-accent-ink bg-accent px-4 py-2.5 mt-10 rounded-lg transition-colors duration-200 hover:opacity-80"
        >
          Enviarme un mensaje
          <Send size={14} />
        </a>
      </div>

    </section>
  );
}
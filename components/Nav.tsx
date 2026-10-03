"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "proyectos", label: "Proyectos", href: "#proyectos" },
  { id: "stack", label: "Stack", href: "#stack" },
  { id: "certificados", label: "Certificados", href: "#certificados" },
  { id: "sobre-mi", label: "Sobre mi", href: "#sobre-mi" },
  { id: "contacto", label: "Contacto", href: "#contacto" }
]

export default function Nav() {

  const [active, setActive ] = useState("inicio");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md flex justify-between items-center px-5 py-4 border-b border-border">

      <a href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" width={60} height={40} />
        <span className="font-display text-3xl text-text">Marco Arteaga</span>  
      </a>

      <div className="flex gap-10 text-md text-text-muted">
        { links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={
              active === link.id
              ? "text-accent font-medium border-b border-accent"
              : "text-text-muted"
            }
          >
            { link.label }
          </a>
        ))}
      </div>
    </nav>
  );
}
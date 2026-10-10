"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

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

  const linkClass = (id: string) =>
    active === id ? "text-accent font-medium border-b border-accent" : "text-text-muted";

  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">

      <div className="flex justify-between items-center px-5 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" width={60} height={40} />
          <span className="font-display text-2xl md:text-3xl text-text">Marco Arteaga</span>  
        </a>

        <div className="hidden lg:flex gap-10 text-md">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={linkClass(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-text"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        
      </div>

      {open && (
        <div
          id="menu-movil"
          className="lg:hidden absolute top-full left-0 right-0 bg-bg border-b border-border px-5 py-2 flex flex-col"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`py-3 text-sm ${linkClass(link.id)}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}
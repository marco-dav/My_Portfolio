import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Projects() {
  const otherProjects = projects.slice(0, 4);

  return (
    <section id="proyectos" className="scroll-mt-20 px-10 py-25 border-t border-border">
      <p className="font-mono text-md tracking-wide text-accent mb-1.5">
        Mis Proyectos
      </p>
      <h2 className="font-display text-xl text-text mb-3.5">
        Algunos de mis trabajos recientes y proyectos personales que he desarrollado.
      </h2>

      <a href="#" className="flex gap-1 justify-end items-center font-mono text-sm text-accent hover:text-accent-hover">
        Ver todos
        <SquareArrowOutUpRight size={16} />
      </a>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {otherProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
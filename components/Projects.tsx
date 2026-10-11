import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { SquareArrowOutUpRight } from "lucide-react";

const MAX_VISIBLE = 4;

export default function Projects() {
  const visibleProjects = projects.slice(0, MAX_VISIBLE);
  const hasMore = projects.length > MAX_VISIBLE;

  return (
    <section id="proyectos" className="scroll-mt-20 px-10 py-25 border-t border-border">
      <p className="font-mono text-md tracking-wide text-accent mb-1.5">
        Mis Proyectos
      </p>
      <h2 className="font-display text-xl text-text mb-3.5">
        Algunos de mis trabajos recientes y proyectos personales que he desarrollado.
      </h2>

      {hasMore && (
        <Link
          href="/proyectos"
          className="flex gap-1 justify-end items-center font-mono text-xs text-accent hover:text-accent/80"
        >
          Ver todos
          <SquareArrowOutUpRight size={16} />
        </Link>
      )}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
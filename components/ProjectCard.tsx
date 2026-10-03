import { Project } from "@/data/projects";
import { SquareArrowOutUpRight } from "lucide-react";


type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 justify-between flex flex-col hover:border-accent transition-colors">
      <span className="font-mono w-37 text-xs text-accent bg-badge-bg border border-badge-border px-2 py-0.5 rounded-md">
        proyecto destacado
      </span>

      <div className="py-5">
        <img src={`/PROJECTS/${project.slug}.png`} alt={project.title} className="w-full h-full object-fit rounded-md" />
      </div>
      
      <h3 className="font-display text-base text-text mt-2.5 mb-1">{project.title}</h3>
      <p className="font-body text-xs text-text-muted leading-relaxed mb-2.5">
        {project.description}
      </p>

      <div className="flex gap-1.5 flex-wrap mb-2.5">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs text-text-muted bg-tag-bg px-2 py-0.5 rounded-md">
            {t}
          </span>
        ))}
      </div>
      {project.caseStudyUrl && (
        <a href={project.caseStudyUrl} className="flex justify-end items-center gap-1 pt-3 font-body text-sm font-medium text-accent">
          Ver caso de estudio
          <SquareArrowOutUpRight size={16} />
        </a>  
      )}
    </div>
  );
}
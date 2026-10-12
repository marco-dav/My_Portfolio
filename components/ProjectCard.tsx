import Link from "next/link";
import { Project } from "@/data/projects";
import Image from "next/image";
import { SquareArrowOutUpRight, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";


type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface border border-border grid-rows-4 rounded-xl p-4 justify-between flex flex-col hover:border-accent transition-colors">
      {project.featured && (
        <div className="relative">
            <span className="font-mono absolute bottom-1 w-37 text-xs text-accent bg-badge-bg border border-badge-border px-2 py-0.5 rounded-md">
              proyecto destacado
            </span>
        </div>
      )}

      <div className="relative aspect-video overflow-hidden rounded-md">
        <Image 
          src={`/PROJECTS/${project.slug}.png`} 
          alt={project.title}
          fill
          sizes="h-full w-full"
          className="object-cover"
          priority
        />
      </div>
      
      <div className="my-3">
        <h3 className="font-display text-base text-text">{project.title}</h3>
      </div>

      <div className="my-3">
        <p className="font-body text-xs text-text-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs text-text-muted bg-tag-bg px-2 py-0.5 rounded-md">
            {t}
          </span>
        ))}
      </div>

      {(project.repoUrl || project.caseStudyUrl) && (
        <div className="mt-4 flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
          {project.repoUrl && (
            <Link 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 font-body text-sm font-medium text-accent"
            >
              Ver código
              <SquareArrowOutUpRight size={14} />
            </Link>
          )}
          {project.caseStudyUrl && (
            <Link
              href={project.caseStudyUrl}
              className="flex items-center gap-1.5 font-body text-sm font-medium text-accent"
            >
              Ver caso de estudio
              <SquareArrowOutUpRight size={14} />
            </Link>
          )}
        </div>
      )}

    </div>
  );
}
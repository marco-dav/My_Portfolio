import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpLeft, ChevronRight, Fullscreen } from "lucide-react";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "InsightBI — Caso de estudio | Marco Arteaga",
  description:
    "Sistema web de BI conversacional basado en NL2SQL: flujo, arquitectura y resultados.",
};

const REPO = "https://github.com/marco-unemi/InsightBI";

const facts = [
  { label: "tipo", value: "Proyecto de titulación" },
  { label: "institución", value: "UNEMI" },
  { label: "equipo", value: "En pareja" },
  { label: "stack", value: "FastAPI · Next.js · PostgreSQL" },
];

const stats = [
  { label: "registros de hechos", value: "94.970" },
  { label: "pruebas backend", value: "120" },
  { label: "pruebas frontend", value: "88" },
  { label: "cobertura SQL Guard", value: "97%" },
];

const screenshots = [
  {
    src: "/PROJECTS/insightbi.png",
    alt: "Dashboard de InsightBI con widgets de análisis de ventas",
    caption: "Dashboard con widgets",
  },
  {
    src: "/PROJECTS/insightbi-ETL.png",
    alt: "Panel del ETL de InsightBI mostrando el progreso de la carga",
    caption: "Carga de datos con ETL",
  },
  {
    src: "/PROJECTS/insightbi-AI.png",
    alt: "Asistente de InsightBI respondiendo con un gráfico de líneas la pregunta sobre el total de ventas por trimestre de 2025",
    caption: "Asistente conversacional con NL2SQL",
    tall: true,
  },
];

const flow = [
  { title: "Pregunta", text: "El gerente pregunta en lenguaje natural." },
  { title: "NL2SQL", text: "Un modelo de OpenAI genera la consulta SQL." },
  {
    title: "SQL Guard",
    text: "Valida el SQL. Si falla, lo corrige y lo revalida.",
    highlight: true,
  },
  {
    title: "Data Mart",
    text: "La consulta corre sobre el esquema estrella en PostgreSQL.",
  },
  {
    title: "Dashboard",
    text: "El resultado es un widget, con análisis ejecutivo por IA.",
  },
];

const layers = [
  {
    name: "backend",
    text: "Monolito modular con Repository Pattern: Router → Service → Repository → Base de datos.",
    tech: ["FastAPI", "Python 3.12", "SQLAlchemy async"],
  },
  {
    name: "frontend",
    text: "Interfaz tipada con estado en Zustand y visualizaciones en Chart.js.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "Chart.js"],
  },
  {
    name: "datos",
    text: "Data Mart dimensional con esquema estrella. ETL desde AdventureWorks, disparado por un administrador, con progreso en tiempo real.",
    tech: ["PostgreSQL", "SQL Server", "AWS RDS"],
  },
  {
    name: "seguridad",
    text: "Dos roles, Administrador y Gerente, con permisos. Todo SQL generado por la IA pasa por el SQL Guard.",
    tech: ["JWT", "Redis", "RBAC"],
  },
  {
    name: "ia",
    text: "NL2SQL y análisis ejecutivo por widget y por dashboard.",
    tech: ["OpenAI"],
  },
];

const outOfScope = [
  "Módulo de alertas",
  "Métrica cuantitativa de exactitud del NL2SQL",
  "Validación de usabilidad con usuarios reales",
];

type SectionHeadingProps = {
  label: string;
  title: string;
  children?: React.ReactNode;
};

function SectionHeading({ label, title, children }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent-light">
        {label}
      </p>
      <h2 className="mb-3 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function InsightBICaseStudy() {
  return (
    <main className="px-5 md:px-10">
      <Container>
        <header className="flex items-center justify-between border-b border-border py-3">
          <Link
            href="/#proyectos"
            className="inline-flex min-h-11 items-center font-mono text-xs text-text-muted"
          >
            ~/proyectos/<span className="text-text">insightbi</span>
          </Link>
          <a
            href="/#proyectos"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border-strong px-4 font-body text-sm font-medium text-text"
          >
            <ArrowUpLeft size={14} />
            Volver a proyectos
          </a>
        </header>

        <section className="flex flex-col gap-12 pb-16 pt-20 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 md:flex-1">
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent-light">
              caso de estudio
            </p>
            <h1 className="mb-6 font-display text-6xl font-medium leading-none tracking-tight md:text-8xl">
              Insight<span className="text-accent">BI</span>
            </h1>
            <p className="max-w-xl font-body text-lg leading-relaxed text-text-soft">
              BI conversacional basado en NL2SQL: del lenguaje natural a un
              dashboard, con el SQL validado en el camino.
            </p>
          </div>
          <div className="w-full rounded-xl border border-border bg-surface p-6 md:w-96">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-text-muted flex items-center justify-center">
              ficha
            </p>
            <dl>
              {facts.map(({ label, value }) => (
                <div key={label} className="flex gap-4 border-t border-border py-2">
                  <dt className="w-24 shrink-0 font-mono text-xs text-text-muted">
                    {label}
                  </dt>
                  <dd className="font-body text-sm text-text">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-border">
          <dl className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {stats.map(({ label, value }) => (
              <div key={label} className="bg-bg p-6">
                <dt className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">
                  {label}
                </dt>
                <dd className="font-display text-4xl font-medium leading-none tracking-tight text-accent">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-16">
          <div className="grid gap-4 md:grid-cols-[5fr_3fr]">
            {screenshots.map(({ src, alt, caption, tall }) => (
              <figure
                key={src}
                className={
                  tall
                    ? "mx-auto flex w-full max-w-xs flex-col md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-none"
                    : "md:col-start-1"
                }
              >
                <div
                  className={`relative overflow-hidden rounded-xl border border-border bg-surface m-2 ${tall ? "aspect-[1/2] flex-1 md:aspect-auto" : "aspect-video"
                    }`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={
                      tall
                        ? "(min-width: 768px) 35vw, 320px"
                        : "(min-width: 768px) 60vw, 100vw"
                    }
                    className={tall ? "object-fit object-center transition-all duration-300 hover:scale-105 cursor-pointer" : "object-fit object-center transition-all duration-300 hover:scale-105 cursor-pointer"}
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs text-text-muted">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="pt-24">
          <SectionHeading
            label="01 — flujo"
            title="Qué pasa cuando alguien hace una pregunta"
          >
            <p className="max-w-xl font-body text-base leading-relaxed text-text-muted">
              Cinco pasos entre la pregunta y el dashboard. El SQL Guard es el
              que protege a la base de datos de lo que genera la IA.
            </p>
          </SectionHeading>

          <ol className="flex flex-col items-stretch gap-3 md:flex-row md:gap-0">
            {flow.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && (
                  <li
                    aria-hidden="true"
                    className="hidden items-center justify-center md:flex md:w-7 md:shrink-0"
                  >
                    <ChevronRight size={16} className="text-text-muted" />
                  </li>
                )}
                <li
                  className={`min-w-0 flex-1 rounded-xl border p-5 ${step.highlight
                      ? "border-accent bg-badge-bg"
                      : "border-border bg-surface"
                    }`}
                >
                  <p
                    className={`mb-3.5 font-mono text-xs ${step.highlight ? "text-accent-light" : "text-text-muted"
                      }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2 font-display text-lg font-medium">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-text-muted">
                    {step.text}
                  </p>
                </li>
              </Fragment>
            ))}
          </ol>
        </section>

        <section className="pt-24">
          <SectionHeading label="02 — capas" title="Arquitectura" />

          <figure
            key='/PROJECTS/insightbi-architecture.svg'
            className="block overflow-hidden m-4 pb-4"
          >
            <div className="flex relative aspect-video items-center justify-center rounded-2xl border border-dashed border-border-strong p-5">
              <Image
                src="/PROJECTS/insightbi-architecture.svg"
                alt="Arquitectura de InsightBI"
                fill
                sizes="(min-width: 1028px) 60vw, 100vw"
                className="object-contain p-5"
              />
            </div>
            <figcaption className="mt-3 font-mono text-xs text-text-muted">
              Arquitectura de InsightBI
            </figcaption>
          </figure>

          <div className="border-b border-border">
            {layers.map((layer) => (
              <div
                key={layer.name}
                className="flex flex-col gap-4 border-t border-border py-7 md:flex-row md:gap-10"
              >
                <p className="pt-1 font-mono text-xs uppercase tracking-widest text-text-muted md:w-36 md:shrink-0">
                  {layer.name}
                </p>
                <p className="font-body text-sm leading-relaxed text-text-soft md:flex-1">
                  {layer.text}
                </p>
                <ul className="flex flex-wrap content-start gap-2 md:flex-1">
                  {layer.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg bg-tag-bg px-3 py-1.5 font-mono text-xs text-text-soft"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <SectionHeading label="03 — alcance" title="Un estudio de caso acotado" />
          <p className="mb-4 font-mono text-xs text-text-muted">
            {"// fuera de alcance"}
          </p>
          <ul className="flex max-w-xl flex-col gap-2.5">
            {outOfScope.map((item) => (
              <li key={item} className="font-body text-sm text-text-soft">
                <span className="mr-3 font-mono text-text-muted" aria-hidden="true">
                  –
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-6">
          <Link
            href="/#proyectos"
            className="inline-flex min-h-11 items-center gap-2 font-body text-sm text-text-muted"
          >
            <ArrowLeft size={14} />
            Volver a proyectos
          </Link>
        </footer>
      </Container>
    </main>
  );
}
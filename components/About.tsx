import { Code2, TrendingUp, Users } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Enfoque en datos",
    description: "ETL, modelado dimensional y NL2SQL, no solo código.",
  },
  {
    icon: TrendingUp,
    title: "Siempre aprendo",
    description: "Cursos completados en Coursera, sumando stack nuevo.",
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description:
      "Desarrollé InsightBI en pareja, de la arquitectura a la sustentación.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 px-10 py-30 border-t sm:flex items-center border-border md:grid md:grid-cols-[0.8fr_1.2fr]">
      <div className="md:col-span-1 mr-5">
        <p className="font-mono text-md tracking-wide text-accent mb-1.5">
          sobre mí
        </p>
        <h2 className="font-display text-xl text-text mb-3">
          Un poco sobre mí
        </h2>
        <p className="font-body text-text-muted leading-relaxed mb-6 max-w-md">
          Ingeniero de Software egresado de UNEMI, especializado en Datos y
          Business Intelligence. Construí InsightBI, un sistema de BI
          conversacional con NL2SQL, como proyecto de titulación (nota 96).
        </p>
      </div>

      <div className="md:col-span-1">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-3">
          {traits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-surface border border-border rounded-xl p-3.5"
            >
              <span className="w-8 h-8 rounded-lg bg-badge-bg flex items-center justify-center text-accent mb-2.5">
                <Icon size={16} />
              </span>
              <h3 className="font-display text-sm text-text mb-1">{title}</h3>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
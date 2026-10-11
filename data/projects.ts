export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  featured: boolean;
  repoUrl?: string;
  caseStudyUrl?: string;
  stats?: {label: string; value: string}[]
};

export const projects: Project[] = [
  {
    slug: "insightbi",
    title: "InsightBI",
    description:
      "BI conversacional con NL2SQL: preguntas en lenguaje natural, SQL validado y dashboards en tiempo real.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "SQL Server", "AWS"],
    featured: true,
    repoUrl: "https://github.com/marco-unemi/InsightBI",
    caseStudyUrl: "/proyectos/insightbi",
    stats: [
      { label: "registros", value: "94.970" },
      { label: "cobertura SQL Guard", value: "97%" },
    ],
  },
  {
    slug: "ventas-python",
    title: "Ventas Python",
    description: "Simulación de un CRUD de ventas con Python. Permite crear, leer, actualizar y eliminar registros de clientes, productos y ventas.",
    tech: ["Python"],
    featured: false,
    repoUrl: "https://github.com/marco-unemi/Ventas_Python",
    caseStudyUrl: "https://github.com/marco-unemi/Ventas_Python"
  },
  {
    slug: "totalmath",
    title: "TotalMath",
    description: "Aplicación de matemáticas desarrollada en Python. Permite resolver y visualizar problemas de álgebra, cálculo, sistemas lineales, modelos epidemiológicos y más.",
    tech: ["Python", "CustomTkinter", "Matplotlib", "NumPy", "Pandas"],
    featured: false,
    caseStudyUrl: "https://github.com/marco-unemi/Calculadora.git"
  },
];
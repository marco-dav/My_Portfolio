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
    caseStudyUrl: "/projects/insightbi/",
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
    repoUrl: "https://github.com/marco-unemi/Ventas_Python"
  },
  {
    slug: "totalmath",
    title: "TotalMath",
    description: "Aplicación de matemáticas que permite resolver y visualizar problemas de álgebra, cálculo, sistemas lineales, y más.",
    tech: ["Python", "CustomTkinter", "Matplotlib", "NumPy", "Pandas"],
    featured: false,
    repoUrl: "https://github.com/marco-unemi/Calculadora.git"
  },
];
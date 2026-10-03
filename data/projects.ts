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
    tech: ["FastAPI", "Next.js", "PostgreSQL"],
    featured: true,
    repoUrl: "https://github.com/marco-unemi/InsightBI",
    caseStudyUrl: "/proyectos/insightbi",
    stats: [
      { label: "registros", value: "94.970" },
      { label: "cobertura SQL Guard", value: "97%" },
    ],
  },
  {
    slug: "fullmarket",
    title: "Fullmarket",
    description: "E-commerce con Django REST + React, carrito y pagos.",
    tech: ["Django REST", "React", "PostgreSQL"],
    featured: false,
    caseStudyUrl: "/proyectos/insightbi"
  },
  {
    slug: "data-warehouse",
    title: "Data warehouse",
    description: "Modelo estrella en SQL Server para atención al cliente.",
    tech: ["SQL Server"],
    featured: false,
    caseStudyUrl: "/proyectos/insightbi"
  },
  {
    slug: "data-warehouse-2",
    title: "Data warehouse 2",
    description: "Modelo estrella en SQL Server para ventas.",  
    tech: ["SQL Server"],
    featured: false,
    caseStudyUrl: "/proyectos/insightbi"
  },
  {
    slug: "data-warehouse-3",
    title: "Data warehouse 3",
    description: "Modelo estrella en SQL Server para inventario.",
    tech: ["SQL Server"],
    featured: false,
    caseStudyUrl: "/proyectos/insightbi"
  },
  {
    slug: "data-warehouse-4",
    title: "Data warehouse 4",
    description: "Modelo estrella en SQL Server para compras.",
    tech: ["SQL Server"],
    featured: false,
    caseStudyUrl: "/proyectos/insightbi"
  },
];
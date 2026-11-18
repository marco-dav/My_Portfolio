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
    slug: "hr-adventureworks",
    title: "HR AdventureWorks",
    description: "DataMart de Human Resources de AdventureWorks para análisis de recursos humanos.",
    tech: ["SQL Server", "Visual Studio", "SSIS", "SSAS", "Power BI"],
    featured: false,
    repoUrl: "https://github.com/marco-dav/DW_HR_AdventureWorks.git"
  },
  // {
  //   slug: "totalmath",
  //   title: "TotalMath",
  //   description: "Aplicación de matemáticas que permite resolver y visualizar problemas de álgebra, cálculo, sistemas lineales, y más.",
  //   tech: ["Python", "CustomTkinter", "Matplotlib", "NumPy", "Pandas"],
  //   featured: false,
  //   repoUrl: "https://github.com/marco-unemi/Calculadora.git"
  // },
];
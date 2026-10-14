export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  previewUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "SQL Foundations",
    issuer: "Coursera",
    date: "Agosto 2026",
    url: "https://coursera.org/verify/MFFL4IJQ0J7A",
    previewUrl: "/CERTIFICADOS/SQL_Foundations.pdf",
  },
  {
    title: "Data Manipulation and Transactions in SQL Server",
    issuer: "Coursera",
    date: "Agosto 2026",
    url: "https://coursera.org/verify/CNUEBDIYU827",
    previewUrl: "/CERTIFICADOS/Data_Manipulation_and_Transactions_in_SQL_Server.pdf",
  },
  {
    title: "Data Cleaning & Processing with Copilot in Excel",
    issuer: "Coursera",
    date: "Agosto 2026",
    url: "https://coursera.org/verify/Q4RYA2LXQBPZ",
    previewUrl: "/CERTIFICADOS/Data_Cleaning_&_Processin_with_Copilot_in_Excel.pdf",
  },
  // {
  //   title: "Advanced Data Analysis & Visualization with Copilot in Excel",
  //   issuer: "Coursera",
  //   date: "Octubre 2026",
  //   url: "https://1drv.ms/b/",
  //   previewUrl: "/CERTIFICADOS/excel-santander.pdf",
  // },
  // {
  //   title: "Data Analysis and Visualization with Power BI",
  //   issuer: "Coursera",
  //   date: "Octubre 2026",
  //   url: "https://1drv.ms/b/",
  //   previewUrl: "/CERTIFICADOS/excel-santander.pdf",
  // },
  {
    title: "Excel",
    issuer: "Santander Open Academy",
    date: "Septiembre 2026",
    url: "https://marco-arteaga.vercel.app/CERTIFICADOS/excel-santander.pdf",
    previewUrl: "/CERTIFICADOS/excel-santander.pdf",
  },
];
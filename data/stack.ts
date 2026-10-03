import { ComponentType } from "react";
import { SiGit, SiGithub, SiJavascript, SiPython } from "react-icons/si";
import { BarChart3, Database, Network, Workflow } from "lucide-react";
import { FaFileExcel } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export type StackItem = {
  name: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

export const stack: StackItem[] = [
  { name: "Python", icon: SiPython },
  { name: "Excel", icon: FaFileExcel },
  { name: "SQL Server", icon: Database },
  { name: "ETL", icon: Workflow },
  { name: "Power BI", icon: BarChart3 },
  { name: "Modelado multidimensional", icon: Network },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Visual Studio Code", icon: VscVscode },
];
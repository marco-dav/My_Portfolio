import { ComponentType } from "react";

type ButtonProps = {
  href: string;
  variant: "filled" | "ghost";
  children: React.ReactNode;
  newTab?: boolean;
  icon?: ComponentType<{ size?: number }>;
};

export default function Button({ 
  href, 
  variant, 
  children, 
  newTab, 
  icon: Icon 

}: ButtonProps) {
  const base = "px-4 py-2 rounded-lg font-medium font-body flex items-center gap-1.5 transition-colors duration-200 hover:opacity-80";
  const styles =
    variant === "filled"
      ? "bg-accent text-text-ink"
      : "bg-transparent text-text border border-accent";

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
      {Icon && <Icon size={14} />}
    </a>
  );
}
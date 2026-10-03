import Image from "next/image";
import Button from "@/components/Button";

export default function Footer() {
  return (
    <footer className="bg-bg/90 backdrop-blur-md flex justify-center items-center px-5 py-5 border-t border-border">
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="Logo" width={50} height={30} />
        <span className="font-display text-md text-text">Marco Arteaga</span>
        <span className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
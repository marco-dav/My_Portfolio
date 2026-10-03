import Image from "next/image";
import Button from "@/components/Button";
import { FolderGit2, FileText } from "lucide-react";


export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-20 p-10 md:flex md:items-center md:gap-10 md:px-10 md:py-16">
      <div className="md:flex-1">
        <p className="font-mono text-accent mb-2 border border-accent p-1 rounded-xl w-fit px-3">
          Desarrollador de Datos & BI
        </p>

        <h1 className="text-2xl md:text-4xl text-text mb-2 leading-tight">
          Hola, soy <br /> 
          <span className="font-semibold text-accent">Marco Arteaga</span>
        </h1>

        <p className="font-body text-text-muted leading-relaxed mb-5">
          Desarrollador apasionado por los datos, el BI y la creación de soluciones limpias y eficientes.
        </p>

        <div className="flex gap-5 mb-5">
          <Button href="#proyectos" variant="filled" icon={FolderGit2}>
            Ver proyectos
          </Button>
          <Button href="/CV/CV_MARCO_ARTEAGA.pdf" variant="ghost" newTab icon={FileText}>
            Ver CV
          </Button>
        </div>

      </div>

      <div className="relative mt-10 md:mt-0 md:flex-1 flex justify-center">
        <div className="absolute w-56 h-56 bg-accent/20 rounded-full blur-3xl" />
        <div className="relative w-4xl h-128">
          <Image
            src="/photo.png"
            alt="Foto de Marco Arteaga"
            fill
            sizes="1028px"
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute bottom-40 right-10 bg-badge-bg border border-badge-border rounded-xl px-3 py-2.5 animate-float">
          <p className="font-mono text-xs text-text-muted leading-relaxed">
            const <span className="text-accent">dev</span> = {"{"}
            <br />
            &nbsp;&nbsp;stack: [<span className="text-accent">&quot;Python&quot;,&quot;SQL&quot;,&quot;ETL&quot;,&quot;Power BI&quot;</span>],
            <br />
            &nbsp;&nbsp;focus: <span className="text-accent">&quot;BI &amp; Data&quot;</span>
            <br />
            {"}"}
          </p>
        </div>
      </div>
    </section>
  );
}
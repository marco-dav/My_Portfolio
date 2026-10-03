import { stack } from "@/data/stack";

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 px-10 py-25 border-t border-border">
      <p className="font-mono text-md tracking-wide text-accent mb-1.5">
        mis habilidades
      </p>
      <h2 className="font-display text-xl text-text mb-4">
        Tecnologías y herramientas
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5 my-10">
        {stack.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="bg-surface border border-border rounded-xl p-4 flex flex-col items-center gap-5 "
          >
            <Icon size={64} className="text-accent" />
            <span className="font-body text-xs text-text-muted">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
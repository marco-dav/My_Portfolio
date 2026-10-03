import { certificates } from "@/data/certificates";
import CertificateCard from "@/components/CertificateCard";

export default function Certificates() {
  return (
    <section id="certificados" className="scroll-mt-20 px-10 py-25 border-t border-border">
      <p className="font-mono text-md tracking-wide text-accent mb-1.5">
        certificados
      </p>

      <h2 className="font-display text-xl text-text mb-3.5">
        Formación complementaria
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.title} certificate={certificate} />
        ))}
      </div>
    </section>
  );
}
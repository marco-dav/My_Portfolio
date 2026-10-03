import { Certificate } from "@/data/certificates";
import { SquareArrowOutUpRight } from "lucide-react";

type CertificateCardProps = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const canVerify = certificate.url?.startsWith("http");

  return (
    <div className="bg-surface border border-border rounded-xl p-4 flex flex-col justify-between hover:border-accent transition-colors">
      {certificate.previewUrl && (
        <iframe
          src={certificate.previewUrl}
          title={`Vista previa del certificado ${certificate.title}`}
          className="mb-4 h-48 w-full rounded-md border border-border bg-bg"
        />
      )}

      <h3 className="font-display text-sm text-text">{certificate.title}</h3>

      <p className="font-body text-xs text-text-muted mt-0.5">
        {certificate.issuer} · {certificate.date}
      </p>

      {canVerify && (
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex justify-end items-center gap-1 pt-3 font-body text-sm font-medium text-accent"
        >
          Ver certificado
          <SquareArrowOutUpRight size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
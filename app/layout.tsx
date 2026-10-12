import "./globals.css";
import { spaceGrotesk, inter, jetbrainsMono } from '@/lib/fonts';
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Marco Arteaga | Desarrollador de Datos y BI",
  description: "Portafolio de Marco Arteaga: BI conversacional, ETL y análisis de datos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-body">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

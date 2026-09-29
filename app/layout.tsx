import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "RAMOS & ASOCIADOS | Abogados · Derecho Laboral",
  description: "RAMOS & ASOCIADOS. Abogados. Una práctica jurídica enfocada en el análisis, la estrategia y el Derecho Laboral. Sitio conceptual con datos ficticios.",
  openGraph: { title: "RAMOS & ASOCIADOS | Abogados · Derecho Laboral", description: "RAMOS & ASOCIADOS. Análisis, estrategia y Derecho Laboral. Presentación conceptual.", type: "website", locale: "es_AR" },
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="es-AR" className={`${cormorant.variable} ${manrope.variable}`}><body>{children}</body></html>;
}

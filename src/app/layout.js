"use client";

import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname(); 

  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Keys-RH - Agence intérimaire de confiance offrant des solutions de placement et d'emploi sur mesure." />
        <meta name="keywords" content="agence intérimaire, emploi, recrutement, travail temporaire, placement, RH" />
        <meta name="author" content="Keys-RH" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Keys - Intérim & Recrutement | Agence Intérimaire et Solutions RH</title>
      </head>
      <body>
        <Header />
        <div style={{ paddingTop: pathname !== "/" ? "101.27px" : "0" }}> 
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr" className="scroll-pt-[130px] xl:scroll-pt-[208px] scroll-smooth">
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Keys-RH - Agence intérimaire de confiance offrant des solutions de placement et d'emploi sur mesure."
      />
      <meta
        name="keywords"
        content="agence intérimaire, emploi, recrutement, travail temporaire, placement, RH"
      />
      <meta name="author" content="Keys-RH" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <body style={{ overflowX: "hidden" }}>
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}

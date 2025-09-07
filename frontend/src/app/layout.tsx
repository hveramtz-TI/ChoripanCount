import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LenisProvider from "./components/LenisProvider/LenisProvider";
export const metadata: Metadata = {
  title: "choripan count",
  description: "¿Cuánta comida puedo comprar por el valor de X producto?",
  icons: '/icon.png',
  authors: [{ name: "hveramtz", url: "https://hveramtz.dev" }],
  creator: "hveramtz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Script de Google AdSense, reemplaza TU_ID_DE_CLIENTE */}
        <script
          data-ad-client="TU_ID_DE_CLIENTE"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </head>
      <body>
        <LenisProvider>
          <div className={styles.layoutContainer}>
            <Header />
            <div className={styles.layoutGrid}>
              {/* Columna izquierda: Anuncio */}
              <aside className={styles.layoutAside}>
                <div>
                  {/* Bloque de anuncio AdSense */}
                  <ins className="adsbygoogle"
                    style={{ display: "block", width: 160, height: 600 }}
                    data-ad-client="TU_ID_DE_CLIENTE"
                    data-ad-slot="TU_SLOT_IZQUIERDO"
                    data-ad-format="auto"></ins>
                  <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
                </div>
              </aside>
              {/* Columna central: Contenido */}
              <main className={styles.layoutMain}>{children}</main>
              {/* Columna derecha: Anuncio */}
              <aside className={styles.layoutAside}>
                <div>
                  {/* Bloque de anuncio AdSense */}
                  <ins className="adsbygoogle"
                    style={{ display: "block", width: 160, height: 600 }}
                    data-ad-client="TU_ID_DE_CLIENTE"
                    data-ad-slot="TU_SLOT_DERECHO"
                    data-ad-format="auto"></ins>
                  <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
                </div>
              </aside>
            </div>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}

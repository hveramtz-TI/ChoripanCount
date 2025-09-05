import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "choripan count",
  description: "¿Cuánta comida puedo comprar por el valor de X producto?",
  icons:
  {
    icon: "/icon.png",
  }
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr",
            minHeight: "100dvh",
            gap: "1rem",
            background: "black"
          }}
        >
          {/* Columna izquierda: Anuncio */}
          <aside style={{ display: "flex", justifyContent: "center", alignItems: "start", padding: "1rem 0" }}>
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
          <main style={{ padding: "1rem 0" }}>{children}</main>
          {/* Columna derecha: Anuncio */}
          <aside style={{ display: "flex", justifyContent: "center", alignItems: "start", padding: "1rem 0" }}>
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
      </body>
    </html>
  );
}

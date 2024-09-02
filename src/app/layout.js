import { Inter } from "next/font/google";
import "./globals.css";
import imagen from './assets/logoamazon.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazon Ofertas",
  description: "Ofertas generadas en la Web",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta property="og:image" content={imagen} />
        <meta name="Descubre todas las ofertas que tenemos para ti en Amazon Prime,Electronica,Juguetes,Ropa.Ofertas y promociones de hoy " content="Ofertas generadas en la Web" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Amazon Ofertas" />
        <meta property="og:description" content="Ofertas y promociones" />
        
              
        <title>Amazon Ofertas</title>
        
      </head>
      <body className={inter.className}>{children}</body>
     
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NBVLCKCM"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    </html>
  );
}

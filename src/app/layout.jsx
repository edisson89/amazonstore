/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/** @format */

import { Inter } from "next/font/google"
import "./globals.css"
import imagen from "./assets/logoamazon.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Amazon Ofertas",
	description: "Ofertas generadas en la Web",
}

export default function RootLayout({ children }) {
	
	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-NBVLCKCM"
					height='0'
					width='0'
					style={{display:'none', visibility:'hidden'}}
				></iframe>
			</noscript>
				<link
					rel="icon"
					href="./favicon.ico"
					type="image/x-icon"
				></link>
				<meta
					property="og:image"
					content={imagen}
				/>
				<meta
					name="Descubre todas las ofertas que tenemos para ti en Amazon Prime,Electronica,Juguetes,Ropa.Ofertas y promociones de hoy "
					content="Ofertas generadas en la Web"
				/>
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					property="og:title"
					content="Amazon Ofertas"
				/>
				<meta
					property="og:description"
					content="Ofertas y promociones"
				/>

				<title>Amazon Ofertas</title>
				
				
			</head>
			
			<body className={inter.className}>{children}</body>
			
			
		</html>
	)
}

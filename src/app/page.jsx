/** @format */
"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "./page.module.css"
import image from "./assets/amazon-ar21.svg"
import Cards from "./components/cards"

export default function Home() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.logocontain}>
					<a
						href="https://amzn.to/4dnkRpX"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							priority={true}
							className={styles.logo}
							src={image}
							alt="amazon logo"
							width={350}
							height={200}
						/>
					</a>
				</div>
				<a href="https://www.amazonofertas.live/">
					<h1 className={styles.title}>Amazon Ofertas </h1>
				</a>
				{/* <div className={styles.nav}>
					<button onClick={toggleMenu}>{isOpen ? "Cerrar" : "Menú"}</button>
					<ul className={isOpen ? "show" : ""}>
						<li>
							<a href="https://amzn.to/3SLPWMc">
								<h2>Enviar a user</h2>
							</a>
						</li>
						<li>Buscar Amazon</li>
						<li>
							<a href="#">
								<h2>Ofertas</h2>
							</a>
						</li>
						<li>
							<a href="#">
								<h2>Cuentas y Listas</h2>
							</a>
						</li>
						<li>
							<a href="https://amzn.to/4dGgjLz">
								<h2>Devoluciones y pedidos</h2>
							</a>
						</li>
					</ul>
				</div> */}
			</div>

			<Cards />
		</div>
	)
}

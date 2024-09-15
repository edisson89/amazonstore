/** @format */
"use client"
import { useState } from "react"
import Image from "next/image"
import style from "./page.module.css"
import image from "./assets/amazon-ar21.svg"
import Cards from "./components/cards"

export default function Home() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={style.main}>
			<div className={style.header}>
				<div className={style.logocontain}>
					<a
						href="https://amzn.to/4dnkRpX"
						target="_blank"
					>
						<Image
							priority={true}
							className={style.logo}
							src={image}
							alt="amazon logo"
							width={350}
							height={200}
						/>
					</a>
				</div>
				<a href="https://www.amazonofertas.live/">
					<h1 className={style.title}>Amazon Ofertas </h1>
				</a>
				{/* <div className={style.nav}>
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

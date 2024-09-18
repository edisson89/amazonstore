/** @format */
import styles from "./card.module.css"
import Image from "next/image"
import React, { useCallback, useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const Card = ({ title, image, url, precio, oferta }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [showTitle, setShowTitle] = useState(true) // Estado para controlar la visibilidad del título
	

	const nextSlide = useCallback(() => {
		// eslint-disable-next-line react/prop-types
		setActiveIndex((prevIndex) => (prevIndex + 1) % image.length)
	}, [image])

	const prevSlide = () => {
		// eslint-disable-next-line react/prop-types
		setActiveIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length)
	}
	useEffect(() => {
		
		const timer = setInterval(nextSlide, 2200) // Cambia la imagen cada 3 segundos
		// Función para alternar la visibilidad del título

		return () => clearInterval(timer) // Limpia el temporizador al desmontar el componente
	}, [activeIndex, nextSlide]) // Dependencia para reiniciar el temporizador si el activeIndex cambia
	// Función para alternar la visibilidad del título
	const toggleTitleVisibility = () => {
		setShowTitle((prevShowTitle) => !prevShowTitle)
	}
	return (
		<div className={styles.card}>
			{showTitle && (
				<div className={styles.title}>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2>{title}</h2>
						<br></br>
						<br></br>

						<h3 className={styles.precio}>{precio}</h3>
						<br></br>
						<h2
							className={styles.comprar}
							href={url}
						>
							Comprar
						</h2>
						<br></br>

						<h1 className={styles.oferta}>{oferta}</h1>
					</a>
				</div>
			)}

			<div className={styles.imageContainer}>
				{image && (
					<>
						<div className={styles.botones}>
							<button
								className={styles.btn}
								onClick={prevSlide}
							>
								Anterior
							</button>
							<button
								className={styles.btn}
								onClick={toggleTitleVisibility}
							>
								Ocultar titulo
							</button>
							<button
								className={styles.btn}
								onClick={nextSlide}
							>
								Siguiente
							</button>
						</div>

						<div className={styles.contenedor}>
							<a
								rel="noopener noreferrer"
								className={styles.link}
								href={url}
								target="_blank"
							>
								<Image
									className={styles.cardImg}
									src={image[activeIndex]}
									alt={`${title} - Slide ${activeIndex}`}
									width={220}
								/>
							</a>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Card

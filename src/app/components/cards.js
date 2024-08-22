

import image01 from "../assets/pc/71B8P-zlcGL._AC_SX425_.jpg"
import image1 from "../assets/pc/818s2kMJ6tL._AC_SX425_.jpg"
import image2 from "../assets/pc/81GrCeuCzxL._AC_SX425_.jpg"
import image3 from "../assets/pc/81Xf18SxlPL._AC_SX425_.jpg"
import table1 from "../assets/tablepc/61Sc+8acg3L._AC_SX569_.jpg"
import table2 from "../assets/tablepc/71-hJGtkLWL._AC_SX679_.jpg"
import table3 from "../assets/tablepc/81+2YBNrs8L._AC_SX569_.jpg"
import hair from '../assets/cabello/hair.jpg'
import hair2 from '../assets/cabello/hair2.jpg'
import hair3 from '../assets/cabello/hair3.jpg'

import Image from "next/image"
import Card from "./card"



export default function Cards() {
	const images = [
		{title: 'Full Shine - Extensiones de cabello humano con cinta adhesiva sin costuras, color 1 (negro azabache), 28 pulgadas, 1.76 oz, 20 unidades',image:[hair,hair2,hair3],url:'https://amzn.to/3yBY0sj',offert:'-15%',price:'327.543'},
		{ title: "ASUS Portátil para juegos ROG Strix G16 (2024), pantalla FHD 16:10 de 16 pulgadas, 165 Hz, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, DDR5 de 16 GB, SSD PCIe Gen4 de 1 TB, Wi-Fi 6E, Windows 11", image: [image01, image1, image2, image3], url: "https://amzn.to/4dg939E", offert: "8%", price: "1.281.64" },
		{ title: "SAMSUNG Galaxy Tab S6 Lite (2024) Tableta Android WiFi de 10.4 pulgadas, 64 GB, S Pen incluido, listo para jugar, batería de larga duración, diseño delgado de metal, almacenamiento expandible, versión", image: [table1, table2, table3], offert: "36%", price: "209.98",url:'https://amzn.to/3WH08XK' },
	]
	
	return (
		<div>
			{images &&
				images.map((card, cardIndex) => (
					<div key={cardIndex}>
						
						<Card
						title={card.title}
						precio={card.price}
						oferta={card.offert}
						image={card.image}
						url={card.url}

						/>
						
						
						
					</div>
				))}
		</div>
	)
}

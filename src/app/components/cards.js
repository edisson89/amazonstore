

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
import cafe1 from '../assets/cafetera/cafe.jpg'
import cafe2 from '../assets/cafetera/cafe2.jpg'
import cafe3 from '../assets/cafetera/cafe3.jpg'
import cafe4 from '../assets/cafetera/cafe4.jpg'
import pintura from '../assets/pintura/pintura.jpg'
import pintura1 from '../assets/pintura/pintura2.jpg'
import pintura2 from '../assets/pintura/pintura3.jpg'
import pintura3 from '../assets/pintura/pintura4.jpg'
import pintura4 from '../assets/pintura/pintura5.jpg'
import cuchillo from '../assets/cuchillo/cuchilo.jpg'
import cuchillo1 from '../assets/cuchillo/cuchillo2.jpg'
import cuchillo2 from '../assets/cuchillo/cuchillo3.jpg'
import cuchillo3 from '../assets/cuchillo/cuchillo4.jpg'
import frier from '../assets/airflier/frier.jpg'
import frier2 from '../assets/airflier/frier2.jpg'
import frier3 from '../assets/airflier/frier3.jpg'
import frier4 from '../assets/airflier/frier4.jpg'
import auricular from '../assets/auriculares/auriculares.jpg'
import auricular2 from '../assets/auriculares/auriculares2.jpg'
import auricular3 from '../assets/auriculares/auriculares3.jpg'
import auricular4 from '../assets/auriculares/auriculares4.jpg'
import auricular5 from '../assets/auriculares/auriculares5.jpg'
import jbl from '../assets/jbl/jbl.jpg'
import jbl1 from '../assets/jbl/jbl2.jpg'
import jbl2 from '../assets/jbl/jbl3.jpg'
import jbl3 from '../assets/jbl/jbl4.jpg'
import taladro from '../assets/taladro/taladro.jpg'
import taladro1 from '../assets/taladro/taladro2.jpg'
import taladro2 from '../assets/taladro/taladro3.jpg'
import taladro3 from '../assets/taladro/taladro4.jpg'
import taladro4 from '../assets/taladro/taladro5.jpg'
import roku from '../assets/roku/roku.jpg'
import roku1 from '../assets/roku/roku2.jpg'
import roku2 from '../assets/roku/roku3.jpg'
import roku3 from '../assets/roku/roku4.jpg'
import aspiradora from'../assets/aspiradora/aspiradora.jpg'
import aspiradora1 from'../assets/aspiradora/aspiradora1.jpg'
import aspiradora2 from'../assets/aspiradora/aspiradora2.jpg'
import aspiradora3 from'../assets/aspiradora/aspiradora3.jpg'
import aspiradora4 from'../assets/aspiradora/aspiradora4.jpg'
import extensiones from '../assets/extensiones/extensiones.jpg'
import extensiones1 from '../assets/extensiones/extensiones1.jpg'
import extensiones2 from '../assets/extensiones/extensiones2.jpg'
import extensiones3 from '../assets/extensiones/extensiones4.jpg'
import extensiones4 from '../assets/extensiones/extensiones5.jpg'
import brillo from '../assets/brillo/brillo.jpg'
import brillo1 from '../assets/brillo/brillo2.jpg'
import brillo2 from '../assets/brillo/brillo3.jpg'
import brillo3 from '../assets/brillo/brillo4.jpg'
import brillo4 from '../assets/brillo/brillo5.jpg'
import tenis from '../assets/tenis/tenis.jpg'
import tenis1 from '../assets/tenis/tenis1.jpg'
import tenis2 from '../assets/tenis/tenis2.jpg'
import tenis3 from '../assets/tenis/tenis3.jpg'
import bota from '../assets/zapatillas/bota.jpg'
import bota1 from '../assets/zapatillas/bota1.jpg'
import bota2 from '../assets/zapatillas/bota2.jpg'
import bota3 from '../assets/zapatillas/bota3.jpg'
import bota4 from '../assets/zapatillas/bota4.jpg'
import bolso from '../assets/bolso/bolso.jpg'
import bolso1 from '../assets/bolso/bolso2.jpg'
import bolso2 from '../assets/bolso/bolso3.jpg'
import bolso3 from '../assets/bolso/bolso4.jpg'
import bolso4 from '../assets/bolso/bolso5.jpg'




import Image from "next/image"
import Card from "./card"


//{title:'',image:[],url:'',ofert:'',price:''},

export default function Cards() {
	const images = [
		{title:'Frye Melissa Shopper',image:[bolso,bolso1,bolso2,bolso3,bolso4],url:'https://amzn.to/4e1kemz',ofert:'',price:'1,437,527'},
		{title:'Hello MrLin Zapatillas de correr para hombre, antideslizantes, atléticas, para caminar, tipo hoja, hip-hop',image:[bota,bota1,bota2,bota3,bota4],url:'https://amzn.to/3YXLxK4',ofert:'',price:'176,663'},
		{title:'Zapatos deportivos para hombre sin cordones para caminar y correr, tenis con diseño de hoja, informales, cómodos, antideslizantes, para el trabajo, deportes, entrenamiento atlético',image:[tenis,tenis1,tenis2,tenis3],url:'https://amzn.to/4fTfMYR',ofert:'-10%',price:'132,487'},
		{title:'Julep 101 Crème to Powder - Sombras de ojos en barra resistentes al agua',image:[brillo,brillo1,brillo2,brillo3,brillo4],url:'https://amzn.to/4dGaqP8',ofert:'-47%',price:'38,553'},
		{title:'Full Shine - Extensiones de cabello humano con cinta adhesiva de 24 pulgadas, color negro natural para mujeres con color de cabello fino 1B, 20 unidades, 1.76 oz de trama de piel',image:[extensiones,extensiones1,extensiones2,extensiones3,extensiones4],url:'https://amzn.to/4g3f8Im',ofert:'-30%',price:'240,919'},
		{title:'LEVOIT Aspiradora inalámbrica, aspiradora con diseño resistente a enredos, hasta 50 minutos, potente succión, recargable, ligera y versátil para alfombras, suelos duros, pelo de mascotas, blanco',image:[aspiradora,aspiradora1,aspiradora2,aspiradora3,aspiradora4],url:'https://amzn.to/4gedtjh',ofert:'-20%',price:'642,519'},
		{title:'Amazon Fire TV Stick, HD, calidad nítida de imagen, streaming rápido, TV en vivo y gratuita, control remoto por voz Alexa que controla la televisión',image:[roku,roku1,roku2,roku3],url:'https://amzn.to/3X2u6W1',ofert:'-40%',price:'100,359'},
		{title:'Juego de taladro compacto DeWalt DCD771C2 de 20 vatios, sin cables, de 12 pulgadas',image:[taladro,taladro1,taladro2,taladro3,taladro4],url:'https://amzn.to/3X2dM7P',ofert:'45%',price:'397,584'},
		{title:'JBL Tune Buds - Auriculares inalámbricos con cancelación de ruido, sonido JBL Pure Bass, Bluetooth 5.3, tecnología de 4 micrófonos para llamadas nítidas y claras, hasta 48 horas de duración de la',image:[jbl,jbl1,jbl2,jbl3],url:'https://amzn.to/4cGGhhf',ofert:'-50%',price:'200,599.'},
		{title:'TAGRY Auriculares Bluetooth verdaderos auriculares inalámbricos de reproducción de 60 horas con pantalla de alimentación LED con funda de carga inalámbrica, IPX5, auriculares intrauditivos impermeables con micrófono para TV, teléfono inteligente, computadora, portátil y deportes',image:[auricular,auricular2,auricular3,auricular4,auricular5],url:'https://amzn.to/3T2z4kB',ofert:'-40%',price:'119.395'},
		{title:'Ninja Air Fryer Pro 4 en 1 con capacidad de 5 cuartos de galón, freír al aire, asar, recalentar, deshidratar, tecnología Air Crisp con 400F para resultados calientes y crujientes en solo minutos,',image:[frier,frier2,frier3,frier4],url:'https://amzn.to/3yT4mn7',ofert:'-25%',price:'361.399'},
		{title:'Astercook - Juego de 15 cuchillos de cocina de lujo con bloque, juego de cuchillos de acero inoxidable alemán de alto carbono',image:[cuchillo,cuchillo1,cuchillo2,cuchillo3],url:'https://amzn.to/3WTgyw8',offert:'-70%',price:'361.399'},
		{title:'Compresor de pintura, 1000 W, pistola de pintura eléctrica de alta potencia, contenedor de alta capacidad de 47.3 fl oz, fácil de limpiar para muebles, casa, jardín, sillas de pintura',image:[pintura,pintura1,pintura2,pintura3,pintura4],url:'https://amzn.to/3WZATzY',offert:'-92%',price:'200.759'},
		{title:'Keurig K-Mini CoffeeFeer, Brewer Single Sirve K-Cup POD Coffee,mini cafetera de 6 a 12 oz. Tamaños de preparación, negro',image:[cafe1,cafe2,cafe3,cafe4],url:'https://amzn.to/3ANjeDY',offert:'-40%',price:'240.919'},
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

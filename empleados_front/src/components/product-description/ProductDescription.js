import NavbarLogout from "../navbar-logout/NavbarLogout";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
import AudifonosLogitechG733 from "../../img/AudifonosLogitechG733.png";
import MouseGamerM601 from "../../img/MouseGamerM601.png";
import IpadPro2daGen from "../../img/IpadPro2daGen.png";
import DetailProduct from "../detail-product/DetailProduct";
import MonitorGamer from "../../img/MonitorGamer.webp";
import MonitorOdyssey from "../../img/MonitorOdyssey G3.webp";
import { getSession } from "../helper/helper";
import Header from "../header/Header";
import Carrousel from "../carrousel/carrousel";

const ProductDescription = () => {
  //const location = useLocation();
  const { nombreProducto } = useParams();

  var producto = {};

  if (nombreProducto === "MouseGamerM601") {
    producto.source = MouseGamerM601;
    producto.name = "Mouse Gamer M601";
    producto.price = "20.000";
    producto.description = [
      "El Mouse Gamer M601 es un dispositivo de alta calidad diseñado específicamente para brindar una experiencia de juego excepcional. Este mouse cuenta con características avanzadas que lo convierten en una opción ideal para jugadores entusiastas.",
      "Con su diseño ergonómico y cómodo agarre, el Mouse Gamer M601 ofrece un control preciso y una respuesta rápida en cada movimiento. Sus botones programables permiten personalizar la configuración de acuerdo a tus necesidades y preferencias de juego.",
      "El Mouse Gamer M601 cuenta con un sensor óptico de alta precisión que proporciona una respuesta rápida y precisa en cada movimiento. Su diseño ergonómico y cómodo agarre brindan una experiencia de juego excepcional.",
    ];
  }

  if (nombreProducto === "AudifonosLogitechG733") {
    producto.source = AudifonosLogitechG733;
    producto.name = "Audifonos Logitech G733";
    producto.price = "15.000";
    producto.description = [
      "Los audífonos Logitech G733 ofrecen una calidad de sonido excepcional para una experiencia auditiva inigualable.",
      "Con su diseño ergonómico y ligero, estos audífonos brindan comodidad durante largas sesiones de juego o reproducción de música.",
      "La conexión inalámbrica de los audífonos Logitech G733 te proporciona libertad de movimiento sin comprometer la calidad del sonido.",
    ];
  }

  if (nombreProducto === "IpadPro2daGen") {
    producto.source = IpadPro2daGen;
    producto.name = "Ipad Pro 2da Generación";
    producto.price = "12.000";
    producto.description = [
      "El iPad Pro 2da Gen es una poderosa herramienta para el trabajo y el entretenimiento. Su pantalla brillante y de alta resolución te permite disfrutar de contenido multimedia de manera impresionante.",
      "Con su procesador de última generación y amplia capacidad de almacenamiento, el iPad Pro 2da Gen garantiza un rendimiento fluido y una experiencia multitarea sin problemas. Es perfecto para profesionales creativos y usuarios exigentes.",
      "Además, el iPad Pro 2da Gen ofrece funciones avanzadas de seguridad y privacidad, así como una duración de batería excepcional. Conéctate a redes Wi-Fi o disfruta de conectividad LTE para estar siempre conectado en cualquier lugar.",
    ];
  }

  if (nombreProducto === "MonitorGamer") {
    producto.source = MonitorGamer;
    producto.name = "Monitor Gamer Odissey G5";
    producto.price = "18.000";
    producto.description = [
      "El Monitor Gamer es el compañero perfecto para los entusiastas de los videojuegos. Con su alta tasa de refresco y baja latencia, disfrutarás de una experiencia de juego fluida y sin interrupciones.",
      "Su pantalla de alta resolución y amplio rango de colores te sumergirá en mundos virtuales vívidos y detallados. Además, el Monitor Gamer ofrece tecnologías de reducción de desenfoque y tearing para una imagen más clara y suave.",
      "Con características como ajuste de altura y ángulo, el Monitor Gamer se adapta a tus preferencias de visualización y te proporciona una postura cómoda durante largas sesiones de juego. Mejora tu rendimiento y vive la emoción de los juegos con este monitor de última generación.",
    ];
  }

  if (nombreProducto === "MonitorOdyssey") {
    producto.source = MonitorOdyssey;
    producto.name = "Monitor Gamer Odyssey G3";
    producto.price = "12.000";
    producto.description = [
      "El Monitor Odyssey ofrece una experiencia visual impresionante con su pantalla de alta resolución y tecnología de colores vibrantes. Disfruta de imágenes nítidas y realistas en tus juegos y contenido multimedia favoritos.",
      "Con su diseño elegante y marcos delgados, el Monitor Odyssey se integra perfectamente en cualquier configuración. Además, su alta frecuencia de actualización y baja latencia te brindan una ventaja competitiva en juegos de ritmo rápido.",
      "Este monitor también cuenta con características ergonómicas, como ajuste de altura y ángulo, para garantizar la comodidad durante largas sesiones de uso. Experimenta una inmersión total con el Monitor Odyssey y lleva tu experiencia de visualización al siguiente nivel.",
    ];
  }

  return (
    <div>
      {getSession() ? <NavbarLogout /> : <Navbar />}
      <Header />
      <Carrousel />
      <DetailProduct
        source={producto.source}
        name={producto.name}
        price={producto.price}
        descripcion={producto.description}
      />
      <div>
        <p>Trabajo TSP</p>
      </div>
    </div>
  );
};

export default ProductDescription;

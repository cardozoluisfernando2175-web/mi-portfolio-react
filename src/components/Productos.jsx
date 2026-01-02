import { useState } from "react";
import "../styles/Productos.css";
import ModalProducto from "./ModalProducto";

/* ===== IMÁGENES DE PROYECTOS ===== */
import cafeteria from "../assets/cafeteria.png";
import catalogo from "../assets/CATALOGO.png";
import papillon from "../assets/papillon.png";
import heggerhaus from "../assets/heggerhaus.png";
import school from "../assets/school.png";
import verdureria from "../assets/verdureria.png";

/* ===== ICONOS DE TECNOLOGÍAS ===== */
import reactIcon from "../assets/react.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/js.svg";
import penpotIcon from "../assets/penpot.svg";
import infiniteIcon from "../assets/infinite-painter.svg";
import responsiveIcon from "../assets/responsive-devices.svg";
import phpIcon from "../assets/php.svg";

const productos = [
    {
        id: 1,
        nombre: "Landing Page de Catálogo de una repostería",
        descripcion: "Desarrollo de una página de reserva y venta de postres",
        tecnologias: [penpotIcon, htmlIcon, cssIcon, infiniteIcon],
        imagen: catalogo,
        fecha: "2024",
        cliente: "Miskilinda",
        estado: "Subido",
        link: "https://miskilinda.netlify.app/"
    },
    {
        id: 2,
        nombre: "Landing Page de un restaurante tradicional",
        descripcion: "Diseño de una página web principal donde se muestra el menú",
        tecnologias: [penpotIcon, htmlIcon, cssIcon, infiniteIcon],
        imagen: papillon,
        fecha: "2024",
        cliente: "Papillon Shop",
        estado: "Finalizado",
        link: "https://papillon_shop.com"
    },
    {
        id: 3,
        nombre: "Landing Page empresarial",
        descripcion: "Desarrollo completo de una página con catálogo empresarial",
        tecnologias: [htmlIcon, cssIcon, jsIcon, phpIcon, responsiveIcon],
        imagen: heggerhaus,
        fecha: "2024",
        cliente: "Heggerhaus",
        estado: "Desplegado",
        link: "https://heggerhaus.xo.je/"
    },
    {
        id: 4,
        nombre: "Sistema escolar virtual responsive",
        descripcion: "Diseño UX/UI del prototipo de un colegio virtual",
        tecnologias: [penpotIcon, infiniteIcon, responsiveIcon],
        imagen: school,
        fecha: "2024",
        cliente: "UMSS",
        estado: "Diseñado",
        link: "#"
    },
    {
        id: 5,
        nombre: "Landing Page de verdulería",
        descripcion: "Diseño UX/UI del prototipo de una tienda de verduras",
        tecnologias: [penpotIcon, infiniteIcon, responsiveIcon],
        imagen: verdureria,
        fecha: "2024",
        cliente: "UMSS",
        estado: "Diseñado",
        link: "#"
    },
    {
        id: 6,
        nombre: "Página principal de una cafetería",
        descripcion: "La página oficial de una cafetería muy reconocida en Cochabamba",
        tecnologias: [reactIcon, htmlIcon, cssIcon, jsIcon, penpotIcon],
        imagen: cafeteria,
        fecha: "2024",
        cliente: "Cafimochi",
        estado: "Finalizado",
        link: "https://cheto.com"
    }
];

export default function Productos() {
    const [productoActivo, setProductoActivo] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = (producto) => {
        setProductoActivo(producto);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setProductoActivo(null);
    };

    return (
        <>
            <section id="proyectos" className="seccion-productos">
                <div className="contenedor">
                    <h2 className="titulo-seccion">Proyectos</h2>

                    <div className="grid-productos">
                        {productos.map((producto) => (
                            <article key={producto.id} className="tarjeta-producto">
                                
                                <div className="imagen-producto">
                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                    />
                                </div>

                                <div className="contenido-producto">
                                    <h3>{producto.nombre}</h3>
                                    <p>{producto.descripcion}</p>

                                    <div className="tecnologias">
                                        {producto.tecnologias.map((tec, index) => (
                                            <img
                                                key={index}
                                                src={tec}
                                                alt="Tecnología"
                                                className="icono-tecnologia"
                                            />
                                        ))}
                                    </div>

                                    <button
                                        className="btn-comprar"
                                        onClick={() => abrirModal(producto)}
                                    >
                                        Ver Detalles
                                    </button>
                                </div>

                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {modalAbierto && productoActivo && (
                <ModalProducto
                    producto={productoActivo}
                    onClose={cerrarModal}
                />
            )}
        </>
    );
}

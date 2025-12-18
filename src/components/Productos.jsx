import { useState } from "react";
import "../styles/Productos.css";
import ModalProducto from "./ModalProducto";

const productos = [
    {
        id: 1,
        nombre: "Página principal de una cafetería",
        descripcion: "La pagina oficial de una cafetería muy reconocida en Cochabamba",
        tecnologias: ["react.svg", "html.svg", "css.svg", "js.svg", "penpot.svg"],
        imagen: "cafeteria.png",
        fecha: "2024",
        cliente: "Cafimochi central",
        estado: "Finalizado",
        link: "https://cheto.com"
    },
    {
        id: 2,
        nombre: "Landing Page de Catálogo de una repostería",
        descripcion: "Diseño UX/UI de una pagina de reserva y venta de postres de repostería",
        tecnologias: ["penpot.svg", "html.svg", "css.svg", "infinite-painter.svg"],
        imagen: "CATALOGO.png",
        fecha: "2024",
        cliente: "Miskilinda",
        estado: "Subido",
        link: "https://design.penpot.app/#/view?file-id=739c4333-f903-8088-8007-163355878c85&page-id=739c4333-f903-8088-8007-163355878c86&section=interactions&index=0&share-id=87795101-e4ce-8012-8007-46cac72c7fca"
    },
    {
        id: 3,
        nombre: "Landin Page de un restaurante tradicional",
        descripcion: "Diseño de una pagina web principal donde se muestra el menú principal",
        tecnologias: ["penpot.svg", "html.svg", "css.svg", "infinite-painter.svg"],
        imagen: "papillon.png",
        fecha: "2024",
        cliente: "Papillon Shop",
        estado: "finalizado",
        link: "https://papillon_shop.com"
    },
    {
        id: 4,
        nombre: "Desarrollo de una Landig page de una empresa",
        descripcion: "Desarrollo completo de una pagina con catalogo de una empresa.",
        tecnologias: ["html.svg", "css.svg", "js.svg", "php.svg", "responsive-devices.svg"],
        imagen: "heggerhaus.png",
        fecha: "2024",
        cliente: "Heggerhaus",
        estado: "Desplegado",
        link: "https://heggerhaus.xo.je/?i=1"
    },
    {
        id: 5,
        nombre: "Diseño de un sistema escolar virtual responsive",
        descripcion: "Diseño UX/UI del prototipo de un colegio virtual",
        tecnologias: ["penpot.svg", "infinite-painter.svg", "responsive-devices.svg"],
        imagen: "school.png",
        fecha: "2024",
        cliente: "UMSS",
        estado: "Diseñado",
        link: "https://design.penpot.app/#/view?file-id=fffce8d7-4b40-8153-8007-38f84fdd3e19&page-id=fffce8d7-4b40-8153-8007-38f84fdd3e1a&section=interactions&index=0&zoom=fit&share-id=6f5ef70f-2f09-81ea-8007-46cb2ddfd9e7"
    },
    {
        id: 6,
        nombre: "Diseño de una LandingPage responsive",
        descripcion: "Diseño UX/UI del prototipo de una tienda de verduras",
        tecnologias: ["penpot.svg", "infinite-painter.svg", "responsive-devices.svg"],
        imagen: "verdureria.png",
        fecha: "2024",
        cliente: "UMSS",
        estado: "Diseñado",
        link: "https://design.penpot.app/#/view?file-id=bd830f34-5ac9-8161-8006-ceec70f158de&page-id=bd830f34-5ac9-8161-8006-ceec70f158df&section=interactions&index=0&share-id=6f5ef70f-2f09-81ea-8007-46ccb685318a"
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
                            <article
                                key={producto.id}
                                className="tarjeta-producto"
                            >
                                {/* IMAGEN */}
                                <div className="imagen-producto">
                                    <img
                                        src={`/src/assets/${producto.imagen}`}
                                        alt={producto.nombre}
                                    />
                                </div>

                                {/* CONTENIDO */}
                                <div className="contenido-producto">
                                    <h3>{producto.nombre}</h3>
                                    <p>{producto.descripcion}</p>

                                    <div className="tecnologias">
                                        {producto.tecnologias.map((tec, index) => (
                                            <img
                                                key={index}
                                                src={`/src/assets/${tec}`}
                                                alt=""
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

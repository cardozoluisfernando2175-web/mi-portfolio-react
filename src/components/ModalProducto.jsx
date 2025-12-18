import "../styles/ModalProducto.css";

export default function ModalProducto({ producto, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-contenido"
                onClick={(e) => e.stopPropagation()}
            >
                {/* BOTÓN CERRAR */}
                <button
                    className="modal-cerrar"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* IMAGEN */}
                <div className="modal-imagen-contenedor">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                    />
                </div>

                {/* INFORMACIÓN */}
                <div className="modal-info">
                    <h2>{producto.nombre}</h2>

                    <p className="modal-descripcion">
                        {producto.descripcion}
                    </p>

                    <ul className="modal-detalles">
                        <li>
                            <span>Cliente:</span> {producto.cliente}
                        </li>
                        <li>
                            <span>Año:</span> {producto.fecha}
                        </li>
                        <li>
                            <span>Estado:</span> {producto.estado}
                        </li>
                    </ul>

                    <h5>Tecnologías usadas</h5>

                    <div className="modal-tecnologias">
                        {producto.tecnologias.map((tec, index) => (
                            <img
                                key={index}
                                src={tec}
                                alt="Tecnología"
                            />
                        ))}
                    </div>

                    {producto.link && (
                        <a
                            href={producto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-boton"
                        >
                            Ver Proyecto
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

import { useState, useRef, useEffect } from "react";
import whatsapp from "../assets/whatsapp.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import menuIcon from "../assets/menu.svg";
import redesIcon from "../assets/redes.svg";

export default function Header() {

    const [menuAbierto, setMenuAbierto] = useState(false);
    const [redesAbiertas, setRedesAbiertas] = useState(false);

    const menuRef = useRef(null);
    const redesRef = useRef(null);
    const headerRef = useRef(null);

    /* ============================= */
    /*   CERRAR AL CLICK AFUERA      */
    /* ============================= */
    useEffect(() => {

        const handleClickFuera = (e) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(e.target)
            ) {
                setMenuAbierto(false);
                setRedesAbiertas(false);
            }
        };

        document.addEventListener("mousedown", handleClickFuera);

        return () => {
            document.removeEventListener("mousedown", handleClickFuera);
        };

    }, []);

    /* ============================= */
    /*   TOGGLES CONTROLADOS         */
    /* ============================= */

    const toggleMenu = () => {
        setMenuAbierto(prev => !prev);
        setRedesAbiertas(false);
    };

    const toggleRedes = () => {
        setRedesAbiertas(prev => !prev);
        setMenuAbierto(false);
    };

    return (
        <header ref={headerRef}>
            <div className="arriba">

                <h2>Wis_2175</h2>

                {/* MENÚ PRINCIPAL */}
                <nav
                    ref={menuRef}
                    className={`nav-principal ${menuAbierto ? "activo" : ""}`}
                >
                    <ul className="hipervinculo">
                        <li><a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
                        <li><a href="#yo" onClick={() => setMenuAbierto(false)}>Yo</a></li>
                        <li><a href="#proyectos" onClick={() => setMenuAbierto(false)}>Proyectos</a></li>
                        <li><a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
                    </ul>
                </nav>

                {/* REDES SOCIALES */}
                <nav
                    ref={redesRef}
                    className={`redes ${redesAbiertas ? "activo" : ""}`}
                >
                    <ul>
                        <li><a href="https://wa.me/59177813462" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="WhatsApp" width="28" /></a></li>
                        <li><a href="https://github.com/cardozoluisfernando2175-web" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" width="28" /></a></li>
                        <li><a href="https://www.instagram.com/lfcv_2175" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" width="28" /></a></li>
                        <li><a href="https://www.linkedin.com/in/luis-fernando-cardozo-vargas-5b2076358" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" width="28" /></a></li>
                    </ul>
                </nav>
            </div>

            {/* BOTONES */}
            <div className="acciones-header">

                <button
                    className="btn-redes"
                    onClick={toggleRedes}
                >
                    <img src={redesIcon} alt="Redes" />
                </button>

                <button
                    className="menu-hamburguesa"
                    onClick={toggleMenu}
                >
                    <img src={menuIcon} alt="Menú" />
                </button>

            </div>
        </header>
    );
}

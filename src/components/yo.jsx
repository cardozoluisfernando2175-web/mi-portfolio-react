//yo.jsx
import '../styles/yo.css'
import perfil from "../assets/perfil1.png"
import html from "../assets/html.svg"
import react from "../assets/react.svg"
import php from "../assets/php.svg"
import penpot from "../assets/penpot.svg"
import svg from "../assets/infinite-painter.svg"
import js from "../assets/js.svg"
import css from "../assets/css.svg"

export default function Yo () {
    return (
        <div id="yo" className='yo'>
            <h2>¿Quién soy yo?</h2>
            <div className="contenedor_yo">
                <div className="imagen_de_presentacion">
                    <img src={perfil} alt="perfil" />
                </div>
                <div className="informacion_personal">
                    <p>
                        ¡Hola! mi nombre es Luis Fernando Cardozo Vargas<br/>
                        y soy desarrollador de páginas web freelancer,<br/>
                        soy un trabajador muy productivo, me encanta diseñar<br/>
                        desde el diseño UX/UI, hacer el frontend y tambien<br/>
                        manejar base de datos
                    </p>
                    <h3>Mis habilidades:</h3>
                    <div className="skills">
                        <div className='img-container'>
                            <img src={html} alt="html"/>
                            <span className='tooltip'>Html</span>
                        </div>
                        <div className='img-container'>
                            <img src={react} alt="react"/>
                            <span className='tooltip'>React</span>
                        </div>
                        <div className='img-container'>
                            <img src={php} alt="php"/>
                            <span className='tooltip'>PHP</span>
                        </div>
                        <div className='img-container'>
                            <img src={penpot} alt="penpot"/>
                            <span className='tooltip'>Diseño UX/UI</span>
                        </div>
                        <div className='img-container'>
                            <img src={svg} alt="diseño svg"/>
                            <span className='tooltip'>Diseño SVG</span>
                        </div>
                        <div className='img-container'>
                            <img src={js} alt="js"/>
                            <span className='tooltip'>Javascript</span>
                        </div>
                        <div className='img-container'>
                            <img src={css} alt="css"/>
                            <span className='tooltip'>CSS</span>
                        </div>
                    </div>
                    <p>
                        Tengo conocimientos amplios con estas tecnologías<br/>
                        y aunque no son perfectas, sigo aprendiendo y<br/>
                        nunca pierdo la oportunidad de aprender algo nuevo
                    </p>
                </div>
            </div>
            <span className='mensaje'>
                Mis conocimientos no solo se basan en programación sino que también diseño UX/UI y creación de imagenes SVG
            </span>
        </div>
    )
}
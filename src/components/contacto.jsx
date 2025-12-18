import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contacto.css";
import dibujo from "../assets/dibujo_web.svg";

export default function Contacto() {

    const textareaRef = useRef(null);

    const enviarCorreo = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE,
            import.meta.env.VITE_EMAILJS_TEMPLATE,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC
        )

        .then(() => {
            alert("Mensaje enviado correctamente ✅");
            e.target.reset();
            textareaRef.current.style.height = "auto";
        })
        .catch(() => {
            alert("Error al enviar el mensaje ❌");
        });
    };

    useEffect(() => {
        const textarea = textareaRef.current;

        if (!textarea) return;

        const autoResize = () => {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        };

        textarea.addEventListener("input", autoResize);

        return () => {
            textarea.removeEventListener("input", autoResize);
        };
    }, []);

    return (
        <div className="contenido-contacto" id="contacto">
            <h2>Contacto</h2>

            <div className="contenido-dividido">

                <div className="contenido-left">
                    <form onSubmit={enviarCorreo}>
                        <h3>CONTÁCTAME</h3>

                        <div className="llenar">
                            <p>Nombre</p>
                            <input name="nombre" type="text" required />
                        </div>

                        <div className="llenar">
                            <p>Correo electrónico</p>
                            <input name="correo" type="email" required />
                        </div>

                        <div className="llenar">
                            <p>Mensaje</p>
                            <textarea
                                ref={textareaRef}
                                name="message"
                                className="mensaje-textarea"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        <input className="enviar" type="submit" value="Enviar" />
                    </form>
                </div>

                <div className="contenido-right">
                    <img src={dibujo} alt="dibujo web" />
                </div>

            </div>
        </div>
    );
}

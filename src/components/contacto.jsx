import emailjs from "@emailjs/browser";
import "../styles/contacto.css";
import dibujo from "../assets/dibujo_web.svg";

export default function Contacto() {

    const enviarCorreo = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_scgps3b",
            "template_n6h217g",
            e.target,
            "Wbnr3P0AMYs1ioFJq"
        )
        .then(() => {
            alert("Mensaje enviado correctamente ✅");
            e.target.reset();
        })
        .catch((error) => {
            console.error("ERROR:", error);
            alert("Error al enviar ❌");
        });
    };

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
                                name="message"
                                className="mensaje-textarea"
                                rows="4"
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

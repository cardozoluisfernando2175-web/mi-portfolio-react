import iconocheto from '../assets/iconocheto1.svg';
import ala_left from '../assets/ala_left.svg';
import ala_right from '../assets/ala_right.svg';
import { useState, useEffect } from 'react';
import '../styles/global.css'

export default function Inicio() {
    const typingTexts = [
        "Desarrollador Full-Stack",
        "Especialista en React",
        "Experto en UX/UI",
        "Apasionado por la tecnología"
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDelay = 2000;

    const currentText = typingTexts[textIndex];
    const displayedText = currentText.substring(0, charIndex);

    useEffect(() => {
        const delay = isDeleting
            ? deletingSpeed
            : charIndex === currentText.length
                ? pauseDelay
                : typingSpeed;

        const timeout = setTimeout(() => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex(c => c - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((t) => (t + 1) % typingTexts.length);
                }
            } else {
                if (charIndex < currentText.length) {
                    setCharIndex(c => c + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, currentText]);

    return (
        <div id="inicio" className="Inicio">
            <div className="inicio-contenido">
                <img className='goad' src={iconocheto} alt="iconocheto" />
                <h3>Hola soy Luis</h3>
                <div className="typing-text">
                    <span className='ala'><img src={ala_left} alt="iconocheto"/></span>
                    {displayedText}
                    <span className="cursor"></span>
                    <span className='ala2'><img src={ala_right} alt="iconocheto"/></span>
                </div>
            </div>
        </div>
    );
}
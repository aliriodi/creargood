import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "../styles/floater-wsp.css"

function WhatsAppLink() {
    const mensaje = encodeURIComponent("Hola! Quisiera obtener información sobre CrearGood.");

    return (
        <a
            href={`https://api.whatsapp.com/send?phone=+5493515913974&text=${mensaje}`}
            className="float"
            target="_blank"
            rel="noreferrer"
        >
            <i className="fa fa-whatsapp my-float"></i>
        </a>
    );
}

export default WhatsAppLink;

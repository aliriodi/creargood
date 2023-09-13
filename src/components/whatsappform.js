import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../styles/contacto.css"

const WhatsAppForm = () => {
    const [name, setName] = useState('');
    const [clientNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reemplaza 'NUMERO_DE_TU_CONTACTO' con el número de teléfono al que deseas enviar el mensaje.
        const phoneNumber = '+54 9-351 5913974';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=
        *Creargood*%0A  
          *nombre y apellido*%0A
            ${name}%0A
          *Número de teléfono:*%0A
            ${clientNumber}%0A
          *Correo electrónico*%0A
            ${email}%0A
          *Mensaje*%0A
            ${message}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div>

            <div className='corchetes-contacto'>
                <h1 className='titulo-contacto'>¿Tienes alguna consulta o algún proyecto en mente?<br />Contactanos!Te responderemos lo antes posible!</h1>
            </div>
            <div className='form-container'>
                <Form className="form-contacto" onSubmit={handleSubmit}>
                    <div className='form-contacto-container'>
                        <Form.Group controlId="name" className="custom-form-group">
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Tu nombre"
                                required
                                className="custom-input"
                            />
                        </Form.Group>

                        <Form.Group controlId="email" className="custom-form-group">
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Email"
                                required
                                className="custom-input"
                            />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber" className="custom-form-group">
                            <Form.Control
                                type="tel"
                                value={clientNumber}
                                onChange={handlePhoneNumberChange}
                                placeholder="Teléfono"
                                required
                                className="custom-input"
                            />
                        </Form.Group>

                        <Form.Group controlId="message" className="custom-form-group">
                            <Form.Control
                                type="text"
                                rows={4}
                                value={message}
                                onChange={handleMessageChange}
                                placeholder="Tu mensaje"
                                required
                                className="custom-input custom-input-text"
                            />
                        </Form.Group>
                    </div>
                    <div className='form-button-container'>
                        <Button type="submit" className='boton'>ENVIAR</Button>
                    </div>
                    <div className="wave"></div>
                </Form>

            </div>
        </div>
    );
};

export default WhatsAppForm;
import { Layout } from './Layout';
import WhatsAppForm from './whatsappform';
import "../styles/contacto.css"
import { useEffect } from 'react';

const Contacto = () => {
    const fondo = '#F6B2BF'
    const titulo = "Contacto";

    useEffect(() => {
        // Desplázate al inicio de la página después de la redirección
        window.scrollTo(0, 0);
      }, []);

    return (
        <Layout fondo={fondo} titulo={titulo}>

            <div className="App">
                <WhatsAppForm />
            </div>

        </Layout>
    );
}

export default Contacto;
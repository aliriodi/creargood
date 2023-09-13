import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Logofooter from "../assets/Logo Principal (Footer).png";
import { useNavigate } from "react-router-dom";
import igicon from "../assets/ig.png"
import inicon from "../assets/in.png"
import yticon from "../assets/yt.png"
import wspicon from "../assets/whatsappicon.png"
import ubiicon from "../assets/ubicacionicon.png"
import mailicon from "../assets/mailicon.png"
import "../styles/footer.css"


const Footer = ({color}) => {
  const navigate = useNavigate();
  const styles = color ? {backgroundColor: color, marginTop: 0} : {backgroundColor: "#F5F5F5", marginTop: 50}
  return (

    <Container className="footer" style={styles}>
      <Row className="elements-footer">
        <Col onClick={() => { navigate('/') }}>
          <img
            src={Logofooter}
            className="logo-footer"
            alt="Logo creargood"></img>
        </Col>

        <Col md={6}>
          <Stack gap={3}>
            <a href="https://www.google.com.ar/maps/place/Alta+C%C3%B3rdoba,+C%C3%B3rdoba/@-31.3902559,-64.2052717,14z/data=!3m1!4b1!4m6!3m5!1s0x9432985b2cb6a353:0xcfc1886e13ad8ffc!8m2!3d-31.3901321!4d-64.1851893!16s%2Fg%2F121v7v88?entry=ttu" target="_blank" rel="noopener noreferrer" className="texto-p">
              <div className="footer-contactos">
                <img src={ubiicon} className="contact-icon1" alt="ubicacion"></img>
                <p>Córdoba Cápital, Alta Córdoba</p>
              </div>
            </a>
            <a href="https://wa.me/5493515913974" target="_blank" rel="noopener noreferrer" className="texto-p">
              <div className="footer-contactos">
                <img src={wspicon} className="contact-icon2" alt="numero de whatsapp"></img>
                <p>+54 9-351 5913974</p>
              </div>
            </a>
            <a href="mailto:CrearGood1@gmail.com" target="_blank" rel="noopener noreferrer" className="texto-p">
              <div className="footer-contactos">
                <img src={mailicon} className="contact-icon3" alt="correo electronico"></img>
                <p>CrearGood1@gmail.com</p>
              </div>
            </a>
          </Stack>
        </Col>

        <Col>
          <Stack gap={3}>
            <div className="p-2">Seguinos para enterarte de las últimas novedades y ofertas:</div>
            <div className="p-2">
              <div className="footer-icons">
                <a href="https://www.instagram.com/crear_good/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <img src={igicon} className="footer-icon" alt="instagram"/>
                </a>
                <a href="https://www.linkedin.com/in/jenny-franco/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <img src={inicon} className="footer-icon" alt="linkedin"></img>
                </a>
                <a href="https://www.youtube.com/channel/UCXY_6zfccY-yccy5xV6IgEA" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <img src={yticon} className="footer-icon" alt="youtube"></img>
                </a>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>

      <div className="footer-copyright">© Copyright 2023 - Todos los derechos reservados Crear Good</div>
    </Container>
  )
}

export default Footer;
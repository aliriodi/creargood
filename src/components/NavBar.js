import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import brand from "../assets/Logo Header 1.png";
import igicon from "../assets/ig.png"
import inicon from "../assets/in.png"
import yticon from "../assets/yt.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const navbarStyle = {
    position: "fixed", // Establece la posición fija
    top: 0, // Fija el Navbar en la parte superior de la pantalla
    width: "100%", // Ocupa todo el ancho
    zIndex: 1000, // Ajusta el índice z para que esté por encima de otros elementos
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=""
      style={navbarStyle} // Aplica el estilo de posición fija al Navbar
    >
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <img
            src={brand}
            className="brand"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex nav-items m-auto">
            <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/productos#TarjetasDijes")}>
                TARJETAS & DIJES
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/productos#DijesMesa")}>
                DIJES DE MESA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/productos#RegalosRecuerdos")}>
                REGALOS & RECUERDOS
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/productos#Toppers")}>
                TOPPERS 3D
                </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/productos#RegalosInstitucionales")}>
                REGALOS INSTITUCIONALES
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link mx-1" to="/Faq">PREGUNTAS FRECUENTES</Link>
            <Link className="nav-link mx-1" to="/quienessomos">¿QUIENES SOMOS?</Link>
            <Link className="nav-link mx-1" to="/contacto">CONTACTO</Link>
            <Nav className="nav-icons">
              <Nav.Link href="https://www.instagram.com/crear_good/" target="_blank"><img src={igicon} className="nav-icon" alt="instagram"/></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/jenny-franco/" target="_blank"><img src={inicon} className="nav-icon" alt="linkedin"/></Nav.Link>
              <Nav.Link href="https://www.youtube.com/channel/UCXY_6zfccY-yccy5xV6IgEA" target="_blank"><img src={yticon} className="nav-icon" alt="youtube"/></Nav.Link>  
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

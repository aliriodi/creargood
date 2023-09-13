import NavBar from "../components/NavBar";
import Banner from "./Banner";
import Footer from "./footer";
import WhatsAppLink from './whatsapplink';



export const Layout = ({children, fondo, banner, titulo, color}) => {
    return (
        <div className="layout">
            <NavBar />
            <Banner fondo={fondo} banner={banner} titulo={titulo}/>
            {children}
            <WhatsAppLink />
            <Footer color={color}/>
        </div>
    )
}
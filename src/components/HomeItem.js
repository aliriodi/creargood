import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomeItem = ({item, index}) => {
    const {titulo, texto, img} = item
    const navigate = useNavigate();
    useEffect(() => {
      // Desplázate al inicio de la página después de la redirección
      window.scrollTo(0, 0);
    }, []);

    const styles =index % 2 === 0 ? {order: 12, color: "#F2BD67"} : {order: -1, color: "#F6B2BF"}

    return ( 
        <div className="row my-5">
          <div className="col-lg-6 ">
            <img src={img} alt="Producto 1" style={{objectFit:"cover", width:"100%"}}/>
          </div>
          <div className="col-lg-6 home-item-info" style={styles}>
            <p className="home-item-title my-2">{titulo}</p>
            <p className="home-item-texto my-3">{texto}</p>
            <button className="home-item-btn my-3" onClick={() => navigate("/contacto/")}>CONSULTAR</button>
          </div>
        </div>
     );
}
 
export default HomeItem;
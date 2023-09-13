import React from 'react';
import '../styles/wave2.css'; // Importa el archivo de estilo específico
import "../styles/quienessomos.css"

const quienessomosItem = ({ item, index }) => {
    const { titulo, texto, img } = item;
    console.log(item);
    const styles = index % 2 === 0 ? { order: -1 } : { order: 12 };
    const background = index % 2 === 0 ? { background: "#FDDDAA", minwidth: "100%" } : { background: "#FEF5A6", minwidth: "100%" };

    return (
        <div className={`row`} style={background}>
            <div className="col-lg-6">
                <img src={img} alt="Producto 1" style={{ objectFit: "cover", margin: "5%", width: "90%" }} />
            </div>
            <div className={`col-lg-6 quienessomos-item-info `} style={styles}>
                <p className="quienessomos-item-title my-2">{titulo}</p>
                <p className="quienessomos-item-texto my-3">{texto}</p>
            </div>
            {index === 1 ? null : <span className="wave2"></span>}
        </div>
    );
}

export default quienessomosItem;

import { useState } from "react";
import poligon from "../assets/Polygon 1.png";

const FaqItem = ({ info }) => {
  const [drop, setDrop] = useState(false);

  const dropmenu = () => {
    setDrop(!drop);
  };
  return (
    <div className="faq">
      <div className={drop ? ("faq-container faq-active"):("faq-container")}>
        <p className="dropmenu-title">{info.titulo}</p>
        {drop ? (
          <button
            onClick={dropmenu}
            className="dropmenu-button"
            style={{ transform: "rotate(180deg)" }}
          >
            <img src={poligon} className="dropmenu-icon" alt="icono para abrir"/>
          </button>
        ) : (
          <button onClick={dropmenu} className="dropmenu-button">
            <img src={poligon} className="dropmenu-icon" alt="icono para abrir"/>
          </button>
        )}
      </div>
        <div className={drop ? ("Faq-info-container Faq-info-active") : ("Faq-info-container ")}>
          <p className="Faq-info">{info.texto}</p>
        </div>
    </div>
  );
};

export default FaqItem;

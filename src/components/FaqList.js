import { Layout } from "./Layout";
import banner from "../assets/imagenHERORosa.png";
import { faqs_mock } from "../mocks/faqs_mock";
import FaqItem from "./FaqItem";
import { useEffect } from "react";

const Faq = () => {
  const titulo = "Preguntas Frecuentes";
  useEffect(() => {
    // Desplázate al inicio de la página después de la redirección
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout banner={banner} titulo={titulo}>
      {faqs_mock.map(data => (<FaqItem key={data.id} info={data}/>))}
    </Layout>
  );
};

export default Faq;


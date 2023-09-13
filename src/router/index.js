import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Faq from "../components/FaqList";
import Contacto from "../components/contacto";
import Quienessomos from "../components/quienessomos";
import ProductList from "../components/ProductList";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>
    },
    {
        path : '/Faq',
        element : <Faq/>
    },
    {
        path : '/Productos',
        element : <ProductList/>
    },
    {
        path : '/contacto',
        element : <Contacto/>
    },
    {
        path : '/quienessomos',
        element : <Quienessomos/>
    },
]);
import React, { useState } from 'react';
import { Layout } from './Layout';
import Carousel from './Carousel';
import { products_mock } from '../mocks/products_mock';
import Modal from './modal';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductList = () => {
    const fondo = '#F6B2BF';
    const titulo = 'Productos';
    const prop = useParams();
    const [modalData, setModalData] = useState(null);

    const showProductModal = (productData) => {
        setModalData(productData);
    };

    const closeProductModal = () => {
        setModalData(null);
    };
    useEffect(() => {
        if (window.location.hash) {
          const targetElement = document.querySelector(window.location.hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } else{
            window.scrollTo(0, 0);
        }
      }, [prop]);

    return (
        <Layout fondo={fondo} titulo={titulo}>
            <div className="home">
                {products_mock.map((data, index) => (
                    <Carousel
                        key={index}
                        items={data}
                        onImageClick={showProductModal}
                        titulo={titulo}
                    />
                ))}
            </div>

            {modalData && (
                <Modal closeModal={closeProductModal} modalData={modalData} />
            )}
        </Layout>
    );
};

export default ProductList;

import React from 'react';
import "../styles/modal.css"

const Modal = ({ closeModal, modalData }) => {
    
    // Manejador de clic para cerrar el modal al hacer clic fuera de él
    const handleModalClick = (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    };

    return (
        <div className="modal" onClick={handleModalClick}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <img className="imagen-modal" src={modalData.img} alt={`Imagen del producto`} />
                <p className='info-modal'>{modalData.info}</p>
                <p className='info-modal'>{modalData.info2}</p>
                <p className='info-modal'>{modalData.info3}</p>

            </div>
        </div>
    );
};

export default Modal;

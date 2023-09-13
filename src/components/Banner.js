import React from 'react';
import wave from '../assets/wave.svg';

const Banner = ({ fondo, banner, titulo }) => { // Añadimos banner como prop
    const containerStyle = {
        position: 'relative',
        marginTop: "50px",
        height: "40vw",
        minHeight: "200px",
        maxHeight: "550px",
        background: fondo ? `${fondo} center/cover` : `url(${banner}) top/cover`,
        overflow: 'hidden',
    };

    const waveStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        zIndex: 1,
    };

    const headingStyle = {
        position: 'absolute',
        top: '50%', // Position at the middle vertically
        left: '50%', // Position at the middle horizontally
        transform: 'translate(-50%, -50%)', // Center it precisely
        zIndex: 2,
    };

    return (
        <div className="banner-container" style={containerStyle}>
            <img src={wave} alt="Wave" style={waveStyle} />
            <h3 style={headingStyle} className='faq-title'>{titulo}</h3> {/* Reemplaza "Tu Título Aquí" con tu propio título */}
        </div>
    );
}

export default Banner;



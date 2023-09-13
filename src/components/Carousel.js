import React from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/carrusel.css"


const Carousel = ({ items, onImageClick }) => {
  const { categoria, id } = items[0];

  return (
    <div className="carousel-container">
      <p className="carousel-title" id={id}>{categoria}</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        grabCursor={true}
        loop={true}
        breakpoints={{
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1850: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items.map((data, index) => (
          <SwiperSlide key={index}>
            <div className='carrusel-item'>
            <img
              src={data.img}
              className="carousel-img"
              alt={`Product ${index}`}
              onClick={() => onImageClick(data)}
            />
            <p 
            className="carrusel-title" 
            id={id}
            onClick={() => onImageClick(data)}
            >{data.info}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

import "./App.css";
import { Layout } from "./components/Layout";
import banner from "./assets/imagenHERO.png";
import { home_mock } from "./mocks/home_mock";
import HomeItem from "./components/HomeItem";
import { products_mock } from "./mocks/products_mock";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import play from "./assets/play-icon.png";
import { useNavigate } from "react-router-dom";
import thumbnail from "./assets/fondo-video.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactPlayer from "react-player";

function App() {
  const playIcon = <img src={play} alt="play-icon" />;
  const navigate = useNavigate();

  return (
    <Layout banner={banner} color={"#F6B2BF"}>
      <div className="home">
        <div className="home-title-container">
          <div className="home-title">
            <p className="souvenir">Souvenir</p>
            <p className="print">3D Print</p>
          </div>
          <p className="fiestas">para fiestas y eventos </p>
          <p className="diseños">
            Diseños creativos a medida de tus necesidades
          </p>
        </div>
        {home_mock.map((data, index) => (
          <HomeItem item={data} index={index} />
        ))}
        <div className="home-products-container">
          <p className="home-products-title">PRODUCTOS</p>
          <div className="home-products">
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={1}
              pagination={true}
              grabCursor={true}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1250: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1800: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {products_mock.map((data) => (
                <SwiperSlide>
                  <img
                    src={data[0].img}
                    className="carousel-img"
                    alt="carousel-product-img"
                    onClick={() => {
                      navigate(`/Productos#${data[0].id}`);
                    }}
                  />
                  <p className="carrusel-title">{data[0].categoria}</p>
                </SwiperSlide>
              ))}
            </Swiper>
            
          </div>
          <div className="home-more-btn-container">
            <button
              className="home-more-btn"
              onClick={() => navigate("/productos/",{ replace: true })}
            >
              VER MÁS
            </button>
          </div>
        </div>
      </div>
      <div className="video-container">
        <p className="video-title">¿Cómo trabajamos?</p>
        <div className="video">
          <ReactPlayer
            playIcon={playIcon}
            light={thumbnail}
            width="100%"
            height="100%"
            url={"https://www.youtube.com/watch?v=8APqXh7NSzs"}
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;

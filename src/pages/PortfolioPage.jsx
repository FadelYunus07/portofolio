import { porto } from "../data/links";
import { Card, Button } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

// import required modules
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className="portfolio w-100 min-vh-100 text-center">
      <h2 className="py-5">
        <i className="fa fa-book mx-3"></i>Portfolio
      </h2>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {porto.map((port) => {
          return (
            <SwiperSlide key={port.id}>
              <Card style={{ width: "18rem" }} className="shadow-sm">
                <i className={`emoji ${port.emoji}`}></i>
                <Card.Body>
                  <Card.Title className="title">{port.title}</Card.Title>
                  <Card.Text className="desc">{port.text}</Card.Text>
                  <NavLink to={`detail/${port.id}`}>
                    Detail <i className="fa fa-arrow-right ms-2"></i>
                  </NavLink>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PortfolioPage;

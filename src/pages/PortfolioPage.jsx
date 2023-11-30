import { porto } from "../data/links";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const PortfolioPage = () => {
  return (
    <>
      <ScrollToTop />
      <div className="portfolio w-100 text-center">
        <h2 className="py-5" data-aos="fade-up" data-aos-duration="1000">
          <i className="fa fa-book mx-3"></i>Portfolio
        </h2>
        <Swiper
          data-aos="flip-right"
          data-aos-duration="1000"
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {porto.map((port) => (
            <SwiperSlide key={port.id}>
              <Card className="shadow-sm">
                <i className={`emoji ${port.emoji}`}></i>
                <Card.Body>
                  <Card.Title className="title">{port.title}</Card.Title>
                  <Card.Text className="desc">{port.text}</Card.Text>
                  <NavLink to={`/portfolio/detail/${port.id}`}>
                    Detail <i className="fa fa-arrow-right ms-2"></i>
                  </NavLink>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PortfolioPage;

import { porto, skill } from "../data/links";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

// SwiperCore.use([Navigation, Pagination]);

const DetailPorto = () => {
  const { id } = useParams();
  const selectedPorto = porto.find((p) => p.id === parseInt(id));

  if (!selectedPorto) {
    return <div>Portfolio not found</div>;
  }

  const getSkillImage = (technology) => {
    const matchedSkill = skill.find((s) => s.name === technology);
    return matchedSkill ? matchedSkill.image : null;
  };

  return (
    <>
      <ScrollToTop />
      <div className="detail w-100 min-vh-100 text-center">
        <Row>
          <h2 className="py-5">
            <i className="fa fa-book mx-3"></i>Detail Portfolio
          </h2>
        </Row>
        <Row>
          <Col md={6}>
            <Swiper
              // modules={[Navigation]}
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
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {selectedPorto.allImg.map((img, index) => (
                <SwiperSlide key={index}>
                  <Card className="shadow-sm">
                    <img className="img" src={img} alt="" />
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col md={6}>
            <div className="detail-content">
              <h3>{selectedPorto.title}</h3>
              <p>{selectedPorto.text}</p>
              {selectedPorto.link && (
                <Button className="mb-3" href={selectedPorto.link}>
                  Kunjungi
                </Button>
              )}
              <h5>Fitur:</h5>
              {selectedPorto.fitur.map((fitur, index) => (
                <ul key={index}>
                  <li>{fitur}</li>
                </ul>
              ))}
              <h5>Using:</h5>
              <div className="skill">
                <Row className="justify-content-center ms-0 p-5 gap-3" md={4} sm={6} xs={3} lg={4}>
                  {selectedPorto.tekno.map((technology, index) => (
                    <span key={index}>{getSkillImage(technology) && <img src={getSkillImage(technology)} alt={`${technology} skill`} className="icon" />}</span>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DetailPorto;

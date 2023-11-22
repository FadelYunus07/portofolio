import { Container, Row, Col } from "react-bootstrap";
import Profile from "./Profile";
import Skill from "./Skill";
import Image1 from "../image/fadelcrop.png";

const HomePage = () => {
  return (
    <>
      <div className="homepage" id="home">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col className="text-center m-4">
                <img src={Image1} alt="fadel1" />
              </Col>
              <Col className="text-center">
                <p>Hi, My Name</p>
                <h1>Fadel Yunus Mahrus</h1>
                <div className="my-5">
                  <a className="btn-cv" href="https://wa.me/6285774179312">
                    Download CV
                    <i className="ps-1 fa fa-chevron-down"></i>
                  </a>
                  <a className="btn-wa" href="https://wa.me/6285774179312">
                    Whatsapp Me
                    <i className="ps-2 fa-brands fa-whatsapp"></i>
                  </a>
                </div>
                <div className="m-2">
                  <a className="gh" href="https://github.com/FadelYunus07">
                    <i className="m-1 fa-brands fa-github fa-2x"></i>
                  </a>
                  <a className="ig" href="https://instagram.com/fadel.yunus07">
                    <i className="m-1 fa-brands fa-instagram fa-2x"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
        {/* PROFILE */}
        <Profile />
        {/* END PROFILE */}
        {/* SKILL PAGE */}
        <Skill />
        {/* END SKILL PAGE */}
      </div>
    </>
  );
};

export default HomePage;

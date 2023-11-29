import { Container, Row, Col } from "react-bootstrap";
import Profile from "./Profile";
import Skill from "./SkillPage";
import PortfolioPage from "./PortfolioPage";
import Image1 from "../image/fadelcrop.jpg";
import ContactPage from "./ContactPage";
import ScrollToTop from "../components/ScrollToTop";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <div className="homepage" id="root">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col className="text-center m-4">
                <img src={Image1} alt="fadel1" />
              </Col>
              <Col className="text-center">
                <p>Hello, I'm</p>
                <h1>Fadel Yunus Mahrus</h1>
                <div className="my-3">
                  <a className="btn-cv" href="./cv_fadel.pdf" download="FadelYunus_CV.pdf">
                    Download CV
                    <i className="ps-1 fa fa-chevron-down"></i>
                  </a>
                  <a className="btn-li" href="https://www.linkedin.com/in/fadel-yunus-77557a1a7">
                    Linked
                    <i className="fa-brands fa-linkedin fa-lg"></i>
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
        {/* PORTFOLIO PAGE */}
        <PortfolioPage />
        {/* END PORTFOLIO PAGE */}
        {/* CONTACT PAGE */}
        <ContactPage />
        {/* END CONTACT PAGE */}
      </div>
    </>
  );
};

export default HomePage;

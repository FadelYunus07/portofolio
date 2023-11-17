import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../image/fadelcrop.png";
import TutWuri from "../image/TutWuri.png";
import Smuhero from "../image/smuhero.png";
import Unpam from "../image/unpam.png";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col className="text-center m-4">
                <img src={Image1} alt="fadel1" />
              </Col>
              <Col className="text-center">
                <p>Hello, Im</p>
                <h1>Fadel Yunus Mahrus</h1>
                <button>Download CV</button>
                <button>Contact Me</button>
                <div>
                  <a className="gh" href="https://github.com/FadelYunus07">
                    <i className="m-2 fs-5 fa-brands fa-github"></i>
                  </a>
                  <a className="ig" href="https://instagram.com/fadel.yunus07">
                    <i className="m-2 fs-5 fa-brands fa-instagram"></i>
                  </a>
                  <a className="wa" href="https://tiktok.com">
                    <i className="m-2 fs-5 fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
        <div className="school w-100 min-vh-100">
          <Container>
            <Row className=" d-flex align-items-center text-center">
              <div className="sd">
                <img src={TutWuri} alt="sd" />
                <h3>SD Negeri 1 Pengatigan</h3>
                <h4>2006 - 2012</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minus quia dolores non dolor iure id doloremque suscipit eveniet iste. Asperiores soluta eaque illo minima animi illum doloremque eveniet eligendi quo facere
                  voluptates exercitationem excepturi aliquid, mollitia quae? Odio, fuga?
                </p>
              </div>
            </Row>
            <Row className=" d-flex align-items-center text-center">
              <Col>
                <div className="sd">
                  <img src={Smuhero} alt="smk" />
                  <h3>SMK Muhammadiyah 6 Rogojampi</h3>
                  <h4>2015 - 2018</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt suscipit cupiditate assumenda dignissimos nostrum illo nobis eaque doloremque commodi sint molestias dicta fugit nemo mollitia quia neque repellat
                    exercitationem, repudiandae officiis fuga. Reprehenderit illo voluptas temporibus placeat nesciunt? Quas, veniam.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="sd">
                  <img src={Unpam} alt="unpam" />
                  <h3>Universitas Pamulang</h3>
                  <h4>2019-2023</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem reprehenderit quis hic eos explicabo recusandae libero aspernatur? Expedita neque sunt quia iste odio labore at debitis vel ducimus provident. Quo saepe
                    placeat ducimus aliquam qui. Qui quas unde eligendi.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HomePage;

import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <div className="footer w-100">
      <Container>
        <Row>
          <Col>
            <h5>Detail</h5>
            <p>Jl.Puri Mawar 1, C8/22, Puri Pamulang, Pamulang Barat, Tengerang Selatan, Banten 15417</p>
            <div>
              <a href="http://wa.me/6285774179312">
                <i className=" me-2 fa-brands fa-whatsapp"></i> +6285774179312
              </a>
            </div>
            <div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fadelyunus07@gmail.com&su=About Your Portofolio&body=type here">
                <i className=" me-2 fa-regular fa-envelope"></i> fadelyunus07@gmail.com
              </a>
            </div>
          </Col>
          <Col>
            <h5>Tempat/Tanggal Lahir</h5>
          </Col>
          <Col>
            <h5>Links</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;

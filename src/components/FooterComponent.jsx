import { Container, Row } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <div className="footer text-center">
      <Container data-aos="fade-down" data-aos-duration="1000">
        <Row>
          <div>
            <a className="btn-li" href="https://www.linkedin.com/in/fadel-yunus-77557a1a7">
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a href="http://wa.me/6285774179312">
              <i className="fa-brands fa-whatsapp fa-2x"></i>
            </a>
            <a href="https://github.com/FadelYunus07">
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="http://instagram.com/fadel.yunus07">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a href="https://t.me/fadelyunus">
              <i className="fa-brands fa-telegram fa-2x"></i>
            </a>
          </div>
          <p>Copyright &copy; {new Date().getFullYear()}, this Website is made by DGland</p>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;

import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <h1>CV Saya Bagus</h1>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;

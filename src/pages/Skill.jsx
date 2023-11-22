import { useState } from "react";
import { skill } from "../data/links";
import { Container, Row, Col, Nav } from "react-bootstrap";

const SkillPage = () => {
  const [activeCategory, setActiveCategory] = useState("seringDigunakan");

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  const filteredSkills = skill.filter((s) => s.category === activeCategory);

  return (
    <div className="skills w-100 min-vh-100 py-5">
      <Container>
        <Row>
          <h1 className="text-center my-5">Skills</h1>

          {/* Add tabs */}
          <Nav className="justify-content-center" variant="tabs" defaultActiveKey={activeCategory}>
            <Nav.Item>
              <Nav.Link eventKey="seringDigunakan" onClick={() => handleTabClick("seringDigunakan")}>
                Sering Digunakan
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pernahDigunakan" onClick={() => handleTabClick("pernahDigunakan")}>
                Pernah Digunakan
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Row>
            {filteredSkills.map((skills) => {
              return (
                <Col key={skills.id}>
                  <div className="card-box my-5 shadow">
                    <h6 className="text-center py-3">{skills.name}</h6>
                    <div className="image">
                      <img src={skills.image} alt={skills.name} />
                      <p className="text-center mt-5">Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default SkillPage;

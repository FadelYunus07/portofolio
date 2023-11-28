import { useState } from "react";
import { skill } from "../data/links";
import { Container, Row, Nav } from "react-bootstrap";

const SkillPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  const filteredSkills = activeCategory === "all" ? skill : skill.filter((s) => s.category === activeCategory);

  return (
    <div className="skills w-100 min-vh-100">
      <Container>
        <Row>
          <h1 className="text-center my-3">
            <i className="fa fa-fire mx-2"></i>Skills
          </h1>
          <p className="w-50 m-auto my-4 text-center">Below are some programming languages, frameworks and tools that I have learned and used.</p>

          {/* Add tabs */}
          <Nav className="justify-content-center pt-5" variant="tabs" defaultActiveKey={activeCategory}>
            <Nav.Item>
              <Nav.Link eventKey="all" onClick={() => handleTabClick("all")}>
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bahasaProgram" onClick={() => handleTabClick("bahasaProgram")}>
                programming languages
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tool" onClick={() => handleTabClick("tool")}>
                Tool, Framework, ect.
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Row className="justify-content-center ms-0 p-5">
            {filteredSkills.map((skills) => {
              return (
                <div key={skills.id} className="card-box shadow">
                  <div className="image">
                    <img src={skills.image} alt={skills.name} />
                    <p>{skills.name}</p>
                  </div>
                </div>
              );
            })}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default SkillPage;

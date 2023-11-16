import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/links";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg d-flex">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            Curyculum Vitae.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link fw-bold" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-primary rounded-2">Join With Us</button>
            </div>
          </Navbar.Collapse>
          <div>
            {/* Animasi Mata */}
            <svg width="30" height="30" class="eye">
              <circle cx="15" cy="15" r="15" class="eyeball" />
              <circle cx="15" cy="15" r="8" class="pupil" />
            </svg>
            {/* Akhir Animasi Mata */}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

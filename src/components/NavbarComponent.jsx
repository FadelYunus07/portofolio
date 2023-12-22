import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/links";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);

    let eyeBall = document.querySelector(".eyeball"),
      pupil = document.querySelector(".pupil"),
      eyeArea = eyeBall.getBoundingClientRect(),
      pupilArea = pupil.getBoundingClientRect(),
      R = eyeArea.width / 2,
      r = pupilArea.width / 2,
      centerX = eyeArea.left + R,
      centerY = eyeArea.top + R;

    document.addEventListener("mousemove", (e) => {
      let x = e.clientX - centerX,
        y = e.clientY - centerY,
        theta = Math.atan2(y, x),
        angle = (theta * 180) / Math.PI + 360;

      pupil.style.transform = `translateX(${R - r + "px"}) rotate(${angle + "deg"})`;
      pupil.style.transformOrigin = `${r + "px"} center`;
    });
  }, []); // Menggunakan array kosong untuk memastikan hanya dijalankan sekali saat komponen dimuat

  return (
    <div>
      <Navbar fixed="top" expand="lg d-flex py-3" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand>
            <NavLink to={""} className="judul">
              <div>
                <span className="my">My</span>
                <span className="porto">Portfolio</span>
                <span className="titik">.</span>
              </div>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle className={changeColor ? "color-active" : ""} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            {/* Animasi Mata */}
            <svg width="30" height="30" class="eye">
              <circle cx="15" cy="15" r="15" class="eyeball" />
              <circle cx="15" cy="15" r="8" class="pupil" />
            </svg>
            {/* Akhir Animasi Mata */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

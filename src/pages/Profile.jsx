import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import fadelUnpam from "../image/fadelunpam2.jpg";

export default function Profile() {
  const [language, setLanguage] = useState("IDN");

  const toggleLanguage = () => {
    setLanguage(language === "IDN" ? "EN" : "IDN");
  };

  const profileContent = language === "IDN" ? indonesianProfile : englishProfile;
  return (
    <div className="profile w-100 min-vh-100">
      <Container className="">
        <h1 className="text-center mb-5">
          <i className="fa-solid fa-user mx-3"></i>Profile
        </h1>
        <Row>
          <Col className="text-end">
            <a className="togleBahasa" onClick={toggleLanguage}>
              <span className={profileContent.class}></span>
              {profileContent.btn}
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="d-inline">
            <div className="my-card">
              <img className="my-photo" src={fadelUnpam} alt="" />
            </div>
            <div className=".clearfix"></div>
          </Col>
          <Col className="profile-text my-auto">
            <h3>Fadel Yunus Mahrus</h3>
            <p>{profileContent.parag}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const indonesianProfile = {
  parag:
    "Saya seorang lulusan baru dengan gelar Sarjana Teknik Informatika, bercita-cita tinggi untuk menyumbangkan pemikiran segar dan semangat inovatif dalam dunia teknologi. Dengan fokus utama pada pengembangan Back-end Web, saya juga aktif mempelajari dan memperluas keterampilan Front-end untuk menciptakan solusi yang holistik dan menarik.",
  btn: "IDN",
  class: "flag-icon flag-icon-id mx-2",
  click: "Tekan untuk ganti bahasa",
};

const englishProfile = {
  parag:
    "I'm a recent graduate with a Bachelor's degree in Computer Engineering, eager to bring fresh perspectives and innovative enthusiasm to the world of technology. While my primary focus lies in Back-end Web development, I'm actively learning and expanding my Front-end skills to create holistic and engaging solutions.",
  btn: "EN",
  class: "flag-icon flag-icon-gb mx-2",
  click: "Click to change the language",
};

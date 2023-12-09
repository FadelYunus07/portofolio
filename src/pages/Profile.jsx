import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Profile() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage(language === "IDN" ? "EN" : "IDN");
  };

  const profileContent = language === "IDN" ? indonesianProfile : englishProfile;
  return (
    <div className="profile w-100 min-vh-100">
      <Container data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-center mb-5">
          <i className="fa-solid fa-user mx-3"></i>Profile
        </h1>
        <Row>
          <Col className="text-end">
            <a className="togleBahasa" onClick={toggleLanguage}>
              <i className={profileContent.class}></i>
              {profileContent.btn}
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="hadist" data-aos="fade-right" data-aos-duration="1000">
              <h4>{profileContent.hadist}</h4>
              <h4>{profileContent.narated}</h4>
            </div>
            <div className=".clearfix"></div>
          </Col>
          <Col xs={12} md={6} className="profile-text my-auto" data-aos="fade-left" data-aos-duration="1000">
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
  btn: "EN_",
  class: "flag-icon flag-icon-gb mx-2",
  hadist: "“Sebaik-baik manusia adalah yang paling banyak manfaatnya bagi manusia”",
  narated: "--(HR. Ahmad)--",
};

const englishProfile = {
  parag:
    "I'm a recent graduate with a Bachelor's degree in Computer Engineering, eager to bring fresh perspectives and innovative enthusiasm to the world of technology. While my primary focus lies in Back-end Web development, I'm actively learning and expanding my Front-end skills to create holistic and engaging solutions.",
  btn: "IDN",
  class: "flag-icon flag-icon-id mx-2",
  hadist: "“The best of humans are those who are most beneficial to others.”",
  narated: "--(Narrated by Ahmad)--",
};

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Alert } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const ContactPage = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0r4nnu6", "template_2a3caax", form.current, "DjzffqLTs7BedEb1u").then(
      (result) => {
        console.log(result.text);
        setShowSuccessMessage(true);
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <ScrollToTop />
      <div className="contact w-100 text-center">
        <Container>
          <Row>
            <h2>CONTACT ME</h2>
          </Row>
          <Row>
            <div>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label className="form-label">Name</label>
                <input type="text" name="user_name" value={formData.user_name} onChange={handleInputChange} />

                <label className="form-label">Email</label>
                <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange} />

                <label className="form-label">Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} />

                <input type="submit" value="Send" className="submit-btn" />
              </form>
              {showSuccessMessage && (
                <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
                  Message sent successfully!
                </Alert>
              )}
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;

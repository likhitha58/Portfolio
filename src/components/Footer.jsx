import React from "react";
import { Container } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="glass-footer mt-5 rounded-top text-center text-white py-4" id="footer">
      <Container>
        <p className="mb-2 fw-semibold">Likhitha Tanuboddi</p>
        <div className="footer-contact d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3">
          <span><FaEnvelope className="me-2" /> <a href="mailto:likhitha@example.com" className="footer-link">likhithatanuboddi58@gmail.com</a></span>
          <span><FaMapMarkerAlt className="me-2" /> Hyderabad, Telangana, India</span>
        </div>
        <div className="footer-social d-flex justify-content-center gap-4 fs-4 mb-3">
          <a href="https://www.linkedin.com/in/likhitha-tanuboddi-05a34a289/" target="_blank" rel="noreferrer" className="footer-link"><FaLinkedin /></a>
          <a href="https://github.com/likhitha58" target="_blank" rel="noreferrer" className="footer-link"><FaGithub /></a>
        </div>
        {/* <p className="mb-0">&copy; 2025 Likhitha. All rights reserved.</p> */}
      </Container>
    </footer>
  );
}

export default Footer;

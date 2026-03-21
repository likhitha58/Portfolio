// components/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.css";

function About() {
  return (
    <Container className="glass-about my-5 p-5 rounded" id="about">
      <h2 className="text-white fw-bold mb-4 text-center">About Me</h2>
      <Row className="align-items-center justify-content-center">
        <Col md={10} className="text-center">
          <p className="animated-gradient-text mb-4">
            I’m a pre-final year Computer Science student at SRM University, AP,
            specializing in full-stack MERN development with a growing interest
            in AI-integrated web applications. I enjoy building scalable,
            user-centric solutions where design meets functionality, combining
            clean interfaces with efficient backend systems.{" "}
          </p>
          <p className="animated-gradient-text mb-4">
            I’m passionate about applying technology to real-world problems and
            continuously exploring how machine learning and Generative AI can
            enhance modern web experiences.
          </p>
          <p>
            Pursuing a minor in Finance further motivates me to work towards
            developing innovative fintech solutions in the future. When I’m not
            coding, you’ll find me playing sports, brainstorming ideas, or
            actively contributing to student tech communities.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

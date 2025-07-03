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
            I'm a pre-final year computer science student from SRM University, AP. Building creative web spaces has always hooked me to Full stack web development. I'm always on the go for real-world challenges and turn them into intuitive and beautiful web experiences. I'm pursuing a minor in Finance which motivates me to develop fintech applications in the future. 
          </p>
          <p className="animated-gradient-text mb-4">
            When I’m not coding, you’ll find me playing sports, brainstorming ideas, or supporting student tech communities.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

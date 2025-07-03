import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Education.css';

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SRM University, AP",
      location: "Amaravati, Andhra Pradesh, India",
      duration: "2023 - 2027",
      grade: "CGPA: 8.99/10",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "DDMS. P. Obul Reddy Public School",
      location: "Hyderabad, Telangana, India",
      duration: "2021 - 2023",
      grade: "Percentage: 82.8%",
      board:"CBSE",
    },
    {
      degree: "Secondary School (SSC)",
      institution: "DDMS. P. Obul Reddy Public School",
      location: "Hyderabad, Telangana, India",
      duration: "2010 - 2021",
      grade: "Percentage: 96.0%",
      board:"CBSE",
    }
  ];

  return (
    <section id="education" className="education-section py-5">
      <Container>
        <h2 className="text-white text-center fw-bold mb-5" style={{fontFamily:'Quicksand'}}>Education</h2>
        <Row>
          {educationData.map((edu, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="education-card text-white p-3 h-100">
                <Card.Body>
                  <Card.Title className="fs-5 fw-semibold">{edu.degree}</Card.Title>
                  <Card.Subtitle style={{color:' #8EB69B'}}>{edu.institution}</Card.Subtitle>
                  <Card.Text>{edu.location}</Card.Text>
                  <Card.Text>{edu.board}</Card.Text>
                  <Card.Text>{edu.duration}</Card.Text>
                  <Card.Text className="text-info">{edu.grade}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;

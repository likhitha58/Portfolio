import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "../styles/Projects.css";
import epicshelf from "../assets/epicshelf.jpeg";
import smarttask from "../assets/smarttask.png";
import portfolio from "../assets/portfolio.png";
import harmoney from "../assets/harmoney.png";

function Projects() {
  const projects = [
    {
      title: "Harmoney",
      description: "Harmoney is an AI-powered financial planning app that helps you set, track, and achieve your money goals with ease.",
      link: "https://github.com/likhitha58/Harmoney",
      image: harmoney,
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Bootstrap", "Gemini API", "Stability AI"],
    },
    {
      title: "Smart Task",
      description:
        "Smart Task is a task management web app for assigning, tracking, managing and reviewing team tasks efficiently.",
      link: "https://github.com/likhitha58/SMART-TASK-3",
      image: smarttask,
      techStack: ["React.js", "Node.js", "Express", "SQL Server", "Bootstrap"],
    },
    {
      title: "EpicShelf",
      description:
        "EpicShelf is book-selling e-commerce platform where users can buy and sell second-hand books online.",
      link: "https://github.com/likhitha58/EpicShelf",
      image: epicshelf,
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    },
    {
      title: "Personal Portfolio",
      description:
        "Built my static development portfolio using React.js and incorporated Three.js library for minute 3d animations.",
      link: "https://github.com/likhitha58/Portfolio",
      image: portfolio,
      techStack: ["React.js", "Three.js", "Bootstrap"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container className="projects-section glass-section my-5 p-5 rounded">
        <h2 className="text-white fw-bold mb-4 text-center">Projects</h2>

        <Slider {...settings}>
          {projects.map((project, index) => (

            <div key={index} className="p-2 h-100">
              <Card className="project-card text-white shadow-lg border-0 h-100 d-flex flex-column">
                <div className="image-wrapper">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                </div>
                <Card.Body className="d-flex flex-column flex-grow-1">
                  <Card.Title className="fs-4 fw-semibold">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="flex-grow-1 mt-2">
                    {project.description}
                  </Card.Text>

                  <div className="tech-stack mt-3 mb-3 d-flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="badge rounded-pill bg-light text-dark px-3 py-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="light"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100 no-outline"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </div>


          ))}
        </Slider>
      </Container>
    </motion.div>
  );
}

export default Projects;

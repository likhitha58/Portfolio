// pages/Home.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Home.css";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import likhithaPic from "../assets/likhithaPic.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: "easeOut" },
  }),
};

function Home() {
  return (
    <Container className="glass-home my-5 p-5 rounded">
      <Row className="align-items-center">
        {/* Left: Text */}
        <Col md={6} className="text-white text-center text-md-start">
          <motion.h1
            className="display-5 fw-bold"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, <br /> I'm Likhitha Tanuboddi
          </motion.h1>

          <motion.p
            className="lead mt-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            I’m a creative web developer passionate about building beautiful and
            functional digital experiences.
          </motion.p>

          <motion.div
            className="mt-4 social-icons d-flex gap-3 justify-content-center justify-content-md-start"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a
              href="https://www.linkedin.com/in/likhitha-tanuboddi-05a34a289/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="text-white icon-hover" />
            </a>
            <a
              href="https://github.com/likhitha58"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="text-white icon-hover" />
            </a>
            <a
              href="https://leetcode.com/u/likhithatanuboddi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode size={30} className="text-white icon-hover" />
            </a>
          </motion.div>
        </Col>

        {/* Right: Image */}
        <Col md={6} className="text-center mt-4 mt-md-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image
              src={likhithaPic}
              alt="Likhitha Profile"
              fluid
              className="home-img"
            />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

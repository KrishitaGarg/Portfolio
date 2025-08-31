import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about <b className="purple">web development</b>{" "}
              and <b className="purple">machine learning</b>, and I enjoy
              building impactful products that combine technology and
              innovation. 🚀
              <br />
              <br />I am skilled in
              <i>
                <b className="purple"> Python, C++, and JavaScript </b>
              </i>
              along with expertise in modern web technologies like
              <i>
                <b className="purple"> React.js, SQL, and CSS.</b>
              </i>
              <br />
              <br />
              My areas of interest include creating
              <i>
                <b className="purple"> AI-powered solutions</b> and
                <b className="purple"> community-focused platforms</b>.
              </i>
              <br />
              <br />
              Some of my recent experiences include working as a
              <b className="purple"> Web Developer at Girl Up Coders</b>, where
              I am contributing to study-tracking platforms, and as an
              <b className="purple"> ML Intern at Edunet Foundation</b>, where I
              developed a plant disease detection model using deep learning.
              <br />
              <br />
              Whenever possible, I channel my enthusiasm into developing
              projects like
              <i>
                <b className="purple"> VendoSync</b> (a voice-first inventory
                platform),
                <b className="purple"> Swasthya Sathi AI</b> (an AI-powered
                medical assistant), and{" "}
                <b className="purple"> Samvidhaan Decoded</b> (a gamified
                learning platform for the Indian Constitution).
              </i>
              <br />
              <br />
              Recognized as a<b className="purple">
                {" "}
                Women Engineers Scholar
              </b>{" "}
              (Google & TalentSprint) and
              <b className="purple"> Amazon ML Summer School Mentee</b>, I
              thrive on continuous learning and collaborative innovation. ✨
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar-container">
              <img
                src={myImg}
                className="img-fluid avatar-img"
                alt="avatar"
                style={{ width: "100%", maxWidth: "300px", height: "auto" }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/krishita-garg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/KrishitaGarg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:krishitagarg@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

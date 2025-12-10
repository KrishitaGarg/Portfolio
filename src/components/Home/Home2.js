import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.jpg";

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
              with expertise in modern web technologies such as
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>
              <br />
              <br />I have worked as a
              <b className="purple"> Frontend Developer Intern at Vayumandal Innovations</b>,
              contributing to the development of their web platform, and as an
              <b className="purple"> ML Intern at Edunet Foundation</b>, where I
              developed a plant disease detection model using deep learning.
              <br />
              <br />
              Beyond internships, I channel my enthusiasm into projects like:
              <br />
              <ul>
                <li>
                  <b className="purple">VendoSync</b> : Voice-first inventory
                  management platform
                </li>
                <li>
                  <b className="purple">Swasthya Sathi AI</b> : AI-powered
                  medical assistant
                </li>
                <li>
                  <b className="purple">Samvidhaan Decoded</b> : Gamified
                  learning platform for the Indian Constitution
                </li>
              </ul>
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
      </Container>
    </Container>
  );
}

export default Home2;

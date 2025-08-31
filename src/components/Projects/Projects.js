import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SSAI from "../../Assets/Projects/SSAI.png";
import SD from "../../Assets/Projects/SD.png";
import WS from "../../Assets/Projects/WS.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SSAI}
              title="Swasthya Sathi AI"
              description="An AI-powered medical assistant designed to streamline medical diagnostics, transcription, pathology analysis, and more, to enhance the efficiency of healthcare professionals by leveraging artificial intelligence for accurate and fast medical assessments."
              ghLink="https://github.com/KrishitaGarg/Swasthya-Sathi-AI"
              demoLink="https://swasthya-sathi-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SD}
              title="Samvidhaan Decoded"
              description="An elegant, user-friendly website that simplifies the constitution, offering clear navigation and interactive elements. It transforms complex legal text into an engaging, accessible experience for all citizens."
              ghLink="https://github.com/KrishitaGarg/Samvidhaan-Decoded"
              demoLink="https://samvidhaan-decoded.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WS}
              title="Web-Setu"
              description="A voice-first, AI-enabled inventory and supply chain platform for India’s kiranas and micro-vendors. Built for Tier 2/3 cities and rural regions, W-Setu empowers vendors with simple tools while giving admins real-time visibility, AI-driven insights, and last-mile delivery optimization."
              ghLink="https://github.com/KrishitaGarg/VendoSync"
              demoLink="https://w-setuindia.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <div
        style={{
          position: "relative",
          margin: "28px auto 0",
          padding: "22px 28px",
          maxWidth: "920px",
          textAlign: "center",
          color: "#eae2ff",
          background:
            "radial-gradient(120% 160% at 50% 0%, #1a1530 0%, #0f0e1a 60%)",
          border: "2px solid #4E0B54",
          borderRadius: "16px",
          boxShadow:
            "0 10px 30px rgba(199, 112, 240, 0.25), inset 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "PURPLE",
            color: "white",
            padding: "6px 12px",
            fontSize: "12px",
            letterSpacing: "0.06em",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 6px 18px rgba(199, 112, 240, 0.35)",
          }}
        >
          What’s Next
        </div>

        <p style={{ margin: "6px 0 0", fontSize: "18px", lineHeight: "1.6" }}>
          Always building, always learning —{" "}
          <strong style={{ color: "PURPLE" }}>stay tuned</strong> for what’s
          next ✨
        </p>
      </div>
    </Container>
  );
}

export default Projects;

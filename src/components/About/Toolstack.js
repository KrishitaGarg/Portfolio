import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiLatex, SiVercel } from "react-icons/si";
import { FaGithub, FaGitlab } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitlab /> {/* GitLab */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex /> {/* LaTeX */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel */}
      </Col>
    </Row>
  );
}

export default Toolstack;

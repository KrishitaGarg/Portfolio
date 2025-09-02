import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card
      className="quote-card-view shadow-sm border-0"
      style={{ borderRadius: "16px" }}
    >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              textAlign: "justify",
              fontSize: "1.05rem",
              lineHeight: "1.8",
              color: "white",
            }}
          >
            Hi, I’m <span className="purple fw-bold">Krishita Garg</span> from{" "}
            <span className="purple fw-bold">New Delhi, India</span>.
            <br />
            I’m a <b className="purple">Web Developer</b> at Girl Up Coders,
            passionate about creating scalable, impactful solutions. Previously,
            I worked as an <b className="purple">ML Intern</b> at Edunet
            Foundation, building AI models for sustainable agriculture.
            <br />
            <br />
            As a{" "}
            <b className="purple">
              Women Engineers Scholar (Google & TalentSprint)
            </b>{" "}
            and <b className="purple">Amazon ML Summer School Mentee</b>, I
            enjoy solving complex problems at the intersection of{" "}
            <b>Web Development</b> and <b>AI</b>.
            <br />
            <br />
            Beyond tech, I’m deeply involved in:{" "}
          </p>
          
          <ul className="list-unstyled ps-0" style={{fontSize: "1.05rem", lineHeight: "1.8"}}>
            <li className="about-activity mb-2">
              <ImPointRight className="me-2 purple" />
              Hackathons & Ideathons
            </li>
            <li className="about-activity mb-2">
              <ImPointRight className="me-2 purple" />
              AI Research & Innovation
            </li>
            <li className="about-activity mb-2">
              <ImPointRight className="me-2 purple" />
              Mentorship & Public Speaking
            </li>
          </ul>

          <p
          className="purple"
            style={{ marginTop: "20px", fontStyle: "italic" }}
          >
            "Building technology that empowers communities
            <br />
            and creates real impact!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

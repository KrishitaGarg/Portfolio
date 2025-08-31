import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krishita Garg </span>
            from <span className="purple">New Delhi, India</span>.
            <br />I am currently working as a{" "}
            <b className="purple">Web Developer at Girl Up Coders</b>, where I
            contribute to building community-focused platforms.
            <br />I also worked as an{" "}
            <b className="purple">ML Intern at Edunet Foundation</b>, developing
            plant disease detection models to support sustainable agriculture.
            <br />
            <br />I am a{" "}
            <b className="purple">
              Women Engineers Scholar (Cohort 6, Google & TalentSprint)
            </b>
            and <b className="purple">Amazon ML Summer School Mentee</b>,
            passionate about creating impactful products with Web Technologies
            and AI.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Ideathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & Tech Innovations
            </li>
          </ul>

          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building technology that empowers communities
            <br />
            and creates real impact!"{" "}
          </p>
          <footer className="blockquote-footer">Krishita Garg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

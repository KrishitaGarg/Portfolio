import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a
        href="https://linkedin.com/in/krishita-garg"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://github.com/KrishitaGarg"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <AiFillGithub />
      </a>

      <a
        href="mailto:krishitagarg@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default SocialSidebar;

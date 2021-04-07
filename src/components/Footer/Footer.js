import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

function Footer() {
  return (
    <div className="footerBg">
      <div className="iconContainer">
        <div className="layer"></div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/jaymemizelle/"
        >
          <FontAwesomeIcon className="iconLogo" icon={faGithubSquare} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/jayme-mizelle/"
        >
          <FontAwesomeIcon className="iconLogo" icon={faLinkedin} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:jlm_developer@protonmail.com"
        >
          <FontAwesomeIcon className="iconLogo" icon={faEnvelopeSquare} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
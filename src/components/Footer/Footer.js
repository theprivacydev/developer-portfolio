import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
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
          href="https://github.com/theprivacydev/"
        >
          <FontAwesomeIcon className="iconLogo" icon={faGithubSquare} />
        </a>
        {/* <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
          <FontAwesomeIcon className="iconLogo" icon={faLinkedin} />
        </a> */}
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
          <FontAwesomeIcon className="iconLogo" icon={faTwitter} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:theprivacydev@protonmail.com"
        >
          <FontAwesomeIcon className="iconLogo" icon={faEnvelopeSquare} />
        </a>
      </div>
      <h4
        style={{
          marginLeft: "2%",
          paddingBottom: "30px",
          color: "whitesmoke",
          paddingTop: "10px"
        }}
      >
        theprivacydev.eth
      </h4>
    </div>
  );
}

export default Footer;

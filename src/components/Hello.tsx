import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ben from "../img/ben.jpeg";
import React from "react";
import { Reveal, LeftReveal } from "./utils/Reveals";

function Hello() {
  return (
    <header className="section sec1 header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <LeftReveal>
            <div className="image">
              <img src={Ben} alt="picture of Ben Lucas" />
            </div>
          </LeftReveal>
        </div>
        <div className="right-header">
          <Reveal>
            <h1 className="name">
              Hi, I'm <span className="name">Ben Lucas</span> <br />A Full-Stack
              JavaScript Developer.
            </h1>
          </Reveal>
          <Reveal>
            <p>
              I'm a determined problem solver, putting my natural instincts into
              action through
              <span className="highlight"> JavaScript Development.</span> I'm
              happy to help in all areas of development, whether you need a
              database or API setup and maintained with easily understood
              endpoints. Or making your website a sleeker, more user-friendly
              experience. Please don't hesitate to contact me if you think we'd
              be a good match!
            </p>
          </Reveal>
          <div className="btn-container">
            <a
              href="https://drive.google.com/file/d/1pYmmJDh9zVLBQQJrviycOZwC6yvJItLY/view?usp=sharing"
              className="main-btn"
              target="_blank"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <FontAwesomeIcon icon={faFileArrowDown} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hello;

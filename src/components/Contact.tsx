import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import Form from "./Form";
import { LeftReveal, Reveal, RightReveal } from "./utils/Reveals";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <LeftReveal>
          <div className="main-title">
            <h2>
              Contact <span>Me</span>
              <span className="bg-text">
                Hit
                <br />
                Me Up
              </span>
            </h2>
          </div>
        </LeftReveal>
      </div>
      <div className="contact-content-con">
        <div className="left-contact">
          <Reveal color="var(--color-accent)">
            <h4>Contact me here</h4>
          </Reveal>
          <Reveal color="var(--color-accent)">
            <p>
              I'm currently located in Manchester, a fantastic tech hub! I can
              work completely remotely though and have an excellent home setup
              so that our communication will always be top-notch whenever you
              need me. Hybrid outside of Manchester is always a possibility too,
              let's talk possibilities!
            </p>
          </Reveal>
          <LeftReveal>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <FaLocationDot className="i" />
                  <span>Location</span>
                </div>
                <p>
                  <span className="alt-highlight">
                    Manchester, United Kingdom
                  </span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <FaEnvelope className="i" />
                  <span>Email</span>
                </div>
                <p>
                  <span className="alt-highlight">
                    <a href="mailto:benlucascoding@outlook.com?subject=Inquiry%20about%20your%20services&body=Hey%20there">
                      benlucascoding@outlook.com
                    </a>
                  </span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <FaPhone className="i" />
                  <span>Mobile Number</span>
                </div>
                <p>
                  <span className="alt-highlight">07907334964</span>
                </p>
              </div>
            </div>
          </LeftReveal>
          <LeftReveal>
            <ul className="contact-icons">
              <li className="contact-icon">
                <a
                  href="https://www.linkedin.com/in/benjamin-lucas-0ab164185/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visit my LinkedIn profile"
                >
                  <BsLinkedin className="i" />
                </a>
              </li>
              <li className="contact-icon">
                <a
                  href="https://github.com/retcon1"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visit my GitHub profile"
                >
                  <AiFillGithub className="i" />
                </a>
              </li>
              <li className="contact-icon">
                <a
                  href="https://www.youtube.com/@BenLucasCritic"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visit my YouTube channel"
                >
                  <BiLogoYoutube className="i" />
                </a>
              </li>
            </ul>
          </LeftReveal>
        </div>
        <div className="right-contact">
          <RightReveal>
            <Form />
          </RightReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;

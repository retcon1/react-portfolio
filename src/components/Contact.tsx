import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";
import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
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
      </div>
      <div className="contact-content-con">
        <div className="left-contact">
          <h4>Contact me here</h4>
          <p>
            I'm currently located in Manchester, a fantastic tech hub! I can
            work completely remotely though and have an excellent home setup so
            that our communication will always be top-notch whenever you need
            me. Hybrid outside of Manchester is always a possibility too, let's
            talk possibilities!
          </p>
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
          <div className="contact-icons">
            <div className="contact-icon">
              <a
                href="https://www.linkedin.com/in/benjamin-lucas-0ab164185/"
                target="_blank"
              >
                <BsLinkedin className="i" />
              </a>
            </div>
            <div className="contact-icon">
              <a href="https://github.com/retcon1" target="_blank">
                <AiFillGithub className="i" />
              </a>
            </div>
            <div className="contact-icon">
              <a href="https://www.youtube.com/@BenLucasCritic" target="_blank">
                <BiLogoYoutube className="i" />
              </a>
            </div>
          </div>
        </div>
        <div className="right-contact">
          <form action="" className="contact-form">
            <div className="input-control i-c-2">
              <input type="text" required placeholder="YOUR NAME" />
              <input type="email" required placeholder="YOUR EMAIL" />
            </div>
            <div className="input-control">
              <input type="text" required placeholder="ENTER SUBJECT" />
            </div>
            <div className="input-control">
              <textarea
                name=""
                id=""
                cols={15}
                rows={8}
                placeholder="Message here..."
              ></textarea>
            </div>
            <div className="send-btn">
              <a
                href="mailto:benlucascoding@outlook.com?subject=Inquiry%20about%20your%20services&body=Hey%20there"
                className="main-btn"
              >
                <span className="btn-text">Send</span>
                <span className="btn-icon">
                  <FaPaperPlane className="i" />
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

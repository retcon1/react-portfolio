import { FaFileArrowDown } from "react-icons/fa6";
import Hero from "../img/hero.webp";
import { Reveal, LeftReveal } from "./utils/Reveals";
import { motion, useScroll, useTransform } from "framer-motion";
import Arrow from "./Arrow";

function Hello() {
  // Used for parallax scrolling
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <header id="header">
      <motion.div className="header-content" style={{ y }}>
        <div className="left-header">
          <div className="image">
            <LeftReveal>
              <img
                src={Hero}
                alt="JavaScript Developer Ben Lucas in a coat, on a mountain with a blue sky background"
              />
            </LeftReveal>
          </div>
        </div>
        <div className="right-header">
          <Reveal>
            <h1 className="name">
              Hi, I'm <span className="name">Ben Lucas</span> <br />A Full-Stack JavaScript
              Developer.
            </h1>
          </Reveal>
          <Reveal>
            <p>
              I am a determined problem solver, channeling my natural instincts into
              <span className="highlight"> JavaScript Development</span>. I am happy to assist in
              all areas of development, from setting up and maintaining databases or APIs with
              comprehensible endpoints, to enhancing your website for a sleeker, more user-friendly
              experience.
              <br />
              <br />
              Feel free to reach out if you believe we could make a great team!
            </p>
          </Reveal>
          <div className="btn-container">
            <a
              href="https://drive.google.com/file/d/1rtcUfH2vSqX1fzBqs0FCOvvAYhfwFsVQ/view?usp=sharing"
              className="main-btn"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Download Ben Lucas' CV"
              role="button"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <FaFileArrowDown />
              </span>
            </a>
          </div>
        </div>
        <Arrow section="#about" />
      </motion.div>
    </header>
  );
}

export default Hello;

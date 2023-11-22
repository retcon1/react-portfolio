import { LeftReveal, Reveal, RightReveal } from "./utils/Reveals";
import { FaFileArrowDown, FaLayerGroup } from "react-icons/fa6";
import Tech from "./Tech";
import { motion, useScroll, useTransform } from "framer-motion";
import Arrow from "./Arrow";

function About() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section className="about-page" id="about">
      <motion.div style={{ y }}>
        <div className="main-title">
          <LeftReveal>
            <h2>
              About <span>me</span>
              <span className="bg-text">
                my
                <br />
                stats
              </span>
            </h2>
          </LeftReveal>
        </div>
        <div className="about-container">
          <div className="left-about">
            <div className="sub-title">
              <Reveal color="var(--color-accent)">
                <h4>My Timeline</h4>
              </Reveal>
            </div>
            <div className="last-item">
              <div className="tl-icon">
                <FaLayerGroup />
              </div>
              <p className="tl-duration">2023 Feb - May</p>
              <Reveal color="var(--color-accent)">
                <h5>
                  Full Stack Developer Student<span> - Northcoders</span>
                </h5>
              </Reveal>
              <Reveal color="var(--color-accent)">
                <p>
                  A 13 week, full-time bootcamp in which I learned JavaScript
                  programming in a test driven development environment. I
                  completed a solo project which included back-end development
                  utilising
                  <span className="alt-highlight"> Express.js</span> and
                  <span className="alt-highlight"> SQL</span>, front-end
                  development using
                  <span className="alt-highlight"> React</span>,
                  <span className="alt-highlight"> Tailwind CSS</span>,
                  <span className="alt-highlight"> Material UI</span> and
                  <span className="alt-highlight"> Axios</span>. Culminating in
                  a group project with 5 other wonderful devs, in which we built
                  an online raiding game, using{" "}
                  <span className="alt-highlight">TypeScript</span>,
                  <span className="alt-highlight"> PassportJS</span>,
                  <span className="alt-highlight"> MongoDB</span> and
                  <span className="alt-highlight"> React Native Expo</span>.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="right-about">
            <div className="sub-title">
              <Reveal color="var(--color-accent)">
                <h4>
                  Get To Know <span className="alt-highlight">Me</span>
                </h4>
              </Reveal>
            </div>
            <Reveal color="var(--color-accent)">
              <p>
                After years of being passionate about technology, from gaming to
                PC building, video production and beyond, my innate desire to
                help people solve their problems with tech has brought me to
                coding; the place where I can make the biggest difference for
                the most amount of people!
                <br />
                <br />
                Now, after diving in head-first through the Northcoders Software
                Development Bootcamp, I'm training every day to become a better
                programmer to help people like
                <span className="alt-highlight"> you</span> achieve their goals
                faster.
              </p>
            </Reveal>
            <RightReveal>
              <div className="btn-container">
                <a
                  href="https://drive.google.com/file/d/1pYmmJDh9zVLBQQJrviycOZwC6yvJItLY/view?usp=sharing"
                  className="alt-btn"
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
            </RightReveal>
          </div>
        </div>
        <div className="skills">
          <RightReveal>
            <h4>My Skills</h4>
          </RightReveal>
          <LeftReveal>
            <div className="tech-container">
              <Tech />
            </div>
          </LeftReveal>
        </div>
        <Arrow section="#portfolio" />
      </motion.div>
    </section>
  );
}

export default About;

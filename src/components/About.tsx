import { LeftReveal, Reveal } from "./utils/Reveals";
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
            <div className="timeline-item">
              <div className="tl-icon">
                <FaLayerGroup />
              </div>
              <p className="tl-duration">2024 Jan - Present</p>
              <Reveal color="var(--color-accent)">
                <h5>
                  Full Stack Developer<span> - Digital Futures</span>
                </h5>
              </Reveal>
              <Reveal color="var(--color-accent)">
                <p>
                  During the 12 week Digital Futures Academy I furthered my knowledge of full stack
                  development, learning
                  <span className="alt-highlight"> Java</span> and
                  <span className="alt-highlight"> OOP</span> principles, as well as deepening my
                  experience with front-end<span className="alt-highlight"> React </span>
                  development, and back-end development with
                  <span className="alt-highlight"> MongoDB</span>. I gained a better understanding
                  of Agile development when working on a group project in a team of 7, alongside 2
                  other teams which we had to communicate with to ensure our project was successful.
                  Now I look forward to putting my new skills to use in the industry when being
                  placed with one of Digital Futures' clients or finding a role elsewhere,
                  potentially with you!
                </p>
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
                  A 13 week, full-time bootcamp in which I learned JavaScript programming in a test
                  driven development environment. I completed a solo project which included back-end
                  development utilising
                  <span className="alt-highlight"> Express.js</span> and
                  <span className="alt-highlight"> SQL</span>, front-end development using
                  <span className="alt-highlight"> React</span>,
                  <span className="alt-highlight"> Tailwind CSS</span>,
                  <span className="alt-highlight"> Material UI</span> and
                  <span className="alt-highlight"> Axios</span>. Culminating in a group project with
                  5 other wonderful devs, in which we built an online raiding game, using
                  <span className="alt-highlight"> TypeScript</span>,
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
                With a longstanding passion for technology, spanning from gaming, PC building to
                video production and beyond, I've always been driven to help others solve their
                tech-related challenges. This passion has led me to the world of coding, where I
                believe I can make a significant impact on a large scale.
                <br />
                <br />
                After immersing myself in the Northcoders Software Development Bootcamp, I am
                committed to honing my programming skills daily to assist people like
                <span className="alt-highlight"> you</span> in achieving their goals more
                efficiently.
                <br />
                <br />
                In addition to graduating from Northcoders, I have also completed the Digital
                Futures Academy to further enhance my skills and prove that I can constantly grow
                and adapt to a variety of challenges. My eagerness to learn and connect with people
                fuels my ambition to excel in this field.
              </p>
            </Reveal>
            <LeftReveal>
              <div className="btn-container">
                <a
                  href="https://drive.google.com/file/d/1rtcUfH2vSqX1fzBqs0FCOvvAYhfwFsVQ/view?usp=sharing"
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
            </LeftReveal>
          </div>
        </div>
        <div className="skills">
          <LeftReveal>
            <h4>My Skills</h4>
          </LeftReveal>
          <LeftReveal>
            <Tech />
          </LeftReveal>
        </div>
        <Arrow section="#portfolio" />
      </motion.div>
    </section>
  );
}

export default About;

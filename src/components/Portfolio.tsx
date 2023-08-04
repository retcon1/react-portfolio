import React, { useState } from "react";
import port1 from "../img/port01.png";
import port2 from "../img/port02.png";
import { Tilt } from "react-tilt";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Modal from "./Modal";
import { AiFillGithub } from "react-icons/ai";
import { BiSolidDice6, BiLogoYoutube } from "react-icons/bi";
import { Reveal, RightReveal } from "./utils/Reveals";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Portfolio() {
  const [modalOpen, setModalOpen] = useState(0);

  const close = () => setModalOpen(0);
  const open1 = () => setModalOpen(1);
  const open2 = () => setModalOpen(2);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section className="portfolio" id="portfolio">
      <motion.div style={{ y }}>
        <RightReveal>
          <div className="main-title">
            <h2>
              <span style={{ color: "var(--color-secondary)" }}>Portfolio</span>
              <span className="bg-text">
                My
                <br />
                Work
              </span>
            </h2>
          </div>
        </RightReveal>
        <div className="port-text">
          <Reveal>
            <p>Here are some projects that I've done in various frameworks.</p>
          </Reveal>
        </div>
        <div className="portfolios">
          <motion.div onClick={() => (modalOpen ? close() : open1())}>
            <Tilt options={{ scale: 1 }} className="portfolio-card">
              <img src={port1} alt="port1" />
            </Tilt>
          </motion.div>
          <motion.div onClick={() => (modalOpen ? close() : open2())}>
            <Tilt options={{ scale: 1 }} className="portfolio-card">
              <img src={port2} alt="port2" />
            </Tilt>
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen === 1 && (
              <Modal
                modalOpen={modalOpen}
                handleClose={close}
                content={
                  <>
                    <h3>Ben's Boardgame Bazaar</h3>
                    <div className="tech">
                      <p>React</p>
                      <p>Tailwind CSS</p>
                      <p>Material UI</p>
                      <p>Axios</p>
                      <p>Express.js</p>
                      <p>PSQL</p>
                      <p>Jest</p>
                    </div>
                    <p>
                      This boardgame review site was created with a database in
                      SQL, a restful API was developed in Express.js to give the
                      front-end access through intuitive endpoints. The site has
                      a clean look, aided by the use of Material UI elements and
                      stylised with Tailwind CSS.
                    </p>
                    <div className="icons">
                      <a
                        href="https://github.com/retcon1/fe-nc-games"
                        rel="noreferrer noopener"
                        className="icon"
                      >
                        <AiFillGithub className="i" />
                      </a>
                      <a
                        href="https://bensboardgamebazaar.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="icon"
                      >
                        <BiSolidDice6 className="i" />
                      </a>
                      <a
                        href="https://github.com/retcon1/nc-games"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="icon"
                      >
                        <AiFillGithub className="i" />
                      </a>
                    </div>
                  </>
                }
              />
            )}
          </AnimatePresence>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen === 2 && (
              <Modal
                modalOpen={modalOpen}
                handleClose={close}
                content={
                  <>
                    <h3>Cosmic Conflict</h3>
                    <div className="tech">
                      <p>TypeScript</p>
                      <p>React Native Expo</p>
                      <p>Material UI</p>
                      <p>PassportJS</p>
                      <p>Mongo DB</p>
                      <p>Mocha/Chai</p>
                    </div>
                    <p>
                      A multiplayer game app developed with React Native Expo,
                      this group project allows players create an account and
                      human or alien character. They can attack other players to
                      potentially acquire their credits, which are used to
                      upgrade their character so that you stand a better chance
                      in future battles.
                      <br />
                      For more info see the presentation on YouTube below!
                    </p>
                    <div className="icons">
                      <a
                        href="https://github.com/retcon1/cosmic-conflict-fe"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="icon"
                      >
                        <AiFillGithub className="i" />
                      </a>
                      <a
                        href="https://youtu.be/q5eUmA5dFSg"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="icon"
                      >
                        <BiLogoYoutube className="i" />
                      </a>
                      <a
                        href="https://github.com/Bilaal96/alien-wars-api"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="icon"
                      >
                        <AiFillGithub className="i" />
                      </a>
                    </div>
                  </>
                }
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;

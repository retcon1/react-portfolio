import { AiFillGithub } from "react-icons/ai";
import port1 from "../img/port1.webp";
import port2 from "../img/port2.webp";
import port3 from "../img/port3.webp";
import port4 from "../img/port4.webp";
import { BiLogoYoutube, BiSolidDice6 } from "react-icons/bi";
import { FaDice } from "react-icons/fa6";
export const projects = [
  {
    id: 1,
    image: port1,
    modalContent: (
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
          This boardgame review site was created with a database in SQL, a
          restful API was developed in Express.js to give the front-end access
          through intuitive endpoints. The site has a clean look, aided by the
          use of Material UI elements and stylised with Tailwind CSS.
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
    ),
  },
  {
    id: 2,
    image: port2,
    modalContent: (
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
          A multiplayer game app developed with React Native Expo, this group
          project allows players create an account and human or alien character.
          They can attack other players to potentially acquire their credits,
          which are used to upgrade their character so that you stand a better
          chance in future battles.
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
    ),
  },
  {
    id: 3,
    image: port3,
    modalContent: (
      <>
        <h3>House of Games</h3>
        <div className="tech">
          <p>TypeScript</p>
          <p>React</p>
          <p>Sass</p>
          <p>Axios</p>
        </div>
        <p>
          A space for me to play around with different bits of tech and ideas.{" "}
          <br /> Such as the minimax algorithm used in the naughts and crosses
          game.
        </p>
        <div className="icons">
          <a
            href="https://github.com/retcon1/house-of-games"
            target="_blank"
            rel="noreferrer noopener"
            className="icon"
          >
            <AiFillGithub className="i" />
          </a>
          <a
            href="https://bens-house-of-games.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="icon"
          >
            <FaDice className="i" />
          </a>
        </div>
      </>
    ),
  },
  {
    id: 4,
    image: port4,
    modalContent: (
      <>
        <h3>Planet Press</h3>
        <div className="tech">
          <p>JavaScript</p>
          <p>React Native Expo</p>
          <p>React Native Paper</p>
          <p>Firebase</p>
          <p>Puppeteer</p>
        </div>
        <p>
          This 48-hour Hackathon project was developed in a team of 4, based
          around the theme of 'green'. We decided to create an environmental
          news aggregator to test out our web scraping abilities. Storing the
          news and user data using Firebase. We also scraped an
        </p>
        <div className="icons">
          <a
            href="https://github.com/RyanKarakoc/planetPress"
            target="_blank"
            rel="noreferrer noopener"
            className="icon"
          >
            <AiFillGithub className="i" />
          </a>
        </div>
      </>
    ),
  },
];

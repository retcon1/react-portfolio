import React from "react";
import { Reveal } from "./utils/Reveals";

function About() {
  return (
    <section className="about-section">
      <div className="main-title">
        <Reveal>
          <h2>
            About <span>me</span>
            <span className="bg-text">
              my <br />
              stats
            </span>
          </h2>
        </Reveal>
      </div>
      <div className="about-container">
        <p>
          After years of being passionate about technology, from gaming to PC
          building, video production and beyond, my innate desire to help people
          solve their problems with tech has brought me to coding; the place
          where I can make the biggest difference for the most amount of people!
          <br />
          <br />
          Now, after diving in head-first through the Northcoders Software
          Development Bootcamp, I'm training every day to become a better
          programmer to help people like
          <span className="highlight"> you</span> achieve their goals faster.
        </p>
      </div>
    </section>
  );
}

export default About;

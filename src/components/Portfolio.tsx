import React　from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RightReveal } from "./utils/Reveals";
import Arrow from "./Arrow";
import PortfolioCards from "./PortfolioCard";

function Portfolio() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div style={{ y }}>
      <section className="portfolio" id="portfolio">
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
          <PortfolioCards />
        </div>
        <Arrow section="#contact" />
      </section>
    </motion.div>
  );
}

export default Portfolio;

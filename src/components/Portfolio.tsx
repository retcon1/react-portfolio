import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Reveal, RightReveal } from "./utils/Reveals";
import Arrow from "./Arrow";
import PortfolioCard from "./PortfolioCard";
import Modal from "./Modal";
import { projects } from "../assets/projects";

interface Project {
  id: number;
  image: string;
  modalContent: JSX.Element;
}

function Portfolio() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const [modalOpen, setModalOpen] = useState(0);
  const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined);

  const close = () => {
    setModalOpen(0);
    document.body.style.overflow = "auto";
  };
  const open = (num: number) => setModalOpen(num);

  const handleModal = (num: number) => {
    const project = projects.find((project) => project.id === num);
    setCurrentProject(project);
    if (modalOpen) {
      close();
    } else {
      open(num);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <motion.div style={{ y, overflow: "hidden" }}>
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
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} handleModal={handleModal} />
            ))}
          </div>
          <Arrow section="#contact" />
        </section>
      </motion.div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {currentProject && modalOpen === currentProject.id && (
          <Modal handleClose={close} content={currentProject.modalContent} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Portfolio;

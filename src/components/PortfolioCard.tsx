import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Modal from "./Modal";
import { projects } from "../assets/projects";

const PortfolioCards = () => {
  const [modalOpen, setModalOpen] = useState(0);

  const close = () => setModalOpen(0);
  const open = (num: number) => setModalOpen(num);

  const handleModal = (num: number) => {
    if (modalOpen) {
      close();
    } else {
      open(num);
    }
  };

  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <motion.div
            onClick={() => handleModal(project.id)}
            // Needed for accessibility, allows user to hit enter to select
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleModal(project.id);
              }
            }}
            tabIndex={0}
          >
            <Tilt options={{ scale: 1 }} className="portfolio-card">
              <img
                src={project.image}
                alt={`port${project.id}`}
                loading="lazy"
              />
            </Tilt>
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen === project.id && (
              <Modal
                modalOpen={modalOpen}
                handleClose={close}
                content={project.modalContent}
              />
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};

export default PortfolioCards;

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

interface Project {
  id: number;
  image: string;
  modalContent: JSX.Element;
}

interface PortfolioCardProps {
  project: Project;
  handleModal: (num: number) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, handleModal }) => {
  return (
    <div key={project.id}>
      <motion.div
        onClick={() => handleModal(project.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleModal(project.id);
          }
        }}
        tabIndex={0}
      >
        <Tilt options={{ scale: 1 }} className="portfolio-card">
          <img src={project.image} alt={`port${project.id}`} loading="lazy" />
        </Tilt>
      </motion.div>
    </div>
  );
};

export default PortfolioCard;

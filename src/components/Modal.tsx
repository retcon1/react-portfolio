import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { ImCross } from "react-icons/im";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface ModalProps {
  modalOpen: number;
  handleClose(): void;
  content: any;
}

function Modal({ handleClose, content }: ModalProps) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ImCross className="exit" onClick={handleClose} />
        {content}
      </motion.div>
    </Backdrop>
  );
}

export default Modal;

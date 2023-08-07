import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";

interface BackdropProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function Backdrop({ children, onClick }: BackdropProps) {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;

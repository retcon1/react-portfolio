import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

interface ArrowProps {
  section: string;
}

function Arrow({ section }: ArrowProps) {
  const handleClick = () => {
    const nextSection = document.querySelector(section);
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="arrow"
      style={{ bottom: "2rem" }}
      initial={{ y: 0 }}
      animate={{ y: "-40%" }}
      transition={{
        duration: 0.7,
        repeat: Infinity,
        repeatType: "reverse",
        type: "tween",
      }}
      onClick={handleClick}
    >
      <BsChevronDown />
    </motion.div>
  );
}

export default Arrow;

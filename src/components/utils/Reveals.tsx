import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  color?: string;
}

export const Reveal = ({
  children,
  width = "fit-content",
  color = "var(--color-secondary)",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Use the animation
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: color,
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export const LeftReveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Use the animation
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export const RightReveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Use the animation
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

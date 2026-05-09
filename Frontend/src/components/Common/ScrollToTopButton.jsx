import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Btn = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 900;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-deep));
  color: #04110d;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.35);
  border: none;
  cursor: pointer;

  @media (max-width: 640px) {
    bottom: 1.25rem;
    right: 1.25rem;
    width: 2.6rem;
    height: 2.6rem;
    font-size: 0.88rem;
  }
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <Btn
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.12, boxShadow: "0 12px 32px rgba(var(--accent-rgb), 0.5)" }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.22 }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Btn>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

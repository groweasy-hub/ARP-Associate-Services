import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const base = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
`;

const Primary = styled(motion(Link))`
  ${base}
  background: var(--accent);
  color: #0a0f0d;
  &:hover { opacity: 0.88; transform: scale(1.02); }
`;

const Ghost = styled(motion(Link))`
  ${base}
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  &:hover { border-color: var(--accent); color: var(--accent); }
`;

const AnimatedButton = ({ to = "/contact", variant = "primary", children, pulse }) => {
  const Comp = variant === "ghost" ? Ghost : Primary;
  return (
    <Comp
      to={to}
      animate={pulse ? { scale: [1, 1.04, 1] } : undefined}
      transition={pulse ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      {children}
    </Comp>
  );
};

export default AnimatedButton;

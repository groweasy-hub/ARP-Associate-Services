import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 6rem 5%;
  background: var(--surface);
`;
export const Inner = styled.div`max-width: var(--max-w); margin: 0 auto;`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;
export const Card = styled.div`
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 1.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: border-color 0.25s;
  &:hover { border-color: var(--accent); }
`;
export const IconCircle = styled(motion.div)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.4rem;
`;
export const ValueTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
`;
export const ValueDesc = styled.p`
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.7;
`;

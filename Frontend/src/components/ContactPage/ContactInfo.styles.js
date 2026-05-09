import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Card = styled.div`
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: border-color 0.25s;
  &:hover { border-color: var(--accent); }
`;

export const IconBox = styled.div`
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  border-radius: 12px;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.1rem;
`;

export const CardTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.3rem;
`;

export const CardText = styled.p`
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.7;
  transition: color 0.2s;
  &[href]:hover { color: var(--accent); }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SocialLink = styled(motion.a)`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 1rem;
  transition: color 0.2s, border-color 0.2s;
  &:hover { color: var(--accent); border-color: var(--accent); }
`;

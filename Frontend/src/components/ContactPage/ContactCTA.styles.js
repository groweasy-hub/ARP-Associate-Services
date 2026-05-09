import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 6rem 5%;
  background: var(--surface);
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Right = styled.div``;

export const SectionLabel = styled.p`
  font-size: 0.78rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
`;

export const SectionHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text);
`;

export const Divider = styled.div`
  width: 48px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
`;

export const Tagline = styled.p`
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.75;
  max-width: 380px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(var(--accent-rgb), 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 0.9rem;
  flex-shrink: 0;
`;

export const InfoText = styled.a`
  font-size: 0.9rem;
  color: var(--text);
  transition: color 0.2s;
  &:hover {
    color: var(--accent);
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 0.9rem;
  transition:
    color 0.2s,
    border-color 0.2s;
  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.9rem 1.25rem;
  color: var(--text);
  font-size: 0.9rem;
  font-family: var(--font-body);
  outline: none;
  transition: border-color 0.2s;
  &::placeholder {
    color: var(--muted);
  }
  &:focus {
    border-color: var(--accent);
  }
`;

export const Textarea = styled.textarea`
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.9rem 1.25rem;
  color: var(--text);
  font-size: 0.9rem;
  font-family: var(--font-body);
  outline: none;
  resize: vertical;
  transition: border-color 0.2s;
  &::placeholder {
    color: var(--muted);
  }
  &:focus {
    border-color: var(--accent);
  }
`;

export const SubmitBtn = styled.button`
  background: var(--accent);
  color: #0a0f0d;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.9rem 2rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.85;
  }
`;

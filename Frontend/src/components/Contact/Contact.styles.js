import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 7rem 5% 8rem;

  @media (min-width: 1200px) {
    padding: 5.8rem 5% 6.4rem;
  }
`;


export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 2rem;
  align-items: stretch;

  @media (min-width: 1200px) {
    gap: 1.6rem;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: clamp(1.8rem, 3vw, 2.4rem);
  border-radius: 32px;
  background:
    linear-gradient(
      180deg,
      rgba(var(--surface-rgb), 0.88),
      rgba(var(--elevated-rgb), 0.92)
    ),
    url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80")
      center/cover;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-soft);

  @media (min-width: 1200px) {
    gap: 0.95rem;
    padding: 1.55rem 1.75rem;
    border-radius: 26px;
  }
`;

export const Right = styled.div`
  padding: clamp(1.8rem, 3vw, 2.4rem);
  border-radius: 32px;
  background: linear-gradient(
    180deg,
    rgba(var(--surface-rgb), 0.94),
    rgba(var(--elevated-rgb), 0.94)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-soft);
  overflow: hidden;

  @media (min-width: 1200px) {
    padding: 1.55rem 1.75rem;
    border-radius: 26px;
  }
`;

export const SectionLabel = styled.p`
  font-size: 0.8rem;
  color: var(--accent);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
`;

export const SectionHeading = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.3rem);
  font-weight: 800;
  color: var(--text);
  max-width: 10ch;
`;

export const Divider = styled.div`
  width: 58px;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  border-radius: 999px;
`;

export const Tagline = styled.p`
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.85;
  max-width: 34ch;

  @media (min-width: 1200px) {
    font-size: 0.92rem;
    line-height: 1.72;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1200px) {
    gap: 0.8rem;
  }
`;

export const InfoIcon = styled.div`
  width: 46px;
  height: 46px;
  background: rgba(var(--surface-rgb), 0.72);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 0.98rem;
  flex-shrink: 0;
  backdrop-filter: blur(14px);

  @media (min-width: 1200px) {
    width: 40px;
    height: 40px;
    border-radius: 14px;
    font-size: 0.9rem;
  }
`;

export const InfoText = styled.a`
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.8;
  transition: color var(--transition-smooth);

  &:hover {
    color: var(--accent);
  }

  @media (min-width: 1200px) {
    font-size: 0.88rem;
    line-height: 1.65;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.7rem;

  @media (min-width: 1200px) {
    gap: 0.65rem;
  }
`;

export const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  background: rgba(var(--surface-rgb), 0.76);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 0.95rem;
  transition:
    color var(--transition-smooth),
    border-color var(--transition-smooth);

  &:hover {
    color: var(--accent);
    border-color: rgba(var(--accent-rgb), 0.35);
  }

  @media (min-width: 1200px) {
    width: 40px;
    height: 40px;
    border-radius: 14px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1200px) {
    gap: 0.85rem;
  }
`;

const fieldStyles = `
  background: rgba(var(--surface-rgb), 0.8);
  border: 1px solid ${({ $invalid }) =>
    $invalid ? "rgba(248, 113, 113, 0.8)" : "rgba(255, 255, 255, 0.08)"};
  border-radius: 18px;
  padding: 1rem 1.15rem;
  color: var(--text);
  font-size: 0.96rem;
  font-family: var(--font-body);
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color var(--transition-smooth), box-shadow var(--transition-smooth);

  &::placeholder {
    color: var(--muted-2);
  }

  &:focus {
    border-color: rgba(var(--accent-rgb), 0.4);
    box-shadow: 0 0 0 4px rgba(var(--accent-rgb), 0.1);
  }

  &:disabled {
    opacity: 0.72;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  ${fieldStyles}
`;

export const Textarea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 160px;

  @media (min-width: 1200px) {
    min-height: 136px;
  }
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 170px;
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  color: #05120e;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.95rem 1.6rem;
  border-radius: 999px;
  letter-spacing: 0.02em;
  box-shadow: 0 14px 30px rgba(var(--accent-rgb), 0.2);
  transition:
    transform var(--transition-smooth),
    box-shadow var(--transition-smooth);
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 36px rgba(var(--accent-rgb), 0.26);
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 14px 30px rgba(var(--accent-rgb), 0.12);
  }

  @media (min-width: 1200px) {
    min-width: 152px;
    padding: 0.82rem 1.35rem;
    font-size: 0.84rem;
  }
`;

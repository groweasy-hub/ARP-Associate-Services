import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroWrap = styled.section`
  min-height: 68vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(var(--nav-h) + 4rem) 5% 5rem;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(var(--bg-rgb), 0.8), rgba(var(--bg-rgb), 0.94)),
    url("https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80") center/cover;

  @media (max-width: 640px) {
    min-height: auto;
    padding: calc(var(--nav-h) + 2.5rem) 5% 4rem;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 18%, rgba(var(--accent-rgb), 0.16), transparent 20%),
    radial-gradient(circle at 82% 20%, rgba(var(--accent-deep-rgb), 0.16), transparent 18%);
  pointer-events: none;
`;

export const Particles = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const Particle = styled(motion.span)`
  position: absolute;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.08);
  user-select: none;
`;

export const Breadcrumb = styled.p`
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 1.2rem;

  a {
    color: var(--muted);
    transition: color var(--transition-smooth);

    &:hover {
      color: var(--accent);
    }
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.95rem;
`;

export const Heading = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  font-weight: 800;
  color: var(--text);
  max-width: 14ch;
  line-height: 1.06;
  margin-bottom: 1.2rem;

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: clamp(2.2rem, 11vw, 3.2rem);
  }
`;

export const Sub = styled.p`
  font-size: 1.02rem;
  color: var(--muted);
  max-width: 40rem;
  line-height: 1.9;
  margin-bottom: 2.2rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const btnBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.95rem 1.6rem;
  border-radius: 999px;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-smooth), color var(--transition-smooth);
  text-decoration: none;
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const BtnPrimary = styled(Link)`
  ${btnBase}
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  color: #04110d;
  box-shadow: 0 14px 34px rgba(var(--accent-rgb), 0.22);

  &:hover {
    transform: translateY(-3px);
  }
`;

export const BtnGhost = styled.button`
  ${btnBase}
  background: rgba(var(--surface-rgb), 0.72);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(var(--accent-rgb), 0.35);
    color: var(--accent);
  }
`;

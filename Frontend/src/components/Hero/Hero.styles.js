import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: calc(var(--nav-h) + 4.5rem) 5% 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    min-height: auto;
    padding: calc(var(--nav-h) + 15rem) 5% 4rem;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(var(--bg-rgb), 0.96) 0%,
      rgba(var(--bg-rgb), 0.72) 45%,
      rgba(var(--bg-rgb), 0.84) 100%
    ),
    radial-gradient(
      circle at 18% 18%,
      rgba(var(--accent-rgb), 0.18),
      transparent 22%
    ),
    radial-gradient(
      circle at 82% 24%,
      rgba(var(--accent-deep-rgb), 0.18),
      transparent 20%
    ),
    url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80")
      center/cover;
  pointer-events: none;
  transform: scale(1.02);
`;

export const HeroGrid = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 4.5rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 640px) {
    gap: 2rem;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(var(--surface-rgb), 0.72);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(16px);
  color: var(--text);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    padding: 0.5rem 0.85rem;
  }
`;

export const BadgeDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--accent), var(--accent-deep));
  box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.55);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }

    50% {
      opacity: 0.45;
      transform: scale(0.8);
    }
  }
`;

export const Heading = styled.h1`
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.08em;
  line-height: 1.03;
  color: var(--text);
  max-width: 10ch;

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: clamp(2.9rem, 12vw, 4rem);
  }
`;

export const HeadingAccent = styled.span`
  background: linear-gradient(90deg, var(--accent), #66efd1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SubText = styled.p`
  font-size: 1.02rem;
  color: var(--muted);
  max-width: 38rem;
  line-height: 1.9;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.95rem 1.6rem;
  border-radius: 999px;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-smooth), background var(--transition-smooth), color var(--transition-smooth);
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const BtnPrimary = styled(Link)`
  ${buttonBase}
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  color: #04110d;
  box-shadow: 0 14px 34px rgba(var(--accent-rgb), 0.22);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 38px rgba(var(--accent-rgb), 0.28);
  }
`;

export const BtnGhost = styled(Link)`
  ${buttonBase}
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(var(--surface-rgb), 0.5);
  color: var(--text);
  backdrop-filter: blur(16px);

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(var(--accent-rgb), 0.5);
    color: var(--accent);
  }
`;

export const TrustRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

export const TrustPill = styled.span`
  padding: 0.7rem 1rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(var(--surface-rgb), 0.6);
  backdrop-filter: blur(14px);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0.01em;

  @media (max-width: 640px) {
    font-size: 0.5rem;
    padding: 0.5rem 0.75rem;
  }
`;

export const VisualStack = styled.div`
  display: grid;
  gap: 1rem;
  width: min(100%, 28rem);

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const HeroImageCard = styled.div`
  min-height: 22rem;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(
      180deg,
      rgba(var(--bg-rgb), 0.18),
      rgba(var(--bg-rgb), 0.82)
    ),
    url("https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=1200&q=80")
      center/cover;
  box-shadow: var(--shadow-soft);

  @media (max-width: 640px) {
    min-height: 18rem;
    border-radius: 22px;
  }
`;

export const HeroImageOverlay = styled.div`
  position: absolute;
  inset: auto 1.25rem 1.25rem 1.25rem;
  padding: 0.95rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(var(--surface-rgb), 0.72);
  backdrop-filter: blur(16px);

  @media (max-width: 640px) {
    inset: auto 0.9rem 0.9rem 0.9rem;
    padding: 0.85rem;
    border-radius: 16px;
  }
`;

export const InsightCard = styled.div`
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    180deg,
    rgba(var(--surface-rgb), 0.92),
    rgba(var(--elevated-rgb), 0.92)
  );
  box-shadow: var(--shadow-soft);
  padding: 1.2rem;

  @media (max-width: 640px) {
    border-radius: 20px;
    padding: 1rem;
  }
`;

export const InsightEyebrow = styled.p`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.6rem;
`;

export const InsightTitle = styled.h3`
  font-size: 1.02rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.35;
  color: var(--text);
`;

export const InsightStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const InsightStat = styled.div`
  padding: 0.85rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const InsightNumber = styled.p`
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 0.25rem;
`;

export const InsightLabel = styled.p`
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--muted);
`;

export const QuoteCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(var(--surface-rgb), 0.9),
    rgba(var(--elevated-rgb), 0.92)
  );
  border: 1px solid rgba(var(--accent-rgb), 0.16);
  border-radius: 24px;
  padding: 1.25rem;
  position: relative;
  box-shadow: var(--shadow-soft);

  @media (max-width: 640px) {
    border-radius: 20px;
    padding: 1rem;
  }
`;

export const QuoteIcon = styled.div`
  color: var(--accent);
  font-size: 1.15rem;
  margin-bottom: 0.8rem;
  opacity: 0.85;
`;

export const QuoteText = styled.p`
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--muted);
  font-style: italic;
  margin-bottom: 0.8rem;
`;

export const QuoteAuthor = styled.cite`
  font-size: 0.78rem;
  color: var(--accent-soft);
  font-style: normal;
  letter-spacing: 0.02em;
`;

import styled from "styled-components";

export const Section = styled.section`
  padding: 7rem 5%;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 1200px) {
    padding: 5.8rem 5%;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const SectionLabel = styled.p`
  font-size: 0.8rem;
  color: var(--accent);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const SectionHeading = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 800;
  color: var(--text);
`;

export const Divider = styled.div`
  width: 58px;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  border-radius: 999px;
  margin: 1.2rem 0 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;

  @media (min-width: 1200px) {
    gap: 1.2rem;
    margin-bottom: 2.8rem;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: linear-gradient(180deg, rgba(var(--surface-rgb), 0.92), rgba(var(--elevated-rgb), 0.92));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 1.9rem 1.65rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: default;
  box-shadow: var(--shadow-soft);

  @media (min-width: 1200px) {
    border-radius: 22px;
    padding: 1.55rem 1.35rem;
    gap: 0.85rem;
  }
`;

export const QuoteIcon = styled.div`
  color: var(--accent);
  font-size: 1.2rem;
  opacity: 0.7;
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  color: var(--accent);
  font-size: 0.78rem;
`;

export const QuoteText = styled.p`
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.9;
  flex: 1;

  @media (min-width: 1200px) {
    font-size: 0.88rem;
    line-height: 1.72;
  }
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 0.4rem;
`;

export const Avatar = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: rgba(var(--accent-rgb), 0.14);
  border: 1px solid rgba(var(--accent-rgb), 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.04em;
  flex-shrink: 0;
`;

export const AuthorName = styled.p`
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text);
`;

export const AuthorRole = styled.p`
  font-size: 0.8rem;
  color: var(--muted);
`;

export const LogoTrack = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 0.4rem 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: max-content;
`;

export const LogoItem = styled.div`
  min-width: 170px;
  height: 72px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(var(--surface-rgb), 0.76);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);

  @media (min-width: 1200px) {
    min-width: 148px;
    height: 62px;
    border-radius: 18px;
  }
`;

export const LogoText = styled.span`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

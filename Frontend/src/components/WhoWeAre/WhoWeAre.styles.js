import styled from "styled-components";

export const Section = styled.section`
  padding: 7rem 5%;
  background: transparent;

  @media (min-width: 1200px) {
    padding: 5.8rem 5%;
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
  margin-bottom: 2rem;

  @media (min-width: 1200px) {
    gap: 1.6rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  padding: clamp(1.8rem, 3vw, 2.4rem);
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(var(--surface-rgb), 0.92), rgba(var(--elevated-rgb), 0.92));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-soft);

  @media (min-width: 1200px) {
    padding: 1.55rem 1.75rem;
    border-radius: 26px;
  }
`;

export const Right = styled.div`
  padding: clamp(1.8rem, 3vw, 2.4rem);
  border-radius: 32px;
  background:
    linear-gradient(180deg, rgba(var(--surface-rgb), 0.88), rgba(var(--surface-rgb), 0.78)),
    url("https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80") center/cover;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-soft);

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
  margin-bottom: 0.55rem;
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
  margin: 1.1rem 0 1.4rem;
`;

export const Tagline = styled.p`
  font-size: 1.12rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1.7;
  max-width: 24ch;

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`;

export const Body = styled.p`
  font-size: 0.98rem;
  color: var(--muted);
  line-height: 1.9;

  @media (min-width: 1200px) {
    font-size: 0.9rem;
    line-height: 1.72;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 1200px) {
    gap: 0.85rem;
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StatBox = styled.div`
  background: linear-gradient(180deg, rgba(var(--surface-rgb), 0.9), rgba(var(--elevated-rgb), 0.92));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 1.8rem 1.3rem;
  text-align: left;
  cursor: default;
  box-shadow: var(--shadow-soft);
  transition:
    border-color var(--transition-smooth),
    box-shadow var(--transition-smooth);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.35);
    box-shadow:
      var(--shadow-soft),
      0 0 0 1px rgba(var(--accent-rgb), 0.12);
  }

  @media (min-width: 1200px) {
    border-radius: 22px;
    padding: 1.45rem 1.1rem;
  }
`;

export const StatNumber = styled.p`
  font-family: var(--font-heading);
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.05em;

  @media (min-width: 1200px) {
    font-size: 1.95rem;
  }
`;

export const StatLabel = styled.p`
  font-size: 0.84rem;
  color: var(--muted);
  margin-top: 0.45rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

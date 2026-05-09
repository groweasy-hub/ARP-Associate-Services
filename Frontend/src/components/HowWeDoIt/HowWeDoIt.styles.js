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

export const SectionLabel = styled.p`
  font-size: 0.8rem;
  color: var(--accent);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

export const SectionHeading = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--text);
  max-width: 11ch;
`;

export const Divider = styled.div`
  width: 58px;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  border-radius: 999px;
  margin: 1.2rem 0 4rem;

  @media (min-width: 1200px) {
    margin: 1rem 0 3.1rem;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1200px) {
    gap: 1.6rem;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
  gap: 2rem;
  align-items: stretch;
  direction: ${({ $reverse }) => ($reverse ? "rtl" : "ltr")};

  & > * {
    direction: ltr;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  @media (min-width: 1200px) {
    gap: 1.6rem;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  padding: clamp(1.6rem, 3vw, 2.4rem);
  background: linear-gradient(180deg, rgba(var(--surface-rgb), 0.92), rgba(var(--elevated-rgb), 0.92));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  box-shadow: var(--shadow-soft);

  @media (min-width: 1200px) {
    gap: 0.65rem;
    padding: 1.65rem 1.75rem;
    border-radius: 24px;
  }
`;

export const ItemNumber = styled.span`
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.08);
  line-height: 1;
  margin-bottom: -0.3rem;

  @media (min-width: 1200px) {
    font-size: 3.6rem;
  }
`;

export const ItemTag = styled.span`
  font-size: 0.78rem;
  color: var(--accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ItemTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text);
  line-height: 1.22;
  max-width: 18ch;

  @media (min-width: 1200px) {
    font-size: 1.65rem;
  }
`;

export const ItemText = styled.p`
  font-size: 0.98rem;
  color: var(--muted);
  line-height: 1.85;
  max-width: 52ch;

  @media (min-width: 1200px) {
    font-size: 0.9rem;
    line-height: 1.72;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-soft);

  @media (min-width: 1200px) {
    min-height: 285px;
    border-radius: 24px;
  }
`;

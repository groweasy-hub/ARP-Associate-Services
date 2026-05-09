import styled from "styled-components";

export const Section = styled.section`
  padding: 7rem 5%;
  max-width: var(--max-w);
  margin: 0 auto;

  @media (min-width: 1200px) {
    padding: 5.8rem 5%;
  }
`;

export const Inner = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    margin-bottom: 2.4rem;
  }
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

export const ViewAll = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.85rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(var(--surface-rgb), 0.72);
  transition:
    transform var(--transition-smooth),
    border-color var(--transition-smooth),
    color var(--transition-smooth);

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(var(--accent-rgb), 0.35);
    color: var(--accent);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media (min-width: 1200px) {
    gap: 1.2rem;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  height: 360px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-soft);

  @media (min-width: 1200px) {
    height: 300px;
    border-radius: 24px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  background:
    linear-gradient(180deg, rgba(var(--bg-rgb), 0.08) 20%, rgba(var(--bg-rgb), 0.88) 100%),
    linear-gradient(180deg, transparent 0%, rgba(var(--accent-rgb), 0.1) 100%);

  @media (min-width: 1200px) {
    padding: 1.2rem;
  }
`;

export const CardCategory = styled.span`
  font-size: 0.74rem;
  color: var(--accent-soft);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
  max-width: 18ch;

  @media (min-width: 1200px) {
    font-size: 1.08rem;
  }
`;

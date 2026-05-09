import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 7rem 5%;
  max-width: var(--max-w);
  margin: 0 auto;

  @media (min-width: 1200px) {
    padding: 5.8rem 5%;
  }
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
  max-width: 12ch;
`;

export const Divider = styled.div`
  width: 58px;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  border-radius: 999px;
  margin: 1.2rem 0 3.2rem;
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
  background:
    linear-gradient(180deg, rgba(var(--surface-rgb), 0.94), rgba(var(--elevated-rgb), 0.94)),
    linear-gradient(180deg, rgba(var(--accent-rgb), 0.03), transparent);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 2rem 1.75rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition:
    transform var(--transition-smooth),
    border-color var(--transition-smooth),
    box-shadow var(--transition-smooth);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.4);
    box-shadow:
      var(--shadow-soft),
      0 0 0 1px rgba(var(--accent-rgb), 0.14);
  }

  &::after {
    content: "";
    position: absolute;
    inset: auto 1.4rem 1.1rem 1.4rem;
    height: 1px;
    background: linear-gradient(90deg, rgba(var(--accent-rgb), 0.3), transparent);
  }

  @media (min-width: 1200px) {
    border-radius: 24px;
    padding: 1.6rem 1.45rem;
  }
`;

export const CardIcon = styled.div`
  width: 58px;
  height: 58px;
  background: linear-gradient(180deg, rgba(var(--accent-rgb), 0.18), rgba(var(--accent-deep-rgb), 0.12));
  border: 1px solid rgba(var(--accent-rgb), 0.16);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--accent);
  margin-bottom: 1.4rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);

  @media (min-width: 1200px) {
    width: 52px;
    height: 52px;
    border-radius: 18px;
    font-size: 1.15rem;
    margin-bottom: 1.05rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.18rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.85rem;
  line-height: 1.3;
  letter-spacing: -0.03em;

  @media (min-width: 1200px) {
    font-size: 1.05rem;
    margin-bottom: 0.7rem;
  }
`;

export const CardText = styled.p`
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 1.75rem;

  @media (min-width: 1200px) {
    font-size: 0.88rem;
    line-height: 1.7;
    margin-bottom: 1.35rem;
  }
`;

export const CardArrow = styled.div`
  color: var(--accent);
  font-size: 0.9rem;
  opacity: 0.85;
  transform: translateX(0);
  transition:
    opacity var(--transition-smooth),
    transform var(--transition-smooth);

  ${Card}:hover & {
    opacity: 1;
    transform: translateX(6px);
  }
`;

import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 5%;
  background: var(--bg);
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const Items = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--accent);
  transform-origin: top;
  opacity: 0.3;
  transform: translateX(-50%);

  @media (max-width: 768px) { left: 1.5rem; }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;

  ${({ $left }) => $left
    ? "& > :first-child { grid-column: 1; } & > :last-child { grid-column: 3; display: none; }"
    : "& > :first-child { grid-column: 3; order: 3; } & > :nth-child(2) { grid-column: 2; order: 2; } & > :last-child { display: none; }"
  }

  @media (max-width: 768px) {
    grid-template-columns: 3rem 1fr;
    & > :first-child { grid-column: 2 !important; order: 2 !important; }
    & > :nth-child(2) { grid-column: 1 !important; order: 1 !important; }
  }
`;

export const YearBadge = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--surface2);
  border: 2px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--accent);
  z-index: 1;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    font-size: 0.65rem;
  }
`;

export const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.6rem;
`;

export const CardDesc = styled.p`
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.7;
`;

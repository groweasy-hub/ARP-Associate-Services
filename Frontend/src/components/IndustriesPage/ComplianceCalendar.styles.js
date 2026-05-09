import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 5%;
  background: var(--surface);
  overflow: hidden;
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const ScrollWrap = styled.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
`;

export const Line = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--border);
  transform-origin: left;
`;

export const MonthCard = styled.div`
  min-width: 160px;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (max-width: 480px) {
    min-width: 140px;
    padding: 1.2rem 1rem;
  }
`;

export const MonthName = styled.h4`
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 0.25rem;
`;

export const DueItem = styled.div`
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ $color }) => $color || "var(--muted)"};
  background: ${({ $color }) => $color ? `${$color}15` : "transparent"};
  border: 1px solid ${({ $color }) => $color ? `${$color}30` : "var(--border)"};
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  line-height: 1.4;
`;

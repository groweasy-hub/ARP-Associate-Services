import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const Panel = styled.div`
  padding: 6rem 5%;
  background: ${({ $light }) => ($light ? "var(--surface2)" : "var(--surface)")};
  position: relative;
  overflow: hidden;
  border-left: ${({ $light }) => ($light ? "none" : "none")};
`;

export const Watermark = styled.span`
  position: absolute;
  top: -1rem;
  right: 2rem;
  font-family: var(--font-heading);
  font-size: 12rem;
  font-weight: 800;
  color: var(--accent);
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  user-select: none;
`;

export const PanelLabel = styled.h2`
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 1.5rem;
  padding-left: 1.25rem;
  border-left: 3px solid var(--accent);
  position: relative;
  z-index: 1;
`;

export const PanelText = styled.p`
  font-size: 1.05rem;
  color: var(--muted);
  line-height: 1.9;
  max-width: 480px;
  position: relative;
  z-index: 1;
`;

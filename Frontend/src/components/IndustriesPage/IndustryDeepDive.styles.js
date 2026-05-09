import styled from "styled-components";

export const Panel = styled.div`
  overflow: hidden;
  background: var(--surface2);
  border: 1px solid var(--accent);
  border-radius: var(--radius-lg);
  margin-top: 1rem;
`;

export const PanelInner = styled.div`
  padding: 2.5rem;
`;

export const CloseBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { color: var(--accent); border-color: var(--accent); transform: rotate(90deg); }
`;

export const PanelTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text);
`;

export const Col = styled.div``;

export const ColTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.6;
`;

export const PackRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
`;

export const PackLabel = styled.span`
  font-size: 0.85rem;
  color: var(--muted);
`;

export const PackName = styled.span`
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
`;

export const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.5rem;
  background: var(--accent);
  color: #0a0f0d;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 700;
  margin-left: auto;
  transition: opacity 0.2s;
  &:hover { opacity: 0.88; }
`;

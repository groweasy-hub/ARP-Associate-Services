import styled from "styled-components";

export const TabBar = styled.nav`
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: ${({ $sticky }) => ($sticky ? "sticky" : "relative")};
  top: ${({ $sticky }) => ($sticky ? "var(--nav-h)" : "auto")};
  z-index: 90;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

export const TabInner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  gap: 0;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const Tab = styled.button`
  position: relative;
  padding: 1.1rem 1.4rem;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ $active }) => ($active ? "var(--accent)" : "var(--muted)")};
  white-space: nowrap;
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  &:hover { color: var(--text); }

  @media (max-width: 480px) {
    padding: 0.95rem 1rem;
    font-size: 0.82rem;
  }
`;

export const ActivePill = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
  border-radius: 2px 2px 0 0;
`;

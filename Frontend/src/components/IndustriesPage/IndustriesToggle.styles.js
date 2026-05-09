import styled from "styled-components";

export const ToggleWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 5% 0;
`;

export const Pill = styled.div`
  display: flex;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.3rem;
  gap: 0;
`;

export const Option = styled.button`
  position: relative;
  padding: 0.7rem 1.75rem;
  border-radius: 999px;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ $active }) => ($active ? "#0a0f0d" : "var(--muted)")};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 1;
`;

export const Indicator = styled.span`
  position: absolute;
  inset: 0;
  background: var(--accent);
  border-radius: 999px;
  z-index: -1;
`;

import styled from "styled-components";

export const Card = styled.div`
  background: var(--surface);
  border: 1px solid ${({ $active }) => ($active ? "var(--accent)" : "var(--border)")};
  border-radius: var(--radius-lg);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s;
  ${({ $active }) => $active && "box-shadow: 0 0 0 1px var(--accent);"}
`;

export const IconWrap = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 14px;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.4rem;
  transition: transform 0.2s;
  ${Card}:hover & { transform: scale(1.1); }
`;

export const Name = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
`;

export const Desc = styled.p`
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const ViewLink = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.25rem;
`;

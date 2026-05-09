import styled from "styled-components";

export const Card = styled.div`
  background: var(--surface);
  border: ${({ $featured }) => ($featured ? "2px solid var(--accent)" : "1px solid var(--border)")};
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: box-shadow 0.3s;
  &:hover { box-shadow: 0 16px 40px rgba(0,0,0,0.25); }
`;

export const Badge = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: var(--accent);
  color: #0a0f0d;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  white-space: nowrap;
`;

export const Name = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text);
`;

export const Desc = styled.p`
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.7;
`;

export const Includes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Pricing = styled.p`
  font-size: 0.82rem;
  color: var(--muted);
  font-style: italic;
`;

export const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
  background: var(--accent);
  color: #0a0f0d;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  width: fit-content;
  margin-top: auto;
  transition: opacity 0.2s;
  &:hover { opacity: 0.88; }
`;

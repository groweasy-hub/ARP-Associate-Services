import styled from "styled-components";

export const Block = styled.section`
  padding: 6rem 5%;
  border-bottom: 1px solid var(--border);
  &:nth-child(even) { background: var(--surface); }
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  ${({ $reverse }) => $reverse && "direction: rtl; & > * { direction: ltr; }"}

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 3rem;
  }
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Visual = styled.div`
  position: relative;
`;

export const ServiceNum = styled.span`
  font-family: var(--font-heading);
  font-size: 5rem;
  font-weight: 800;
  color: var(--accent);
  opacity: 0.08;
  line-height: 1;
  margin-bottom: -1.5rem;
  display: block;

  @media (max-width: 640px) {
    font-size: 3.5rem;
    margin-bottom: -0.75rem;
  }
`;

export const LabelTag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
  width: fit-content;
`;

export const ServiceName = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 1rem;
`;

export const Divider = styled.div`
  width: 48px;
  height: 3px;
  background: var(--accent);
  border-radius: 999px;
  margin-bottom: 1.25rem;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const IncludedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.75rem;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text);
`;

export const WhoFor = styled.div`
  margin-bottom: 2rem;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const StatCard = styled.div`
  position: absolute;
  bottom: -1.5rem;
  right: -1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);

  @media (max-width: 900px) {
    position: static;
    margin-top: 1rem;
  }
`;

export const StatBadge = styled.span`
  color: var(--accent);
  font-size: 1.2rem;
`;

export const StatText = styled.span`
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
`;

export const EnquireBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.75rem;
  background: var(--accent);
  color: #0a0f0d;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  width: fit-content;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }

  @media (max-width: 560px) {
    width: 100%;
    justify-content: center;
  }
`;

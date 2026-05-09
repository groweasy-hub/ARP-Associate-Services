import styled from "styled-components";

export const Section = styled.section`padding: 6rem 5%; background: var(--bg);`;
export const Inner = styled.div`max-width: var(--max-w); margin: 0 auto;`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;
export const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: border-color 0.25s;
  &:hover { border-color: var(--accent); }
`;
export const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--accent);
  color: #0a0f0d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;
export const Name = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
`;
export const Designation = styled.p`
  font-size: 0.88rem;
  color: var(--muted);
  font-weight: 500;
`;
export const Qual = styled.p`
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
`;

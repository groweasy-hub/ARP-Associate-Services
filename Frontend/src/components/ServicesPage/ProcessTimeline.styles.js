import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 5%;
  background: var(--surface);
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const Timeline = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const Line = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  right: 2.5rem;
  height: 2px;
  background: var(--accent);
  transform-origin: left;
  opacity: 0.3;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media (max-width: 900px) {
    flex-direction: row;
    text-align: left;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StepCircle = styled.div`
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  border-radius: 50%;
  background: var(--surface2);
  border: 2px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    width: 4.25rem;
    height: 4.25rem;
    min-width: 4.25rem;
  }
`;

export const StepContent = styled.div``;

export const StepTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.4rem;
`;

export const StepDesc = styled.p`
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.7;
`;

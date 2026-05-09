import styled from "styled-components";

export const HeroWrap = styled.section`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(var(--nav-h) + 4rem) 5% 5rem;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(var(--bg-rgb), 0.82), rgba(var(--bg-rgb), 0.92)),
    url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80") center/cover;

  @media (max-width: 640px) {
    min-height: auto;
    padding: calc(var(--nav-h) + 2.5rem) 5% 4rem;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(var(--accent-rgb), 0.14), transparent 24%),
    radial-gradient(circle at 80% 30%, rgba(var(--accent-deep-rgb), 0.16), transparent 20%);
  pointer-events: none;
`;

export const Label = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.4rem;
`;

export const Heading = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.8rem);
  font-weight: 800;
  color: var(--text);
  line-height: 1.05;
  max-width: 12ch;
  margin-bottom: 1.2rem;

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: clamp(2.2rem, 11vw, 3.2rem);
  }
`;

export const Sub = styled.p`
  font-size: 1.02rem;
  color: var(--muted);
  max-width: 42rem;
  line-height: 1.9;
  margin-bottom: 2.4rem;

  @media (max-width: 640px) {
    margin-bottom: 1.8rem;
  }
`;

export const ScrollArrow = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(var(--surface-rgb), 0.72);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--accent);
  box-shadow: var(--shadow-soft);
`;

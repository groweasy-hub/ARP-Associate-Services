import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroWrap = styled.section`
  min-height: 72vh;
  padding: calc(var(--nav-h) + 4rem) 5% 5rem;
  background:
    linear-gradient(90deg, rgba(var(--bg-rgb), 0.82), rgba(var(--bg-rgb), 0.94)),
    url("https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80") center/cover;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    min-height: auto;
    padding: calc(var(--nav-h) + 2.5rem) 5% 4rem;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 16% 20%, rgba(var(--accent-rgb), 0.14), transparent 18%),
    radial-gradient(circle at 84% 32%, rgba(var(--accent-deep-rgb), 0.16), transparent 18%);
  pointer-events: none;
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
  gap: 2rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    gap: 1.5rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div``;

export const Breadcrumb = styled.p`
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 1.2rem;

  a {
    color: var(--muted);

    &:hover {
      color: var(--accent);
    }
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.95rem;
`;

export const Heading = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  font-weight: 800;
  color: var(--text);
  line-height: 1.06;
  margin-bottom: 1.15rem;
  max-width: 12ch;

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: clamp(2.2rem, 11vw, 3.2rem);
  }
`;

export const Sub = styled.p`
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 2rem;
  max-width: 38rem;
`;

export const BtnPrimary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.95rem 1.6rem;
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  color: #04110d;
  border-radius: 999px;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  width: fit-content;
  box-shadow: 0 14px 34px rgba(var(--accent-rgb), 0.22);
  transition:
    transform var(--transition-smooth),
    box-shadow var(--transition-smooth);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 36px rgba(var(--accent-rgb), 0.28);
  }

  @media (max-width: 560px) {
    width: 100%;
    justify-content: center;
  }
`;

export const MiniGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const MiniCard = styled.div`
  background: linear-gradient(180deg, rgba(var(--surface-rgb), 0.9), rgba(var(--elevated-rgb), 0.92));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 1.8rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: default;
  box-shadow: var(--shadow-soft);
  transition: border-color var(--transition-smooth);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.35);
  }
`;

export const MiniIcon = styled.span`
  font-size: 2rem;
`;

export const MiniName = styled.span`
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
`;

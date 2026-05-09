import styled from "styled-components";
import { Link } from "react-router-dom";

export const Foot = styled.footer`
  background:
    linear-gradient(
      180deg,
      rgba(var(--bg-rgb), 0),
      rgba(var(--bg-rgb), 0.56) 18%,
      rgba(var(--bg-rgb), 0.98) 100%
    ),
    linear-gradient(135deg, rgba(var(--accent-rgb), 0.08), transparent 26%),
    url("https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80")
      center/cover;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 6rem 5% 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 4.5rem 5% 2rem;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 0.85fr 1fr;
  gap: 3rem;
  align-items: flex-start;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const BrandBlock = styled.div`
  max-width: 460px;
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`;

export const Logo = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.9rem, 4vw, 2.4rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 1rem;
  letter-spacing: -0.05em;
`;

export const LogoAccent = styled.span`
  color: var(--accent);
`;

export const TagLine = styled.p`
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1.4rem;
  letter-spacing: -0.03em;
`;

export const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link)`
  font-size: 0.96rem;
  color: var(--muted);
  margin-bottom: 0.95rem;
  transition:
    color var(--transition-smooth),
    transform var(--transition-smooth);
  width: fit-content;

  &:hover {
    color: var(--text);
    transform: translateX(6px);
  }
`;

export const ContactBlock = styled.div``;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.95rem;
`;

export const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: rgba(var(--surface-rgb), 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--accent);
  font-size: 1rem;
  backdrop-filter: blur(14px);
  transition: transform var(--transition-smooth);

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ContactItem = styled.a`
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.8;
  transition: color var(--transition-smooth);

  &:hover {
    color: var(--accent);
  }
`;

export const ContactText = styled.p`
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.8;
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: rgba(var(--surface-rgb), 0.82);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text);
  font-size: 1rem;
  backdrop-filter: blur(16px);
  transition:
    transform var(--transition-smooth),
    color var(--transition-smooth),
    border-color var(--transition-smooth),
    box-shadow var(--transition-smooth);

  &:hover {
    transform: translateY(-5px);
    color: var(--accent);
    border-color: rgba(var(--accent-rgb), 0.4);
    box-shadow: 0 18px 32px rgba(var(--accent-rgb), 0.16);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 3rem 0 1.75rem;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.05rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Copy = styled.p`
  font-size: 0.88rem;
  color: var(--muted-2);
  line-height: 1.7;

  @media (max-width: 640px) {
    font-size: 0.53rem;
  }
`;

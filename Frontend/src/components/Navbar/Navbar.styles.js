import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-h);
  background: ${({ $scrolled }) =>
    $scrolled
      ? "rgba(var(--bg-rgb), 0.86)"
      : "linear-gradient(180deg, rgba(var(--bg-rgb), 0.74), rgba(var(--bg-rgb), 0.36))"};
  backdrop-filter: blur(18px);
  border-bottom: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? "rgba(255, 255, 255, 0.08)" : "transparent"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 16px 40px rgba(0, 0, 0, 0.18)" : "none"};
  transition:
    background var(--transition-smooth),
    border-color var(--transition-smooth),
    box-shadow var(--transition-smooth);
`;

export const NavInner = styled.div`
  max-width: var(--max-w);
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(1rem, 2.5vw, 1.5rem);
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  position: relative;

  @media (max-width: 480px) {
    padding: 0 0.85rem;
    gap: 0.85rem;
  }
`;

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  gap: 0.45rem;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
  white-space: nowrap;
  letter-spacing: -0.03em;
  flex-shrink: 1;
  min-width: 0;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 0.82rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (max-width: 380px) {
    font-size: 0.72rem;
  }
`;

export const LogoAccent = styled.span`
  color: var(--accent);
  font-size: 1.1rem;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 0.35rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.35rem;
  border-radius: 999px;
  background: rgba(var(--surface-rgb), 0.48);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);

  @media (max-width: 980px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  color: ${({ $active }) => ($active ? "var(--text)" : "var(--muted)")};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.55rem 0.95rem;
  border-radius: 999px;
  transition:
    color var(--transition-smooth),
    background var(--transition-smooth),
    box-shadow var(--transition-smooth);

  ${({ $active }) =>
    $active
      ? `
        background: linear-gradient(90deg, rgba(var(--accent-rgb), 0.18), rgba(var(--accent-deep-rgb), 0.16));
        box-shadow: inset 0 0 0 1px rgba(var(--accent-rgb), 0.2);
      `
      : ""}

  &:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const CtaBtn = styled(Link)`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.95rem;
  padding: 0.8rem 1.35rem;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
  color: #05120e;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.84rem;
  letter-spacing: 0.02em;
  white-space: nowrap;
  box-shadow: 0 14px 34px rgba(var(--accent-rgb), 0.22);
  transition:
    transform var(--transition-smooth),
    box-shadow var(--transition-smooth);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 38px rgba(var(--accent-rgb), 0.28);
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export const MobileToggle = styled.button`
  display: none;
  color: var(--text);
  font-size: 1.15rem;
  margin-left: auto;
  flex-shrink: 0;
  width: 2.6rem;
  height: 2.6rem;
  min-width: 2.6rem;
  border-radius: 999px;
  background: rgba(var(--surface-rgb), 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);

  @media (max-width: 980px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: var(--nav-h);
  left: 1rem;
  right: 1rem;
  background: rgba(var(--surface-rgb), 0.92);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 999;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(20px);
  transform: ${({ $open }) =>
    $open ? "translateY(0)" : "translateY(-120%)"};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    transform var(--transition-smooth),
    opacity var(--transition-smooth);

  @media (max-width: 480px) {
    left: 0.75rem;
    right: 0.75rem;
    padding: 0.85rem;
  }
`;

export const MobileLink = styled(Link)`
  color: ${({ $active }) => ($active ? "var(--text)" : "var(--muted)")};
  font-size: 0.98rem;
  font-weight: 500;
  padding: 0.85rem 0.95rem;
  border-radius: 16px;
  background: ${({ $active }) =>
    $active ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(var(--accent-rgb), 0.18)" : "transparent"};
  transition:
    color var(--transition-smooth),
    background var(--transition-smooth),
    border-color var(--transition-smooth);

  &:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.04);
  }
`;

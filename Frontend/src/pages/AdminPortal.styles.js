import styled from "styled-components";

/* ─────────────────────────────────────────
   SHARED BASE
───────────────────────────────────────── */

export const AdminShell = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background:
    radial-gradient(
      circle at top left,
      rgba(0, 200, 150, 0.12),
      transparent 22%
    ),
    linear-gradient(135deg, #041019 0%, #091b26 50%, #0d2c29 100%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const AdminContainer = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
`;

export const AdminCard = styled.section`
  background: rgba(9, 22, 33, 0.88);
  border: 1px solid rgba(142, 240, 215, 0.15);
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(18px);
`;

/* ─────────────────────────────────────────
   LOGIN PAGE
───────────────────────────────────────── */

export const LoginWrap = styled(AdminContainer)`
  min-height: calc(100vh - 4rem);
  display: grid;
  place-items: center;
`;

export const LoginCard = styled(AdminCard)`
  width: min(480px, 100%);
  padding: 2rem;
`;

export const Eyebrow = styled.p`
  color: var(--accent-soft);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 0.75rem;
`;

export const Subtitle = styled.p`
  color: var(--muted);
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

export const Field = styled.label`
  display: grid;
  gap: 0.45rem;
  color: var(--text);
  font-size: 0.95rem;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid rgba(170, 182, 197, 0.18);
  background: rgba(5, 14, 21, 0.82);
  color: var(--text);
  border-radius: 14px;
  padding: 0.95rem 1rem;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: rgba(0, 200, 150, 0.7);
    box-shadow: 0 0 0 4px rgba(0, 200, 150, 0.12);
  }
`;

export const Button = styled.button`
  border-radius: 999px;
  padding: 0.95rem 1.3rem;
  font-weight: 700;
  color: #03140f;
  background: linear-gradient(135deg, #8ef0d7 0%, #00c896 100%);
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  min-height: 1.5rem;
  color: ${({ $tone }) =>
    $tone === "error"
      ? "#fda4af"
      : $tone === "success"
        ? "#86efac"
        : "var(--muted)"};
`;

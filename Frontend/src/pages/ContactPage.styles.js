import styled, { css } from "styled-components";

const fieldStyles = css`
  width: 100%;
  background: rgba(var(--surface-rgb), 0.9);
  border: 1px solid ${({ $invalid }) =>
    $invalid ? "rgba(255, 107, 107, 0.9)" : "var(--border)"};
  border-radius: 18px;
  padding: 1rem 1.1rem;
  color: var(--text);
  font-size: 0.96rem;
  font-family: var(--font-body);
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
  will-change: transform;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(var(--accent-rgb), 0.12);
  }
`;

export const PageShell = styled.main`
  background:
    radial-gradient(circle at top left, rgba(var(--accent-deep-rgb), 0.12), transparent 30%),
    radial-gradient(circle at top right, rgba(var(--accent-rgb), 0.08), transparent 24%),
    var(--bg);
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const HeroSection = styled.section`
  min-height: 40vh;
  padding: calc(var(--nav-h) + 5rem) 5% 4rem;
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 640px) {
    min-height: auto;
    padding: calc(var(--nav-h) + 2.5rem) 5% 3rem;
  }
`;

export const HeroLabel = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.7rem, 7vw, 4.8rem);
  letter-spacing: -0.05em;
  line-height: 0.98;
  max-width: 12ch;
  margin: 0 auto 1rem;

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: clamp(2.2rem, 11vw, 3.2rem);
  }
`;

export const HeroSubtext = styled.p`
  font-size: 1rem;
  color: var(--muted);
  max-width: 35rem;
  margin: 0 auto;
  line-height: 1.7;
`;

export const MainSection = styled.section`
  padding: 0 5% 6rem;
`;

export const SectionIntro = styled.div`
  max-width: 46rem;
  margin-bottom: 2.5rem;
`;

export const QuickLabel = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent2);
  font-weight: 700;
  margin-bottom: 0.9rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.9rem, 4vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.9fr);
  gap: 2rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const FormPanel = styled.div``;

export const FormCard = styled.form`
  background: linear-gradient(180deg, rgba(var(--surface-rgb), 0.92), rgba(var(--bg-rgb), 0.98));
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: clamp(1.4rem, 3vw, 2rem);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FieldWrap = styled.div`
  will-change: transform;
`;

export const TextField = styled.input`
  ${fieldStyles}
`;

export const SelectField = styled.select`
  ${fieldStyles}
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, var(--muted) 50%),
    linear-gradient(135deg, var(--muted) 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(50% - 3px),
    calc(100% - 14px) calc(50% - 3px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
`;

export const TextArea = styled.textarea`
  ${fieldStyles}
  min-height: 180px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  margin-top: 1.25rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-soft));
  color: #081008;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.95rem 1.5rem;
  border-radius: 999px;
  border: none;
  will-change: transform;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const FormStatus = styled.div`
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.85rem 1rem;
  border-radius: 16px;
  background: ${({ $tone }) =>
    $tone === "error"
      ? "rgba(248, 113, 113, 0.12)"
      : $tone === "warning"
        ? "rgba(245, 158, 11, 0.14)"
      : "rgba(var(--accent-deep-rgb), 0.12)"};
  border: 1px solid
    ${({ $tone }) =>
      $tone === "error"
        ? "rgba(248, 113, 113, 0.3)"
        : $tone === "warning"
          ? "rgba(245, 158, 11, 0.35)"
        : "rgba(var(--accent-deep-rgb), 0.3)"};
  color: ${({ $tone }) =>
    $tone === "error" ? "#fecaca" : $tone === "warning" ? "#fde68a" : "#b8ffd7"};
`;

export const ContactPanel = styled.aside``;

export const InfoCards = styled.div`
  display: grid;
  gap: 1rem;
`;

export const InfoCard = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: rgba(var(--surface-rgb), 0.9);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 1.2rem;
  will-change: transform;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InfoIconWrap = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-rgb), 0.12);
  border: 1px solid rgba(var(--accent-rgb), 0.22);
  color: var(--accent);
  flex-shrink: 0;
`;

export const InfoLabel = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.35rem;
`;

export const InfoDescription = styled.p`
  color: var(--muted);
  line-height: 1.6;
`;

export const InfoLink = styled.a`
  display: inline-block;
  color: var(--text);
  margin-bottom: 0.2rem;
  transition: color 0.2s;

  &:hover {
    color: var(--accent);
  }
`;

export const SocialCluster = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  width: 2.8rem;
  height: 2.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text);
  will-change: transform;
`;

export const TrustSection = styled.section`
  padding: 0 5% 6rem;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: linear-gradient(180deg, rgba(var(--surface-rgb), 0.94), rgba(var(--elevated-rgb), 0.94));
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 1.4rem;
  will-change: transform;
`;

export const FeatureIcon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: rgba(var(--accent-deep-rgb), 0.12);
  color: var(--accent2);
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.55rem;
`;

export const FeatureText = styled.p`
  color: var(--muted);
  line-height: 1.7;
`;

export const MapSection = styled.section`
  padding: 0 5% 6rem;
`;

export const MapHeader = styled.div`
  margin-bottom: 2rem;
`;

export const MapSurface = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid var(--border);
  background: rgba(var(--surface-rgb), 0.92);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);

  iframe {
    display: block;
    width: 100%;
    min-height: 430px;
    border: 0;
    filter: grayscale(1) invert(0.92) contrast(0.9);

    @media (max-width: 640px) {
      min-height: 320px;
    }
  }
`;

export const MapFrame = styled.div`
  position: absolute;
  inset: 0;
  border: 1px solid rgba(var(--accent-rgb), 0.3);
  border-radius: 28px;
  pointer-events: none;
`;

export const MapCaption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  color: var(--muted);
`;

export const DirectionsLink = styled.a`
  color: var(--accent);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const FaqSection = styled.section`
  padding: 0 5% 6rem;
`;

export const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const FaqCard = styled.div`
  background: rgba(var(--surface-rgb), 0.92);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 1.15rem 1.2rem;
`;

export const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--text);
  text-align: left;
  font-size: 1rem;
  font-weight: 600;

  span {
    color: var(--accent);
    font-size: 1.4rem;
    line-height: 1;
  }
`;

export const FaqAnswer = styled.div`
  overflow: hidden;

  p {
    padding-top: 0.9rem;
    color: var(--muted);
    line-height: 1.7;
  }
`;

export const CtaSection = styled.section`
  padding: 0 5% 7rem;
`;

export const CtaBanner = styled.div`
  border-radius: 32px;
  padding: clamp(2rem, 5vw, 3.2rem);
  text-align: center;
  background:
    radial-gradient(circle at top, rgba(var(--accent-rgb), 0.16), transparent 36%),
    linear-gradient(180deg, var(--surface), var(--bg));
  border: 1px solid var(--border);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
`;

export const CtaHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 3.4rem);
  letter-spacing: -0.04em;
`;

export const CtaSubtext = styled.p`
  margin-top: 1rem;
  color: var(--muted);
  font-size: 1rem;
`;

export const CtaActions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const PrimaryCta = styled.a`
  padding: 1rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-soft));
  color: #091008;
  font-family: var(--font-heading);
  font-weight: 800;
  letter-spacing: 0.03em;
  will-change: transform;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const SecondaryCta = styled.a`
  color: var(--text);
  padding: 1rem 1.2rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(var(--surface-rgb), 0.8);
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

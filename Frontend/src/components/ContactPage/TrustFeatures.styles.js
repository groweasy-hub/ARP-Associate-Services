import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faGift, faLock } from "@fortawesome/free-solid-svg-icons";
import { fadeUp, staggerContainer } from "../../animations/animations";
import styled from "styled-components";

const features = [
  { icon: faBolt, title: "Fast Response", desc: "We respond to all enquiries within 24 business hours" },
  { icon: faGift, title: "Free First Consultation", desc: "Your first consultation is completely free — no commitment" },
  { icon: faLock, title: "Confidential", desc: "All information shared is treated with full confidentiality" },
];

const Section = styled.section`padding: 4rem 5%; background: var(--surface2); border-top: 1px solid var(--border);`;
const Inner = styled.div`max-width: var(--max-w); margin: 0 auto;`;
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;
const Item = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.25s;
  &:hover { border-color: var(--accent); transform: translateY(-4px); }
`;
const IconBox = styled.div`
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  border-radius: 12px;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.1rem;
`;
const Title = styled.h4`font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 0.3rem;`;
const Desc = styled.p`font-size: 0.88rem; color: var(--muted); line-height: 1.6;`;

const TrustFeatures = () => (
  <Section>
    <Inner>
      <Grid variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {features.map((f, i) => (
          <Item key={i} variants={fadeUp} custom={i}>
            <IconBox><FontAwesomeIcon icon={f.icon} /></IconBox>
            <div><Title>{f.title}</Title><Desc>{f.desc}</Desc></div>
          </Item>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default TrustFeatures;

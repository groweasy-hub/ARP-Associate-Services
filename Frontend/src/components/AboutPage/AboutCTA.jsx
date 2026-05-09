import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { revealFromMask, fadeUp } from "../../animations/animations";
import styled from "styled-components";

const Section = styled.section`padding: 6rem 5%; background: var(--surface2); text-align: center; border-top: 1px solid var(--border);`;
const Inner = styled.div`max-width: 600px; margin: 0 auto;`;
const Heading = styled(motion.h2)`font-family: var(--font-heading); font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 800; color: var(--text); margin-bottom: 2rem;`;
const Btn = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  background: var(--accent);
  color: #0a0f0d;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  &:hover { opacity: 0.88; }
`;

const AboutCTA = () => (
  <Section>
    <Inner>
      <Heading variants={revealFromMask} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        Let's Build Your Compliance Story Together
      </Heading>
      <Btn to="/contact" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        Start with a Free Consultation →
      </Btn>
    </Inner>
  </Section>
);

export default AboutCTA;

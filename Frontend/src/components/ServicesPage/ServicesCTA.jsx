import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { revealFromMask, fadeUp } from "../../animations/animations";
import styled from "styled-components";
import { contactData } from "../../data/data";

const Section = styled.section`
  padding: 6rem 5%;
  background: var(--surface2);
  text-align: center;
  border-top: 1px solid var(--border);
`;
const Inner = styled.div`max-width: 640px; margin: 0 auto;`;
const Heading = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 1rem;
`;
const Sub = styled(motion.p)`
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 2.5rem;
`;
const BtnPrimary = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: var(--accent);
  color: #0a0f0d;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  &:hover { opacity: 0.88; }
`;
const Secondary = styled(motion.p)`
  font-size: 0.9rem;
  color: var(--muted);
  a { color: var(--accent); }
`;

const ServicesCTA = () => (
  <Section>
    <Inner>
      <Heading variants={revealFromMask} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        Ready to Get Compliant?
      </Heading>
      <Sub variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        Book your free consultation today and let us handle your compliance.
      </Sub>
      <BtnPrimary
        to="/contact"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Book Free Consultation →
      </BtnPrimary>
      <Secondary variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        Or call us: <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
      </Secondary>
    </Inner>
  </Section>
);

export default ServicesCTA;

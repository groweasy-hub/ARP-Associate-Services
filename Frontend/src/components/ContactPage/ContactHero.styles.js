import { motion } from "framer-motion";
import { fadeIn, fadeUp } from "../../animations/animations";
import styled from "styled-components";

const Wrap = styled.section`
  padding: calc(var(--nav-h) + 3rem) 5% 3rem;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--surface);
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 80%, rgba(var(--accent-rgb), 0.05) 0%, transparent 60%);
    pointer-events: none;
  }
`;
const Label = styled(motion.span)`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
`;
const Heading = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 1rem;
`;
const Sub = styled(motion.p)`
  font-size: 1rem;
  color: var(--muted);
  max-width: 440px;
  line-height: 1.8;
`;

const ContactHero = () => (
  <Wrap>
    <Label variants={fadeIn} custom={0} initial="hidden" animate="visible">Get in Touch</Label>
    <Heading variants={fadeUp} custom={1} initial="hidden" animate="visible">Let's Talk Compliance</Heading>
    <Sub variants={fadeUp} custom={2} initial="hidden" animate="visible">
      Have a question? Need a quote? We respond within 24 hours.
    </Sub>
  </Wrap>
);

export default ContactHero;

import { motion } from "framer-motion";
import { fadeUp } from "../../animations/animations";
import styled from "styled-components";

const Wrap = styled.div`
  text-align: ${({ $center }) => ($center ? "center" : "left")};
  margin-bottom: 3rem;
`;
const Label = styled(motion.span)`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 0.75rem;
`;
const Title = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: var(--text);
  line-height: 1.15;
`;
const Sub = styled(motion.p)`
  font-size: 1rem;
  color: var(--muted);
  margin-top: 1rem;
  max-width: 560px;
  ${({ $center }) => $center && "margin-left: auto; margin-right: auto;"}
  line-height: 1.8;
`;

const SectionHeading = ({ label, title, subtitle, center }) => (
  <Wrap $center={center}>
    {label && (
      <Label variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {label}
      </Label>
    )}
    <Title variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {title}
    </Title>
    {subtitle && (
      <Sub $center={center} variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {subtitle}
      </Sub>
    )}
  </Wrap>
);

export default SectionHeading;

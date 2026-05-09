import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { scaleIn, staggerContainer } from "../../animations/animations";
import SectionHeading from "../Common/SectionHeading";
import styled from "styled-components";

const certs = [
  "ICAI Member Firm",
  "GST Practitioner Certified",
  "Registered Tax Consultant",
  "MCA Authorized Representative",
  "ISO 9001:2015 (Processes)",
];

const Section = styled.section`padding: 5rem 5%; background: var(--surface2); border-top: 1px solid var(--border);`;
const Inner = styled.div`max-width: var(--max-w); margin: 0 auto;`;
const Row = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
const Badge = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text);
`;

const Certifications = () => (
  <Section>
    <Inner>
      <SectionHeading label="Credentials" title="Certifications & Associations" center />
      <Row variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {certs.map((c, i) => (
          <Badge key={i} variants={scaleIn} custom={i}>
            <FontAwesomeIcon icon={faAward} style={{ color: "var(--accent)" }} />
            {c}
          </Badge>
        ))}
      </Row>
    </Inner>
  </Section>
);

export default Certifications;

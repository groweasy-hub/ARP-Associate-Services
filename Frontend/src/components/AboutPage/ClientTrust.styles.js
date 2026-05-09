import { motion } from "framer-motion";
import { logoMarquee } from "../../animations/animations";
import SectionHeading from "../Common/SectionHeading";
import styled from "styled-components";

const logos = ["Retail Co.", "TechStart", "ManuCorp", "HealthPlus", "EduGroup", "LogiTrans", "BuildRight", "FoodChain"];

const Section = styled.section`padding: 5rem 5%; background: var(--surface); overflow: hidden;`;
const Inner = styled.div`max-width: var(--max-w); margin: 0 auto;`;
const Track = styled.div`overflow: hidden; position: relative;`;
const Strip = styled(motion.div)`
  display: flex;
  gap: 3rem;
  width: max-content;
`;
const LogoItem = styled.div`
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--muted);
  white-space: nowrap;
  padding: 0.75rem 1.5rem;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  opacity: 0.6;
`;

const ClientTrust = () => (
  <Section>
    <Inner>
      <SectionHeading label="Trusted By" title="Trusted by businesses across sectors" center />
    </Inner>
    <Track>
      <Strip variants={logoMarquee} animate="animate">
        {[...logos, ...logos].map((l, i) => <LogoItem key={i}>{l}</LogoItem>)}
      </Strip>
    </Track>
  </Section>
);

export default ClientTrust;

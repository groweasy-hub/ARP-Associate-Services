import { motion } from "framer-motion";
import { industryTestimonial } from "../../data/testimonialsData";
import { revealFromMask, fadeUp } from "../../animations/animations";
import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 5%;
  background: var(--bg);
  text-align: center;
`;
const Inner = styled.div`max-width: 720px; margin: 0 auto;`;
const Tag = styled(motion.span)`
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  padding: 0.3rem 1rem;
  border-radius: 999px;
  margin-bottom: 2rem;
`;
const Quote = styled(motion.blockquote)`
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 600;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 2rem;
  &::before { content: '"'; color: var(--accent); }
  &::after { content: '"'; color: var(--accent); }
`;
const Author = styled(motion.p)`
  font-size: 0.9rem;
  color: var(--muted);
`;

const IndustryTestimonial = () => (
  <Section>
    <Inner>
      <Tag variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {industryTestimonial.industry}
      </Tag>
      <Quote variants={revealFromMask} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {industryTestimonial.quote}
      </Quote>
      <Author variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        — {industryTestimonial.author}
      </Author>
    </Inner>
  </Section>
);

export default IndustryTestimonial;

import { motion } from "framer-motion";
import useCounter from "../../hooks/useCounter";
import useInView from "../../hooks/useInView";
import { counterAnimation, staggerContainer } from "../../animations/animations";
import styled from "styled-components";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
`;
const StatBox = styled(motion.div)`
  text-align: center;
  padding: 2rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
`;
const Num = styled.div`
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
`;
const Label = styled.p`
  font-size: 0.9rem;
  color: var(--muted);
  margin-top: 0.5rem;
`;

const StatItem = ({ value, suffix, label, inView, index }) => {
  const count = useCounter(value, 1800, inView);
  return (
    <StatBox variants={counterAnimation} custom={index}>
      <Num>{count}{suffix}</Num>
      <Label>{label}</Label>
    </StatBox>
  );
};

const StatsCounter = ({ stats }) => {
  const [ref, inView] = useInView();
  return (
    <Grid ref={ref} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {stats.map((s, i) => (
        <StatItem key={i} {...s} inView={inView} index={i} />
      ))}
    </Grid>
  );
};

export default StatsCounter;

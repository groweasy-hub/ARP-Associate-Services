import { servicesStats } from "../../data/statsData";
import StatsCounter from "../Common/StatsCounter";
import SectionHeading from "../Common/SectionHeading";
import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 5%;
  background: var(--bg);
`;
const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

const ServicesStats = () => (
  <Section>
    <Inner>
      <SectionHeading label="Why Choose Us" title="Numbers That Speak" center />
      <StatsCounter stats={servicesStats} />
    </Inner>
  </Section>
);

export default ServicesStats;

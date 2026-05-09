import { aboutStats } from "../../data/statsData";
import StatsCounter from "../Common/StatsCounter";
import SectionHeading from "../Common/SectionHeading";
import styled from "styled-components";

const Section = styled.section`padding: 6rem 5%; background: var(--bg);`;
const Inner = styled.div`max-width: var(--max-w); margin: 0 auto;`;

const AboutStats = () => (
  <Section>
    <Inner>
      <SectionHeading label="Our Numbers" title="Numbers That Define Us" center />
      <StatsCounter stats={aboutStats} />
    </Inner>
  </Section>
);

export default AboutStats;

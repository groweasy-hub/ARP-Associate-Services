import { motion } from "framer-motion";
import { whoWeAreData } from "../../data/data";
import {
  slideLeft,
  slideRight,
  counterAnimation,
} from "../../animations/animations";
import {
  Section,
  Inner,
  Grid,
  Left,
  Right,
  SectionLabel,
  SectionHeading,
  Divider,
  Tagline,
  Body,
  StatsGrid,
  StatBox,
  StatNumber,
  StatLabel,
} from "./WhoWeAre.styles";

const revealViewport = { once: true, amount: 0.35 };

const WhoWeAre = () => (
  <Section id="about">
    <Inner>
      <Grid>
        <Left
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={slideLeft}
        >
          <SectionLabel>{whoWeAreData.sectionLabel}</SectionLabel>
          <SectionHeading>{whoWeAreData.heading}</SectionHeading>
          <Divider />
          <Tagline>{whoWeAreData.tagline}</Tagline>
        </Left>

        <Right
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={slideRight}
        >
          <Body>{whoWeAreData.body1}</Body>
          <Body style={{ marginTop: "1rem" }}>{whoWeAreData.body2}</Body>
        </Right>
      </Grid>

      <StatsGrid>
        {whoWeAreData.stats.map((s, i) => (
          <StatBox
            key={i}
            as={motion.div}
            variants={counterAnimation}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            whileHover={{ scale: 1.04 }}
          >
            <StatNumber>{s.number}</StatNumber>
            <StatLabel>{s.label}</StatLabel>
          </StatBox>
        ))}
      </StatsGrid>
    </Inner>
  </Section>
);

export default WhoWeAre;

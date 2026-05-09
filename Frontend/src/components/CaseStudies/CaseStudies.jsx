import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { caseStudiesData } from "../../data/data";
import { fadeUp, scaleIn } from "../../animations/animations";
import {
  Section,
  Inner,
  Header,
  SectionLabel,
  SectionHeading,
  ViewAll,
  Grid,
  Card,
  CardImg,
  CardOverlay,
  CardCategory,
  CardTitle,
} from "./CaseStudies.styles";

const revealViewport = { once: true, amount: 0.35 };

const CaseStudies = () => (
  <Section id="portfolio">
    <Inner>
      <Header
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={fadeUp}
      >
        <div>
          <SectionLabel>{caseStudiesData.sectionLabel}</SectionLabel>
          <SectionHeading>{caseStudiesData.heading}</SectionHeading>
        </div>
        <ViewAll href="#">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </ViewAll>
      </Header>

      <Grid>
        {caseStudiesData.cases.map((c, i) => (
          <Card
            key={c.id}
            as={motion.div}
            variants={scaleIn}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <CardImg src={c.image} alt={c.title} loading="lazy" />
            <CardOverlay>
              <CardCategory>{c.category}</CardCategory>
              <CardTitle>{c.title}</CardTitle>
            </CardOverlay>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default CaseStudies;

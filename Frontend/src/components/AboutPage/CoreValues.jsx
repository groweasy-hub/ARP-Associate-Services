import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faShieldHalved, faClock, faHandshake } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../Common/SectionHeading";
import { scaleIn, staggerContainer, fadeUp } from "../../animations/animations";
import { Section, Inner, Grid, Card, IconCircle, ValueTitle, ValueDesc } from "./CoreValues.styles";

const values = [
  { icon: faBullseye, title: "Accuracy", desc: "Every figure, every filing — done right the first time." },
  { icon: faShieldHalved, title: "Integrity", desc: "We operate with full transparency and honest advisory." },
  { icon: faClock, title: "Timeliness", desc: "Deadlines are sacred. We file before you worry." },
  { icon: faHandshake, title: "Client Focus", desc: "Your growth is our metric of success." },
];

const CoreValues = () => (
  <Section>
    <Inner>
      <SectionHeading label="What Drives Us" title="Our Core Values" center />
      <Grid
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {values.map((v, i) => (
          <Card
            key={i}
            as={motion.div}
            variants={scaleIn}
            custom={i}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <IconCircle whileHover={{ rotate: 15 }} as={motion.div} transition={{ duration: 0.2 }}>
              <FontAwesomeIcon icon={v.icon} />
            </IconCircle>
            <ValueTitle as={motion.h3} variants={fadeUp} custom={i}>{v.title}</ValueTitle>
            <ValueDesc>{v.desc}</ValueDesc>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default CoreValues;

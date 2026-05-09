import { motion } from "framer-motion";
import { slideLeft, slideRight, fadeIn } from "../../animations/animations";
import { Section, Panel, Watermark, PanelLabel, PanelText } from "./MissionVision.styles";

const MissionVision = () => (
  <Section>
    <Panel
      as={motion.div}
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Watermark as={motion.span} variants={fadeIn} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>M</Watermark>
      <PanelLabel>Our Mission</PanelLabel>
      <PanelText>
        To deliver accurate, timely, and reliable accounting, tax, and compliance services
        that empower businesses to grow with confidence and clarity.
      </PanelText>
    </Panel>

    <Panel
      $light
      as={motion.div}
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Watermark as={motion.span} variants={fadeIn} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>V</Watermark>
      <PanelLabel>Our Vision</PanelLabel>
      <PanelText>
        To be the most trusted compliance partner for businesses across India — known for
        precision, integrity, and proactive financial support.
      </PanelText>
    </Panel>
  </Section>
);

export default MissionVision;
